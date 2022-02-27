const db = require('./db');
const Employee = require('./models/employee');

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

const findAll = async () => {
    const findAllEmployees = await Employee.find({});
    console.log(findAllEmployees);
}

const createEmployee = async () => {
    const newEmployee = new Employee({
        first_name: "Nikitha", 
		last_name: "Vangala",
		email: "nikithareddy25@gmail.com",
		job_title: "Software QA Engineer",
		address: {
			street: "76th Ave SE",
        	city: "Mercer Island",
        	state: "WA",
    		zip: "98040"
			}
    })
    await newEmployee.save();
    console.log("Created one Employee!")
}

const createManyEmployees = async () => {
    const manyEmployees = [
    {
        first_name: "Swetha", 
		last_name: "Kolli",
		email: "kns.482@gmail.com",
		job_title: "Lead Software Engineer",
		address: {
			street: "Davino Dr",
        	city: "Monroe Twp",
        	state: "NJ",
    		zip: "08831"
			}
    },
    {
        first_name: "Tho", 
		last_name: "Truong",
		email: "thotruong@gmail.com",
		job_title: "Software Configuration Engineer",
		address: {
			street: "Silver Oak Ct",
        	city: "San Jose",
        	state: "CA",
    		zip: "95120"
			}
    },
    {
        first_name: "Michael", 
		last_name: "Gardner",
		email: "gardnerms@gmail.com",
		job_title: "Dev Ops Engineer",
		address: {
			street: "Craig Dr",
        	city: "Austin",
        	state: "TX",
    		zip: "78727"
			}
    }
]
  await Employee.insertMany(manyEmployees);
  console.log("Inserted Many Employees!")
}


const updateEmployee =  async () => {
    const updateEmp = await Employee.updateOne({job_title: "Software Configuration Engineer"}, { job_title: "Software Configuration Management"});
    console.log(updateEmp);
}

const deleteEmployee = async () => {
  const deleteEmp = await Employee.deleteOne({first_name: "Swetha"});
  console.log(deleteEmp);
}

const empFullName = async () => {
    const empFullName = await Employee.find({}, {_id: 0, first_name: true, last_name: true});
    for(let i = 0; i < empFullName.length; i++){
    console.log((empFullName[i].first_name) +  ' ' + (empFullName[i].last_name));
    //console.log(fullName[i]);
   //console.log(empFullName);
    }
}

const run = async () => {
    await findAll();
    await createEmployee();
    await createManyEmployees();
    await updateEmployee();
    await deleteEmployee();
    await empFullName();
    db.close();
};

run();