/**
 * @ngdoc function
 * @name achatsApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the achatsApp
 */
app.controller('CartCtrl', ["$scope", "$window", "CartFactory", function (scope, window, cartfactory) {
    var localProdData = JSON.parse(window.localStorage["cart"]);
    localProdData = localProdData.products;
    // console.log(localProdData);
    var products = new Array();
    localProdData.forEach(prodId => {
        cartfactory.productById(prodId).then(data => {
            products.push(data);
        }).catch(err => console.log(err));
    });
}]);
