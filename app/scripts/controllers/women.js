// 'use strict';

/**
 * @ngdoc function
 * @name achatsApp.controller:WomenCtrl
 * @description
 * # WomenCtrl
 * Controller of the achatsApp
 */
app.controller("WomenCtrl", ($scope, womenFactory) => {
    var pr = womenFactory.fetchBanner();
    pr.then(data => {
        $scope.banner = data;
        console.log(data);
    }).catch(err => console.log(err));
});
