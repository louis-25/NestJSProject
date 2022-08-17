"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app_model_1 = require("./app.model");
var app = express_1.default();
var port = 8000;
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware");
    next();
});
app.use(express_1.default.json());
app.get("/cats", function (req, res) {
    try {
        var cats_1 = app_model_1.Cat;
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
    var cats = app_model_1.Cat;
});
app.get("/cats/:id", function (req, res) {
    try {
        var params_1 = req.params;
        console.log("params", params_1);
        var cats = app_model_1.Cat.find(function (cat) {
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
app.post("/cats", function (req, res) {
    try {
        var data = req.body;
        console.log("data", data);
        app_model_1.Cat.push(data);
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
app.use(function (req, res, next) {
    console.log("this is error middleware");
    res.send({ error: "404 not found error" });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
//# sourceMappingURL=app.js.map