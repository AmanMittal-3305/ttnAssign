var employee = {
    name: "",
    dob: "",
    salary: 0
};

function storeEmployee() {
    employee.name = document.getElementById("empName").value;
    employee.dob = document.getElementById("birthDate").value;
    employee.salary = document.getElementById("monthlyPay").value;
    const copiedEmployee = { ...employee };

    alert("Original employee created");
    console.log("Original Employee Object:", employee);
    console.log("Copied Employee Object:", copiedEmployee);
}
