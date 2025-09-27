const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.js"); // you already imported this
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/product";

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/products", async(req, res) => {
    const allProducts = await Product.find({});
    res.render("products/index.ejs", { allProducts });
});



app.get("/products/new", (req, res) => {
    res.render("products/new");
});

app.get("/products/:id", async(req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show.ejs", { product });
});


app.post("/products", async(req, res) => {
    try {
        const { productCode, productName, productDescription, productRate, productImage } = req.body;
        const newProduct = new Product({ productCode, productName, productDescription, productRate, productImage });
        await newProduct.save();
        res.redirect("/products");
    } catch (err) {
        if (err.code === 11000) {
            // duplicate key error
            return res.send("Product code already exists. Please use a different code.");
        }
        res.status(500).send(err.message);
    }
    console.log(product);
});



app.listen(8080, () => {
    console.log("server is listening to port");
});