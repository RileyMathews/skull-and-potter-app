// purpose: display html representations of all animals in api
const APIManager = require("../api/APIManager")
const $ = require("jquery")
const buildOrderForm = require("./OrderForm")

const animalList = () => {

    //get dom elements
    const output = $("#main-output")
    // Get the animals
    APIManager.getAllAnimals()
        .then(allAnimals => {
            let index = 1
            let row = $("<div class=\"row\"></div>")
            output.append(row)
            console.log(row)
            // iterate over animal list
            allAnimals.forEach(animal => {
                //create row div for every 3 cards


                if (index % 3 === 0) {
                    let row = $("<div class=\"row\"></div>")
                    output.append(row)
                }
                //append cards to row div

                // build html representation for each one
                // ensure purchase button is on representation
                row.append(
                    `
                    <div class="card catalogItem col" style="width: 18rem;" id="${animal.id}">
                        <img class="card-img-top" src="${animal.img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${animal.species}</h5>
                            <p class="card-text">A lovely ${animal.size} ${animal.color} creature. We have ${animal.quantity} in stock.</p>
                            <small class="card-text text-muted">Price: $${animal.price}</small>
                            <button class="btn btn-primary">Order</a>
                        </div>
                    </div>
                    `
                )

                index++
            })
            //button click grabs animal id
            $(".catalogItem").on("click", "button", (event) => {
                console.log(event.delegateTarget.id)
                $("#main-output").empty()
                buildOrderForm(event.delegateTarget.id)
                // display order form for this animal

            })
        })
}

module.exports = animalList