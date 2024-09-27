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