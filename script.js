var app = angular.module('app', ['ngRoute', 'ngAnimate', 'angular-underscore']).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "start.html"
    })
    .when('/main', {
        controller: "MainCtrl",
        templateUrl: "main.html"
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

app.controller("MainCtrl", function ($location, $scope, $rootScope) {
    rScope.debug = $scope.debug = !!$location.search().test;

    $rootScope.questions = $scope.questions = angular.copy(systemdata.questions);
    $rootScope.risks = $scope.risks = angular.copy(systemdata.risks);

    $scope.step = 1;

    function qchecked(qid, aid) {
        return !!$scope.questions[qid].answers[aid].checked;
    }

    $scope.qenabled = function(q) {
        if (q.qid == 3 && !qchecked(2, 0))
            return false;

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


    function usesWindows() {
        return _.any($scope.questions[1].answers, function (a) {
            return a.checked === true && (a.aid === 0 || a.aid === 1);
        });
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

    $scope.postComment = function () {
        if ($scope.comment.text) {
            alert($scope.comment.text);

            $scope.comment.enabled = false;
        }
    };
});

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