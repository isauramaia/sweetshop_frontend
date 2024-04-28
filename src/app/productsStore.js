const productsArray = [

    {
        id: "1",
        title: "Bolo de morango",
        price: 4.99
    },

    {
        id: "2",
        title: "Cupcake",
        price: 7.99
    },

    {
        id: "3",
        title: "Torta alemã",
        price: 10.99
    }

]
    



function getProductsData(id) {
    const productData = productsArray.find(product => product.id == id);

    if (productData== undefined) {
        console.log("Product data does not exist for id: " + id);
        return undefined;
    }

    return productData; 
}

export { productsArray, getProductsData  };