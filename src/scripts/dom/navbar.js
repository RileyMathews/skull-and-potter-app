//app to build navbar
const $ = require("jquery")
const showCatalog = require("./DisplayCatalog")
const showComissionForm = require("./CommissionWork")

const buildNavBar = () => {
    $("#nav-output").append(
        `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
            <a class="navbar-brand" href="#">Skull-Potter</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active" id="nav__catalog">
                        <a class="nav-link">catalog</a>
                    </li>
                    <li class="nav-item" id="nav__comission">
                        <a class="nav-link">Comission</a>
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

}



module.exports = buildNavBar