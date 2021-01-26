const express = require("express");
const router = express.Router();
const Categoty = require("./Category");
const slugify = require("slugify")

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new")
});

router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if(title != undefined || title != ""){

        Categoty.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/");
        })
    
    }else{
        res.redirect("admin/categories/new")
    }

});

router.get("/admin/categories", (req, res) => {

    Categoty.findAll().then(categories => {
        res.render("admin/categories/index", {categories: categories});
    });
       
});

module.exports = router;    