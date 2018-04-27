// SCRIPT IS LOADED AFTER DOCUMENT BODY FINISHES LOADING
// ONCE DATA IS RETURNED FROM THE RANDOMUSER.ME API, 
// THE getRandomUser FUNCTION IS CALLED WITH THAT DATA
const scr = document.createElement("script");
scr.src = "https://randomuser.me/api/?callback=getRandomUser";
document.body.appendChild(scr);

function getRandomUser(data) {
    // CONSOLE.LOG(DATA) IS FOR TESTING PURPOSES
    console.log(data);
    
    // SEND SPECIFIC PIECES OF DATA TO THE DOM ELEMENTS
    document.getElementById("Pic").getElementsByTagName("img")[0].src = data.results[0].picture.large;
    
    // THIS IS BIG, LONG, AND UGLY, BUT IT MAKES THE FIRST LETTERS 
    // OF THE FIRST AND LAST NAMES CAPITALIZED
    // PROBABLY SHOULD CLEAN IT UP LATER
    document.getElementById("Name").innerHTML = "Hi, my name is " + data.results[0].name.first.charAt(0).toUpperCase() + data.results[0].name.first.slice(1).toLowerCase() + " " + data.results[0].name.last.charAt(0).toUpperCase() + data.results[0].name.last.slice(1).toLowerCase() + ".";
    
    document.getElementById("Email").innerHTML = "My email address is " + data.results[0].email + ".";
    document.getElementById("Birthday").innerHTML = "My birthday is " + data.results[0].dob + ".";
    document.getElementById("Address").innerHTML = "My home address is " + data.results[0].location.street + ".";
    document.getElementById("Phone").innerHTML = "My phone number is " + data.results[0].phone + ".";
    document.getElementById("Password").innerHTML = "My password is " + data.results[0].login.password + ".";
}

//* TO DO: CREATE FUNCTION TO TOGGLE 'hidden' STATUS ON DATA POINTS IN THE BODY
