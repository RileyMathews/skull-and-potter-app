//function to create a form for adding an animal to the api
const APIManager = require("../api/APIManager")
const $ = require("jquery")

const buildAddAminalPage = () => {
    $("#main-output").append(
        `
        <section>
            <!-- 
                                components needed
                                Species____color_____size
                                furred_____featured____scales
                                price_____qty_____imglink
                            -->
            <h2>Add New Animal</h2>
            <!-- animal info component -->
            <div class="form-row">
                <div class="form-group col-md-4">
                    <!-- species component -->
                    <label for="addAnimal__input__species">Species</label>
                    <input type="text" class="form-control" id="addAnimal__input__species" placeholder="Species">
                </div>
                <div class="form-group col-md-4">
                    <!-- color component -->
                    <label for="addAnimal__input__color">Color</label>
                    <input type="text" class="form-control" id="addAnimal__input__color" placeholder="Color">
                </div>
                <!-- size component -->
                <div class="form-group col-md-4">
                    <label for="addAnimal__input__size">Size</label>
                    <select class="form-control" id="addAnimal__input__size">
                        <option selected>Chose...</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xl">Extra Large</option>
                        <option value="huge">Huge</option>
                    </select>
                </div>
            </div>
            <!-- checkbox component -->
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="addAnimal__input__furred">Furred</label>
                    <input type="checkbox" class="form-control" id="addAnimal__input__furred">
                </div>
                <div class="form-group col-md-4">
                    <label for="addAnimal__input__feathered">feathered</label>
                    <input type="checkbox" class="form-control" id="addAnimal__input__feathered">
                </div>
                <div class="form-group col-md-4">
                    <label for="addAnimal__input__scales">scales</label>
                    <input type="checkbox" class="form-control" id="addAnimal__input__scales">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <!-- price component -->
                    <label for="addAnimal__input__price">Price</label>
                    <input type="text" class="form-control" id="addAnimal__input__price" placeholder="price">
                </div>
                <div class="form-group col-md-4">
                    <!-- quantity component -->
                    <label for="addAnimal__input__quantity">Quantity</label>
                    <input type="text" class="form-control" id="addAnimal__input__quantity" placeholder="quantity">
                </div>
                <div class="form-group col-md-4">
                    <!-- image component -->
                    <label for="addAnimal__input__image">Image</label>
                    <input type="text" class="form-control" id="addAnimal__input__image" placeholder="image">
                </div>
            </div>
            <button class="btn btn-primary" id="addAnimal__btn__submit">Submit</button>
        </section>
        `
    )
    $("#addAnimal__btn__submit").click(() => {
        //call function to add animal to api
    })
}


module.exports = buildAddAminalPage