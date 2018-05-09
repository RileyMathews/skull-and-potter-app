//app to handle creation of an animal object

const createNewAnimal = (species, color, size, furred, feathered, scales, price, quantity, img, mount) => {
    console.log(furred)
    const newAnimal = {
        species,
        color,
        size,
        furred,
        feathered,
        scales,
        price,
        quantity,
        img,
        mount
    }
    console.log(newAnimal)
    return newAnimal
}

module.exports = createNewAnimal