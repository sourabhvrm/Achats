/**
 * @ngdoc function
 * @name achatsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the achatsApp
 */
app.controller('MenuCtrl', ["$scope", "menuFactory", function (scope, menuFactory) {
    console.log("Excecuting Promise");
    var promise = menuFactory.retrieveData();
    console.log("Promise Executed");
    promise.then(data => {
        console.log(data);
        //console.log(data["0"].category);
        scope.menudata = data;
    }).catch(err => {
        console.log(err);
    });

    scope.displaySubMenu = (menuSelected) => {
        // console.log(menuSelected);
        scope.menuSelected = menuSelected;
        scope.subMenuStyle = {
            "display": "inherit"
        }
        // [subMenu, menu] = [true];
        // console.log("Mouse Entered");
    }
    var [subMenu, menu] = [false];
    scope.hideSubMenu = () => {
        subMenu = false;
        if (!subMenu && !menu) {
            menuHide();
        }
        // console.log("Mouse Leaved");
    }
    scope.hideMenu = () => {
        menu = false;
    }

    menuHide = () => {
        scope.subMenuStyle = {
            "display": "none"
        }
    }
}]);
