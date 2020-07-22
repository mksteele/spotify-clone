"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const app = express_1.default();
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world2!");
});
// start the Express server
app.listen(constants_1.PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${constants_1.PORT}`);
});
//# sourceMappingURL=index.js.map