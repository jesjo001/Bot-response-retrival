"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var config_1 = __importDefault(require("config"));
var logger_1 = __importDefault(require("./logger")); //logger doesnt block I/O like console.log does
var connect_1 = __importDefault(require("./db/connect"));
var deserializeUser_1 = __importDefault(require("./middleware/validation/deserializeUser"));
dotenv_1.default.config();
var routes_1 = __importDefault(require("./routes/routes"));
// const PORT = process.env.PORT as number
// const HOST = process.env.HOST as string
var HOST = config_1.default.get("host");
var PORT = config_1.default.get("port");
var app = (0, express_1.default)();
app.use(deserializeUser_1.default);
//middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/v1/', routes_1.default);
app.get('/', function (req, res) { return res.status(200).send("Welcome to Insta Feeds"); });
app.get('*', function (req, res) { return res.status(404).send("Page not found"); });
app.listen(PORT, HOST, function () {
    logger_1.default.info("Server listening at http://".concat(HOST, ":").concat(PORT));
    (0, connect_1.default)();
});
