class Product {
    constructor (name, price, quantity) {
        this.name = name;
        this.price = parseFloat(price);
        this.quantity = quantity;
        //this.stock = true;
    }

    calculateTax () {
        return this.price * 1.21;
    }

}

const products = [];
do {
    productName = prompt ("Ingrese nombre de prodcuto o ESC para finalizar");
    if (productName === "ESC" || productName === "Esc" || productName === "esc") {
        break;
    } else {
        let productPrice = prompt ("Ingrese precio del prodcuto");
        let prodcutQuantity = prompt ("Ingrese cantidad del producto");
        products.push (new Product (productName, productPrice, prodcutQuantity));
    }
} while (productName != "ESC" || productName != "Esc" || productName != "esc")

for (const product of products) {
    console.log("Nombre: " + product.name);
    console.log("Precio: $" + product.price);
    console.log("Cantidad disponible: " + product.quantity);
    console.log("El precio con IVA es : $" + product.calculateTax());
}