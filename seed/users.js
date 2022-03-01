const db = require('../db')  //from index.js
const Employee = require('../models/user')

db.on('error',console.error.bind(console,'Mongo connection error'))

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
            first_name: "Bosen",
            last_name: "Li",
            email: "bosenli@gmail.com",
            job_title: "Software Engineer III",
            address: {
                street: "6th Ave",
                city: "New Jersey",
                state: "NJ",
                zip: "07306"
            }
        },
        {
            first_name: "Poojitha",
            last_name: "Vangala",
            email: "poojithavangala@gmail.com",
            job_title: "Software Engineer I",
            address: {
                street: "10th Ave",
                city: "Connecticut",
                state: "CT",
                zip: "11232"
            }
        },
        {
            first_name: "sjuwana",
            last_name: "hang",
            email: "juwana@gmail.com",
            job_title: "IT support Engineer I",
            address: {
                street: "20th Ave",
                city: "Texas",
                state: "TX",
                zip: "11423"
            }
        },
        {
            first_name: "Vineela",
            last_name: "Kos",
            email: "vineslakos@gmail.com",
            job_title: "Cutomer Service Engineer I",
            address: {
                street: "19th Ave",
                city: "California",
                state: "CA",
                zip: "57382"
            }
        },
    
    ]
    //User is schema from users.js
    await Employee.insertMany(employees)
    console.log("Employees Created!")
  }
  
  const run = async () => {
    await main()
    db.close()
  }
  run()