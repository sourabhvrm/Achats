app.factory("menuFactory", ($http, $q) => {
    const obj = {
        retrieveData() {
            console.log("Retireve Data Started");
            var defer = $q.defer();
            const url = "http://localhost:3000/categories";
            $http.get(url).then(response => {
                // console.log(response.data);
                defer.resolve(response.data);
            }, err => {
                console.log(err);
                defer.reject(err);
            });
            return defer.promise;
        }
    }
    return obj;
});