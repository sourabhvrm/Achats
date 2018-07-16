// 'use strict';

/**
 * @ngdoc overview
 * @name achatsApp
 * @description
 * # achatsApp
 *
 * Main module of the application.
 */
const app = angular.module('achatsApp', []);
app.run(() => {
    console.log("Run Called");
});

app.config(() => {
    console.log("Config Called");
})
