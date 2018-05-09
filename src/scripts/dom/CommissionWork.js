// purpose: build the commission form
const $ = require("jquery")

const buildCommissionForm = () => {
    //customer info (name, address, phone number, email)
    const comissionForm = $("#main-output")
    comissionForm.append(
        `
        <section>
            <h2>Comission Form</h2>
            <!-- user information component -->
            <div class="form-row">
                <div class="form-group col-md-4">
                    <!-- name component -->
                    <label for="comission__input__name">Name</label>
                    <input type="text" class="form-control" id="comission__input__name" placeholder="Name">
                </div>
                <div class="form-group col-md-4">
                    <!-- email component -->
                    <label for="comission__input__email">Email</label>
                    <input type="email" class="form-control" id="comission__input__email" placeholder="Email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group col-md-4">
                    <!-- phone number component -->
                    <label for="comission__input__number">Phone Number</label>
                    <input type="number" class="form-control" id="comission__input__number" placeholder="Number">
                </div>
            </div>
            <div class="form-group">
                <!-- address component -->
                <label for="comission__input__address">Address</label>
                <input type="text" class="form-control" id="comission__input__address" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="comission__input__address2">Address 2</label>
                <input type="text" class="form-control" id="comission__input__address2" placeholder="Apartment, studio, or floor">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="comission__input__city">City</label>
                    <input type="text" class="form-control" id="comission__input__city">
                </div>
                <div class="form-group col-md-4">
                    <label for="comission__input__state">State</label>
                    <select id="comission__input__state" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="comission__input__zip">Zip</label>
                    <input type="text" class="form-control" id="comission__input__zip">
                </div>
            </div>
            <div class="form-row">
                <!--type of animal -->
                <div class="form-group col-md-4">
                    <label for="comission__input__animalType">Animal</label>
                    <input type="text" class="form-control" id="comission__input__animalType">
                </div>
                <!-- quantity of animal -->
                <div class="form-group col-md-4">
                    <label for="comission__input__quantity">Quantity</label>
                    <input type="number" class="form-control" id="comission__input__quantity">
                </div>
                <div class="form-group col-md-4">
                    <label for="comission__input__size">Size</label>
                    <select class="form-control" id="comission__input__size">
                        <option selected>Chose...</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xl">Extra Large</option>
                        <option value="huge">Huge</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-check col-md-2">
                    <input type="checkbox" value="mounted" class="form-group" id="comission__input__mounted">
                    <label for="comission__input__mounted">Mounted</label>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="comission__input__date">Date you want it by</label>
                    <input type="date" class="form-control" id="comission__input__date">
                </div>
            </div>
            <div class="form-row">
                <button class="btn btn-primary" id="comission__btn__submit">Submit</button>
            </div>
        </section>
        `
    )
    $("#comission__btn__submit").on("click", () => {
        console.log("comission submitted")
    })

}




module.exports = buildCommissionForm