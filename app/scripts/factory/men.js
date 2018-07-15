app.factory("menFactory", ($http, $q) => {
    const obj = {
        fetchBanner() {
            var defer = $q.defer();
            $http.get("http://localhost:3000/trending?category=MEN").then(response => {
                defer.resolve(response.data["0"].images);
            }, err => {
                console.log(err);
                defer.reject(err);
            });
            return defer.promise;
        }
    }
    return obj;
});
