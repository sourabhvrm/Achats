/**
 * @ngdoc function
 * @name achatsApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the achatsApp
 */
app.controller('CartCtrl', ["$scope", "$window", "CartFactory", function (scope, window, cartfactory) {
    scope.dataAvailable = false;
    var localProdData = JSON.parse(window.localStorage["cart"]);
    localProdData = localProdData.products;
    // console.log(localProdData);
    cartfactory.productsByIds(localProdData).then(data => {
        // console.log(data);
        scope.cartProducts = data;
        totalPrice();
        scope.dataAvailable = true;
    }).catch(err => {
        console.log(err);
    });


    function totalPrice() {
        var sum = 0;
        scope.cartProducts.forEach(product => {
            // console.log(product.price);
            sum += product.price;
        });
        scope.totalPrice = sum;
        scope.deliveryCharge = sum * 0.02;
    }

    scope.removeProduct = function (productId) {
        var cartData = scope.cartProducts;
        cartData = cartData.filter(prod => prod.id != productId);
        scope.cartProducts = cartData;
        totalPrice();
        var localProdData = JSON.parse(window.localStorage["cart"]).products;
        localProdData = localProdData.filter(prod => prod != productId);
        // // console.log(JSON.stringify(localProdData));
        localProdData = {
            "products": localProdData
        }
        window.localStorage["cart"] = JSON.stringify(localProdData);
    }
}]);
