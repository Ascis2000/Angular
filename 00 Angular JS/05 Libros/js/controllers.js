
var myApp = angular.module("myApp", []);

myApp.controller('TodosLosLibrosCtrl', function ($scope)
{
    $scope.libros = [
        {'titulo': 'The design of every day things', 'autor': 'Don Norman'},
        {'titulo': 'El nombre del viento', 'autor': 'Patrik Rufus'},
        {'titulo': 'Game of Thrones', 'autor': 'R.R. Martin'}
    ];
});