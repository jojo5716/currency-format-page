angular.module('CurrencyApp', [])
    .controller('CurrencyController', ['$scope', function($scope) {
            $scope.currency = 2000;
            $scope.locales = ["es_ES", "en_EN"];
            $scope.currencies = ["EUR", "USD"];

            $scope.textChanged = function() {
                var locale = $("#cfie-locale").val().split(":")[1];
                var currency = $("#cfie-monedas").val().split(":")[1];
                $("#cfie-currency-format").text(currencyFormat($scope.currency, currency, locale));
            };

            var currencyFormat = function(amount, currency, locale){
                return currencies.formatMoney(amount, currency, locale);
            };

            $("#cfh-download").click(function(){
                window.open('https://raw.githubusercontent.com/jojo5716/CurrencyFormat/master/currency-format.js', "_blank");
            });
}]);

