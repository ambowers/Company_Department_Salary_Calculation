// Task 1 Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Caiden',
                    salary: 1000000,
                    subordinates: [
                        {
                            name: 'Johnathan',
                            salary: 100000,
                            subordinates:[
                                {
                                    name: 'Josh',
                                    salary: 70000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Bryan',
                    salary: 500000,
                    subordinates:[]
                }
            ]
        },
        {
            departmentName: 'Marketing',
            employees: [
                {
                    name: 'Lina',
                    salary: 150000,
                    subordinates:[
                        {
                            name: 'Katie',
                            salary: 80000,
                            subordinates:[]
                        }
                    ]
                },
                {
                    name: 'Michaela',
                    salary: 100000,
                    subordinates:[]
                }
            ]
        }
    ]
};

//Task 2 create a recursive function to calculate total salary for a department
function calculateDepartmentSalary (department){
    let totalSalary = 0;

    for (let employee of department.employees){
        totalSalary += employee.salary;

        if (employee.subordinates && employee.subordinates.length > 0){ //if employee has subordinates, recursively add salaries to total
            totalSalary += calculateSubordinateSalary(employee);
        }
    }
return totalSalary;
}
function calculateSubordinateSalary(employee){
    let totalSalary = 0;

    for (let subordinate of employee.subordinates) {
        totalSalary += subordinate.salary;

        if (subordinate.subordinates && subordinate.subordinates.length > 0) { //this checks if employee has subordinates (edge case)
            totalSalary += calculateSubordinateSalary(subordinate);
        }
    }
return totalSalary;
}

const engineerSalary = calculateDepartmentSalary(company.departments[0])// calls row 1(engineering department), but use a zero bc "row 1"="0"
const marketingSalary = calculateDepartmentSalary(company.departments[1])

console.log(`Total salary for Engineering Department (including subordinates): $${engineerSalary}`);
console.log(`Total salary for Marketing Department (including subordinates): $${marketingSalary}`);

//Task 3 create a function to calculate total salary for all departments

function calculateCompanySalary (company){
    let totalCompanySalary = 0;

    for (let department of company.departments) {
    if (department.employees && department.employees.length > 0) { //this checks if department has employees (edge case)
        totalCompanySalary += calculateDepartmentSalary(department);
        }
    }
return totalCompanySalary;
}
const totalSalary = calculateCompanySalary(company);
console.log(`The total salary for all departments is $${totalSalary} `)