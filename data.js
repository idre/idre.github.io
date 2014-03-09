var systemdata = {};

systemdata.questions = [
    {
        qid: 0,
        text: {
            'lv': "Datora un interneta izmantošanas mērķi",
            'en': "Your usage of computers and internet"
        },
        multiple: true,
        answers: [
            {
                aid: 0,
                risks: [0, 1, 2, 3, 6, 7],
                text: {
                    'lv': "E-pasta nosūtīšana un saņemšana (piemēram, gmail.com, inbox.lv, Outlook, Thunderbird u.c.)",
                    'en': "Sending and receiving emails (for example - gmail.com, inbox.lv, Outlook, Thunderbird etc.)"
                }
            },
            {
                aid: 1,
                risks: [1, 2, 3],
                text: {
                    'lv': "E-pakalpojumu izmantošana saziņai ar valsts iestādēm (piemēram, latvija.lv, eriga.lv)",
                    'en': "Using e-services for contacting government institution (for example - latvija.lv, eriga.lv)"
                }
            },
            {
                aid: 2,
                risks: [1, 2, 3, 6, 7, 9],
                text: {
                    'lv': "Darbošanās sociālajā tīklā (piemēram, draugiem.lv, facebook.com, twitter.com)",
                    'en': "Using social networks (for example - draugiem.lv, facebook.com, twitter.com)"
                }
            },
            {
                aid: 3,
                risks: [1, 2, 3],
                text: {
                    'lv': "Informācijas meklēšana, t.sk. ziņu lasīšana, video un TV skatīšanās, radio klausīšanās",
                    'en': "Searching for information, including reading news, watching TV and online videos, listening to radio"
                }
            },
            {
                aid: 4,
                risks: [1, 2, 3],
                text: {
                    'lv': "Spēles dažādos portālos, t.sk. tiešsaistē",
                    'en': "Playing web games"
                }
            },
            {
                aid: 5,
                risks: [1, 2, 3],
                text: {
                    'lv': "Spēļu, attēlu, filmu vai mūzikas lejupielāde no interneta",
                    'en': "Downloading games images movies or music from internet"
                }
            },
            {
                aid: 6,
                risks: [0, 1, 2, 3],
                text: {
                    'lv': "Apmaiņa ar filmām, mūziku utt., izmantojot speciālas programmas (piemēram, uTorrent, BitTorrent)",
                    'en': "Sharing movies music etc. using special software (for example - uTorrent BitTorrent)"
                }
            },
            {
                aid: 7,
                risks: [1, 2, 3, 8],
                text: {
                    'lv': "Internetbankas izmantošana, t.sk. rēķinu apmaksa citos portālos",
                    'en': "Using internet bank, including payments on other websites"
                }
            },
            {
                aid: 8,
                risks: [1, 2, 3, 6],
                text: {
                    'lv': "Iepirkšanās Internetā, t.sk. ceļojuma naktsmītņu rezervēšana, norādot maksājumu kartes datus",
                    'en': "Shopping through internet, including booking hotels (and providing creditcard information)"
                }
            },
            {
                aid: 9,
                risks: [0, 1, 2, 3, 6, 7],
                text: {
                    'lv': "Paša izveidota satura (t.sk. fotogrāfiju) augšupielādēšana jebkurā tīmekļa vietnē (piemēram, GoogleDocs, SkyDrive, arī draugiem.lv, facebook.com)",
                    'en': "Uploading original content (including photos) on any web page (for example - GoogleDocs, SkyDrive, draugiem.lv, facebook.com)"
                }
            },
            {
                aid: 10,
                risks: [1, 4, 5],
                text: {
                    'lv': "Fotogrāfiju/video failu glabāšana un apstrāde savā datorā",
                    'en': "Storing Photo/video and processing on your computer"
                }
            },
            {
                aid: 11,
                risks: [1, 4, 5],
                text: {
                    'lv': "Dokumentu rakstīšana un noformēšana savā datorā",
                    'en': "Writing and formatting documents on your computer"
                }
            },
            {
                aid: 12,
                risks: [4],
                text: {
                    'lv': "Mūzikas klausīšanās",
                    'en': "Listening to music"
                }
            }
        ]
    },
    {
        qid: 1,
        text: {
            'lv': "Kāda operētājsistēma darbina Tevis visbiežāk izmantoto ierīci?",
            'en': "What operating system controls your monstly used device?"
        },
        multiple: false,
        answers: [
            {
                aid: 0,
                text: {
                    'lv': "Windows (Vista, 7, 8 vai jaunāku)",
                    'en': "Windows (Vista, 7, 8 or newer)"
                }
            },
            {
                aid: 1,
                text: {
                    'lv': "Windows XP",
                    'en': "Windows XP"
                }
            },
            {
                aid: 2,
                text: {
                    'lv': "OS X (Apple datori)",
                    'en': "OS X (Apple computers)"
                }
            },
            {
                aid: 3,
                text: {
                    'lv': "Linux (piem. Ubuntu)",
                    'en': "Linux (piem. Ubuntu)"
                }
            },
            {
                aid: 4,
                text: {
                    'lv': "iOS (Apple iPhone, iPad)",
                    'en': "iOS (Apple iPhone, iPad)"
                }
            },
            {
                aid: 5,
                text: {
                    'lv': "Android",
                    'en': "Android"
                }
            }
        ]
    },
    {
        qid: 2,
        text: {
            'lv': "Kādus interneta pieslēguma veidus Tu izmanto?",
            'en': "What internet connection types are you using?"
        },
        multiple: true,
        answers: [
            {
                aid: 0,
                risks: [10],
                text: {
                    'lv': "Bezvadu tīkls mājās",
                    'en': "Wireless network at home"
                }
            },
            {
                aid: 1,
                text: {
                    'lv': "Pieslēgums caur interneta vadu mājās",
                    'en': "Wired network at home"
                }
            },
            {
                aid: 2,
                risks: [10],
                text: {
                    'lv': "Tīkls (arī bezvadu) publiskās vietās",
                    'en': "Public (including wireless) networks"
                }
            }
        ]
    },
    {
        qid: 3,
        text: {
            'lv': "Vai mājas bezvadu rūterim ir parole?",
            'en': "Is your home router password protected?"
        },
        multiple: false,
        answers: [
            {
                aid: 0,
                adjust_risk: { 10: -2 },
                text: {
                    'lv': "Jā",
                    'en': "Yes"
                }
            },
            {
                aid: 1,
                text: {
                    'lv': "Nē",
                    'en': "No"
                }
            },
            {
                aid: 2,
                text: {
                    'lv': "Nezinu",
                    'en': "Don't know"
                }
            }
        ]
    },
    {
        qid: 4,
        text: {
            'lv': "Vai datoram ir antivīrusa programmatūra?",
            'en': "Is your computer protected with antivirus software?"
        },
        multiple: false,
        answers: [
            {
                aid: 0,
                adjust_risk: { 0: -2, 1: -2 },
                text: {
                    'lv': "Ir antivīrusa programmatūra un tā tiek regulāri atjaunota",
                    'en': "Yes and it is updated regularly"
                }
            },
            {
                aid: 1,
                adjust_risk: { 0: -1, 1: -1 },
                text: {
                    'lv': "Ir antivīrusa programmatūra, bet tā netiek regulāri atjaunota",
                    'en': "Yes, but it is not updated regularly"
                }
            },
            {
                aid: 2,
                text: {
                    'lv': "Nav antivīrusa programmatūras",
                    'en': "No"
                }
            },
            {
                aid: 3,
                text: {
                    'lv': "Nezinu",
                    'en': "Don't know"
                }
            }
        ]
    },
    {
        qid: 5,
        text: {
            'lv': "Vai datoram ir ugunsmūris?",
            'en': "Is your computer protected with firewall?"
        },
        multiple: false,
        answers: [
            {
                aid: 0,
                adjust_risk: { 2: -2, 3: -2 },
                text: {
                    'lv': "Jā, tiek izmantots specializēts ugunsmūris",
                    'en': "Yes, with special third party firewall"
                }
            },
            {
                aid: 1,
                adjust_risk: { 2: -1, 3: -1 },
                text: {
                    'lv': "Jā, tiek izmantots operētājsistēmas iebūvētais ugunsmūris",
                    'en': "Yes, with operating system’s built-in firewall"
                }
            },
            {
                aid: 2,
                text: {
                    'lv': "Nav ugunsmūra",
                    'en': "No"
                }
            },
            {
                aid: 3,
                text: {
                    'lv': "Nezinu",
                    'en': "Don't know"
                }
            }
        ]
    },
    {
        qid: 6,
        text: {
            'lv': "Vai tiek veidotas datu kopijas?",
            'en': "Is data being backed up?"
        },
        multiple: false,
        answers: [
            {
                aid: 0,
                adjust_risk: { 4: -2, 5: -2 },
                text: {
                    'lv': "Jā, tiek veidotas regulāri",
                    'en': "Yes, regularly"
                }
            },
            {
                aid: 1,
                adjust_risk: { 4: -1, 5: -1 },
                text: {
                    'lv': "Jā, šad un tad",
                    'en': "Yes, now and then"
                }
            },
            {
                aid: 2,
                text: {
                    'lv': "Nē, netiek veiktas",
                    'en': "No, it isn’t"
                }
            },
            {
                aid: 3,
                text: {
                    'lv': "Nezinu",
                    'en': "Don't know"
                }
            }
        ]
    },
    {
        qid: 7,
        text: {
            'lv': "Cik informēts Tu esi par IT drošības pārvaldību?",
            'en': "How well informed are you about IT safety management?"
        },
        multiple: false,
        answers: [
            {
                aid: 0,
                adjust_risk: { 6: -2, 7: -2 },
                text: {
                    'lv': "Ir plašas zināšanas un pieredze",
                    'en': "Broad knowledge and experience"
                }
            },
            {
                aid: 1,
                adjust_risk: { 6: -1, 7: -1 },
                text: {
                    'lv': "Zinu pamatprincipus un vienkāršākās darbības",
                    'en': "Informed about basic principles and simple procedures"
                }
            },
            {
                aid: 2,
                text: {
                    'lv': "Ne īpaši",
                    'en': "Not really"
                }
            }
        ]
    },
    {
        qid: 8,
        text: {
            'lv': "Vai programmatūra tiek regulāri atjaunota?",
            'en': "Is software updated regularly?"
        },
        multiple: false,
        answers: [
            {
                aid: 0,
                adjust_risk: { 0: -2, 1: -2, 2: -2, 3: -2 },
                text: {
                    'lv': "Programmatūras atjauninājumi pēc regulāras procedūras",
                    'en': "Yes, software is updated regularly"
                }
            },
            {
                aid: 1,
                adjust_risk: { 0: -1, 1: -1, 2: -1, 3: -1 },
                text: {
                    'lv': "Programmatūras atjauninājumi šad un tad",
                    'en': "Software is updated now and then"
                }
            },
            {
                aid: 2,
                text: {
                    'lv': "Netiek veikti atjauninājumi",
                    'en': "Software is not updated regularly"
                }
            }
        ]
    },
    {
        qid: 9,
        text: {
            'lv': "Kādi ir paroļu izveides un lietošanas paradumi?",
            'en': "What are your password creation habits?"
        },
        multiple: false,
        answers: [
            {
                aid: 0,
                adjust_risk: { 8: -2, 9: -2 },
                text: {
                    'lv': "Dažādās vietās tiek lietotas dažādas un pietiekami stipras paroles",
                    'en': "Different passwords are used in different places and they are strong enough"
                }
            },
            {
                aid: 1,
                adjust_risk: { 8: -1, 9: -1 },
                text: {
                    'lv': "Tiek lietotas pēc iespējas labas paroles, ievērojot drošības speciālistu rekomendācijas",
                    'en': "Good passwords(according to recommendations by security specialists) are used as often as possible"
                }
            },
            {
                aid: 2,
                text: {
                    'lv': "Par to īpaši netiek domāts",
                    'en': "I don’t pay attention to it"
                }
            }
        ]
    }
];

