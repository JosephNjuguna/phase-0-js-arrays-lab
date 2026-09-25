// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"]


function logFirstProduct() {
  console.log(products[0]);
  console.log(products);
}

function addProduct(product) {
  products.push(product)
  console.log(products);
}
addProduct("keyboard")

function updateProductName(position,product) {
  products.splice(position,1,product)
  console.log(products);
  
}
updateProductName(3,"Desktop")

function removeLastProduct(){
  products.pop()
  console.log(products);
  
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
