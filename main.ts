#! /usr/bin/env node 

import inquirer from "inquirer"

import chalk from "chalk"

let answer = await inquirer.prompt (
    [
        {
            name : "fullName",
            message : "Enter Your Full Name :",
            type : "input",
        },
        {
            name : "guardianName",
            message : "Enter Your Father Name :",
            type : "input",
        },
        {
            name : "dateOfBirth",
            message : "Enter Your Date Of Birth :",
            type : "input",
        },
        {
            name : "city",
            message : "Chose Your City :",
            type : "list",
            choices : ["Karachi","Hyderabad","Mirpurkhas","Sukkar","Nawab Shah","Umer Kot"]
        },
        {
            name : "CNICNumber",
            message : "Enter your CNIC Number :",
            type : "input"
        },
        {
            name : "regNumber",
            message : "Enter Your Registration Number :",
            type : "input",
        },
        {
            name : "day",
            message : "Chose Your Day :",
            type : "list",
            choices : ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
        },
        {
            name : "time",
            message : "Chose Your Time :",
            type : "list",
            choices : ["09:00 AM - 12:00 PM","02:00 PM - 05:00 PM","07:00 PM - 10:00 PM"]
        }
    ]
);
console.log (chalk.bgBlueBright.bold("Governor Sindh Initiative for Artificial Intelligency, Web 3.0 & Metaverse"))
console.log(chalk.bgCyanBright.italic.bold("GENERATE YOUR ADMIT CARD"));
console.log (chalk.magenta.bold(`Name : ${answer.fullName}`))
console.log (chalk.magenta.bold(`Father Name : ${answer.guardianName}`))
console.log (chalk.magenta.bold(`Date Of Birth : ${answer.dateOfBirth}`))
console.log (chalk.magenta.bold(`City : ${answer.city}`))
console.log(chalk.magenta.bold(`Student CNIC Number : ${answer.CNICNumber}`))
console.log (chalk.magenta.bold(`Student Reg Number : ${answer.regNumber}`))
console.log(chalk.magenta.bold(`Days/Time : ${answer.day}-${answer.time}`))
console.log (chalk.bgYellowBright.bold.italic("Venue : Governor House Sindh"))