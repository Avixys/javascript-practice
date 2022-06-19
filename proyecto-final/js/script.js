//Definició Clase Producto
class Product {
    constructor (id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.quantity = quantity;
    }

    calculateTax () {
        return this.price * 1.21;
    }
}

//Definición Clase productos en Stock
class ProductStock{
    constructor(){
        this.products=[]
    }

    addProduct(prod){
        this.products.push(prod)
    }

    getProducts(){
        return this.products;
    }

    getProduct(id){
        return this.products.find(p=>p.id===id)
    }

    getProductsWithStock(){
        return this.products.filter(p=>p.quantity>0)
    }
}

// Definición clase Carrito
class Cart {
    constructor (user) {
        this.user = user;
        this.products = [];
    }

    addProduct(prod){
        let allreadyIn = this.products.find(p=>p.id===prod.id);
        if (allreadyIn !==undefined){
            allreadyIn.q += prod.q;
            let remainingProducts = this.products.filter(p=>p.id !== prod.id);
            this.products = [...remainingProducts, allreadyIn];
        } else {
        this.products.push(prod);
        }
    }
}

//Carga de productos al array
const products = new ProductStock();
let productId="";
do {
    productId = prompt ("Ingrese ID de prodcuto o ESC para finalizar");
    if (productId === "ESC" || productId === "Esc" || productId === "esc") {
        break;
    } else {
        let productName = prompt("ingrese nombre de producto");
        let productPrice = prompt ("Ingrese precio del prodcuto");
        let prodcutQuantity = prompt ("Ingrese cantidad del producto");
        products.addProduct (new Product (productId, productName, productPrice, prodcutQuantity));
    }
} while (productId.toLowerCase().trim() !== "esc")

//Visualización del array por consola
for (const product of products.getProducts()) {
    console.log("ID: " + productId);
    console.log("Nombre: " + product.name);
    console.log("Precio: $" + product.price);
    console.log("Cantidad disponible: " + product.quantity);
    console.log("El precio con IVA es : $" + product.calculateTax());
}

//Solicitud de Usuario
let user = prompt("Ingrese su usuario");
//agregar validación de usuario
let cart = new Cart (user);

//Elección de productos para compra (agregar a carrito)
let prodsList = "Elija un Id de producto o esc para finalizar:\n"
for(const p of products.getProducts()){
    prodsList += `${p.id}) ${p.name}\n`;
}

//Agregado de productos al carrito
let cartProductId="";
do {
    cartProductId = prompt(prodsList);
    let cartProdSel = products.getProduct(cartProductId);
    if(cartProdSel!==undefined){
        let cartProductQ = prompt(`ingrese la cantidad de productos (máximo ${cartProdSel.quantity})`);
        if(parseInt(cartProductQ)>0 && parseInt(cartProductQ)<=cartProdSel.quantity){
            cart.addProduct({id:cartProductId, q:cartProductQ});
            alert("Producto agregado al carro");
        }
    }
}while(cartProductId.toLowerCase().trim()!=="esc")

//Visualización de carrito y total
let prodsCart = "Los porudctos en su carrito son:\n"
let total = 0;
for (const p of cart.products) {
    let cartProduct = products.getProduct(p.id); 
    prodsCart += `${cartProduct.name}, Cantidad: ${p.q}, Precio unitario: $${cartProduct.price}, subtotal: $${parseFloat(p.q*cartProduct.price).toFixed(2)}\n`;
    total += parseFloat(p.q*cartProduct.price);
}
prodsCart +=`\nTotal: $${parseFloat(total).toFixed(2)}`;
alert(prodsCart);