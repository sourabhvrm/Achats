// 'use strict';

/**
 * @ngdoc function
 * @name achatsApp.controller:MenCtrl
 * @description
 * # MenCtrl
 * Controller of the achatsApp
 */
app.controller("MenCtrl", "$scope", "menFactory", [(scope, menFactory) => {
    var pr = menFactory.fetchBanner();
    pr.then(data => {
        scope.banner = data;
        // console.log(data);
    }).catch(err => console.log(err));
}]);
