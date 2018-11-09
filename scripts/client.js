$( document ).ready( readyNow );

//create employee class
class Employee{
    constructor( first, last, id, title, salary ){
        this.firstName = first;
        this.lastName = last;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }// end constructor
}// end Employee class

//setup employee array
const employees = [];

function readyNow( ){
    $( '#submitEmployeeBtn' ).on( 'click', newEmployee );
}

//create new employee from input fields
function newEmployee( ){
    let person = new Employee(
        $( '#employeeFirstIn' ).val( ),
        $( '#employeeLastIn' ).val( ),
        $( '#employeeIdIn' ).val( ),
        $( '#employeeTitleIn' ).val( ),
        $( '#employeeSalaryIn' ).val( ),
    );
    //push new employee into array
    employees.push( person );
    //clear out input vals
    $('#employeeFirstIn').val('');
    $('#employeeLastIn').val('');
    $('#employeeIdIn').val('');
    $('#employeeTitleIn').val('');
    $('#employeeSalaryIn').val('');
}// end newEmployee function