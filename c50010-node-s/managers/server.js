//archivo donde creamos el servidor
import express from "express";
import ProductManager from "./components/ProductManager.js";


const app= express();
app.use(express.urlencoded({extended : true}));

const products= new ProductManager();

const rearProducts= products.readProducts();

app.get("/products", async (req, res)  => {
    
    let limit= parseInt(req.query.limit);
    let allProducts= await readProducts
    let productLimit= allProducts.slice(0, limit)
    
    res.send(productLimit);

});

const PORT= 8080; //numero de puerto generado
const sever = app.listen (PORT, () => {
    console.log(`Express por LOCAL HOST ${server.address().port}`)

})

server.on("error", (error)=> console.log(`Error del servidor ${error}`))