let money =  0;
let bakingPower = 1;
let moneyLabel = document.querySelector(".money-label");
let moneyPerClickLabel = document.querySelector(".money-per-click-label");

let numDough = 0;
let numBakingForms = 0;
let numTrays = 0;
let numRollingPins = 0;
let numBakers = 0;
let numOvens = 0;
let numBakeries = 0;
let numFactories = 0;

let doughLabel = document.querySelector(".dough-label");
let bakingFormLabel = document.querySelector(".baking-form-label");
let trayLabel = document.querySelector(".tray-label");
let rollingPinLabel = document.querySelector(".rolling-pin-label");
let bakerLabel = document.querySelector(".baker-label");
let ovenLabel = document.querySelector(".oven-label");
let bakeryLabel = document.querySelector(".bakery-label");
let factoryLabel = document.querySelector(".factory-label");


//This code make the buttons for the cookie and all of the items in the shop function. This means that once a button is clicked, a new item is displayed in the inventory while the functions further down this code handles the cost, etc.
let cookieButton = document.querySelector(".Cookie");
let DoughButton = document.querySelector(".dough-button");
let BakingFormButton = document.querySelector(".bakingform-button");
let TrayButton = document.querySelector(".tray-button");
let RollingPinButton = document.querySelector(".rollingpin-button");
let BakerButton = document.querySelector(".baker-button");
let OvenButton = document.querySelector(".oven-button");
let BakeryButton = document.querySelector(".bakery-button");
let FactoryButton = document.querySelector(".factory-button");

//This code make the buttons for Game over fucntion. This means that once the Game Over button is pressed, the game will end. 
let GameOverButton = document.querySelector(".game-over-button");


cookieButton.addEventListener("click", cookieClick);
DoughButton.addEventListener("click", buyDough);
BakingFormButton.addEventListener("click", buyBakingForm);
TrayButton.addEventListener("click", buyTray);
RollingPinButton.addEventListener("click", buyRollingPin);
BakerButton.addEventListener("click", buyBaker);
OvenButton.addEventListener("click", buyOven);
BakeryButton.addEventListener("click", buyBakery);
FactoryButton.addEventListener("click", buyFactory);

GameOverButton.addEventListener("click", buyGameOver);



//The code below this comment makes it so that all of the items in the item shop have a specific price and also take care of everything that happens once the items have been bought.
//For example, this code makes it so that you can't buy an item if you don't have enough money, the bought items increase the amount of money you get per click once bought, and their price will double each time they are bought.
let DoughCost = 10;
let BakingFormCost = 20;
let TrayCost = 40;
let RollingPinCost = 200;
let BakerCost = 2000;
let OvenCost = 8000;
let BakeryCost = 25000;
let FactoryCost = 200000;

// This is the cost of the Game Over button. Once the player has earned this much money, the game will end once this button is pressed.
let GameOverCost = 10000000;

function cookieClick(){
    money += bakingPower;
    moneyLabel.textContent = money;
}

function buyDough(){
    if (money >= DoughCost){
        money -= DoughCost;
        numDough += 1;
        bakingPower += 1;
        DoughCost *= 2;
        DoughButton.innerHTML = "Buy Dough (" + DoughCost + ") [+1]"
        update();
    }
}

function buyBakingForm(){
    if (money >= BakingFormCost){
        money -= BakingFormCost;
        numBakingForms += 1;
        bakingPower += 2;
        BakingFormCost *= 2;
        BakingFormButton.innerHTML = "Buy a Bakingform (" + BakingFormCost + ") [+2]"
        update();
    }
}

function buyTray(){
    if (money >= TrayCost){
        money -= TrayCost;
        numTrays += 1;
        bakingPower += 3;
        TrayCost *= 2;
        TrayButton.innerHTML = "Buy a Tray(" + TrayCost + ") [+3]";
        update();
    }
}

function buyRollingPin(){
    if (money >= RollingPinCost){
        money -= RollingPinCost;
        numRollingPins += 1;
        bakingPower += 5;
        RollingPinCost *= 2;
        RollingPinButton.innerHTML = "Buy a Rolling Pin(" + RollingPinCost + ") [+5]";
        update();
    }
}


function buyBaker(){
    if (money >= BakerCost){
        money -= BakerCost;
        numBakers += 1;
        bakingPower += 10;
        BakerCost *= 2;
        BakerButton.innerHTML =  "Hire a Baker(" + BakerCost + ") [+10]";
        update();
    }
}


function buyOven(){
    if (money >= OvenCost){
        money -= OvenCost;
        numOvens += 1;
        bakingPower += 20;
        OvenCost *= 2;
        OvenButton.innerHTML = "Buy an Oven(" + OvenCost + ") [+20]";
        update();
    }
}


function buyBakery(){
    if (money >= BakeryCost){
        money -= BakeryCost;
        numBakeries += 1;
        bakingPower += 50;
        BakeryCost *= 2;
        BakeryButton.innerHTML = "Buy a Bakery(" + BakeryCost + ") [+50]";
        update();
    }
}


function buyFactory(){
    if (money >= FactoryCost){
        money -= FactoryCost;
        numFactories += 1;
        bakingPower += 100;
        FactoryCost *= 2;
        FactoryButton.innerHTML = "Buy a Factory(" + FactoryCost + ") [+100]";
        update();
    }
}

function buyGameOver(){
    if (money >= GameOverCost){
        money -= GameOverCost;
        window.location.replace("./GameOver.html");
    }
}

function update(){
    moneyLabel.innerHTML = money;
    moneyPerClickLabel.innerHTML = bakingPower;
    
    doughLabel.innerHTML = numDough;
    bakingFormLabel.innerHTML = numBakingForms;
    trayLabel.innerHTML = numTrays;
    rollingPinLabel.innerHTML = numRollingPins;
    bakerLabel.innerHTML = numBakers;
    ovenLabel.innerHTML = numOvens;
    bakeryLabel.innerHTML = numBakeries;
    factoryLabel.innerHTML = numFactories;
}

update();