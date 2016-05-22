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
