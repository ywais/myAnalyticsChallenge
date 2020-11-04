import {OneDay,OneHour,OneWeek} from '../timeFrames'
const yesterday = new Date(new Date().toDateString()).getTime() - 7200001;
const today = new Date (new Date(new Date().toUTCString()).toDateString()).getTime()+6*OneHour
const dayZero = today-5*OneWeek

const mockData: any = {
  "events": [
    {
      "_id": "Pnq5MmIZ6Z_",
      "session_id": "ebd9da74-3965-43c8-932f-a47b6bffd380",
      "name": "signup",
      "distinct_user_id": "eqR0ppLYH",
      "date": dayZero +1,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 20,
          "lng": 108
        },
        "accuracy": 868
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QQM9E8WHvzN",
      "session_id": "ebd9da74-3965-43c8-932f-a47b6bffd380",
      "name": "signup",
      "distinct_user_id": "RjCuj9IIwI",
      "date": dayZero +59294118,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -34,
          "lng": -4
        },
        "accuracy": 58
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q8TbeM7h5xU",
      "session_id": "375271ed-63c7-4fcf-bf85-a145ac09c218",
      "name": "signup",
      "distinct_user_id": "_67ag3j-O0",
      "date": dayZero +118588236,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -46,
          "lng": -78
        },
        "accuracy": 493
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q9KC0OesH5d",
      "session_id": "17a359d9-017d-4494-a4fe-0a7f540a6a1c",
      "name": "signup",
      "distinct_user_id": "KmaQHEeqfq",
      "date": dayZero +177882353,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -79,
          "lng": 176
        },
        "accuracy": 1910
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QBov2aKsF9I",
      "session_id": "0016688a-21f8-450b-895d-f844a4073172",
      "name": "signup",
      "distinct_user_id": "VyukXD26CY",
      "date": dayZero +237176471,
      "os": "windows",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -72,
          "lng": -145
        },
        "accuracy": 1811
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QsJ11jV1PFK",
      "session_id": "403f66e5-75c7-412d-b81b-c6a6594be231",
      "name": "signup",
      "distinct_user_id": "-uyjoD6P5E",
      "date": dayZero +296470589,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -70,
          "lng": -100
        },
        "accuracy": 1765
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QxeOQy2xiN5",
      "session_id": "2801b7b4-4941-4c15-8900-374b0ed0a923",
      "name": "signup",
      "distinct_user_id": "vDYkdlECx1",
      "date": dayZero +355764706,
      "os": "mac",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -33,
          "lng": -147
        },
        "accuracy": 1636
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QIOt9gzIbaR",
      "session_id": "5f25cfb0-7922-46a2-aa78-7d8aae4fd21b",
      "name": "signup",
      "distinct_user_id": "DAamyhiWtx",
      "date": dayZero +415058824,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -30,
          "lng": 150
        },
        "accuracy": 1936
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QV5v5A5yI1z",
      "session_id": "3799d6fe-1316-4644-8854-f80840228278",
      "name": "signup",
      "distinct_user_id": "CKbac_Y4hz",
      "date": dayZero +474352942,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -43,
          "lng": 78
        },
        "accuracy": 422
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QPQh2Cp395E",
      "session_id": "76d89270-8f44-4071-a229-54a1c4ae732d",
      "name": "signup",
      "distinct_user_id": "bvPpfqz_kK",
      "date": dayZero +533647059,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -75,
          "lng": 90
        },
        "accuracy": 834
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QlfVNGtvLNf",
      "session_id": "fa2a9f72-7b72-4cd8-899f-5438bf89877e",
      "name": "signup",
      "distinct_user_id": "K9DlkVNBBL",
      "date": dayZero +592941177,
      "os": "other",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -85,
          "lng": -24
        },
        "accuracy": 1463
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QYvCM4xeoVr",
      "session_id": "8ac3b217-e421-4a3e-a731-1681f8991150",
      "name": "signup",
      "distinct_user_id": "AR1STupilg",
      "date": dayZero +652235295,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -30,
          "lng": 140
        },
        "accuracy": 36
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QVdcTalebrQ",
      "session_id": "129efdba-89f3-4f08-b902-8030cc90ec54",
      "name": "signup",
      "distinct_user_id": "5nws4oxZq6",
      "date": dayZero +711529412,
      "os": "linux",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -49,
          "lng": 47
        },
        "accuracy": 519
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QYreL3vRa43",
      "session_id": "996101d4-8f36-48d6-b181-41e0497fffb3",
      "name": "signup",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +770823530,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 16,
          "lng": -118
        },
        "accuracy": 1863
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q76jlqE4UkL",
      "session_id": "42fb0a85-4c07-4638-84f8-813a5e2db1a4",
      "name": "signup",
      "distinct_user_id": "8nuqlmor5m",
      "date": dayZero +830117648,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 37,
          "lng": -135
        },
        "accuracy": 87
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q8T4FFYyDvh",
      "session_id": "f5ce30ae-a418-44c7-9c12-fc162bb9bd42",
      "name": "signup",
      "distinct_user_id": "U7XwB1I7KX",
      "date": dayZero +889411765,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -63,
          "lng": 131
        },
        "accuracy": 1217
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QhZEqKKxTD_",
      "session_id": "e6cf0e1d-2274-4910-beff-46e1e795c1c5",
      "name": "signup",
      "distinct_user_id": "MbO7TjEMuKg",
      "date": dayZero +948705883,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 7,
          "lng": -4
        },
        "accuracy": 468
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q2UsHGetwkP",
      "session_id": "a8aeab98-e272-4f28-aeda-7f9002e2173e",
      "name": "signup",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +1008000001,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 46,
          "lng": -120
        },
        "accuracy": 1671
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QCLaD5xS8JX",
      "session_id": "46f965e8-ec16-4deb-bcce-eade2f3992c3",
      "name": "signup",
      "distinct_user_id": "IENYI05sRLg",
      "date": dayZero +1067294118,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -64,
          "lng": -11
        },
        "accuracy": 16
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QdB315BCIA2",
      "session_id": "ff08be9a-65d1-47e2-8e48-54b7b09cedaf",
      "name": "signup",
      "distinct_user_id": "B7XAnHMMANb",
      "date": dayZero +1126588236,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 41,
          "lng": -20
        },
        "accuracy": 830
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QAIHgBpSitY",
      "session_id": "727b0f32-174f-468a-97b7-bcca59078677",
      "name": "signup",
      "distinct_user_id": "Y82oCwGWsWL",
      "date": dayZero +1185882353,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 1,
          "lng": -160
        },
        "accuracy": 332
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QOtt4hjBCfC",
      "session_id": "5a72408e-8201-41ce-8521-c7587f5fe892",
      "name": "signup",
      "distinct_user_id": "5euQUL-5Ys1",
      "date": dayZero +1245176471,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -51,
          "lng": 131
        },
        "accuracy": 1854
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QEbrH1CVugC",
      "session_id": "614bf3d1-8b13-4579-af81-92fcba7e8dd2",
      "name": "signup",
      "distinct_user_id": "5BSPGqgCmDA",
      "date": dayZero +1304470589,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -15,
          "lng": 125
        },
        "accuracy": 1180
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QPHLhKk_vo9",
      "session_id": "541508c6-867c-4143-b767-f121c219f1d7",
      "name": "signup",
      "distinct_user_id": "nxdMe1TBz4j",
      "date": dayZero +1363764706,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 28,
          "lng": 70
        },
        "accuracy": 301
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QJc4ORTEfCP",
      "session_id": "e95c84d3-02b5-46ff-8d1a-2981a1a712a2",
      "name": "signup",
      "distinct_user_id": "4RMPG3u8rit",
      "date": dayZero +1423058824,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -86,
          "lng": -100
        },
        "accuracy": 281
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QBn0V7PTMDS",
      "session_id": "a29b0c7f-d57c-496f-8ef6-c35848a98e5f",
      "name": "signup",
      "distinct_user_id": "IKyM5jbKn3L",
      "date": dayZero +1482352942,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 58,
          "lng": 115
        },
        "accuracy": 1624
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q_iRtNCmLdd",
      "session_id": "bc422964-9903-4824-b655-802b08604228",
      "name": "signup",
      "distinct_user_id": "6qTRoZudMPj",
      "date": dayZero +1541647059,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -78,
          "lng": 54
        },
        "accuracy": 1765
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QGGMLj-cPrB",
      "session_id": "a1143361-4b05-44ff-b552-d4e0c372bb55",
      "name": "signup",
      "distinct_user_id": "ezcz9kkdXbG",
      "date": dayZero +1600941177,
      "os": "ios",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -75,
          "lng": 80
        },
        "accuracy": 1316
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QzLS-v8r-HW",
      "session_id": "db8fe893-b8b4-4f56-b026-8693247f8666",
      "name": "signup",
      "distinct_user_id": "SzWMF_JrHbo",
      "date": dayZero +1660235295,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 80,
          "lng": 126
        },
        "accuracy": 1938
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QSKmlRoSnCS",
      "session_id": "651bd208-fc9f-4a3e-823e-181adcc19295",
      "name": "signup",
      "distinct_user_id": "-rM3zUf9-hj",
      "date": dayZero +1719529412,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 30,
          "lng": -56
        },
        "accuracy": 24
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QNgThr7IWuz",
      "session_id": "6e7529b8-dc83-43e1-96d1-6068333753ad",
      "name": "signup",
      "distinct_user_id": "cPPpoy6NQb-",
      "date": dayZero +1778823530,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 19,
          "lng": 127
        },
        "accuracy": 1031
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QN1QeVZ_POQ",
      "session_id": "a2c8715a-3dd6-4a87-af07-0737d2fccf09",
      "name": "signup",
      "distinct_user_id": "QzHXRIXnBph",
      "date": dayZero +1838117648,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -56,
          "lng": -61
        },
        "accuracy": 706
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QolqialNG-t",
      "session_id": "64b96695-626c-489a-95ea-8e2bc8affed1",
      "name": "signup",
      "distinct_user_id": "v4IDuhMl9LX",
      "date": dayZero +1897411765,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -88,
          "lng": -130
        },
        "accuracy": 924
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QDa1pyrAp1r",
      "session_id": "b126b28d-ff6d-4d7e-8030-11269b5af0dd",
      "name": "signup",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +1956705883,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -80,
          "lng": 41
        },
        "accuracy": 1816
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q0UxIaeTWjD",
      "session_id": "5bf5389c-aac0-4b12-840c-5117276a439d",
      "name": "signup",
      "distinct_user_id": "Xm38M-LdL5I",
      "date": dayZero +2016000001,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 23,
          "lng": -155
        },
        "accuracy": 968
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QUo9SokYr-p",
      "session_id": "47c106b2-b54b-444e-88ac-bcc32ec134d7",
      "name": "signup",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2075294118,
      "os": "linux",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -86,
          "lng": 59
        },
        "accuracy": 249
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QVgDiH04XX-",
      "session_id": "3d48f871-0b82-4174-bcca-d5ecbebae474",
      "name": "signup",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2134588236,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 79,
          "lng": 129
        },
        "accuracy": 1529
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QfzIof_N6a-",
      "session_id": "efe00031-a88e-4fb9-bdc7-db413984c801",
      "name": "signup",
      "distinct_user_id": "szz4XV7B3NC",
      "date": dayZero +2193882353,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 65,
          "lng": 168
        },
        "accuracy": 1496
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q1rG8BA8peb",
      "session_id": "3f7714f4-559e-4e81-972f-8401008673a2",
      "name": "signup",
      "distinct_user_id": "KQyoomQyyVv",
      "date": dayZero +2253176471,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -40,
          "lng": 116
        },
        "accuracy": 1480
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q-SsWiGDW6_",
      "session_id": "04aca2c9-1d20-4133-a5cf-fc14e153b066",
      "name": "signup",
      "distinct_user_id": "Oh7gDjSdEr4",
      "date": dayZero +2312470589,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -20,
          "lng": -120
        },
        "accuracy": 637
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QodY0TBDq2d",
      "session_id": "98c01148-bd44-427f-925a-5f594f93b768",
      "name": "signup",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2371764706,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 89,
          "lng": 67
        },
        "accuracy": 1389
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q7-tWUdLwWY",
      "session_id": "a929938f-0fee-49d4-9915-9e0551005a3f",
      "name": "signup",
      "distinct_user_id": "utuRVj4LOdB",
      "date": dayZero +2431058824,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 72,
          "lng": -105
        },
        "accuracy": 1064
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q2yilBWwv1y",
      "session_id": "cc6542ee-0230-4769-857f-1bc58c2e5d4f",
      "name": "signup",
      "distinct_user_id": "HGX_CB3jSze",
      "date": dayZero +2490352942,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -88,
          "lng": -57
        },
        "accuracy": 1330
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q-0jR9Q2Mhi",
      "session_id": "cdccf790-801b-4106-ab7d-f669d8f63136",
      "name": "signup",
      "distinct_user_id": "a4wAAAWneP6",
      "date": dayZero +2549647059,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 44,
          "lng": 74
        },
        "accuracy": 1114
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q_SgF8VKC47",
      "session_id": "0ee8ca46-ae41-412c-b3ea-47b3b18f792d",
      "name": "signup",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2608941177,
      "os": "windows",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -60,
          "lng": 7
        },
        "accuracy": 1243
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QuYeoaaFJvh",
      "session_id": "cc956975-86d2-4905-aa24-b9b27b5c05dd",
      "name": "signup",
      "distinct_user_id": "w1bhxxrmlov",
      "date": dayZero +2668235295,
      "os": "mac",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -84,
          "lng": 50
        },
        "accuracy": 163
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q8HVG7Gqm1M",
      "session_id": "a2512672-3436-4b39-8b29-698b9ca1fed2",
      "name": "signup",
      "distinct_user_id": "iZWdP-lqiiV",
      "date": dayZero +2727529412,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 10,
          "lng": -120
        },
        "accuracy": 961
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Qd2FU1FV_-a",
      "session_id": "2d660517-458e-4563-86ef-9a6ff52a24c1",
      "name": "signup",
      "distinct_user_id": "sEXmsbIDc2m",
      "date": dayZero +2786823530,
      "os": "linux",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 82,
          "lng": 83
        },
        "accuracy": 217
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "QFdd5Vv_Izs",
      "session_id": "b6e31207-7dea-4208-b3ec-0daf5ec21a5b",
      "name": "signup",
      "distinct_user_id": "yXsfx1JDAEB",
      "date": dayZero +2846117648,
      "os": "linux",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 38,
          "lng": -147
        },
        "accuracy": 541
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Q6ma0y99AGm",
      "session_id": "42c7841e-9708-442e-a23f-8e534bf7e2f5",
      "name": "signup",
      "distinct_user_id": "VHrFyv1kytH",
      "date": dayZero +2905411765,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -49,
          "lng": -165
        },
        "accuracy": 1621
      },
      "url": "http://localhost3000/signup"
    },
    {
      "_id": "Pnq5MmIZ6Z_",
      "session_id": "ebd9da74-3965-43c8-932f-a47b6bffd380",
      "name": "login",
      "distinct_user_id": "eqR0ppLYH",
      "date": dayZero +2005126804,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 20,
          "lng": 108
        },
        "accuracy": 868
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "RQM9E8WHvzN",
      "session_id": "ebd9da74-3965-43c8-932f-a47b6bffd380",
      "name": "login",
      "distinct_user_id": "RjCuj9IIwI",
      "date": dayZero +1938082710,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -34,
          "lng": -4
        },
        "accuracy": 58
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "i8TbeM7h5xU",
      "session_id": "375271ed-63c7-4fcf-bf85-a145ac09c218",
      "name": "login",
      "distinct_user_id": "_67ag3j-O0",
      "date": dayZero +1838124311,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -46,
          "lng": -78
        },
        "accuracy": 493
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "i9KC0OesH5d",
      "session_id": "17a359d9-017d-4494-a4fe-0a7f540a6a1c",
      "name": "login",
      "distinct_user_id": "KmaQHEeqfq",
      "date": dayZero +2474782868,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -79,
          "lng": 176
        },
        "accuracy": 1910
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "nBov2aKsF9I",
      "session_id": "0016688a-21f8-450b-895d-f844a4073172",
      "name": "login",
      "distinct_user_id": "VyukXD26CY",
      "date": dayZero +1459570188,
      "os": "windows",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -72,
          "lng": -145
        },
        "accuracy": 1811
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "osJ11jV1PFK",
      "session_id": "403f66e5-75c7-412d-b81b-c6a6594be231",
      "name": "login",
      "distinct_user_id": "-uyjoD6P5E",
      "date": dayZero +1909082256,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -70,
          "lng": -100
        },
        "accuracy": 1765
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "yxeOQy2xiN5",
      "session_id": "2801b7b4-4941-4c15-8900-374b0ed0a923",
      "name": "login",
      "distinct_user_id": "vDYkdlECx1",
      "date": dayZero +2617257918,
      "os": "mac",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -33,
          "lng": -147
        },
        "accuracy": 1636
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "LIOt9gzIbaR",
      "session_id": "5f25cfb0-7922-46a2-aa78-7d8aae4fd21b",
      "name": "login",
      "distinct_user_id": "DAamyhiWtx",
      "date": dayZero +2932967901,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -30,
          "lng": 150
        },
        "accuracy": 1936
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "lV5v5A5yI1z",
      "session_id": "3799d6fe-1316-4644-8854-f80840228278",
      "name": "login",
      "distinct_user_id": "CKbac_Y4hz",
      "date": dayZero +2153251811,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -43,
          "lng": 78
        },
        "accuracy": 422
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "hPQh2Cp395E",
      "session_id": "76d89270-8f44-4071-a229-54a1c4ae732d",
      "name": "login",
      "distinct_user_id": "bvPpfqz_kK",
      "date": dayZero +2958062279,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -75,
          "lng": 90
        },
        "accuracy": 834
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "RlfVNGtvLNf",
      "session_id": "fa2a9f72-7b72-4cd8-899f-5438bf89877e",
      "name": "login",
      "distinct_user_id": "K9DlkVNBBL",
      "date": dayZero +704467148,
      "os": "other",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -85,
          "lng": -24
        },
        "accuracy": 1463
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "LYvCM4xeoVr",
      "session_id": "8ac3b217-e421-4a3e-a731-1681f8991150",
      "name": "login",
      "distinct_user_id": "AR1STupilg",
      "date": dayZero +1222326510,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -30,
          "lng": 140
        },
        "accuracy": 36
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "OVdcTalebrQ",
      "session_id": "129efdba-89f3-4f08-b902-8030cc90ec54",
      "name": "login",
      "distinct_user_id": "5nws4oxZq6",
      "date": dayZero +2234495357,
      "os": "linux",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -49,
          "lng": 47
        },
        "accuracy": 519
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "CYreL3vRa43",
      "session_id": "996101d4-8f36-48d6-b181-41e0497fffb3",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +1676244183,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 16,
          "lng": -118
        },
        "accuracy": 1863
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "a76jlqE4UkL",
      "session_id": "42fb0a85-4c07-4638-84f8-813a5e2db1a4",
      "name": "login",
      "distinct_user_id": "8nuqlmor5m",
      "date": dayZero +2955522568,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 37,
          "lng": -135
        },
        "accuracy": 87
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "B8T4FFYyDvh",
      "session_id": "f5ce30ae-a418-44c7-9c12-fc162bb9bd42",
      "name": "login",
      "distinct_user_id": "U7XwB1I7KX",
      "date": dayZero +1570561669,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -63,
          "lng": 131
        },
        "accuracy": 1217
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "fhZEqKKxTD_",
      "session_id": "e6cf0e1d-2274-4910-beff-46e1e795c1c5",
      "name": "login",
      "distinct_user_id": "MbO7TjEMuKg",
      "date": dayZero +1521091754,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 7,
          "lng": -4
        },
        "accuracy": 468
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "22UsHGetwkP",
      "session_id": "a8aeab98-e272-4f28-aeda-7f9002e2173e",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +2025276001,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 46,
          "lng": -120
        },
        "accuracy": 1671
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "sCLaD5xS8JX",
      "session_id": "46f965e8-ec16-4deb-bcce-eade2f3992c3",
      "name": "login",
      "distinct_user_id": "IENYI05sRLg",
      "date": dayZero +2765060152,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -64,
          "lng": -11
        },
        "accuracy": 16
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "AdB315BCIA2",
      "session_id": "ff08be9a-65d1-47e2-8e48-54b7b09cedaf",
      "name": "login",
      "distinct_user_id": "B7XAnHMMANb",
      "date": dayZero +2977772974,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 41,
          "lng": -20
        },
        "accuracy": 830
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "iAIHgBpSitY",
      "session_id": "727b0f32-174f-468a-97b7-bcca59078677",
      "name": "login",
      "distinct_user_id": "Y82oCwGWsWL",
      "date": dayZero +2320590943,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 1,
          "lng": -160
        },
        "accuracy": 332
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "aOtt4hjBCfC",
      "session_id": "5a72408e-8201-41ce-8521-c7587f5fe892",
      "name": "login",
      "distinct_user_id": "5euQUL-5Ys1",
      "date": dayZero +2988686638,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -51,
          "lng": 131
        },
        "accuracy": 1854
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "NEbrH1CVugC",
      "session_id": "614bf3d1-8b13-4579-af81-92fcba7e8dd2",
      "name": "login",
      "distinct_user_id": "5BSPGqgCmDA",
      "date": dayZero +2516981560,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -15,
          "lng": 125
        },
        "accuracy": 1180
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "NPHLhKk_vo9",
      "session_id": "541508c6-867c-4143-b767-f121c219f1d7",
      "name": "login",
      "distinct_user_id": "nxdMe1TBz4j",
      "date": dayZero +1768656896,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 28,
          "lng": 70
        },
        "accuracy": 301
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "VJc4ORTEfCP",
      "session_id": "e95c84d3-02b5-46ff-8d1a-2981a1a712a2",
      "name": "login",
      "distinct_user_id": "4RMPG3u8rit",
      "date": dayZero +2002295461,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -86,
          "lng": -100
        },
        "accuracy": 281
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "XBn0V7PTMDS",
      "session_id": "a29b0c7f-d57c-496f-8ef6-c35848a98e5f",
      "name": "login",
      "distinct_user_id": "IKyM5jbKn3L",
      "date": dayZero +1840730012,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 58,
          "lng": 115
        },
        "accuracy": 1624
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "L_iRtNCmLdd",
      "session_id": "bc422964-9903-4824-b655-802b08604228",
      "name": "login",
      "distinct_user_id": "6qTRoZudMPj",
      "date": dayZero +2355899914,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -78,
          "lng": 54
        },
        "accuracy": 1765
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "LGGMLj-cPrB",
      "session_id": "a1143361-4b05-44ff-b552-d4e0c372bb55",
      "name": "login",
      "distinct_user_id": "ezcz9kkdXbG",
      "date": dayZero +1739295912,
      "os": "ios",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -75,
          "lng": 80
        },
        "accuracy": 1316
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "TzLS-v8r-HW",
      "session_id": "db8fe893-b8b4-4f56-b026-8693247f8666",
      "name": "login",
      "distinct_user_id": "SzWMF_JrHbo",
      "date": dayZero +2492261035,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 80,
          "lng": 126
        },
        "accuracy": 1938
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ISKmlRoSnCS",
      "session_id": "651bd208-fc9f-4a3e-823e-181adcc19295",
      "name": "login",
      "distinct_user_id": "-rM3zUf9-hj",
      "date": dayZero +2534702252,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 30,
          "lng": -56
        },
        "accuracy": 24
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "2NgThr7IWuz",
      "session_id": "6e7529b8-dc83-43e1-96d1-6068333753ad",
      "name": "login",
      "distinct_user_id": "cPPpoy6NQb-",
      "date": dayZero +2963630379,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 19,
          "lng": 127
        },
        "accuracy": 1031
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "IN1QeVZ_POQ",
      "session_id": "a2c8715a-3dd6-4a87-af07-0737d2fccf09",
      "name": "login",
      "distinct_user_id": "QzHXRIXnBph",
      "date": dayZero +2671373282,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -56,
          "lng": -61
        },
        "accuracy": 706
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "4olqialNG-t",
      "session_id": "64b96695-626c-489a-95ea-8e2bc8affed1",
      "name": "login",
      "distinct_user_id": "v4IDuhMl9LX",
      "date": dayZero +2490068888,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -88,
          "lng": -130
        },
        "accuracy": 924
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "3Da1pyrAp1r",
      "session_id": "b126b28d-ff6d-4d7e-8030-11269b5af0dd",
      "name": "login",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +2679450773,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -80,
          "lng": 41
        },
        "accuracy": 1816
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "w0UxIaeTWjD",
      "session_id": "5bf5389c-aac0-4b12-840c-5117276a439d",
      "name": "login",
      "distinct_user_id": "Xm38M-LdL5I",
      "date": dayZero +2402430909,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 23,
          "lng": -155
        },
        "accuracy": 968
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "SUo9SokYr-p",
      "session_id": "47c106b2-b54b-444e-88ac-bcc32ec134d7",
      "name": "login",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2225840601,
      "os": "linux",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -86,
          "lng": 59
        },
        "accuracy": 249
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "oVgDiH04XX-",
      "session_id": "3d48f871-0b82-4174-bcca-d5ecbebae474",
      "name": "login",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2451263632,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 79,
          "lng": 129
        },
        "accuracy": 1529
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "DfzIof_N6a-",
      "session_id": "efe00031-a88e-4fb9-bdc7-db413984c801",
      "name": "login",
      "distinct_user_id": "szz4XV7B3NC",
      "date": dayZero +2756304371,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 65,
          "lng": 168
        },
        "accuracy": 1496
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Q1rG8BA8peb",
      "session_id": "3f7714f4-559e-4e81-972f-8401008673a2",
      "name": "login",
      "distinct_user_id": "KQyoomQyyVv",
      "date": dayZero +2650229276,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -40,
          "lng": 116
        },
        "accuracy": 1480
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "u-SsWiGDW6_",
      "session_id": "04aca2c9-1d20-4133-a5cf-fc14e153b066",
      "name": "login",
      "distinct_user_id": "Oh7gDjSdEr4",
      "date": dayZero +2545056875,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -20,
          "lng": -120
        },
        "accuracy": 637
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "fodY0TBDq2d",
      "session_id": "98c01148-bd44-427f-925a-5f594f93b768",
      "name": "login",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2934615645,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 89,
          "lng": 67
        },
        "accuracy": 1389
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "n7-tWUdLwWY",
      "session_id": "a929938f-0fee-49d4-9915-9e0551005a3f",
      "name": "login",
      "distinct_user_id": "utuRVj4LOdB",
      "date": dayZero +2682633128,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 72,
          "lng": -105
        },
        "accuracy": 1064
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "62yilBWwv1y",
      "session_id": "cc6542ee-0230-4769-857f-1bc58c2e5d4f",
      "name": "login",
      "distinct_user_id": "HGX_CB3jSze",
      "date": dayZero +2607116578,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -88,
          "lng": -57
        },
        "accuracy": 1330
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "a-0jR9Q2Mhi",
      "session_id": "cdccf790-801b-4106-ab7d-f669d8f63136",
      "name": "login",
      "distinct_user_id": "a4wAAAWneP6",
      "date": dayZero +2677022631,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 44,
          "lng": 74
        },
        "accuracy": 1114
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "J_SgF8VKC47",
      "session_id": "0ee8ca46-ae41-412c-b3ea-47b3b18f792d",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2935185616,
      "os": "windows",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -60,
          "lng": 7
        },
        "accuracy": 1243
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "vuYeoaaFJvh",
      "session_id": "cc956975-86d2-4905-aa24-b9b27b5c05dd",
      "name": "login",
      "distinct_user_id": "w1bhxxrmlov",
      "date": dayZero +2749453642,
      "os": "mac",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -84,
          "lng": 50
        },
        "accuracy": 163
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "y8HVG7Gqm1M",
      "session_id": "a2512672-3436-4b39-8b29-698b9ca1fed2",
      "name": "login",
      "distinct_user_id": "iZWdP-lqiiV",
      "date": dayZero +2808695914,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 10,
          "lng": -120
        },
        "accuracy": 961
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "vd2FU1FV_-a",
      "session_id": "2d660517-458e-4563-86ef-9a6ff52a24c1",
      "name": "login",
      "distinct_user_id": "sEXmsbIDc2m",
      "date": dayZero +2875694535,
      "os": "linux",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 82,
          "lng": 83
        },
        "accuracy": 217
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "OFdd5Vv_Izs",
      "session_id": "b6e31207-7dea-4208-b3ec-0daf5ec21a5b",
      "name": "login",
      "distinct_user_id": "yXsfx1JDAEB",
      "date": dayZero +2944513505,
      "os": "linux",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 38,
          "lng": -147
        },
        "accuracy": 541
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "K6ma0y99AGm",
      "session_id": "42c7841e-9708-442e-a23f-8e534bf7e2f5",
      "name": "login",
      "distinct_user_id": "VHrFyv1kytH",
      "date": dayZero +2957606126,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -49,
          "lng": -165
        },
        "accuracy": 1621
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "WNyyvlMjfHP",
      "session_id": "93aea56d-f87f-48f8-bb42-8e4f48d1adde",
      "name": "login",
      "distinct_user_id": "B7XAnHMMANb",
      "date": dayZero +2886746880,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 59,
          "lng": -99
        },
        "accuracy": 1246
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Bn6kRqpwZtx",
      "session_id": "0d6dd62b-e236-44d0-a380-49830d64e693",
      "name": "login",
      "distinct_user_id": "6qTRoZudMPj",
      "date": dayZero +1728867979,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 15,
          "lng": 9
        },
        "accuracy": 1581
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "igd6tv9Anij",
      "session_id": "1e63cc8f-4ef2-484e-b7ad-384e957bd204",
      "name": "login",
      "distinct_user_id": "SzWMF_JrHbo",
      "date": dayZero +2054766121,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 34,
          "lng": -13
        },
        "accuracy": 995
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "liKltiRi4k7",
      "session_id": "db0184e2-fd80-4788-aa9c-4caa1004d30e",
      "name": "login",
      "distinct_user_id": "HGX_CB3jSze",
      "date": dayZero +2825707537,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 57,
          "lng": 171
        },
        "accuracy": 801
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "9rzVkL0HWWs",
      "session_id": "66085eba-23ca-414f-ac6f-86da95e810e5",
      "name": "login",
      "distinct_user_id": "-uyjoD6P5E",
      "date": dayZero +2466069193,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 11,
          "lng": -93
        },
        "accuracy": 1075
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "-rMOEzv7fdX",
      "session_id": "19104204-fb08-4827-b185-c579d84ba7a2",
      "name": "login",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2328240853,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 79,
          "lng": 30
        },
        "accuracy": 803
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "JH5FSkgAqQ0",
      "session_id": "ae40eb33-ccec-4118-a66f-0fc8e3679cd8",
      "name": "login",
      "distinct_user_id": "Y82oCwGWsWL",
      "date": dayZero +1858413478,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -57,
          "lng": -33
        },
        "accuracy": 1365
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "u13hH0RWLFI",
      "session_id": "7ed8ddae-f054-45df-85fe-0c6deaa0fd48",
      "name": "login",
      "distinct_user_id": "vDYkdlECx1",
      "date": dayZero +2721187098,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 89,
          "lng": 68
        },
        "accuracy": 380
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "D6fnGtHIRK1",
      "session_id": "6a6b9e19-1c36-4b73-9e68-2b6c0963c2b2",
      "name": "login",
      "distinct_user_id": "HGX_CB3jSze",
      "date": dayZero +2949772096,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 8,
          "lng": -160
        },
        "accuracy": 1350
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "jM56TD447dp",
      "session_id": "eb307990-0ed6-440f-ac78-22618b4e6fa7",
      "name": "login",
      "distinct_user_id": "U7XwB1I7KX",
      "date": dayZero +2714008017,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -52,
          "lng": -55
        },
        "accuracy": 1656
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "YOGtGKT8PQq",
      "session_id": "c808465b-b8d2-42bc-a58a-c22d2c21aa5f",
      "name": "login",
      "distinct_user_id": "sEXmsbIDc2m",
      "date": dayZero +2960435001,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -52,
          "lng": -17
        },
        "accuracy": 547
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "F5M6JaAhNnV",
      "session_id": "11ca077f-0e0d-4a66-b4f4-8a288d568d96",
      "name": "login",
      "distinct_user_id": "_67ag3j-O0",
      "date": dayZero +1585456758,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -87,
          "lng": -164
        },
        "accuracy": 953
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "P9nuoIJ0D_G",
      "session_id": "c6519b24-2dea-4f6f-8410-b4744920cf66",
      "name": "login",
      "distinct_user_id": "AR1STupilg",
      "date": dayZero +2764366810,
      "os": "linux",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -45,
          "lng": -43
        },
        "accuracy": 227
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "-j1HpFrVUHk",
      "session_id": "6ee863c8-ff1b-4898-9511-f088ce069ad0",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +1898289581,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -73,
          "lng": 122
        },
        "accuracy": 1078
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "AldsMIO59TJ",
      "session_id": "037c71b5-4da3-4d9a-a4d4-95cdff570d81",
      "name": "login",
      "distinct_user_id": "B7XAnHMMANb",
      "date": dayZero +2895827563,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 22,
          "lng": 52
        },
        "accuracy": 170
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "NdqVBWdkRtZ",
      "session_id": "eedae426-1abf-4999-9088-21f4b5ff2785",
      "name": "login",
      "distinct_user_id": "K9DlkVNBBL",
      "date": dayZero +2772195707,
      "os": "linux",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 40,
          "lng": 41
        },
        "accuracy": 234
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "gOsAFvNPcfH",
      "session_id": "e1c8138a-abb1-4096-91cf-84f89f519c19",
      "name": "login",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2994156644,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 17,
          "lng": 103
        },
        "accuracy": 1748
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "gAmacpRWeNz",
      "session_id": "071d26c5-42f9-4bbb-8e59-4599bf0ec804",
      "name": "login",
      "distinct_user_id": "DAamyhiWtx",
      "date": dayZero +921166719,
      "os": "android",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -69,
          "lng": -50
        },
        "accuracy": 1134
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "EXGB2_CD7eS",
      "session_id": "1642b2b7-0e35-4972-9bbf-166c492d6a17",
      "name": "login",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2848552922,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -32,
          "lng": -10
        },
        "accuracy": 1062
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "EYmeXOIw2k3",
      "session_id": "0b8c3f5f-ff97-4928-acde-1000cdf7331b",
      "name": "login",
      "distinct_user_id": "HGX_CB3jSze",
      "date": dayZero +2881028278,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -50,
          "lng": 37
        },
        "accuracy": 471
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "4kkn3zyTtmb",
      "session_id": "2482e1a1-292a-4d69-85fc-ea1cc629c0f4",
      "name": "login",
      "distinct_user_id": "AR1STupilg",
      "date": dayZero +2185066244,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -86,
          "lng": 115
        },
        "accuracy": 912
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "aDbLhrqYiTb",
      "session_id": "1f22541f-db28-4378-9d14-a36567b7cb8a",
      "name": "login",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2538540361,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 22,
          "lng": -76
        },
        "accuracy": 1448
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "CmUqvkAg1yB",
      "session_id": "bc84195e-4098-465d-9ea1-b59fb476c1b2",
      "name": "login",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2226238230,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -57,
          "lng": -22
        },
        "accuracy": 1783
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "vA2AsyydJua",
      "session_id": "b5e934c4-b352-4d38-a9f6-4b90bab61a61",
      "name": "login",
      "distinct_user_id": "-rM3zUf9-hj",
      "date": dayZero +1973862888,
      "os": "ios",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -38,
          "lng": 145
        },
        "accuracy": 1918
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ycaMrLwtT5z",
      "session_id": "43ed9fa6-d775-4221-89ea-de7de5bf6a1f",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2663270122,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 84,
          "lng": 170
        },
        "accuracy": 905
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "EpFjktzqlNL",
      "session_id": "7f39824d-2c06-47fc-a06b-635871a9f612",
      "name": "login",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2552318802,
      "os": "android",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 68,
          "lng": -157
        },
        "accuracy": 221
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "P4r-tjxR3wy",
      "session_id": "f4fec99b-9800-4510-b275-64b56804d2db",
      "name": "login",
      "distinct_user_id": "RjCuj9IIwI",
      "date": dayZero +2613150716,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 33,
          "lng": 0
        },
        "accuracy": 1084
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "6XnpOTF9Tnx",
      "session_id": "99293d83-9784-4c5f-a776-70b6d19e7fd9",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2989174568,
      "os": "linux",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 78,
          "lng": 81
        },
        "accuracy": 1331
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Dp0dKP_NcLV",
      "session_id": "882e5a25-2629-4e95-9a64-b81fc7087f10",
      "name": "login",
      "distinct_user_id": "_67ag3j-O0",
      "date": dayZero +2159323227,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 7,
          "lng": 146
        },
        "accuracy": 928
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "U6epsO5zWa5",
      "session_id": "29ebcfb8-5bdb-434b-9667-a40174f323ff",
      "name": "login",
      "distinct_user_id": "utuRVj4LOdB",
      "date": dayZero +2464935191,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 69,
          "lng": -136
        },
        "accuracy": 493
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "uMqflZrgdme",
      "session_id": "7fe14dcf-4398-4b46-87ce-f1ace874884e",
      "name": "login",
      "distinct_user_id": "8nuqlmor5m",
      "date": dayZero +914678439,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -25,
          "lng": 165
        },
        "accuracy": 1323
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ji5qBil9Ym0",
      "session_id": "5dd7639e-45dc-4eee-82b1-c67390ff4b5c",
      "name": "login",
      "distinct_user_id": "B7XAnHMMANb",
      "date": dayZero +2392063070,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -57,
          "lng": 38
        },
        "accuracy": 962
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Xs9i089-oKf",
      "session_id": "9eda5b7c-0abb-492f-a2f4-70876b6f6736",
      "name": "login",
      "distinct_user_id": "5BSPGqgCmDA",
      "date": dayZero +2079234590,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -27,
          "lng": -106
        },
        "accuracy": 1185
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "fs6DKxN_3lC",
      "session_id": "6ad334c2-6c34-4a61-bc69-d9b7a310b6be",
      "name": "login",
      "distinct_user_id": "utuRVj4LOdB",
      "date": dayZero +2895358837,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -35,
          "lng": 18
        },
        "accuracy": 895
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "jWOnu7KckuE",
      "session_id": "39d97daa-1277-433e-932a-8246e8eacd80",
      "name": "login",
      "distinct_user_id": "5euQUL-5Ys1",
      "date": dayZero +2392531633,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -22,
          "lng": 86
        },
        "accuracy": 175
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "I4Z_-qSJ_q9",
      "session_id": "4c2a681d-d3b7-43cf-b98a-df0f3dbad0b5",
      "name": "login",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2647113104,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -37,
          "lng": 79
        },
        "accuracy": 80
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "HjdMkchDvqs",
      "session_id": "4cdf168a-49a2-410f-8246-eef58b5cd2c9",
      "name": "login",
      "distinct_user_id": "cPPpoy6NQb-",
      "date": dayZero +2584844014,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -52,
          "lng": 126
        },
        "accuracy": 1673
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "nWOy5AFrI0S",
      "session_id": "70e42c69-2885-4872-b458-6c2eaf0172f5",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +2742597054,
      "os": "windows",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -79,
          "lng": -36
        },
        "accuracy": 1766
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "H3Gu1mc3G0p",
      "session_id": "7b305617-cbd8-426e-968e-dbef2b9ac4fb",
      "name": "login",
      "distinct_user_id": "w1bhxxrmlov",
      "date": dayZero +2797615101,
      "os": "linux",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 27,
          "lng": 158
        },
        "accuracy": 1879
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "HL-wKvG3f1c",
      "session_id": "7099e55e-6666-4b4a-923f-257c7b8b759a",
      "name": "login",
      "distinct_user_id": "vDYkdlECx1",
      "date": dayZero +2660835976,
      "os": "windows",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 59,
          "lng": -16
        },
        "accuracy": 119
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "tqcj5MoNOVX",
      "session_id": "5084f3b3-84c3-41a4-9ca5-14a1a3fa4087",
      "name": "login",
      "distinct_user_id": "5nws4oxZq6",
      "date": dayZero +2885457115,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -80,
          "lng": -92
        },
        "accuracy": 828
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "zUka-KA0eTs",
      "session_id": "39b476f7-84e2-41ff-9cdf-b8ce44cba5f7",
      "name": "login",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2576152087,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 39,
          "lng": 176
        },
        "accuracy": 655
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "rqopv0ICgDT",
      "session_id": "96b5111c-ee1f-4a9e-8976-a3460333cf6c",
      "name": "login",
      "distinct_user_id": "RjCuj9IIwI",
      "date": dayZero +2844656609,
      "os": "mac",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 71,
          "lng": -139
        },
        "accuracy": 1764
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Du6H540o33T",
      "session_id": "516d6830-630f-4b09-8619-3dc9a7b0cd66",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +2576151246,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 64,
          "lng": 5
        },
        "accuracy": 1902
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "eQb5_JbhtYm",
      "session_id": "3043227f-16a2-4400-86c3-d21a79b9f14f",
      "name": "login",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +2782894000,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 69,
          "lng": 135
        },
        "accuracy": 1410
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "YfpJPztF9uZ",
      "session_id": "2a475109-42be-4a87-948f-56e906ab64ed",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +1305400977,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -11,
          "lng": -19
        },
        "accuracy": 1724
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "MAhQ-W6l10B",
      "session_id": "ba1a1482-5ad4-4e66-822b-40e765b84ba6",
      "name": "login",
      "distinct_user_id": "cPPpoy6NQb-",
      "date": dayZero +2374492430,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -77,
          "lng": -19
        },
        "accuracy": 673
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "EFMNcmeDIM-",
      "session_id": "69a6b404-0dba-400c-9aa8-beb7d7d90d59",
      "name": "login",
      "distinct_user_id": "5BSPGqgCmDA",
      "date": dayZero +2526985613,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 57,
          "lng": -10
        },
        "accuracy": 497
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Mkn6gTSPgD_",
      "session_id": "4547a4e7-dac5-422c-a117-51d1d79f4683",
      "name": "login",
      "distinct_user_id": "szz4XV7B3NC",
      "date": dayZero +3011857508,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -23,
          "lng": -152
        },
        "accuracy": 41
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "LxX-HL9RbZv",
      "session_id": "278b8a88-ed63-4af8-840b-df92c046396f",
      "name": "login",
      "distinct_user_id": "HGX_CB3jSze",
      "date": dayZero +2719199633,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -45,
          "lng": -86
        },
        "accuracy": 824
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "0V8OYfhImuB",
      "session_id": "208830ca-0b44-4fca-aa0e-df7ca0bbb812",
      "name": "login",
      "distinct_user_id": "vDYkdlECx1",
      "date": dayZero +2092380779,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -16,
          "lng": 68
        },
        "accuracy": 1814
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "KaFaQw7K35W",
      "session_id": "d140e235-c50c-4b8a-a395-be79825c2f0d",
      "name": "login",
      "distinct_user_id": "AR1STupilg",
      "date": dayZero +2230874784,
      "os": "linux",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 43,
          "lng": -111
        },
        "accuracy": 1783
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Ro1udVf18nj",
      "session_id": "1ca097da-da96-4823-97a8-7f5913479817",
      "name": "login",
      "distinct_user_id": "6qTRoZudMPj",
      "date": dayZero +2736295540,
      "os": "linux",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 17,
          "lng": 148
        },
        "accuracy": 1987
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "h6P-u09khZ3",
      "session_id": "b8bc4ce2-0a7a-492d-8529-c5453be84ac9",
      "name": "login",
      "distinct_user_id": "K9DlkVNBBL",
      "date": dayZero +2412283474,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -71,
          "lng": 156
        },
        "accuracy": 1746
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "eELFaHsLT16",
      "session_id": "d783eb7d-ac40-457f-aae4-5bcb2b38f7a7",
      "name": "login",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2559213963,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 71,
          "lng": 118
        },
        "accuracy": 1197
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "_kzMjGzA3ne",
      "session_id": "6eadd3d7-4350-4a07-af5e-5563d6c61491",
      "name": "login",
      "distinct_user_id": "a4wAAAWneP6",
      "date": dayZero +2956262366,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 3,
          "lng": 97
        },
        "accuracy": 1040
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "-whs4nc3C6j",
      "session_id": "63d151be-c0d1-4a2f-94e4-6ec2c672206d",
      "name": "login",
      "distinct_user_id": "szz4XV7B3NC",
      "date": dayZero +2855206539,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -41,
          "lng": 56
        },
        "accuracy": 692
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "uecSNoT2Y-L",
      "session_id": "2241bfa1-b1a7-41ae-bb5a-9f6a35df6e90",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +1756016252,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 86,
          "lng": 104
        },
        "accuracy": 1973
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "e1VSvF9-Uxe",
      "session_id": "b9f49c19-d6ba-4021-8ea0-1227c4d7942a",
      "name": "login",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2807923069,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -58,
          "lng": 54
        },
        "accuracy": 1773
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "kx0clgu_jjM",
      "session_id": "369599bc-586f-4e7f-ba06-c1f8199eaed2",
      "name": "login",
      "distinct_user_id": "AR1STupilg",
      "date": dayZero +1986990888,
      "os": "other",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -30,
          "lng": -110
        },
        "accuracy": 863
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "z2rKW4Kd0BB",
      "session_id": "60628945-f345-4ccd-8c58-968723db3881",
      "name": "login",
      "distinct_user_id": "5euQUL-5Ys1",
      "date": dayZero +2988587004,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -36,
          "lng": 15
        },
        "accuracy": 1631
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "LEWkW6W_PCN",
      "session_id": "a200267d-4bd0-4fb2-ac27-b1d8c2affe40",
      "name": "login",
      "distinct_user_id": "IENYI05sRLg",
      "date": dayZero +1525098925,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 12,
          "lng": 29
        },
        "accuracy": 365
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Oeh68Xy2quW",
      "session_id": "464b0984-2c08-4f8d-937a-b1b057c176b8",
      "name": "login",
      "distinct_user_id": "-uyjoD6P5E",
      "date": dayZero +2238291258,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 67,
          "lng": -9
        },
        "accuracy": 1858
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "pyXTzC5atWa",
      "session_id": "d06df589-4a36-4655-a71a-518c48726269",
      "name": "login",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2796563868,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -42,
          "lng": 61
        },
        "accuracy": 1439
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "O5ztgkcTyzQ",
      "session_id": "51f58e8d-1fd7-4d03-bba8-acef31a48197",
      "name": "login",
      "distinct_user_id": "SzWMF_JrHbo",
      "date": dayZero +2905048096,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 45,
          "lng": 92
        },
        "accuracy": 702
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "anzIRwX7AaB",
      "session_id": "81ed7e22-109d-4a63-998f-2ccf95b26688",
      "name": "login",
      "distinct_user_id": "MbO7TjEMuKg",
      "date": dayZero +2165068076,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -49,
          "lng": 114
        },
        "accuracy": 477
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "bW0oOQU5mZh",
      "session_id": "053c1cc7-9861-4959-8bb9-81f998009865",
      "name": "login",
      "distinct_user_id": "5nws4oxZq6",
      "date": dayZero +2981427083,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 87,
          "lng": 47
        },
        "accuracy": 408
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "RT3qlvbPEyC",
      "session_id": "c0e8a696-8409-4a89-9925-be64bc5d0544",
      "name": "login",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2951930268,
      "os": "windows",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -86,
          "lng": -23
        },
        "accuracy": 154
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "tJgabKSsdfO",
      "session_id": "eeb7eb30-5c3b-48f7-b086-76c246625ff8",
      "name": "login",
      "distinct_user_id": "DAamyhiWtx",
      "date": dayZero +2061539886,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -84,
          "lng": -100
        },
        "accuracy": 19
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "niMIvpZnSx8",
      "session_id": "89908519-0eca-4d04-97b8-719d84e685d1",
      "name": "login",
      "distinct_user_id": "U7XwB1I7KX",
      "date": dayZero +1767208273,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -5,
          "lng": 33
        },
        "accuracy": 865
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ikOqHkHbB8N",
      "session_id": "2ea36243-6130-4162-96b6-9c8066fce81e",
      "name": "login",
      "distinct_user_id": "cPPpoy6NQb-",
      "date": dayZero +2725989034,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 11,
          "lng": -19
        },
        "accuracy": 1884
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "xXuop5bY9Af",
      "session_id": "412553b9-8163-4555-b0d7-9c025aabd094",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2686579829,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 52,
          "lng": 31
        },
        "accuracy": 650
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "FOEZOY97uy0",
      "session_id": "214a7921-bcc9-47dd-8211-008c8bef2190",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +1508921102,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -34,
          "lng": -14
        },
        "accuracy": 1088
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "jb3AVrV9Peb",
      "session_id": "29d57d92-065a-4a32-aba2-faf267aefbe4",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +1947154455,
      "os": "other",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 11,
          "lng": -55
        },
        "accuracy": 506
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "4yIv0LVVloO",
      "session_id": "0c5496ef-c8a6-4fa3-924e-ab0a2b6f0dd1",
      "name": "login",
      "distinct_user_id": "Oh7gDjSdEr4",
      "date": dayZero +2525075053,
      "os": "ios",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 3,
          "lng": -53
        },
        "accuracy": 999
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "noa6tS1apIX",
      "session_id": "d772aa02-57de-417c-9c8c-7697443b9585",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2807224732,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 38,
          "lng": -172
        },
        "accuracy": 1260
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "pKufP_sBKoq",
      "session_id": "3a671efd-273c-446a-90a0-88978de34ba4",
      "name": "login",
      "distinct_user_id": "MbO7TjEMuKg",
      "date": dayZero +2442131872,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -61,
          "lng": -19
        },
        "accuracy": 1728
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "SLWiVP9wCFg",
      "session_id": "5fbb8bbd-1afd-4a02-a631-037089dc57c0",
      "name": "login",
      "distinct_user_id": "vDYkdlECx1",
      "date": dayZero +723046336,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 74,
          "lng": 87
        },
        "accuracy": 1719
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "gZxBI1j0gw2",
      "session_id": "7374ef4f-349a-4268-8fa3-246f52c4d930",
      "name": "login",
      "distinct_user_id": "sEXmsbIDc2m",
      "date": dayZero +2947084880,
      "os": "linux",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 81,
          "lng": 171
        },
        "accuracy": 1001
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "zdT-oUCrlyy",
      "session_id": "a6ef4a1d-a8ac-4f71-9a79-b214eec575b6",
      "name": "login",
      "distinct_user_id": "v4IDuhMl9LX",
      "date": dayZero +1952185463,
      "os": "other",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -67,
          "lng": 8
        },
        "accuracy": 263
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "_KEOZ660u6M",
      "session_id": "f64b74cf-9823-4ea0-a698-b3b6e33d1621",
      "name": "login",
      "distinct_user_id": "B7XAnHMMANb",
      "date": dayZero +1445576525,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 23,
          "lng": 9
        },
        "accuracy": 1842
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "36QVFZRbamd",
      "session_id": "7aebcd33-ef8b-4773-bf52-939584c1a877",
      "name": "login",
      "distinct_user_id": "sEXmsbIDc2m",
      "date": dayZero +2938965011,
      "os": "other",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 78,
          "lng": -39
        },
        "accuracy": 1220
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "CmunYlB3Bs2",
      "session_id": "2f014697-4ea7-45fb-b8e6-bf3fc0d27389",
      "name": "login",
      "distinct_user_id": "Y82oCwGWsWL",
      "date": dayZero +2098210432,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -78,
          "lng": 128
        },
        "accuracy": 1340
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ViCpKBEyFz0",
      "session_id": "fd44c756-83ec-42a9-8e6c-f15f80ad9d3e",
      "name": "login",
      "distinct_user_id": "szz4XV7B3NC",
      "date": dayZero +2246806116,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 53,
          "lng": 32
        },
        "accuracy": 1375
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Ox-PbPtK2me",
      "session_id": "e59f5db5-d228-4996-83da-0e2f5f71b367",
      "name": "login",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2869010441,
      "os": "linux",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 69,
          "lng": -92
        },
        "accuracy": 1638
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "4tf9aj3twk_",
      "session_id": "d6829da6-4ce4-4632-96b6-590272d3f80c",
      "name": "login",
      "distinct_user_id": "_67ag3j-O0",
      "date": dayZero +1353330833,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -50,
          "lng": -27
        },
        "accuracy": 458
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "WwLeJxGlBol",
      "session_id": "b3c579fb-2b17-4023-af1d-b56e5f0f102e",
      "name": "login",
      "distinct_user_id": "w1bhxxrmlov",
      "date": dayZero +3022048536,
      "os": "linux",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 75,
          "lng": 106
        },
        "accuracy": 1555
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ab8AUyPnNYN",
      "session_id": "4bef238e-78d5-4dbd-be38-815c079aa105",
      "name": "login",
      "distinct_user_id": "szz4XV7B3NC",
      "date": dayZero +2568511190,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 60,
          "lng": -82
        },
        "accuracy": 958
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "yikE_VfRkT3",
      "session_id": "0d21f38d-6ac9-4b99-a550-725264f9ce95",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +2480949509,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -20,
          "lng": -94
        },
        "accuracy": 1249
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "dxCTszbDoZT",
      "session_id": "fe571ec1-5f5f-4954-a68f-21c8ca313eab",
      "name": "login",
      "distinct_user_id": "U7XwB1I7KX",
      "date": dayZero +1452366811,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 20,
          "lng": -124
        },
        "accuracy": 878
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "nJJ9y_6dhNC",
      "session_id": "54369af7-5c1e-4c34-8c2e-812bf6990ba1",
      "name": "login",
      "distinct_user_id": "SzWMF_JrHbo",
      "date": dayZero +2358011965,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -40,
          "lng": -15
        },
        "accuracy": 422
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "zZ8lOUah8Ts",
      "session_id": "cd3c81b1-7a6c-458c-9860-2e029ca2b2e1",
      "name": "login",
      "distinct_user_id": "Xm38M-LdL5I",
      "date": dayZero +2658642271,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -52,
          "lng": 52
        },
        "accuracy": 697
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "BSuFeCUVp1B",
      "session_id": "6c5e2e26-13a4-4b9d-bd8e-47ab60c19469",
      "name": "login",
      "distinct_user_id": "U7XwB1I7KX",
      "date": dayZero +2413673796,
      "os": "other",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -72,
          "lng": 47
        },
        "accuracy": 499
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "o-ni0OJkHKl",
      "session_id": "6d8afd58-eb80-4e6d-b52f-5c93419e0c00",
      "name": "login",
      "distinct_user_id": "Xm38M-LdL5I",
      "date": dayZero +2460163698,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 21,
          "lng": -20
        },
        "accuracy": 1704
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "vSDERvcRPf5",
      "session_id": "67a6d846-acc7-4fa1-a068-e5f0367591a9",
      "name": "login",
      "distinct_user_id": "iZWdP-lqiiV",
      "date": dayZero +2974987968,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 35,
          "lng": 76
        },
        "accuracy": 1092
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "mfSied7NCid",
      "session_id": "258af996-5226-4887-b334-a8ec664e49fb",
      "name": "login",
      "distinct_user_id": "VyukXD26CY",
      "date": dayZero +698805032,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 38,
          "lng": -25
        },
        "accuracy": 1859
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Kt6Bymc9-NT",
      "session_id": "c1a7ebf3-5675-4740-84bb-1ccd46288420",
      "name": "login",
      "distinct_user_id": "K9DlkVNBBL",
      "date": dayZero +2509139527,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 58,
          "lng": 114
        },
        "accuracy": 513
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "by_qmGR-7hQ",
      "session_id": "c815fad2-3ec4-40cd-bed8-38747e4cce79",
      "name": "login",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +2333670269,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 56,
          "lng": -118
        },
        "accuracy": 10
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "MSMfrNMoKt0",
      "session_id": "dff8490f-cb18-47cf-8831-52f5159a8ebf",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +1945482579,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -60,
          "lng": 168
        },
        "accuracy": 508
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ZkFNxta1REq",
      "session_id": "8bfb21d7-17cc-45a1-ac6a-c3ddfcc215a3",
      "name": "login",
      "distinct_user_id": "bvPpfqz_kK",
      "date": dayZero +1257005757,
      "os": "android",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 45,
          "lng": -38
        },
        "accuracy": 1316
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "WiVjM1iQYqo",
      "session_id": "8739b7a4-92d1-46e8-9639-a47ef8386554",
      "name": "login",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2443257739,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 15,
          "lng": -107
        },
        "accuracy": 1845
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "4ogYVmMHv5l",
      "session_id": "5fe44f97-9e04-40b7-93b7-35a9ac6e343d",
      "name": "login",
      "distinct_user_id": "vDYkdlECx1",
      "date": dayZero +1570452616,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -37,
          "lng": 27
        },
        "accuracy": 1255
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "0y_hejbmdI1",
      "session_id": "fedfda3d-dd90-4703-8928-3de504ea73d0",
      "name": "login",
      "distinct_user_id": "U7XwB1I7KX",
      "date": dayZero +2514332221,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 6,
          "lng": 137
        },
        "accuracy": 1665
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "u6cNDGaKS2x",
      "session_id": "66dcbe76-e8b4-4767-bf00-ecbb424edb78",
      "name": "login",
      "distinct_user_id": "ezcz9kkdXbG",
      "date": dayZero +2041798899,
      "os": "linux",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 58,
          "lng": 92
        },
        "accuracy": 1547
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "6g8LJNNz2ke",
      "session_id": "31772aea-96a3-4438-a7be-b20d960d12a3",
      "name": "login",
      "distinct_user_id": "HGX_CB3jSze",
      "date": dayZero +3006781299,
      "os": "android",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -7,
          "lng": -131
        },
        "accuracy": 226
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "XxX7dlQYfjb",
      "session_id": "f5506c37-d6b1-448a-84d1-bd19137508af",
      "name": "login",
      "distinct_user_id": "RjCuj9IIwI",
      "date": dayZero +488822505,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 9,
          "lng": -154
        },
        "accuracy": 1537
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ndmZFYNZmd2",
      "session_id": "906dcd08-bff0-48b2-b932-e10e0d2c3128",
      "name": "login",
      "distinct_user_id": "CKbac_Y4hz",
      "date": dayZero +1917821289,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 63,
          "lng": -54
        },
        "accuracy": 909
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "QYqctV6h70s",
      "session_id": "85aa001c-2a0c-44ce-8fe7-97aed9b704de",
      "name": "login",
      "distinct_user_id": "AR1STupilg",
      "date": dayZero +2290316897,
      "os": "linux",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -23,
          "lng": 163
        },
        "accuracy": 19
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "8npsJTIDsob",
      "session_id": "776ba7e5-a370-45be-9ef0-a989b46d3602",
      "name": "login",
      "distinct_user_id": "Oh7gDjSdEr4",
      "date": dayZero +2586246062,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 35,
          "lng": 87
        },
        "accuracy": 152
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "bbAyb4Cfndi",
      "session_id": "c582b04e-2d25-42e4-b3cf-dfad26f6044e",
      "name": "login",
      "distinct_user_id": "sEXmsbIDc2m",
      "date": dayZero +2948024647,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 86,
          "lng": 151
        },
        "accuracy": 640
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Q2w5N_-E1Pi",
      "session_id": "03e3133d-3d7b-4e06-b43f-b0a4dced2197",
      "name": "login",
      "distinct_user_id": "5euQUL-5Ys1",
      "date": dayZero +2425787642,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 19,
          "lng": 132
        },
        "accuracy": 70
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "KLBRawDWO_m",
      "session_id": "b6d75b6b-6e8c-4984-a2ed-633a45656a07",
      "name": "login",
      "distinct_user_id": "yXsfx1JDAEB",
      "date": dayZero +2888118658,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 76,
          "lng": -94
        },
        "accuracy": 563
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "pRiNHeO1dcW",
      "session_id": "bdc375c2-45e2-4a8a-8399-433d29657d0b",
      "name": "login",
      "distinct_user_id": "szz4XV7B3NC",
      "date": dayZero +2672287686,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -42,
          "lng": 138
        },
        "accuracy": 896
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "77gDHpMCR20",
      "session_id": "c31948a3-f0eb-487e-9a9d-36251a6d3881",
      "name": "login",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2920764283,
      "os": "android",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 36,
          "lng": -21
        },
        "accuracy": 708
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "3udruX0zmwS",
      "session_id": "6633a1fa-7c23-4ea1-8121-f9f3245f89a6",
      "name": "login",
      "distinct_user_id": "VyukXD26CY",
      "date": dayZero +2331714140,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 24,
          "lng": 176
        },
        "accuracy": 1745
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "qdQv6qMXKY2",
      "session_id": "594f8000-ed7f-4ba3-a8e9-54414e8339a1",
      "name": "login",
      "distinct_user_id": "cPPpoy6NQb-",
      "date": dayZero +2688657757,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 19,
          "lng": -144
        },
        "accuracy": 1188
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "5Gc5IS1VjLz",
      "session_id": "9375cc7b-9402-48ae-a6f8-8d0bce42eda5",
      "name": "login",
      "distinct_user_id": "IKyM5jbKn3L",
      "date": dayZero +1944470647,
      "os": "ios",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 26,
          "lng": -34
        },
        "accuracy": 39
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "VygGazYl3_N",
      "session_id": "8dba9641-1de5-4a2c-890b-0f6595b190b9",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2883666718,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -51,
          "lng": 65
        },
        "accuracy": 1047
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "rE4NbH0Xas7",
      "session_id": "97bf9c88-3069-49ba-9d4c-03ac6ca0faf4",
      "name": "login",
      "distinct_user_id": "Xm38M-LdL5I",
      "date": dayZero +2379933330,
      "os": "other",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -51,
          "lng": -41
        },
        "accuracy": 1957
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "XURC7rcorfJ",
      "session_id": "bdc27791-b02c-444c-9305-c2559df133a3",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +1040342759,
      "os": "ios",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -86,
          "lng": -90
        },
        "accuracy": 1738
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "2GNzA6f5krt",
      "session_id": "6c829d14-c4b8-4573-ade1-828409474ce1",
      "name": "login",
      "distinct_user_id": "cPPpoy6NQb-",
      "date": dayZero +3016913449,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 85,
          "lng": 59
        },
        "accuracy": 1138
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "8OBrZZwFkmS",
      "session_id": "fc9307e4-8e46-4708-8b50-3197c88b7060",
      "name": "login",
      "distinct_user_id": "sEXmsbIDc2m",
      "date": dayZero +2940361269,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -81,
          "lng": 119
        },
        "accuracy": 582
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "T1cKqFAURSK",
      "session_id": "ab20f8da-c447-48be-92fa-d1246dd924f7",
      "name": "login",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +2837130514,
      "os": "windows",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -5,
          "lng": -141
        },
        "accuracy": 25
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "2fvgCveIExb",
      "session_id": "8f4f5d37-9980-4b2a-8c74-1062d481e69a",
      "name": "login",
      "distinct_user_id": "Xm38M-LdL5I",
      "date": dayZero +2800326219,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 68,
          "lng": -66
        },
        "accuracy": 767
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Ok6Ti-nysHm",
      "session_id": "f4ef085e-43e8-4051-a568-fc8df0ac74ad",
      "name": "login",
      "distinct_user_id": "KmaQHEeqfq",
      "date": dayZero +2189547312,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 29,
          "lng": 111
        },
        "accuracy": 795
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ZXSVhY4dJRL",
      "session_id": "21182626-0c25-43e9-a0f3-065b552cdd04",
      "name": "login",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2081143192,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 47,
          "lng": -114
        },
        "accuracy": 1846
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "O5M0xLayw6c",
      "session_id": "96c4ef47-b538-49aa-a227-5f67dc55b40b",
      "name": "login",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2403456139,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 17,
          "lng": -133
        },
        "accuracy": 248
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "x0TGcvXmuMu",
      "session_id": "f33a7bb6-4805-429d-a6cc-6ffb64a1e02a",
      "name": "login",
      "distinct_user_id": "KS3HTkOZoze",
      "date": dayZero +2881332142,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 9,
          "lng": -9
        },
        "accuracy": 1696
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "zuArdiZGjNR",
      "session_id": "b3420cd4-ffb5-48bc-9280-bb3da151286b",
      "name": "login",
      "distinct_user_id": "8nuqlmor5m",
      "date": dayZero +1544404374,
      "os": "linux",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 37,
          "lng": -149
        },
        "accuracy": 361
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "UnaSHTZRVkn",
      "session_id": "bf3a16fc-bd6f-4be9-ba7e-0f1096b21233",
      "name": "login",
      "distinct_user_id": "-rM3zUf9-hj",
      "date": dayZero +2594091339,
      "os": "android",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 53,
          "lng": 157
        },
        "accuracy": 1161
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "-I5ExcVWMnj",
      "session_id": "96c37524-3308-478d-b783-a9b05d2ebb1f",
      "name": "login",
      "distinct_user_id": "QzHXRIXnBph",
      "date": dayZero +2291631135,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -88,
          "lng": 120
        },
        "accuracy": 486
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "JBrToUYD32d",
      "session_id": "5211d64c-929d-4373-83c0-0e6a37e311de",
      "name": "login",
      "distinct_user_id": "DAamyhiWtx",
      "date": dayZero +1766089263,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 22,
          "lng": -141
        },
        "accuracy": 1651
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "z_djKv3kY-d",
      "session_id": "df377689-1b69-41df-8720-1bbafee77210",
      "name": "login",
      "distinct_user_id": "_67ag3j-O0",
      "date": dayZero +1866535880,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -65,
          "lng": 57
        },
        "accuracy": 1785
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "INgSmD4SWOA",
      "session_id": "c8b83922-d3fb-4424-ac3d-fd31d9828c6a",
      "name": "login",
      "distinct_user_id": "nxdMe1TBz4j",
      "date": dayZero +2320007856,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -20,
          "lng": -3
        },
        "accuracy": 560
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "wtE66uejrdj",
      "session_id": "1315d919-c1b0-48a6-9c70-68777527f7b6",
      "name": "login",
      "distinct_user_id": "5nws4oxZq6",
      "date": dayZero +2486255527,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -24,
          "lng": -171
        },
        "accuracy": 1908
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Jk4yseaErIy",
      "session_id": "acb5c0e1-dc3b-4762-954c-801f9f7d0a23",
      "name": "login",
      "distinct_user_id": "yXsfx1JDAEB",
      "date": dayZero +3021926481,
      "os": "mac",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 37,
          "lng": 144
        },
        "accuracy": 1425
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "D5g0QZj_Rlt",
      "session_id": "a59fa99c-1dba-46ea-82df-2c7d1bba8a70",
      "name": "login",
      "distinct_user_id": "Y82oCwGWsWL",
      "date": dayZero +2341961099,
      "os": "windows",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -26,
          "lng": -17
        },
        "accuracy": 840
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "_cm4joPVwUS",
      "session_id": "965ff998-6f0a-4125-b11d-a8a5843e726c",
      "name": "login",
      "distinct_user_id": "utuRVj4LOdB",
      "date": dayZero +2811170918,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 35,
          "lng": -43
        },
        "accuracy": 1964
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ixa_kZQWCWX",
      "session_id": "e19f35b7-f8c5-4348-86c3-1d3bcda5d2d6",
      "name": "login",
      "distinct_user_id": "VHrFyv1kytH",
      "date": dayZero +2949446085,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 14,
          "lng": -157
        },
        "accuracy": 425
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "oepJPuqPUus",
      "session_id": "104f6ced-6e54-439f-8fb7-bccc18c83fff",
      "name": "login",
      "distinct_user_id": "K9DlkVNBBL",
      "date": dayZero +971944370,
      "os": "android",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -47,
          "lng": 134
        },
        "accuracy": 1061
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "x4alFdvaIqU",
      "session_id": "0a81559b-f76f-4104-a04c-793ad1d7fe15",
      "name": "login",
      "distinct_user_id": "eqR0ppLYH",
      "date": dayZero +1396718197,
      "os": "linux",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 14,
          "lng": -170
        },
        "accuracy": 384
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "o5MbmgaW1NZ",
      "session_id": "ece8c1a9-e907-45c3-bb8c-15c1dc5864a3",
      "name": "login",
      "distinct_user_id": "IKyM5jbKn3L",
      "date": dayZero +2692633603,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -8,
          "lng": 14
        },
        "accuracy": 1146
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "K8WYnaBZSJe",
      "session_id": "fa484c53-20b0-4d0f-9057-9a38bfcf77a2",
      "name": "login",
      "distinct_user_id": "ezcz9kkdXbG",
      "date": dayZero +2843262470,
      "os": "ios",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 44,
          "lng": -124
        },
        "accuracy": 1353
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "xhgooDjE36k",
      "session_id": "d05c684c-63fc-494c-8500-d53229ac2a40",
      "name": "login",
      "distinct_user_id": "DAamyhiWtx",
      "date": dayZero +2605744935,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -13,
          "lng": -132
        },
        "accuracy": 1785
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "NK6laBwjA7J",
      "session_id": "50fdf861-b3c1-48ba-8f21-c63a1dc6ae45",
      "name": "login",
      "distinct_user_id": "Y82oCwGWsWL",
      "date": dayZero +1425444418,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -80,
          "lng": -11
        },
        "accuracy": 381
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "xHOR0WPSev3",
      "session_id": "a4231204-29e2-4d3a-8c95-52dcc3175868",
      "name": "login",
      "distinct_user_id": "Xm38M-LdL5I",
      "date": dayZero +2204041081,
      "os": "ios",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -89,
          "lng": 84
        },
        "accuracy": 920
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "piF0k2_BwY9",
      "session_id": "5972468b-f1b3-4b0d-81d5-3ed185323a91",
      "name": "login",
      "distinct_user_id": "RjCuj9IIwI",
      "date": dayZero +1807564727,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -16,
          "lng": -16
        },
        "accuracy": 1921
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "4vD93EDHmkB",
      "session_id": "f36bc55d-88e7-4f2b-ac0f-bfe581d69153",
      "name": "login",
      "distinct_user_id": "SzWMF_JrHbo",
      "date": dayZero +1720411635,
      "os": "other",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 6,
          "lng": 153
        },
        "accuracy": 1640
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "5ONKQelsh2z",
      "session_id": "9e26bd1f-934b-40b2-a56c-661f7f6c9c33",
      "name": "login",
      "distinct_user_id": "RjCuj9IIwI",
      "date": dayZero +572038212,
      "os": "ios",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -35,
          "lng": 57
        },
        "accuracy": 1332
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "AZBsRBRbWIt",
      "session_id": "a6cde6e5-5211-4ddf-9525-6694ddfca41c",
      "name": "login",
      "distinct_user_id": "K9DlkVNBBL",
      "date": dayZero +1695386533,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 15,
          "lng": -138
        },
        "accuracy": 109
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "OWZA6yofqWy",
      "session_id": "b433f46d-0d72-44ae-abd5-39f80f4cc28b",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +2576530738,
      "os": "other",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 64,
          "lng": 62
        },
        "accuracy": 78
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "Jtb5UKE9Y9L",
      "session_id": "2c309490-e97f-4c00-afdd-7d77c0e509a8",
      "name": "login",
      "distinct_user_id": "eqR0ppLYH",
      "date": dayZero +2681218091,
      "os": "windows",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -53,
          "lng": -17
        },
        "accuracy": 1700
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "WJYlxaZT7wg",
      "session_id": "c508e560-730c-4ea9-afd1-3ee67f45f178",
      "name": "login",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +2757858041,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 39,
          "lng": -136
        },
        "accuracy": 924
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "PLYxvJmcSWi",
      "session_id": "5dc3cd75-0864-486c-b1b7-1a0f780a42c7",
      "name": "login",
      "distinct_user_id": "iZWdP-lqiiV",
      "date": dayZero +2880565910,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 39,
          "lng": 111
        },
        "accuracy": 780
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "X2aU0em_uye",
      "session_id": "b94e3547-ed3f-4270-8d15-332d62251b61",
      "name": "login",
      "distinct_user_id": "iZWdP-lqiiV",
      "date": dayZero +3011436774,
      "os": "linux",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 41,
          "lng": -125
        },
        "accuracy": 1865
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "_ujx-d7ZK7t",
      "session_id": "9252247d-5cbc-4a9b-9c12-86a4ca3d75b0",
      "name": "login",
      "distinct_user_id": "HGX_CB3jSze",
      "date": dayZero +2819988878,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 61,
          "lng": -141
        },
        "accuracy": 750
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "phDCLhTinCcc",
      "session_id": "f68f1981-f236-4ec9-bc99-796cdccfec9a",
      "name": "login",
      "distinct_user_id": "Xm38M-LdL5I",
      "date": dayZero +2234613125,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 24,
          "lng": 52
        },
        "accuracy": 1030
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "kvBcR_0J9N7x",
      "session_id": "9cb1d610-98b2-41aa-86f3-f97122251d28",
      "name": "login",
      "distinct_user_id": "AR1STupilg",
      "date": dayZero +1112759597,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -62,
          "lng": 167
        },
        "accuracy": 1352
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "auLwdUxjyTiX",
      "session_id": "9ef53d68-a913-40ba-a924-321ce896f453",
      "name": "login",
      "distinct_user_id": "MbO7TjEMuKg",
      "date": dayZero +967766631,
      "os": "mac",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 75,
          "lng": -175
        },
        "accuracy": 1982
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "DJXYbCYlToXh",
      "session_id": "e10aa37e-9d3b-4607-b7cf-b0f9a1babd2c",
      "name": "login",
      "distinct_user_id": "cPPpoy6NQb-",
      "date": dayZero +2207965536,
      "os": "android",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -42,
          "lng": 115
        },
        "accuracy": 351
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "VWLvYRJiuR2i",
      "session_id": "6bbdcbe9-5796-4e8a-b064-a4a95ff3790c",
      "name": "login",
      "distinct_user_id": "B7XAnHMMANb",
      "date": dayZero +1301927161,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -70,
          "lng": 153
        },
        "accuracy": 1952
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "2Qcmtkyamckh",
      "session_id": "e150fdfe-6718-463c-b0c8-d03382ddb983",
      "name": "login",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2349152018,
      "os": "linux",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -44,
          "lng": 155
        },
        "accuracy": 1697
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "KzuBmL7Gps19",
      "session_id": "9ea9533d-404e-46ab-a108-54d3ef6c4075",
      "name": "login",
      "distinct_user_id": "nxdMe1TBz4j",
      "date": dayZero +2029767129,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 63,
          "lng": -27
        },
        "accuracy": 1772
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "lVHBpHGxLT6X",
      "session_id": "673693e1-d6fc-402f-b436-4a6e3ecad944",
      "name": "login",
      "distinct_user_id": "iZWdP-lqiiV",
      "date": dayZero +2898065741,
      "os": "linux",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 70,
          "lng": 46
        },
        "accuracy": 420
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "yuouOFPFDF38",
      "session_id": "4af72915-345b-47e0-84b9-390fb9be6beb",
      "name": "login",
      "distinct_user_id": "iZWdP-lqiiV",
      "date": dayZero +2946884721,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 69,
          "lng": -34
        },
        "accuracy": 1037
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "MsH3C-oUH75Y",
      "session_id": "7b3f5a8b-83af-418d-87d1-e0181d1452a1",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2686818149,
      "os": "other",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -44,
          "lng": -122
        },
        "accuracy": 848
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "VEOvr_Hy-jgx",
      "session_id": "a9cb4ebe-d841-495a-90b8-de1f5ce2212e",
      "name": "login",
      "distinct_user_id": "iZWdP-lqiiV",
      "date": dayZero +2852562365,
      "os": "ios",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 13,
          "lng": -173
        },
        "accuracy": 1744
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "uTmDIZQCGP0m",
      "session_id": "319fd0b9-4006-4396-b435-596e149b1192",
      "name": "login",
      "distinct_user_id": "sEXmsbIDc2m",
      "date": dayZero +2834855505,
      "os": "mac",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 83,
          "lng": 7
        },
        "accuracy": 562
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "JjcU5QmwR-qJ",
      "session_id": "f10359e6-2789-4258-a057-2eb2cdea5e44",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +2484427890,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -16,
          "lng": 149
        },
        "accuracy": 176
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "lltWjRtUxUsh",
      "session_id": "26b72e56-619f-4f97-be57-60da964da0c2",
      "name": "login",
      "distinct_user_id": "_67ag3j-O0",
      "date": dayZero +2955873739,
      "os": "android",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -74,
          "lng": -105
        },
        "accuracy": 1974
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "U-uRVMxeHPfX",
      "session_id": "a556002d-003b-4db8-a514-077ad74f3e9e",
      "name": "login",
      "distinct_user_id": "x2iFGML6XfG",
      "date": dayZero +2272495953,
      "os": "mac",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -66,
          "lng": -134
        },
        "accuracy": 1771
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "tcUdWAoo10ML",
      "session_id": "f3ee070d-8f40-4d67-a931-bc8c8e16fbee",
      "name": "login",
      "distinct_user_id": "mMFU_0DFlDH",
      "date": dayZero +2973328343,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -44,
          "lng": 79
        },
        "accuracy": 1717
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "w873p6NSRkTS",
      "session_id": "c6b441ff-cc0d-4950-a855-1e3440246609",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +2578138464,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 37,
          "lng": -149
        },
        "accuracy": 536
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "0SY4mHZwBva6",
      "session_id": "005ea861-3f9e-45b9-b57c-5f4d36132e6d",
      "name": "login",
      "distinct_user_id": "6qTRoZudMPj",
      "date": dayZero +1678258942,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 5,
          "lng": 123
        },
        "accuracy": 1249
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "JnXohCruIJR5",
      "session_id": "42c2b900-4757-46fc-a25e-f5c77483f388",
      "name": "login",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +2997013737,
      "os": "linux",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 87,
          "lng": -11
        },
        "accuracy": 470
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "xBw4s3LfV-pa",
      "session_id": "5be8ef22-6e67-4517-8a28-7ca541ce2ddc",
      "name": "login",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +2221209324,
      "os": "mac",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": -9,
          "lng": -132
        },
        "accuracy": 769
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "M4XyYovg0eH4",
      "session_id": "80d2027c-6b96-4c17-8461-5d2929752ee2",
      "name": "login",
      "distinct_user_id": "MbO7TjEMuKg",
      "date": dayZero +2952834840,
      "os": "ios",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -70,
          "lng": 37
        },
        "accuracy": 635
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ukYLCaqaaOBZ",
      "session_id": "6cc26d62-48f8-46d5-a4f8-8ddd76153541",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2904312672,
      "os": "android",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -40,
          "lng": 167
        },
        "accuracy": 865
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "_-B5bsGypHti",
      "session_id": "8f4a5c88-b2af-4142-ad1f-3052aae09cc1",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +2254666687,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 40,
          "lng": 162
        },
        "accuracy": 1030
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ZTEfcwXh9a1w",
      "session_id": "2617a058-063b-4b25-91c0-604c745c98d2",
      "name": "login",
      "distinct_user_id": "utuRVj4LOdB",
      "date": dayZero +2807469134,
      "os": "linux",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": -83,
          "lng": 161
        },
        "accuracy": 1359
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "vcL29HwlkrPz",
      "session_id": "0d69be43-1847-41a5-9e8c-7c3078e8fba3",
      "name": "login",
      "distinct_user_id": "96h5E0qk7QT",
      "date": dayZero +2993441666,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -29,
          "lng": -173
        },
        "accuracy": 65
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "-pAKyNYoWTo8",
      "session_id": "426535f1-71b1-417c-bc81-46e0d28571bc",
      "name": "login",
      "distinct_user_id": "yXsfx1JDAEB",
      "date": dayZero +2917862957,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 30,
          "lng": 157
        },
        "accuracy": 1461
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "UQCXXAm8x6CK",
      "session_id": "58ba5460-4e53-4f89-b877-2e2148df0bbd",
      "name": "login",
      "distinct_user_id": "Oh7gDjSdEr4",
      "date": dayZero +2517821078,
      "os": "android",
      "browser": "edge",
      "geolocation": {
        "location": {
          "lat": 57,
          "lng": -138
        },
        "accuracy": 74
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ut-qXRsoNqSf",
      "session_id": "80bac872-6cd0-4374-9c81-427c871afcbc",
      "name": "login",
      "distinct_user_id": "a4wAAAWneP6",
      "date": dayZero +2672943331,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": 36,
          "lng": -23
        },
        "accuracy": 1626
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "c1Sk6WRYHYd6",
      "session_id": "500dee28-0646-4eb2-a5db-11de99adbc75",
      "name": "login",
      "distinct_user_id": "w1bhxxrmlov",
      "date": dayZero +3009888683,
      "os": "android",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 90,
          "lng": 178
        },
        "accuracy": 1932
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "dmh_gUdXgChX",
      "session_id": "0425fc2b-9791-40b6-804d-0325a96cafe9",
      "name": "login",
      "distinct_user_id": "K9DlkVNBBL",
      "date": dayZero +614610086,
      "os": "linux",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -61,
          "lng": -176
        },
        "accuracy": 840
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "JYnTR42PT3NU",
      "session_id": "6205c956-a72c-4362-940b-9fec0cb76852",
      "name": "login",
      "distinct_user_id": "utuRVj4LOdB",
      "date": dayZero +2729585786,
      "os": "other",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": -68,
          "lng": 93
        },
        "accuracy": 1976
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "cEJ_C0kzPVyn",
      "session_id": "130cbe49-9990-4a25-9aa5-f984f34395bb",
      "name": "login",
      "distinct_user_id": "IENYI05sRLg",
      "date": dayZero +1910921931,
      "os": "linux",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 2,
          "lng": -75
        },
        "accuracy": 486
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "SGe5FG4vtFk5",
      "session_id": "d82ac8ae-a7ac-43f1-9569-e5b7d5805206",
      "name": "login",
      "distinct_user_id": "QzHXRIXnBph",
      "date": dayZero +2561848922,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -88,
          "lng": 67
        },
        "accuracy": 349
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "7l8uwDubBCCs",
      "session_id": "845465e6-637d-44f8-a86e-44b6f77832e8",
      "name": "login",
      "distinct_user_id": "RjCuj9IIwI",
      "date": dayZero +2018350626,
      "os": "other",
      "browser": "firefox",
      "geolocation": {
        "location": {
          "lat": -4,
          "lng": 118
        },
        "accuracy": 1349
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "3NwyphbEbVRb",
      "session_id": "9a262d04-353d-48c8-a725-1562c983e694",
      "name": "login",
      "distinct_user_id": "QHxbjArp6b9",
      "date": dayZero +2749451397,
      "os": "android",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 78,
          "lng": 17
        },
        "accuracy": 969
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "OaPlXtEcBjeo",
      "session_id": "753b7c7a-eb7b-4212-b6ee-8a70d5872c6d",
      "name": "login",
      "distinct_user_id": "a4wAAAWneP6",
      "date": dayZero +2722653179,
      "os": "ios",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 16,
          "lng": 62
        },
        "accuracy": 1841
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "eBwZhlmc6hO5",
      "session_id": "bab095d9-1599-4cc5-93e0-23fdec3a881f",
      "name": "login",
      "distinct_user_id": "-rM3zUf9-hj",
      "date": dayZero +2856240317,
      "os": "windows",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -39,
          "lng": 92
        },
        "accuracy": 602
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "7ECNPTMZFv9U",
      "session_id": "2b3f28e8-8450-468c-8ea9-82100e605e59",
      "name": "login",
      "distinct_user_id": "w1bhxxrmlov",
      "date": dayZero +2875845855,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -85,
          "lng": 126
        },
        "accuracy": 1025
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "kxGGHCO4aIbf",
      "session_id": "fc067490-fddc-4dfd-a3c2-9b7920307ce5",
      "name": "login",
      "distinct_user_id": "v4IDuhMl9LX",
      "date": dayZero +2661419044,
      "os": "windows",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": -6,
          "lng": 175
        },
        "accuracy": 267
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "WftvQCdvZnDL",
      "session_id": "f2f0e768-5b26-4c05-ba96-d045f9a5eb80",
      "name": "login",
      "distinct_user_id": "nxdMe1TBz4j",
      "date": dayZero +2929163614,
      "os": "windows",
      "browser": "ie",
      "geolocation": {
        "location": {
          "lat": 49,
          "lng": -163
        },
        "accuracy": 1712
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "UjhPzpAQge_i",
      "session_id": "a823de40-d6ca-421f-871e-d621373843ad",
      "name": "login",
      "distinct_user_id": "Z7DM1Q4VvW",
      "date": dayZero +1237918018,
      "os": "other",
      "browser": "chrome",
      "geolocation": {
        "location": {
          "lat": 55,
          "lng": 101
        },
        "accuracy": 1671
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "ApVVCu_2hD3-",
      "session_id": "fb372d3f-ac40-4325-9f94-42683c512a1c",
      "name": "login",
      "distinct_user_id": "w1bhxxrmlov",
      "date": dayZero +2774412570,
      "os": "ios",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": 58,
          "lng": -84
        },
        "accuracy": 1596
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "8M3-KkVI31z-",
      "session_id": "244e5aac-3daa-403d-be6b-98b2fe69b71c",
      "name": "login",
      "distinct_user_id": "utuRVj4LOdB",
      "date": dayZero +2783278303,
      "os": "windows",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 81,
          "lng": -142
        },
        "accuracy": 569
      },
      "url": "http://localhost3000/login"
    },
    {
      "_id": "e4q4HE5jjMkM",
      "session_id": "630ff48f-c73f-4539-9642-0c3c4171afb3",
      "name": "login",
      "distinct_user_id": "LKqwj-Dl1L0",
      "date": dayZero +2710525839,
      "os": "mac",
      "browser": "other",
      "geolocation": {
        "location": {
          "lat": 7,
          "lng": -130
        },
        "accuracy": 1854
      },
      "url": "http://localhost3000/login"
    }
  ]
}

export default mockData
