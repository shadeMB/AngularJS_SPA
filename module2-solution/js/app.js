(function () {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        var buyList = this;
        buyList.isEmpty = false;

        buyList.toBuyItems = ShoppingListCheckOffService.getItemsToBuy();

        buyList.addItemToBought = function(itemIndex) {
            ShoppingListCheckOffService.addItemToBought(itemIndex);
            if (buyList.toBuyItems.length === 0) {
                buyList.isEmpty = true;
            }
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService) {
        var boughtList = this;
        
        boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var checkOffService = this;
        
        var boughtItems = [];
        var toBuyItems = [
            {
                name: "Chips",
                quantity: 2
            },
            {
                name: "Cola",
                quantity: 1
            },
            {
                name: "Pizza",
                quantity: 1
            },
            {
                name: "Dark chocolate",
                quantity: 2
            },
            {
                name: "Yogurt",
                quantity: 4
            }
        ];        

        checkOffService.addItemToBought = function (itemIndex) {
            var item = toBuyItems[itemIndex];
            
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(item);
        };

        checkOffService.getItemsToBuy = function () {
            return toBuyItems;
        };

        checkOffService.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();