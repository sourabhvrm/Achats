// 'use strict';

/**
 * @ngdoc function
 * @name achatsApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the achatsApp
 */
app.controller("ProductCtrl", ["$scope", "$window", "product", function (scope, window, product) {
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
                // console.log(scope.productData);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    scope.addToCart = function () {
        // console.log("Window Scroll", window.pageYOffset);
        // console.log("Product Id : ", scope.productId);
        // console.log(window.localStorage);
        var localProdData = JSON.parse(window.localStorage["cart"]).products;
        var productInCart = localProdData.filter(prod => prod == scope.productId);
        // console.log("Product in Cart", productInCart);
        if (productInCart.length > 0) scope.isProductInCart = true;
        else {
            localProdData.push(scope.productId);
            localProdData = {
                "products": localProdData
            }
            window.localStorage["cart"] = JSON.stringify(localProdData);
        }
        // console.log(window.localStorage);
        // console.log(JSON.stringify(localProdData));
    }
}]);
