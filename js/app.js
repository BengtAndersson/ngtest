//app declaration and dependency injection
var app = angular.module("webbook", ["ngRoute", "ngResource", "ui.bootstrap"]);

//app config
app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  //route config
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html",
      controller: "homeController"
    })
    .when("/register", {
      templateUrl: "partials/register.html",
      controller: "registerController"
    })
    .when("/fileUpload",{
      templateUrl: "partials/fileUpload.html",
      controller: "fileUploadController"
    })
    .when("/writeStory/:id", {
      redirectTo: "/writeStory/:id/section/1"
    })
        .when("/FAQ", {
      templateUrl: "partials/FAQ.html"
    })
    .otherwise({
      redirectTo: "/"
    });

  $locationProvider.html5Mode(true);
}]);