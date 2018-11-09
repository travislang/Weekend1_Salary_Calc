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
let costs = 0;
function readyNow( ){
    $( '#submitEmployeeBtn' ).on( 'click', newEmployee );
    $( '#employeeInfo' ).on( 'click', $( '.deleteEmployee' ), deleteEmployeeInfo );
}

function deleteEmployeeInfo( ){
    console.log( ' in delete function')
    console.log( $(this))
    for( let person of employees ){
        if( person.id === $( this ).attr( 'id' ) ){
            console.log( 'worked')
        }// check if delete employee matches in array
    }// end for loop
}// end deleteEmployeeInfo function

//create new employee from input fields
function newEmployee( ){
    if ( $('#employeeFirstIn').val() === '' ||
        $('#employeeLastIn').val() === '' ||
        $('#employeeIdIn').val() === '' ||
        $('#employeeTitleIn').val() === '' ||
        $('#employeeSalaryIn').val() === '' ){
        
        alert( 'One or more forms are blank/invalid.  Please try again.' );
    }// if there are input errors
    else{
        let person = new Employee(
            $('#employeeFirstIn').val(),
            $('#employeeLastIn').val(),
            $('#employeeIdIn').val(),
            $('#employeeTitleIn').val(),
            $('#employeeSalaryIn').val(),
        );
        //push new employee into array
        employees.push(person);
        //clear out input vals
        $('#employeeFirstIn').val('');
        $('#employeeLastIn').val('');
        $('#employeeIdIn').val('');
        $('#employeeTitleIn').val('');
        $('#employeeSalaryIn').val('');
        //calculate new costs
        calcCosts();
        //update and display new info
        displayInfo();
    }// if all forms are correct
}// end newEmployee function
    

//calculate monthly costs of employees
function calcCosts( ){
    costs = 0;
    for( let person of employees ){
        costs += parseInt( person.salary );
    }
    costs = costs / 12;
}// end calcCosts function

//send all info to DOM
function displayInfo( ){
    let tableBody = $('#employeeInfo');
    // clear DOM first
    tableBody.empty( );
    // append employees to DOM
    for( let person of employees ){
        tableBody.append(`<tr id="${person.id}"><td>${person.firstName}</td><td>${person.lastName}</td><td>${person.id}</td><td>${person.title}</td><td>${person.salary}</td><td><button id="${person.id}" class="deleteEmployee">Delete</button></td></tr>` );
        // add delete button to every employee
        // $( '#employeeRow' ).append( `<button id="${person.firstName}" class="deleteEmployee">Delete</button>` );
    }
    //push total costs to display on DOM
    let displayCosts = $('#employeeCosts');
    // clear DOM first
    displayCosts.empty( );
    displayCosts.append( `Total Monthly: $${costs.toFixed( 2 ) }` );
    if( costs > 20000 ){
        displayCosts.addClass( 'costsOver' )
    }
}// end displayInfo function