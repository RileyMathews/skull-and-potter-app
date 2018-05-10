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
            let index = 0
            let currentRow = 1
            let row = $(`<div class="card-columns mb-1" id="catalog__row__${currentRow}"></div>`)
            output.append(row)
            // iterate over animal list
            allAnimals.forEach(animal => {
                //create row div for every 3 cards

                /*
                    following code being left in in case later
                    cards need to be reformated into seperate rows
                    rather than one large container for all cards
                */
                // if (index % 3 === 0) {
                //     currentRow = index/3+1
                //     let row = $(`<div class="card-deck mb-1" id="catalog__row__${currentRow}"></div>`)
                //     output.append(row)
                // }
                //append cards to row div

                // build html representation for each one
                // ensure purchase button is on representation
                $(`#catalog__row__${currentRow}`).append(
                    `
                    <div class="card catalogItem" id="${animal.id}">
                        <img class="card-img-top" src="${animal.img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${animal.species}</h5>
                            <p class="card-text">A lovely ${animal.size} ${animal.color} creature. We have ${animal.quantity} in stock.</p>
                            <div class="standout">
                                <p class="card-text">Price: $${animal.price}</p>
                                <button class="btn btn-primary">Order</a>
                            </div>    
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