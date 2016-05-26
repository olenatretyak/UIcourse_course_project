(function () {
    'use strict';

    angular.module('lits.kia-testdrive-app')
        .factory('KiaCarsDataService', KiaCarsDataService);

    function KiaCarsDataService($rootScope) {
        
        $rootScope.cars = [
              {
                "id": 1,
                "name": "KIA Sportage",
                "price": "від 532 860 грн.",
                "description": "Абсолютно новий Sportage: стильний та сучасний дизайн",
                "year": 2016,
                "KPP": "6 МТ", 
                "engineType": "1.6 GDI",
                "driveWheels": "2 WD",
                "power": "132-185 к.с.",
                "speed": "13,4",
                "imgPath": "images/Sportage.png",
                "sliderImages": [
                   "images/01-slide-Sportage.png",
                   "images/02-slide-Sportage.png",
                   "images/03-slide-Sportage.png",
                   "images/04-slide-Sportage.png",
                ],
                "city": 7.2,
                "highway": 7.2,
                "combined": 5.6
              },

              {
                "id": 2,
                "name": "KIA Optima",
                "price": "від 747 000 грн.",
                "description": "New Kia Optima: бізнес-седан, який пасує до вашого стилю",
                "year": 2016,
                "KPP": "7 DCT", 
                "engineType": "U2 1.7 VGT",
                "driveWheels": "2 WD",
                "power": "141 к.с.",
                "speed": "11",
                "imgPath": "images/Optima.png",
                "sliderImages": [
                    "images/01-slide-Optima.png",
                    "images/02-slide-Optima.png",
                    "images/03-slide-Optima.png",
                    "images/04-slide-Optima.png",
                ],
                "city": 6.2,
                "highway": 4.5,
                "combined": 5.1
              },

              {
                "id": 3,
                "name": "KIA cee'd",
                "price": "від 398 400 грн.",
                "description": "New Kia cee'd: корейський автомобіль, зроблений в Європі і для Європи",
                "year": 2016,
                "KPP": "7 DCT", 
                "engineType": "1.6 DOHC CVVT",
                "driveWheels": "2 WD",
                "power": "130 к.с.",
                "speed": "10,8",
                "imgPath": "images/Ceed.png",
                "sliderImages": [
                    "images/01-slide-Ceed.png",
                    "images/02-slide-Ceed.png",
                    "images/03-slide-Ceed.png",
                    "images/04-slide-Ceed.png",
                ],
                "city": 8.8,
                "highway": 5.5,
                "combined": 6.7
              },

              {
                "id": 4,
                "name": "KIA Soul",
                "price": "від 455 670 грн.",
                "description": "KIA Soul: пульс міських джунглів",
                "year": 2015,
                "KPP": "6МТ", 
                "engineType": "1.6 MPI",
                "driveWheels": "2 WD",
                "power": "124 к.с.",
                "speed": "11,3",
                "imgPath": "images/Soul.png",
                "sliderImages": [
                    "images/01-slide-Soul.png",
                    "images/02-slide-Soul.png",
                    "images/03-slide-Soul.png",
                    "images/04-slide-Soul.png",
                ],
                "city": 9.5,
                "highway": 6.1,
                "combined": 7.3
              },

              {
                "id": 5,
                "name": "KIA Rio",
                "price": "від 345 450 грн.",
                "description": "KIA Rio: новий автомобіль твого часу",
                "year": 2015,
                "KPP": "5МТ", 
                "engineType": "1.2 DOHC CVVT",
                "driveWheels": "2 WD",
                "power": "84 к.с.",
                "speed": "11,3",
                "imgPath": "images/Rio.png",
                "sliderImages": [
                    "images/01-slide-Rio.png",
                    "images/02-slide-Rio.png",
                    "images/03-slide-Rio.png",
                    "images/04-slide-Rio.png",
                ],
                "city": 6.3,
                "highway": 4.2,
                "combined": 5
              },

              {
                "id": 6,
                "name": "KIA Sorento",
                "price": "від 345 450 грн.",
                "description": "KIA Sorento: шукач пригод, що вільно почуває себе в місті",
                "year": 2015,
                "KPP": "6MT", 
                "engineType": "2.2 Diesel",
                "driveWheels": "4 WD",
                "power": "200 к.с.",
                "speed": "9",
                "imgPath": "images/Sorento.png",
                "sliderImages": [
                    "images/01-slide-Sorento.png",
                    "images/02-slide-Sorento.png",
                    "images/03-slide-Sorento.png",
                    "images/04-slide-Sorento.png",
                ],
                "city": 6.9,
                "highway": 4.9,
                "combined": 5.7
              }
            ];

        $rootScope.testDrives = [
            {   
                "carId": 1,
                "name": "User1",
                "city": 7,
                "highway": 8,
                "combined": 6,
            },
            {
                "carId": 1,
                "name": "User2",
                "city": 8,
                "highway": 9,
                "combined": 10,
            },
            {
                "carId": 2,
                "name": "User1",
                "city": 8,
                "highway": 9,
                "combined": 10,
            },
            {   
                "carId": 3,
                "name": "User1",
                "city": 7,
                "highway": 8,
                "combined": 6,
            },
            {
                "carId": 3,
                "name": "User2",
                "city": 8,
                "highway": 9,
                "combined": 10,
            },
            {
                "carId": 4,
                "name": "User1",
                "city": 8,
                "highway": 9,
                "combined": 10,
            }
        ]
        

        return {
            getCars: getCars,
            getTestDrives: getTestDrives,
            addTestDrive: addTestDrive
        };

        //
        // Public methods
        //

        function getCars() {
            return $rootScope.cars
        };

        function getTestDrives(carId) {
            return $rootScope.testDrives
            .filter( function(testDriveItem) {return testDriveItem.carId == carId} )//  [{}]
        };
        
        function addTestDrive(data) {
            $rootScope.testDrives.push(data);
        }
    }
}());
