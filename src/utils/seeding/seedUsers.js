const mongoose = require('mongoose');
const {dbConnect, dbClose } = require("../../functions/dbFunctions.js");
const { User } = require("../../models/UserModel.js");
const bcrypt = require("bcrypt");
require("dotenv").config();



const sampleUsers = [
    {
        firstName: "Admin",
        lastName: "User",
        email: "admin@email.com",
        phoneNumber: "1231231231",
        password: bcrypt.hashSync("Admin123123",10),
        role: "admin",
        preferredPaymentType: "cash",
    },
    {
        firstName: "Ben",
        lastName: "Kenobi",
        email: "user1@email.com",
        phoneNumber: "2342342341",
        password: bcrypt.hashSync("User123123",10),
        role: "user",
        preferredPaymentType: "cash",

    },
    {
        firstName: "Han",
        lastName: "Solo",
        email: "user2@email.com",
        phoneNumber: "2343342341",
        password: bcrypt.hashSync("User123123",10),
        role: "user",
        preferredPaymentType: "cash",

    },
    {
        firstName: "Staff",
        lastName: "User",
        email: "staff@email.com",
        phoneNumber: "3453453451",
        password: bcrypt.hashSync("Staff123123",10),
        role: "staff",
        preferredPaymentType: "cash",
    }
]

async function seedUserData() {
    try {
      await dbConnect();
      await User.insertMany(sampleUsers);
      console.log("Sample users have been seeded")
      await dbClose();
    } catch (error) {
      console.log("Error seeding user data.", error);
    }
  }
  

  seedUserData();
  