var app = angular.module('app', ['ngRoute', 'ngAnimate', 'angular-underscore']).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "start.html"
    })
    .when('/main', {
        controller: "MainCtrl",
        templateUrl: "main.html"
    })
    .when('/csv', {
        controller: "CsvCtrl",
        templateUrl: "csv.html"
    })
    .otherwise({ redirectTo: '/' });

});

app.filter('lang', function ($rootScope) {
    return function (item) {
        return item[$rootScope.lang];
    };
});

app.filter('page', function ($rootScope) {
    return function (questions, page) {
        if (page == 1)
            return questions.slice(0, 5);
        else
            return questions.slice(5);
    };
});

app.filter('resulttype', function () {
    return function (results, bad) {
        if (bad)
            return _.filter(results, function (r) { return r.score > 3; });
        else
            return _.filter(results, function (r) { return r.score <= 3; });
    };
});

var rScope;
app.controller("Root", function ($rootScope) {
    rScope = $rootScope;
    $rootScope.ui = angular.copy(systemdata.ui);
    $rootScope.lang = 'lv';

    $rootScope.changeLang = function (lang) {
        $rootScope.lang = lang;
    };
});

var scope;
app.controller("MainCtrl", function ($location, $scope, $rootScope) {

    scope = $scope;

    rScope.debug = $scope.debug = !!$location.search().test;

    $rootScope.questions = $scope.questions = angular.copy(systemdata.questions);
    $rootScope.risks = $scope.risks = angular.copy(systemdata.risks);

    $scope.step = 1;

    function qchecked(qid, aid) {
        if ($scope.questions[qid].multiple == false)
            return $scope.questions[qid].checked == aid;
        else
            return !!$scope.questions[qid].answers[aid].checked;
    }

    $scope.qenabled = function(q) {
        if (q.qid == 3)
            return qchecked(2, 0);
        else if (q.qid == 4 || q.qid == 5)
            return qchecked(1, 0) || qchecked(1, 1);
        else
            return true;
    };

    $scope.continueDisabled = function() {
        switch ($scope.step) {
            case 1: return _.any($scope.questions, function (q) {
                return $scope.qenabled(q) && q.multiple && !_.any(q.answers, function (a) { return a.checked; });
            });
            case 2: return _.any($scope.questions, function (q) {
                return $scope.qenabled(q) && !q.multiple && isNaN(q.checked);
            });
            default:
                return false;
        }
    };

    rScope.next = $scope.next = function () {
        if ($scope.continueDisabled() === false) {
            $scope.step += 1;
        }
    };

    rScope.prev = $scope.prev = function () {
        $scope.step -= 1;
    };

    $scope.enabledRisks = function () {
        var risks = [];
        var windows = usesWindows();

        _.forEach(_
            .uniq(
                _.filter(
                    _.flatten(
                        _.pluck(getAnswers(), 'risks')
                    ), _.isNumber
                )
            ),
            function (rid) {
                if (windows || rid >= 4) //ignorējam vīrusu riskus
                    risks.push($scope.risks[rid]);
            }
        );
        return risks;
    };

    function getAnswers() {
        return _.filter(
                _.flatten(
                    _.map($scope.questions, function (q) {
                        if (q.multiple) {
                            return _.where(q.answers, { checked: true });
                        }
                        else {
                            return q.answers[q.checked];
                        }
                    })
                ), _.isObject
            );
    }

    $scope.getAnswers = getAnswers;

    function usesWindows() {
        return $scope.questions[1].checked == 0 || $scope.questions[1].checked == 1;
    }

    $scope.calculateRisks = function () {

        $scope.result_types = {
            highrisks: false,
            lowrisks: false
        };

        _.forEach($scope.risks, function (r) {
            r.score = 3;
        });
        _.forEach(
            _.filter(
                _.flatten(_.pluck(getAnswers(), 'adjust_risk')),
                _.isObject
            ), function (o) {
                _.forEach(_.keys(o), function (rid) {
                    $scope.risks[rid].score += o[rid];
                }
            );
        });

        var res = _.map($scope.enabledRisks(), function (r) {
            if (r.score < 1)
                r.score = 1;
            else if (r.score > 3)
                r.score = 3;

            r.score *= r.checked; //sareizinām ar svaru
            return r;
        });

        $scope.result_types.lowrisks = _.any(res, function (r) { return r.score <= 3; });
        $scope.result_types.highrisks = _.any(res, function (r) { return r.score > 3; });

        return _.sortBy(res, function (r) {
            return r.score * -1;
        });
    };

    $scope.comment = {
        text: '',
        enabled: null
    };
    
    if (rScope.debug)
        $scope.comment.enabled = false;

    $scope.postComment = function () {
        if ($scope.comment.text && rScope.debug == false) {
            $scope.comment.enabled = false;
            try
            {
                if (fbEntry == null)
                    console.log('fbEntry is null!!!');
                else
                    fbEntry.update({ comment: $scope.comment.text });
            }
            catch(ex)
            {
                console.log('error saving comment...', ex);
            }
        }
    };

    var fbEntry = null;

    $scope.saveResults = function () {
        if (rScope.debug == true)
        {
            console.log('debug mode');
            return;
        }
        
        try
        {
            function mapAnswer(a)
            {
                return {
                    aid: a.aid,
                    text: a.text.lv
                }
            }

            if (fbEntry != null)
                fbEntry = null;

            var fb = new Firebase("https://idre.firebaseio.com/answers");
            var auth = new FirebaseSimpleLogin(fb, function(error, user) {});
            auth.login('anonymous');

            fbEntry = fb.push();

            var entry = {};

            entry.answers = _.map(scope.questions, function (q) {
                if (scope.qenabled(q) == false)
                    return;

                return {
                    qid: q.qid,
                    text: q.text.lv,
                    answers: q.multiple ? _.map(_.where(q.answers, { checked: true }), mapAnswer) : mapAnswer(q.answers[q.checked])
                }
            });

            entry.risks = _.map(scope.calculateRisks(), function (o) { return { rid: o.rid, checked: o.checked, score: o.score, text: o.text.lv } });

            fbEntry.set(entry);
        }
        catch(ex)
        {
            console.log('error saving data...', ex);
        }
    }
});

