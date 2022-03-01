const db = require('./db');
const Employee = require('./models/user');

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

const findAll = async () => {
    const findAllEmployees = await Employee.find({});
    console.log(findAllEmployees);
}

const createOneEmployee = async () => {
    const newEmployee = new Employee({
        first_name: "sammual", 
		last_name: "lee",
		email: "sammuallee@gmail.com",
		job_title: "cloud Engineer",
		address: {
			street: "1 Ave north",
        	city: "Manhattan",
        	state: "NY",
    		zip: "11100"
			}
    })
    await newEmployee.save();
    console.log("Created one Employee!")
}

const createThreeEmployees = async () => {
    const manyEmployees = [
    {
        first_name: "Chris", 
		last_name: "Papa",
		email: "Chrispapa@gmail.com",
		job_title: "product designer",
		address: {
			street: "251 academy",
        	city: "Jersey city",
        	state: "NJ",
    		zip: "07306"
			}
    },
    {
        first_name: "Danielle", 
		last_name: "Mike",
		email: "daniellemike@gmail.com",
		job_title: "Linux admin",
		address: {
			street: "2 perrine ave",
        	city: "Delavware",
        	state: "MA",
    		zip: "35943"
			}
    },
    {
        first_name: "Rafael", 
		last_name: "Host",
		email: "rafaelhost@gmail.com",
		job_title: "Deveploment Engineer",
		address: {
			street: "Sam adam",
        	city: "Bostpm",
        	state: "Texas",
    		zip: "65930"
			}
    }
]
  await Employee.insertMany(manyEmployees);
  console.log("Inserted Many Employees!")
}


const updateEmployee =  async () => {
    const updateEmpoloyee = await Employee.updateOne({job_title: "Deveploment Engineer"}, { job_title: "Lead Deveploment Engineer"});
    console.log(updateEmpoloyee);
}

const deleteEmployee = async () => {
  const delEmp = await Employee.deleteOne({first_name: "Chris"});
  console.log(delEmp);
}

const employeeFullName = async () => {
    const employeeFullName = await Employee.find({}, {_id: 0, first_name: 1, last_name: 1});
    for(let i = 0; i < employeeFullName.length; i++){
    console.log((employeeFullName[i].first_name) +  ' ' + (employeeFullName[i].last_name));
   //console.log(employeeFullName);
    }
}

const run = async () => {
    //await findAll();
     //await createOneEmployee();
     //await createThreeEmployees();
     //await updateEmployee();
     //await deleteEmployee();
    await employeeFullName();
    db.close();
};

run();