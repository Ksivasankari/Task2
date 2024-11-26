//Initialize the employees
let employees=[{id:101,name:'siva',department:'engineering',salary:50000,bp:50,exp:2},
               {id:102,name:'vika',department:'HR',salary:40000,bp:50,exp:3},
               {id:103,name:'shree',department:'sales',salary:45000,bp:50,exp:1,target:200000},
               {id:104,name:'vishnu',department:'HR',salary:40000,bp:50,exp:4},
               {id:101,name:'siva',department:'engineering',salary:50000,bp:50,exp:2}
];
const choosenDepartment='HR';
let HR = [];
let engineering = [];
let sales = [];
let report = [];

//remove Duplicate
function removeDuplicate()
{
    let uniqueEmployeesId = new Set();
    let uniqueEmployeesList=[];
    for(let emp of employees)
    {
        if(!uniqueEmployeesId.has(emp.id)){
            uniqueEmployeesId.add(emp.id);
            uniqueEmployeesList.push(emp);
            
        }
    }
    return uniqueEmployeesList;
}

//added bonus by their department && condition
function departmentBonus(uniqueEmployeesList)
{
  for(let i of uniqueEmployeesList)
  {
    if(i.department==='HR' && i.salary<50000)
    {
        i.bp=i.bp + 10;
    }
    else if(i.department==='engineering' && i.exp>2)
    {
        i.bp=i.bp + 15;
    }
    else 
    {
        if(i.target<=100000)
        {
            i.bp=i.bp + 5;
        }
        else if(i.target<100000 && i.target>500000)
        {
            i.bp=i.bp + 10;
        }
        else
        {
            i.bp=i.bp + 20;
        }
    }
  } 
}

//filter employees by their department
function filterEmployeeByDepartment(uniqueEmployeesList)
 {
  //return uniqueEmployeesList.filter(emp =>emp.department === choosenDepartment);
   if(choosenDepartment === 'HR')
   {
        HR = uniqueEmployeesList.filter(emp =>emp.department === choosenDepartment);
        return HR;
   } 
   else if(choosenDepartment === 'engineering')
   {
    engineering = uniqueEmployeesList.filter(emp =>emp.department === choosenDepartment);
    return engineering;
   }
   else if(choosenDepartment === 'sales')
   {
    sales = uniqueEmployeesList.filter(emp =>emp.department === choosenDepartment);
    return sales;
   }
}

//calculate the total compensation
function calculateCompensation(filteredEmployees)
{
  for(let i of filteredEmployees)
  {
    i.totalCompensation=i.salary + (i.salary * i.bp/100);
  }
}

function finalReport()
{
  report = [HR,engineering,sales];
}

function generateReport()
{
    let uniqueEmployeesList=removeDuplicate();
    //console.log(uniqueEmployeesList);
    departmentBonus(uniqueEmployeesList);
    //console.log(uniqueEmployeesList);
    let filteredEmployees=filterEmployeeByDepartment(uniqueEmployeesList);
    calculateCompensation(filteredEmployees);
    //console.log(filteredEmployees);
    //console.log(HR);
    finalReport();
    console.log(report);
}
generateReport();
