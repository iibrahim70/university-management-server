"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
}, {
    _id: false,
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    fatherContactNo: {
        type: String,
        trim: true,
        required: true,
    },
    fatherEmail: {
        type: String,
        trim: true,
        lowercase: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    },
    motherContactNo: {
        type: String,
        trim: true,
        required: true,
    },
    motherEmail: {
        type: String,
        trim: true,
        lowercase: true,
    },
}, {
    _id: false,
});
const localGuardianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
}, {
    _id: false,
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: userNameSchema,
        required: true,
    },
    password: {
        type: String,
        maxlength: 20,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true,
    },
    contactNo: {
        type: String,
        trim: true,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        trim: true,
        required: true,
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    guardian: {
        type: guardianSchema,
        required: true,
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true,
    },
    profileImg: {
        type: String,
    },
    isActive: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
}, { timestamps: true });
// pre save middleware
studentSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this;
        // hashing password and save into db
        user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bcryptSaltRounds));
        next();
    });
});
// post save middleware
studentSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});
exports.Student = (0, mongoose_1.model)('Student', studentSchema);
