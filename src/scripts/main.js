/*
modules.
-APIManager
-Comission work form builder
-Display catalog
-order from catalog form
-navbar
*/


//import required modules
const listAnimals = require("./dom/DisplayCatalog")
const buildOrderForm = require("./dom/OrderForm")
const buildComissionForm = require("./dom/CommissionWork")
const buildNavBar = require("./dom/navbar")


//Display a list of all animals
buildNavBar()
listAnimals()

//display order form
// buildOrderForm(1)
// buildComissionForm()