systemdata.risks = [
    {
        rid: 0,
        checked: 3,
        text: {
            'lv': "Vīrusa darbības rezultātā lietotāja dati nokopēti nezināmā virzienā",
            'en': "Data copied to unknown place because of virus"
        },
        suggestion_high: {
            'lv': "Pārliecinies, ka izmanto labu antivīrusa programmu, kas regulāri tiek atjaunināta. Uzlabot aizsardzību pret vīrusiem jāveic cik vien iespējams drīz.",
            'en': "Check that there is as a good antivirus program and that it is being updated on regular basis. Protection against viruses must be improved as soon as possible."
        },
        suggestion_medium: {
            'lv': "Iespējams, ka antivīrusa programma netiek regulāri atjaunināta, būtu ļoti vēlams uzlabot situāciju.",
            'en': "Maybe antivirus program is not being updated on regular basis – this situation should be improved."
        }
    },
    {
        rid: 1,
        checked: 2,
        text: {
            'lv': "Vīrusa darbības rezultātā sabojāti vai izdzēsti dati datorā",
            'en': "Data has been corrupted because of a virus."
        },
        suggestion_high: {
            'lv': "Pārliecinies, ka izmanto labu antivīrusa programmu, kas regulāri tiek atjaunināta. Uzlabot aizsardzību pret vīrusiem jāveic cik vien iespējams drīz.",
            'en': "Check that there is as a good antivirus program and that it is being updated on regular basis. Protection against viruses must be improved as soon as possible.",
        },
        suggestion_medium: {
            'lv': "Iespējams, ka antivīrusa programma netiek regulāri atjaunināta, būtu ļoti vēlams uzlabot situāciju.",
            'en': "Maybe antivirus program is not being updated on regular basis – this situation should be improved."
        }
    },
    {
        rid: 2,
        checked: 2,
        text: {
            'lv': "Dators iesaistīts botu tīklā (zombēts) ar nezināmu mērķi (lietotājam nemanāmi)",
            'en': "Computer is involved in botnet with unknown objective"
        },
        suggestion_high: {
            'lv': "Noziedznieki ne vienmēr uzreiz sabojā vai nozog datus no zombētiem datoriem, tomēr nekad nevar zināt, kad tas notiks. Turklāt ir iespējams, ka zombētais dators tiek iesaistīts uzbrukumā citiem datoriem, un izmeklēšanas gaitā var rasties problēmas tā īpašniekam. Noteikti jāpilnveido aizsardzības programmas (antivīrusu, ugunsmūra) un jāuzstāda labākas paroles, tas jāveic cik vien iespējams drīz.",
            'en': "Criminals not always corrupt or steal data from botnet computers, but it is not possible when that may happen. In addition, there is a possibility that computer will be involved in attack on other computers and that could create legal problems for the owner. Protection programs (antivirus, firewall) must be improved and better passwords should be used – this should be done as soon as possible.",
        },
        suggestion_medium: {
            'lv': "Noziedznieki ne vienmēr uzreiz sabojā vai nozog datus no zombētiem datoriem, tomēr nekad nevar zināt, kad tas notiks. Turklāt ir iespējams, ka zombētais dators tiek iesaistīts uzbrukumā citiem datoriem, un izmeklēšanas gaitā var rasties problēmas tā īpašniekam. Jāpārdomā un nepieciešamības gadījumā jāpilnveido aizsardzības programmas (antivīrusu, ugunsmūra) un jāuzstāda labākas paroles.', 'Computer is involved in botnet with unknown goal (not visible to user).",
            'en': "Criminals not always corrupt or steal data from botnet computers, but it is not possible when that may happen. In addition, there is a possibility that computer will be involved in attack on other computers and that could create legal problems for the owner. The question of improving protection programs (antivirus, firewall) and using better passwords should be addressed and in case of need – implemented.",
        }
    },
    {
        rid: 3,
        checked: 3,
        text: {
            'lv': "Dators iesaistīts botu tīklā (zombēts), Interneta pakalpojumu sniedzējs atslēdz piekļuvi tīklam",
            'en': "Computer is involved in botnet to send spam email, internet service provider disconnects computer from internet"
        },
        suggestion_high: {
            'lv': "Noziedznieki ne vienmēr uzreiz sabojā vai nozog datus no zombētiem datoriem, tomēr nekad nevar zināt, kad tas notiks. Turklāt ir iespējams, ka zombētais dators tiek iesaistīts uzbrukumā citiem datoriem, un izmeklēšanas gaitā var rasties problēmas tā īpašniekam. Noteikti jāpilnveido aizsardzības programmas (antivīrusu, ugunsmūra) un jāuzstāda labākas paroles, tas jāveic cik vien iespējams drīz.",
            'en': "Criminals not always corrupt or steal data from botnet computers, but it is not possible when that may happen. In addition, there is a possibility that computer will be involved in attack on other computers and that could create legal problems for the owner. Protection programs (antivirus, firewall) must be improved and better passwords should be used – this should be done as soon as possible.",
        },
        suggestion_medium: {
            'lv': "Noziedznieki ne vienmēr uzreiz sabojā vai nozog datus no zombētiem datoriem, tomēr nekad nevar zināt, kad tas notiks. Turklāt ir iespējams, ka zombētais dators tiek iesaistīts uzbrukumā citiem datoriem, un izmeklēšanas gaitā var rasties problēmas tā īpašniekam. Jāpārdomā un nepieciešamības gadījumā jāpilnveido aizsardzības programmas (antivīrusu, ugunsmūra) un jāuzstāda labākas paroles.",
            'en': "Criminals not always corrupt or steal data from botnet computers, but it is not possible when that may happen. In addition, there is a possibility that computer will be involved in attack on other computers and that could create legal problems for the owner. The question of improving protection programs (antivirus, firewall) and using better passwords should be addressed and in case of need – implemented."
        }
    },
    {
        rid: 4,
        checked: 3,
        text: {
            'lv': "Datora tehnisku bojājumu, t.sk. diska bojājuma dēļ, dati ir zuduši",
            'en': "Because of damaged computer, including damaged hard drive, data has been lost"
        },
        suggestion_high: {
            'lv': "Vislabākais līdzeklis pret datu zaudēšanu tehnisku problēmu dēļ ir savlaicīga un regulāra rezerves kopiju veidošana. Izveido savu risinājumu, un sāc veidot rezerves kopijas. Var izmantot gan CD, gan USB atmiņas kartes, gan citus risinājumus.",
            'en': "The best tool to prevent data loss because of computer technical problems is timely and on regular basis created data backups. Create your solution to this problem and start creating backups. Optical discs, USB flash memory and other storage solutions can be used for backup purposes.",
        },
        suggestion_medium: {
            'lv': "Vislabākais līdzeklis pret datu zaudēšanu tehnisku problēmu dēļ ir savlaicīga un regulāra rezerves kopiju veidošana. Tomēr privātā vidē ir iespējams uz datu (piemēram, fotogrāfiju kolekcija) zaudējumu raudzīties filozofiski, un pieņemt, ja pazudīs, tad nekas. Tomēr, ja glabājamie dati ir ar ilgtermiņa nozīmi, padomā par rezerves kopijām.",
            'en': "The best tool to prevent data loss because of computer technical problems is timely and on regular basis created data backups. For private purposes there is a way to look philosophically at data (for example photo collection) loss and think that this is not the end of the world."
        }
    },
    {
        rid: 5,
        checked: 3,
        text: {
            'lv': "Pazaudējot USB atmiņas karti vai telefonu, zaudēti dati",
            'en': "Data has been lost because of lost mobile phone or flash drive"
        },
        suggestion_high: {
            'lv': "Jāizvērtē, kādi dati tiek glabāti USB atmiņas kartē. Ja tie ir tikai daži faili, kam ir oriģināli datorā, kā arī neuztrauc datu nokļūšana pie svešiem, tad var pieņemt nelielas materiālas vērtības zudumu. Ja USB atmiņā tiek glabāti slēpjami dati, tad vajadzētu tos šifrēt. Šī riska augstais līmenis liecina, ka jāpārdomā, kā uzlabot datu drošību USB atmiņā.",
            'en': "It should be evaluated what data is stored on USB flash drive. If those are only few files, which are copies of original files on computer, and it is not a concern if those files become accessible by unknown people, then it can be accepted as a small loss of material value. If flash drive contains secret data, then it should be encrypted. The highest level of this risk shows that flash drive security should be improved.",
        },
        suggestion_medium: {
            'lv': "Jāizvērtē, kādi dati tiek glabāti USB atmiņas kartē. Ja tie ir tikai daži faili, kam ir oriģināli datorā, kā arī neuztrauc datu nokļūšana pie svešiem, tad var pieņemt nelielas materiālas vērtības zudumu. Ja USB atmiņā tiek glabāti slēpjami dati, tad vajadzētu tos šifrēt. Privātā vidē ir iespējams uz datu zaudējumu raudzīties filozofiski, un pieņemt, ja pazudīs, tad nekas.",
            'en': "It should be evaluated what data is stored on USB flash drive. If those are only few files, which are copies of original files on computer, and it is not a concern if those files become accessible by unknown people, then it can be accepted as a small loss of material value. If flash drive contains secret data, then it should be encrypted. For private purposes there is a way to look philosophically at data loss and think that this is not the end of the world."
        }
    },
    {
        rid: 6,
        checked: 3,
        text: {
            'lv': "Neapdomīgi publiskota vai sliktajiem nodota informācija tiek izmantota, lai izkrāptu vai nozagtu naudu",
            'en': "Lightmindedly published information is used to cheat out money"
        },
        suggestion_high: {
            'lv': "Nevienas darbības Internetā nav anonīmas un pēdas paliek arī izdzēstai informācijai, bet aizvien biežāk cilvēki publisko informāciju, \"parakstot\" to ar savu vārdu. Ir iespējams izmantot informāciju, ko pats esi publicējis, piemēram, par ieradumiem, hobijiem vtml., lai iegūtu uzticību un izkrāptu naudu. Ir vērts atcerēties parunu \"septiņreiz nomēri pirms nogriez\" arī attiecībā uz informācijas publicēšanu Internetā (sociālajos tīklos). Ja labprāt publisko daudz informācijas, uzmanies no nepazīstamiem saziņas partneriem, kas daudz zina par Tevi. Iespējams, ka būtu vērts izdzēst kaut daļu informācijas, lai tā nebūtu tik ērti pieejama.",
            'en': "Actions on the internet are not anonymous and trace is left even for deleted information, but more and more commonly information, which is “signed” with one’s name, is published. It is possible to use information, which you are published, for example, about your habits, \r\nhobbies etc., to gain trust and cheat out money. It is useful to remember the saying – “Measure seven times and cut one” in the context of publishing information on the internet (social sites). If you willingly publish a lot of information, watch out of unknown communication partners, who know a lot about you. Maybe it could be a good idea to delete some information, to make in less easy to obtain.",
        },
        suggestion_medium: {
            'lv': "Nevienas darbības Internetā nav anonīmas un pēdas paliek arī izdzēstai informācijai, bet aizvien biežāk cilvēki publisko informāciju, \"parakstot\" to ar savu vārdu. Ir iespējams izmantot informāciju, ko pats esi publicējis, piemēram, par ieradumiem, hobijiem vtml., lai iegūtu uzticību un izkrāptu naudu. Ir vērts atcerēties parunu \"septiņreiz nomēri pirms nogriez\" arī attiecībā uz informācijas publicēšanu Internetā (sociālajos tīklos). Ja labprāt publisko daudz informācijas, uzmanies no nepazīstamiem saziņas partneriem, kas daudz zina par Tevi.",
            'en': "Actions on the internet are not anonymous and trace is left even for deleted information, but more and more commonly information, which is “signed” with one’s name, is published. It is possible to use information, which you are published, for example, about your habits, hobbies etc., to gain trust and cheat out money. It is useful to remember the saying – “Measure seven times and cut one” in the context of publishing information on the internet (social sites). If you willingly publish a lot of information, watch out of unknown communication partners, who know a lot about you."
        }
    },
    {
        rid: 7,
        checked: 2,
        text: {
            'lv': "Neapdomīgi publicētas informācijas dēļ, atteikts pieņemt darbā vai radusies cita nepatīkama situācija",
            'en': "Job opportunity is denied because of lightmindedly published information or other unpleasant situation"
        },
        suggestion_high: {
            'lv': "Nevienas darbības Internetā nav anonīmas un pēdas paliek arī izdzēstai informācijai, bet aizvien biežāk cilvēki publisko informāciju, \"parakstot\" to ar savu vārdu. Ir iespējams izmantot informāciju, ko pats esi publicējis, piemēram, par trakulīgām ballītēm, ne īpaši labiem ieradumiem vtml., lai veidotu priekšstatu. Ir vērts atcerēties parunu \"septiņreiz nomēri pirms nogriez\" arī attiecībā uz informācijas publicēšanu Internetā (sociālajos tīklos). Iespējams, ka būtu vērts izdzēst kaut daļu informācijas, lai tā nebūtu tik ērti pieejama.",
            'en': "Actions on the internet are not anonymous and trace is left even for deleted information, but more and more commonly information, which is \"signed\" with one’s name, is published. It is possible to use information, which you are published, for example, about some crazy party or bad habits etc., to make an impression. It is useful to remember the saying – \"Measure seven times and cut one\" in the context of publishing information on the internet (social sites). Maybe it could be a good idea to delete some information, to make in less easy to obtain.",
        },
        suggestion_medium: {
            'lv': "Nevienas darbības Internetā nav anonīmas un pēdas paliek arī izdzēstai informācijai, bet aizvien biežāk cilvēki publisko informāciju, \"parakstot\" to ar savu vārdu. Ir iespējams izmantot informāciju, ko pats esi publicējis, piemēram, par trakulīgām ballītēm, ne īpaši labiem ieradumiem vtml., lai veidotu priekšstatu. Ir vērts atcerēties parunu \"septiņreiz nomēri pirms nogriez\" arī attiecībā uz informācijas publicēšanu Internetā (sociālajos tīklos).",
            'en': "Actions on the internet are not anonymous and trace is left even for deleted information, but more and more commonly information, which is \"signed\" with one’s name, is published. It is possible to use information, which you are published, for example, about some crazy party or bad habits etc., to make an impression. It is useful to remember the saying – \"Measure seven times and cut one\" in the context of publishing information on the internet (social sites)."
        }
    },
    {
        rid: 8,
        checked: 3,
        text: {
            'lv': "Pārāk vienkāršas paroles dēļ, kāds iekļuvis internetbankas kontā un nozadzis naudu",
            'en': "Because of weak a password someone broke in your bank account and stole money"
        },
        suggestion_high: {
            'lv': "Parolei jābūt pietiekami sarežģītai (vismaz 8 simboli, bet labāk vairāk, lielie un mazie burti, speciālie simboli, cipari utt.). Ja paroli grūti atcerēties, mājās tā var tikt arī pierakstīta un glabāta kādā sev vien zināmā drošā vietā (\"zem spilvena\"), rūpējies, lai tā nebūtu pieejama kopā ar lietotāja vārdu. Ja esi lietojis paroli nedrošā vietā (Interneta kafejnīcā vtml.), labāk to nomaini.",
            'en': "Password must be complicated enough (at least 8 symbols (but more is better), uppercase and lowercase letter, special symbols, number etc.). If password is hard to remember, it can be stored home in a secret place (\"under the pillow\"), but make sure that it is not accessible with username. If you used password in unsafe environment (Internet café for example) you should change the password.",
        },
        suggestion_medium: {
            'lv': "Parolei jābūt pietiekami sarežģītai (vismaz 8 simboli, bet labāk vairāk, lielie un mazie burti, speciālie simboli, cipari utt.). Ja paroli grūti atcerēties, mājās tā var tikt arī pierakstīta un glabāta kādā sev vien zināmā drošā vietā (\"zem spilvena\"), rūpējies, lai tā nebūtu pieejama kopā ar lietotāja vārdu.",
            'en': "Password must be complicated enough (at least 8 symbols (but more is better), uppercase and lowercase letter, special symbols, number etc.). If password is hard to remember, it can be stored home in a secret place (\"under the pillow\"), but make sure that it is not accessible with username."
        }
    },
    {
        rid: 9,
        checked: 2,
        text: {
            'lv': "Pārāk vienkāršas paroles dēļ, sociālā tīkla profilā vai e-pastā kāds darbojies saimnieka vietā",
            'en': "Because of a weak password someone is using owner's email or social profile"
        },
        suggestion_high: {
            'lv': "Parolei jābūt pietiekami sarežģītai (vismaz 8 simboli, bet labāk vairāk, lielie un mazie burti, speciālie simboli, cipari utt.). Ja paroli grūti atcerēties, mājās tā var tikt arī pierakstīta un glabāta kādā sev vien zināmā drošā vietā (\"zem spilvena\"), rūpējies, lai tā nebūtu pieejama kopā ar lietotāja vārdu. Ja esi lietojis paroli nedrošā vietā (Interneta kafejnīcā vtml.), labāk to nomaini.",
            'en': "Password must be complicated enough (at least 8 symbols (but more is better), uppercase and lowercase letter, special symbols, number etc.). If password is hard to remember, it can be stored home in a secret place (“under the pillow”), but make sure that it is not accessible with username. If you used password in unsafe environment (Internet café for example) you should change the password.",
        },
        suggestion_medium: {
            'lv': "Parolei jābūt pietiekami sarežģītai (vismaz 8 simboli, bet labāk vairāk, lielie un mazie burti, speciālie simboli, cipari utt.). Ja paroli grūti atcerēties, mājās tā var tikt arī pierakstīta un glabāta kādā sev vien zināmā drošā vietā (\"zem spilvena\"), rūpējies, lai tā nebūtu pieejama kopā ar lietotāja vārdu.",
            'en': "'Password must be complicated enough (at least 8 symbols (but more is better), uppercase and lowercase letter, special symbols, number etc.). If password is hard to remember, it can be stored home in a secret place (“under the pillow”), but make sure that it is not accessible with username."
        }
    },
    {
        rid: 10,
        checked: 2,
        text: {
            'lv': "Svešais izmanto bezvadu tīklu sliktiem mērķiem",
            'en': "Someone is using wireless network for bad purposes"
        },
        suggestion_high: {
            'lv': "Bezvadu tīkla maršrutētājam nekavējoties noteikti jāuzstāda pietiekami droša parole.",
            'en': "Wireless router password must be immediately set to a stronger password.",
        },
        suggestion_medium: {
            'lv': "Bezvadu tīkla maršrutētājam noteikti jāuzstāda pietiekami droša parole. To var nedarīt, ja dzīvo meža vidū, kur sveši neieklīst :)",
            'en': "Wireless router password must be immediately set to a stronger password. It is not as critical, if you live in the middle of a forest, where strangers don’t enter :)"
        }
    }
];

