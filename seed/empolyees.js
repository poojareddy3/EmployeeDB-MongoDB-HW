const db = require('../db');
const Employee = require('../models/employee');

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

const main = async () => {

    const employees = [
        {
            first_name: "Miguel",
            last_name: "Lo",
            email: "MiguelLo@YOLO.com",
            job_title: "Software Engineering Instructor",
            address: {
                street: "5th Ave",
                city: "New York",
                state: "NY",
                zip: "10010"
            }
        },
        {
            first_name: "Poojtha",
            last_name: "Vangala",
            email: "poojithavangala@gmail.com",
            job_title: "Software Engineer",
            address: {
                street: "Rocky Brook Estates",
                city: "Monroe Twp",
                state: "NJ",
                zip: "08831"
            }
        },
        {
            first_name: "Archana",
            last_name: "Devi",
            email: "e.archanadevi@gmail.com",
            job_title: "QA Lead",
            address: {
                street: "Ambercrest Court",
                city: "Charlotte",
                state: "NC",
                zip: "28078"
            }
        },
        {
            first_name: "Sudha",
            last_name: "Dachapally",
            email: "sudha1214@gmail.com",
            job_title: "Front-End Developer",
            address: {
                street: "Stevenson Blvd",
                city: "Freemont",
                state: "CA",
                zip: "94538"
            }
        },
        {
            first_name: "Vineela",
            last_name: "Kosuri",
            email: "kosuri.vineela@gmail.com",
            job_title: "Sales Force Engineer",
            address: {
                street: "Gateway Blvd",
                city: "Monroe Twp",
                state: "NJ",
                zip: "08831"
            }
        }
   ]

   await Employee.insertMany(employees);
   console.log("Created Employess!");
}


const run = async () => {
    await main();
    db.close();
};

run();