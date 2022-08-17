"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_model_1 = require("./cats.model");
var express_1 = require("express");
var router = express_1.Router();
router.get("/cats", function (req, res) {
    try {
        var cats_1 = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats_1,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
    var cats = cats_model_1.Cat;
});
router.get("/cats/:id", function (req, res) {
    try {
        var params_1 = req.params;
        console.log("params", params_1);
        var cats = cats_model_1.Cat.find(function (cat) {
            return cat.id === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.post("/cats", function (req, res) {
    try {
        var data = req.body;
        console.log("data", data);
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data: data },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=cats.route.js.map