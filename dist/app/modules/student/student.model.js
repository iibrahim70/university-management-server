"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        tyep: String,
        required: true,
    },
    middleName: {
        tyep: String,
    },
    lastName: {
        tyep: String,
        required: true,
    },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        tyep: String,
        required: true,
    },
    fatherOccupation: {
        tyep: String,
        required: true,
    },
    fatherContactNo: {
        tyep: String,
        required: true,
    },
    fatherEmail: {
        tyep: String,
    },
    motherName: {
        tyep: String,
        required: true,
    },
    motherOccupation: {
        tyep: String,
        required: true,
    },
    motherContactNo: {
        tyep: String,
        required: true,
    },
    motherEmail: {
        tyep: String,
    },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: {
        tyep: String,
        required: true,
    },
    occupation: {
        tyep: String,
        required: true,
    },
    contactNo: {
        tyep: String,
        required: true,
    },
    email: {
        tyep: String,
    },
});
const studentSchema = new mongoose_1.Schema({
    id: {
        tyep: String,
        required: true,
    },
    name: userNameSchema,
    gender: ['male', 'female'],
    dataOfBirth: {
        tyep: String,
        required: true,
    },
    email: {
        tyep: String,
        required: true,
    },
    contactNo: {
        tyep: String,
        required: true,
    },
    emergencyContactNo: {
        tyep: String,
        required: true,
    },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAdress: {
        tyep: String,
        required: true,
    },
    permanentAdress: {
        tyep: String,
        required: true,
    },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: {
        tyep: String,
    },
    isActive: ['active', 'inactive'],
});
const Student = (0, mongoose_1.model)('Student', studentSchema);