app.controller("CsvCtrl", function ($scope) {
    $scope.getCsv = function () {
        var fb = new Firebase("https://idre.firebaseio.com/answers");
        var auth = new FirebaseSimpleLogin(fb, function (error, user) {
            if (error) {
                // an error occurred while attempting login
                alert(error);
                console.log(error);
            } else if (user) {
                // user authenticated with Firebase
            } else {
                // user is logged out
                auth.login('password', { email: $scope.email, password: $scope.password });
            }
        });

        auth.login('password', { email: $scope.email, password: $scope.password });

        fb.once('value', function (snapshot) {
            var data = snapshot.val();
            $scope.$apply(function () {
                $scope.export = processCSV(data);
                var link = document.createElement("a");
                link.setAttribute("href", 'data:text/csv;charset=utf-8,\uFEFF' + encodeURI($scope.export));
                link.setAttribute("download", "aptaujas_dati.csv");
                link.click();
            });
        });
    }
});

function processCSV(data) {

    function sanitize(text) {
        return text.replace(/"/g, '""').replace(/,/g, ';');
    }

    var output = ['Aptaujas ID,Jautājuma ID,Jautājums,Atbildes ID,Atbilde,Riska ID,Risks,Svars,Riska pakāpe,Komentārs'];

    _.each(_.keys(data), function (key) {
        var entry = data[key];
        _.each(entry.answers, function (q) {

            if (_.isArray(q.answers)) {
                _.each(q.answers, function (a) {
                    output.push('"' + ["'" + key + "'", q.qid, sanitize(q.text), a.aid, sanitize(a.text)].join('","') + '",,,,');
                });
            }
            else {
                output.push('"' + ["'" + key + "'", q.qid, sanitize(q.text), q.answers.aid, sanitize(q.answers.text)].join('","') + '",,,,');
            }
        });

        _.each(entry.risks, function (r) {
            output.push('"\'' + key + '\'",,,,,"' + [r.rid, sanitize(r.text), r.checked, r.score].join('","') + '"');
        });

        if (entry.comment)
            output.push('"' + "'" + key + "'" + '",,,,,,,,,"' + sanitize(entry.comment) + '"');

    });
    return output.join('\n');
}

app.directive('result', function ($rootScope) {
    return {
        templateUrl: "result.html",
        replace: false,
        controller: function ($scope, $element, $attrs) {
            $scope.result = $scope.$eval($attrs.result);
            if ($scope.result.score <= 3)
                $scope.result.suggestion = null;
            else if ($scope.result.score >= 6)
                $scope.result.suggestion = $scope.result.suggestion_high;
            else
                $scope.result.suggestion = $scope.result.suggestion_medium;
        }
    };
});
