app.factory("CartFactory", ($http, $q) => {
    return {
        productById(productId) {
            var defer = $q.defer();
            $http.get("http://localhost:3000/products?id=" + productId).then(response => {
                defer.resolve(response.data);
            }, err => {
                console.log(err);
                defer.reject(err);
            });
            return defer.promise;
        }
    }
});
