const employees = [
    { name: "Alice", age: 22, salary: 800, dob: "2002-03-15" },
    { name: "Bob", age: 28, salary: 6000, dob: "1996-07-10" },
    { name: "Charlie", age: 25, salary: 4500, dob: "1999-01-20" },
    { name: "David", age: 30, salary: 9000, dob: "1994-05-18" },
    { name: "Eva", age: 21, salary: 900, dob: "2003-11-25" }
];

const output = document.getElementById("output");

function showAllEmployees() {
    output.textContent = JSON.stringify(employees, null, 2);
    console.log("All Employees:", employees);
}

function salaryGreaterThan5000() {
    const result = employees.filter(emp => emp.salary > 5000);
    output.textContent = JSON.stringify(result, null, 2);
    console.log("Salary > 5000:", result);
}

function groupByAge() {
    const grouped = employees.reduce((acc, emp) => {
        acc[emp.age] = acc[emp.age] || [];
        acc[emp.age].push(emp);
        return acc;
    }, {});
    output.textContent = JSON.stringify(grouped, null, 2);
    console.log("Grouped By Age:", grouped);
}

function incrementLowSalary() {
    const updated = employees
        .filter(emp => emp.salary < 1000 && emp.age > 20)
        .map(emp => ({
            ...emp,
            salary: emp.salary * 5
        }));

    output.textContent = JSON.stringify(updated, null, 2);
    console.log("After Salary Increment:", updated);
}
