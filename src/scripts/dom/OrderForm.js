// purpose: build the Order form
const $ = require("jquery")
const APIManager = require("../api/APIManager")

const buildOrderForm = (id) => {
    // customer info (name, address, phone number, email)
    const $orderForm = $("#order-form")
    $orderForm.append(
        `
        <section>
            <h2>Name</h2>
            <input type="text" id="customer__name" placeholder="name"></input>
            <h3>Address</h3>
            <input type="address" id="customer__address" placeholder="address"></input>
            <h3>Phone Number</h3>
            <input type="number" id="customer__number" placeholder="phone number"></input>
            <h3>Email</h3>
            <input type="email" id="customer__email" placeholder="email"></input>

            <h2>Payment</h2>
            <select id="customer__payment" placeholder="payment">
                <option value="visa">visa</option>
                <option value="paypal">paypal</option>
                <option value="bitcoin">bitcoin</option>
                <option value="perrycoin">perrycoin</option>
            </select>
            
            <h3>Quantity</h3>
            <input type="number id="customer__qantity" placeholder="quantity"></input>

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
                <p>Your selection: ${response.species}</p>
                <p>Price: ${response.price}</p>
                <button id="order__submit">submit order</button>
                `
            )
            // submit button
            $("#order__submit").on("click", () => {
                console.log("order Submitted")
            })
        })



}

module.exports = buildOrderForm