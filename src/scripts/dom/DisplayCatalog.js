// purpose: display html representations of all animals in api
const APIManager = require("../api/APIManager")
const $ = require("jquery")

const animalList = () => {
    // Get the animals
    APIManager.getAllAnimals()
        .then(allAnimals => {
            // iterate over animal list
            allAnimals.forEach(animal => {
                // build html representation for each one
                // ensure purchase button is on representation
                $("#animal-list").append(
                    `
                    <div class="catalogItem" id="${animal.id}">
                        <section>
                            ${animal.species}
                        </section>

                        <button>Purchase</button>
                    </div>
                    `
                )
            })
            //button click grabs animal id
            $(".catalogItem").on("click", "button", (event) => {
                console.log(event.delegateTarget.id)
                // display order form for this animal

            })
        })
}

module.exports = animalList