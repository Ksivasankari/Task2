# Task2
1. Initialize Data:
● Employee List:
Create a list of employees with duplicates. Each employee object should
include:
○ id: A unique identifier for the employee.
○ name: Name of the employee.
○ department: Department to which the employee belongs.
○ salary: Base salary of the employee (in rupees).
○ bonusPercentage: The percentage of salary to be given as a
bonus.

● Department Bonus Criteria:
Define bonus rules for each department:
○ HR: 10% additional bonus if salary is below ₹50,000.
○ Engineering: 15% bonus for employees with more than 2 years in
the company (optional: yearsOfExperience).
○ Sales: Bonus based on sales targets:
■ Sales below ₹1,00,000: 5%.
■ Sales between ₹1,00,000 and ₹5,00,000: 10%.
■ Sales above ₹5,00,000: 20%.

2. Functionality:
● Remove Duplicates:
Use a Set to eliminate duplicate entries from the employee list based on
the id.
● Filter Employees by Department:
Take a department name as input and return a filtered list of employees
belonging to that department.
● Calculate Total Compensation:
For each employee, calculate:
○ Base salary.

○ Bonus based on the department rules.
○ Total compensation (salary + bonus).
● Generate Report:
For the filtered employees:
○ Include the name, department, salary, bonus, and total
compensation.
○ Group the employees by department in the output.
● Update Employee Details:
Update each employee object with their computed bonus and total
compensation.
3. Technical Requirements:
● Use map and filter for processing arrays.
● Use a Set to remove duplicates.
● Use switch or if...else for conditional bonus calculation.
● Utilise for...of or for...in loops for iterating through employee lists or
departments.
● Apply appropriate operators (+=, *=, etc.) for bonus and total
compensation calculations.
4. Output:
The function should return:
A summary report grouped by department:
{
HR: [
{ name: 'Alice', salary: 40000, bonus: 4000, totalCompensation: 44000 },
...
],
Engineering: [
{ name: 'Bob', salary: 60000, bonus: 9000, totalCompensation: 69000 },

...
],
Sales: [
{ name: 'Charlie', salary: 50000, bonus: 5000, totalCompensation: 55000 },
...
]
}
The updated employee list, including the computed bonus and total
compensation for each employee.
5. Sample Execution:
// Input:
const department = "Engineering";

// Output:
{
report: {
Engineering: [
{ name: 'Bob', salary: 60000, bonus: 9000, totalCompensation: 69000 },
{ name: 'Eve', salary: 70000, bonus: 10500, totalCompensation: 80500 },
]
},
updatedEmployees: [
{ id: 1, name: 'Bob', department: 'Engineering', salary: 60000,
bonusPercentage: 15, bonus: 9000, totalCompensation: 69000 },
...
]
}
