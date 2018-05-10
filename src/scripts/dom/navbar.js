//app to build navbar
const $ = require("jquery")
const showCatalog = require("./DisplayCatalog")
const showComissionForm = require("./CommissionWork")
const showAddAnimal = require("./addAnimal")

const buildNavBar = () => {
    $("#nav-output").append(
        `
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
            <a class="navbar-brand" href="#">Skull and Potter</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav nav-tabs">
                    <li class="nav-item" id="nav__catalog">
                        <a href="#" class="nav-link">catalog</a>
                    </li>
                    <li class="nav-item" id="nav__comission">
                        <a href="#" class="nav-link">Comission</a>
                    </li>
                    <li class="nav-item" id="nav__addAnimal">
                        <a href="#" class="nav-link">Add a new animal</a>
                    </li>
                </ul>
            </div>
        </nav>
        `
    )
    $("#nav__catalog").click(() => {
        $("#main-output").empty()
        showCatalog()
    })

    $("#nav__comission").click(() => {
        $("#main-output").empty()
        showComissionForm()
    })

    $("#nav__addAnimal").click(() => {
        $("#main-output").empty()
        showAddAnimal()
    })
}



module.exports = buildNavBar