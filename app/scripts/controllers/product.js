// 'use strict';

/**
 * @ngdoc function
 * @name achatsApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the achatsApp
 */
app.controller("ProductCtrl", ["$scope", "product", function (scope, product) {
    scope.productId = 1245135;
    // console.log("ProductCtrl Started");
    fetchProductData();
    scope.activeimage = function (index) {
        scope.activeImageSrc = scope.productData.images["" + index];
    }

    function fetchProductData() {
        if (scope.productId) {
            product.retrieveProduct(scope.productId).then(data => {
                // console.log(data);
                scope.productData = data["0"];
                scope.activeImageSrc = scope.productData.images["0"];
                console.log(scope.productData);
            }).catch(err => {
                console.log(err);
            });
        }
    }
}]);
