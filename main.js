/* Make these two functions to 
to target all our classes and id 
from the HTML inside the JavaScript 
*/

let id = function(id) {
    document.getElementById(id)};

let classes = function(classes){ 
    document.getElementByClassName(classes)};

// Store the classes and id inside these variables

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),

errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

// Let's target our form and add the submit event listener

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(username, 2, "Username cannot be blank");
});

/* create an engine function with 3 arguments to do the validation work:
id - will target our id
serial - will target our classes [error class, success and failure icons]
message - will print a message inside our .error class
*/

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

    } 
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
}

/* id.value.trim() will remove all the extra white 
spaces from the value which the user inputs.
*/


