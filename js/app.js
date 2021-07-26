(function(){
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuy();

    toBuyList.buyItem = function(index){
        ShoppingListCheckOffService.buy(index);
    };
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var BoughtList = this;

    BoughtList.items = ShoppingListCheckOffService.getBought();
}

function ShoppingListCheckOffService(){
    var list = this;

    var tobuy = [{ name: "cookies", quantity: 100 },
                  { name: "chips", quantity: 1 },
                  { name: "veggies", quantity: 10 },
                  { name: "watermelon", quantity: 1 },
                  { name: "squidwards", quantity: 3 }];
    var bought = [];

    list.buy = function(index){
        var obj = tobuy.splice(index, 1);
        bought.push(obj[0]);
    };

    list.getToBuy = function(){
        return tobuy;
    };
    list.getBought = function(){
        return bought;
    };
}

})();