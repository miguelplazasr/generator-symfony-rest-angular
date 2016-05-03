/**
 * Created by miguelplazas on 1/05/16.
 */

angular.module('app').controller('MenuCtrl', [
    '$scope',
    MenuCtrl
]);

function MenuCtrl($scope) {
    $scope.title = 'Menu';
}