systemdata.ui = {
    'sysname': {
        'lv': "Informācijas Drošības Risku Eksperts",
        'en': "Information Security Risk Expert"
    },
    'descr1': {
        'lv': "Datoru drošība nereti tiek uzskatīta par tikai atbilstošās jomas speciālistiem saprotamu un svarīgu tēmu. Tomēr par informācijas un datora drošību ir iespējams un nepieciešams rūpēties katram pašam.",
        'en': "Computer security pretty often is considered as fully understood and an important topic only by security specialists. However it is possible and essential to think about security of your computers and digital information."
    },
    'descr2': {
        'lv': "Atbildi uz jautājumiem par datora lietošanas paradumiem un noskaidro sev būtiskākos riskus, kas ar tiem saistīti. Ja Tavu datoru izmanto vairāki lietotāji vai Tu pats lieto vairākus datorus, tad jautājumi jāatbild katram un par katru datoru atsevišķi. Noslēgumā saņemsi ieteikumus, ko varētu vai vajadzētu darīt, ja šobrīd īstenotie drošības pasākumi neatbilst Tavām vēlmēm būt pasargātam elektroniskā vidē.",
        'en': "Answer questions about your computer usage and evaluate the most crucial risks, which are asociated with your habits. If your computer is shared with other people or you use several computers, then questions should be answered by everybody and about every computer in distinct. In the end You will receive recomendations which you should or must take into account if your current security policy does not fulfil your expectations of secure electronic environment."
    },
    'start': {
        'lv': "Sākt aptauju",
        'en': "Start inquiry"
    },
    'changelang': {
        'lv': "English",
        'en': "Latviski"
    },
    'continue': {
        'lv': "Turpināt",
        'en': "Continue"
    },
    'back': {
        'lv': "Atpakaļ",
        'en': "Back"
    },
    'riskpage1': {
        'lv': "Iedomājies, ka zemāk minētie notikumi būtu notikuši. Novērtē cik svarīga Tev ir to negatīvā ietekme:",
        'en': "Imagine that events mentioned below really happened. Rank how important is its negative implications:"
    },
    'riskpage2': {
        'lv': "1 - nemaz neuztrauc, 2 - gan jau pārdzīvošu, 3 - būtiska negatīva ietekme",
        'en': "1 - doesn't bother, 2 - I'll get over it, 3 - substantial negative impact"
    },
    'riskpage3': {
        'lv': "Speciālisti ir novērtējuši riskus, sniedzot ieteikumu, taču droši maini riska novērtējumu, ja Tava attieksme ir citāda.",
        'en': "Experts have rated these risks, giving advises, but change the rating if you feel differently."
    },
    'highrisks': {
        'lv': "Tu esi pakļauts šādiem riskiem ar šādu riska ietekmi (9 maks.):",
        'en': "You are affected by these risks with these implications (9 max):"
    },
    'lowrisks': {
        'lv': "Tu esi minimāli pakļauts šādiem riskiem, taču to ietekme ir zema un papildus darbības no Tavas puses nav nepieciešamas:",
        'en': "You are affected by the following risks, but their possible implications ar less likely and additional actions are not necessary:"
    },
    'advice': {
        'lv': "Ieteikums:",
        'en': "Advice:"
    },
    'backtostart': {
        'lv': "Uz sākumu",
        'en': "Back to start"
    },
    'feedback': {
        'lv': "Atstāt atsauksmi",
        'en': "Leave feedback"
    },
    'send': {
        'lv': "Nosūtīt",
        'en': "Send"
    },
    'thanks': {
        'lv': "Paldies!",
        'en': "Thank you!"
    },
};