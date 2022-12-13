let money = 0;
let bakingPower = 1;
let moneyLabel = document.querySelector(".money-label");

//This code make the buttons for the cookie and all of the items in the shop function. This means that once a button is clicked, a new item is displayed in the inventory while the functions further down this code handles the cost, etc.
let cookieButton = document.querySelector(".Cookie");
let TrayButton = document.querySelector(".tray-button");
let RollingPinButton = document.querySelector(".rollingpin-button");
let BakerButton = document.querySelector(".baker-button");
let OvenButton = document.querySelector(".oven-button");
let BakeryButton = document.querySelector(".bakery-button");
let FactoryButton = document.querySelector(".factory-button");

cookieButton.addEventListener("click", cookieClick);
TrayButton.addEventListener("click", buyTray);
RollingPinButton.addEventListener("click", buyRollingPin);
BakerButton.addEventListener("click", buyBaker);
OvenButton.addEventListener("click", buyOven);
BakeryButton.addEventListener("click", buyBakery);
FactoryButton.addEventListener("click", buyFactory);

function cookieClick() {
    money += bakingPower;
    moneyLabel.textContent = money;
}

//The code below this comment makes it so that all of the items in the item shop have a specific price and also take care of everything that happens once the items have been bought.
//For example, this code makes it so that you can't buy an item if you don't have enough money, the bought items increase the amount of money you get per click once bought, and their price will double each time they are bought.
//The lines containing "document.getElementById("tray1").innerHTML = "";" make it so that the text containing thenumber for the item price changes each time it is bought

let TrayCost = 10;
let RollingPinCost = 20;
let BakerCost = 50;
let OvenCost = 100;
let BakeryCost = 500;
let FactoryCost = 2000;

function buyTray(){
    if (money >= TrayCost){
        money -= TrayCost;
        inventory.push("Tray");
        bakingPower += 1;
        TrayCost *= 2;
        TrayButton.innerHTML = "Buy a Tray(" + TrayCost + ") [+1]";
        update();
    }
}

function buyRollingPin(){
    if (money >= RollingPinCost){
        money -= RollingPinCost;
        inventory.push("RollingPin");
        bakingPower += 5;
        RollingPinCost *= 2;
        RollingPinButton.innerHTML = "Buy a Rolling Pin(" + RollingPinCost + ") [+5]";
        update();
    }
}


function buyBaker(){
    if (money >= BakerCost){
        money -= BakerCost;
        inventory.push("Baker");
        bakingPower += 10;
        BakerCost *= 2;
        BakerButton.innerHTML =  "Hire a Baker(" + BakerCost + ") [+10]";
        update();
    }
}


function buyOven(){
    if (money >= OvenCost){
        money -= OvenCost;
        inventory.push("Oven");
        bakingPower += 20;
        OvenCost *= 2;
        OvenButton.innerHTML = "Buy an Oven(" + OvenCost + ") [+1]";
        update();
    }
}


function buyBakery(){
    if (money >= BakeryCost){
        money -= BakeryCost;
        inventory.push("Bakery");
        bakingPower += 50;
        BakeryCost *= 2;
        BakeryButton.innerHTML = "Buy a Bakery(" + BakeryCost + ") [+50]";
        update();
    }
}


function buyFactory(){
    if (money >= FactoryCost){
        money -= FactoryCost;
        inventory.push("Factory");
        bakingPower += 100;
        FactoryCost *= 2;
        FactoryButton.innerHTML = "Buy a Factory(" + FactoryCost + ") [+100]";
        update();
    }
}




//The code below this comment handles the inventory. 
let inventory = [];
let inventoryList = document.querySelector(".inventory-list");


function update(){
    updateInventory();
    moneyLabel.innerHTML = money;
}

function updateInventory() {
    inventoryList.innerHTML = "";
    for (let index = 0; index < inventory.length; index++) {
        let newLI = document.createElement("li");
        newLI.classList.add("inventory-list-element");
        newLI.innerHTML = inventory[index];
        inventoryList.append(newLI);
    }
}

updateInventory();