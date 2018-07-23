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
        },
        productsByIds(producsId) {
            var defer = $q.defer();
            var query = "http://localhost:3000/products?";
            producsId.forEach(id => {
                query += "id=" + id + "&";
            });
            $http.get(query).then(response => {
                defer.resolve(response.data);
            }, err => {
                console.log(err);
            });
            return defer.promise;
        }
    }
});
