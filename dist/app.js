"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/modules/student/student.route");
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/v1/students', student_route_1.studentRoutes);
// default routes
app.get('/', (req, res) => {
    res.send('Hello Dev!');
});
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route Not Found',
    });
});
exports.default = app;
