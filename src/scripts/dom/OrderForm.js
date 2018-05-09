// purpose: build the Order form
const $ = require("jquery")
const APIManager = require("../api/APIManager")
const listAnimals = require("./DisplayCatalog")

const buildOrderForm = (id) => {
    // customer info (name, address, phone number, email)
    const $orderForm = $("#main-output")
    $orderForm.append(
        `
        <section>
            <h1>Order</h1>
            <div class="form-row">
                <!-- customer info component -->
                <div class="form-group col-md-4">
                    <label for="order__input__name">Name</label>
                    <input type="text" class="form-control" id="order__input__name" placeholder="Name">
                </div>
                <div class="form-group col-md-4">
                    <label for="order__input__email">Email</label>
                    <input type="email" class="form-control" id="order__input__email" placeholder="Email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group col-md-4">
                    <label for="order__input__number">Phone Number</label>
                    <input type="number" class="form-control" id="order__input__number" placeholder="Number">
                </div>
            </div>
            <!-- customer address component -->
            <div class="form-group">
                <label for="order__input__address">Address</label>
                <input type="text" class="form-control" id="order__input__address" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="order__input__address2">Address 2</label>
                <input type="text" class="form-control" id="order__input__address2" placeholder="Apartment, studio, or floor">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="order__input__city">City</label>
                    <input type="text" class="form-control" id="order__input__city">
                </div>
                <div class="form-group col-md-4">
                    <label for="order__input__state">State</label>
                    <select id="order__input__state" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="order__input__zip">Zip</label>
                    <input type="text" class="form-control" id="order__input__zip">
                </div>
            </div>
            <!-- payment info component -->
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="order__input__quantity">Quantity</label>
                    <input type="number" class="form-control" id="order__input__quantity">
                </div>
                <div class="form-group col-md-6">
                    <label for="order__input__payment">Payment</label>
                    <select id="order__input__payment" class="form-control">
                        <option selected>Chose...</option>
                        <option value="visa">Visa</option>
                        <option value="paypal">PayPal</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="perrycoin">Perry Coin</option>
                    </select>
                </div>
            </div>
        </section>
        `
    )

    // payment type


    // quantity

    // what customer selected
    APIManager.getSingleAnimal(id)
        .then(response => {
            $orderForm.append(
                `
                <section class="jumbotron">
                    <p>Your selection: ${response.species}</p>
                    <p>Price: ${response.price}</p>
                    <button class="btn btn-primary" id="order__btn__submit">submit order</button>
                </section>
                `
            )
            // submit button
            $("#order__btn__submit").on("click", () => {
                $("#main-output").empty()
                const showCatalog = require("./DisplayCatalog")
                showCatalog()
            })
        })
}

module.exports = buildOrderForm