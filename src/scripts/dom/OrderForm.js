// purpose: build the Order form
const $ = require("jquery")
const APIManager = require("../api/APIManager")

const buildOrderForm = (id) => {
    // customer info (name, address, phone number, email)
    const $orderForm = $("#order-form")
    $orderForm.append(
        `
        <section>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputNumber">Phone Number</label>
                    <input type="number" class="form-control" id="inputNumber" placeholder="Number">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputQuantity">Quantity</label>
                    <input type="number" class="form-control" id="inputQuantity">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPayment">Payment</label>
                    <select id="inputPayment" class="form-control">
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
                    <button class="btn btn-primary" id="order__submit">submit order</button>
                </section>
                `
            )
            // submit button
            $("#order__submit").on("click", () => {
                console.log("order Submitted")
            })
        })



}

module.exports = buildOrderForm