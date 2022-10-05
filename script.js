let objUser = [
    {
        username: "fredrik",
        password: "12345"
    },
    {
        username: "kalle",
        password: "23456"
    },
    {
        username: "stina",
        password: "34567"
    },
]

localStorage.setItem("user", JSON.stringify(objUser));

let getUser = JSON.parse(localStorage.getItem("user"));


const statusText = document.querySelector(".statustext");
const smallHeading = document.querySelector(".smallheading");
const textArea = document.querySelector(".textarea");
const headingFooter = document.querySelector(".headingfooter");
const textFooter = document.querySelector(".textfooter");

const logInForm = document.getElementById("loginform");
const username = document.getElementById("username");
const password = document.getElementById("password");

const newUserForm = document.getElementById("newuserform");
const inputNewUser = document.getElementById("inputnewuser");
const inputNewPassword = document.getElementById("inputnewpassword");

const btnIn = document.getElementById("btn-in");
const btnOut = document.getElementById("btn-out");
const btnNewUserForm = document.getElementById("btn-newuserform");
const btnCreateNewUser = document.getElementById("btn-createnewuser");
const btnStartPage = document.getElementById("btn-startpage");


btnIn.addEventListener("click", checkLogIn);
btnOut.addEventListener("click", logOut);
btnNewUserForm.addEventListener("click", becomeNewUser);
btnCreateNewUser.addEventListener("click", createNewUser);
btnStartPage.addEventListener("click", backToStart);


function inIt() {
    if (localStorage.getItem("username")) {
        logInSuccess();
    }
}

inIt();

function checkLogIn() {

    for(i=0; i < objUser.length; i++) {
        if(username.value === objUser[i].username && password.value === objUser[i].password) {
            localStorage.setItem("username", username.value);     
            logInSuccess();
            return
        }
    }

    logInFail();
}

function logInSuccess() {    
    document.querySelector(".statustext").innerText = "INLOGGAD";
    document.querySelector(".statustext").style.color = "green";
    document.querySelector(".smallheading").innerText = `Välkommen ${localStorage.getItem("username")}! Jippi, du är nu inloggad på din Medlemssida hos AmazingPage.`;
    document.querySelector(".smallheading").style.color = "black";
    document.getElementById("loginform").style.display = "none";
    document.querySelector(".textarea").innerText = "Här kan du ta del av dina Amazing Medlemserbjudanden!";
    document.getElementById("btn-out").style.display = "block";
    document.getElementById("btn-newuserform").style.display = "none";
    document.getElementById("newuserform").style.display = "none";
    
}

function logInFail() {
    document.querySelector(".statustext").innerText = "MISSLYCKAD INLOGGNING";
    document.querySelector(".statustext").style.color = "red";
    document.querySelector(".smallheading").innerText = "Oops någonting gick fel";
    document.querySelector(".smallheading").style.color = "red";
    document.querySelector(".textarea").style.display = "block";
    document.querySelector(".textarea").innerText ="Användarnamn och/eller lösenord är felaktigt. Vänligen försök igen";
    document.getElementById("newuserform").style.display = "none";
    username.value = "";
    password.value = "";
}

function logOut() {
    document.querySelector(".statustext").innerText = "UTLOGGAD";
    document.querySelector(".statustext").style.color = "blue";
    document.getElementById("btn-out").style.display = "none";
    document.querySelector(".smallheading").innerText = "Du är nu utloggad! Va roligt att du besökte AmazingPage, vi ses snart igen.";
    document.querySelector(".smallheading").style.color ="black";
    document.querySelector(".textarea").style.display = "none";
    document.getElementById("btn-startpage").style.display = "block";
    document.getElementById("newuserform").style.display = "none";
    username.value = "";
    password.value = "";
    localStorage.removeItem("username");
}

function becomeNewUser() {
    document.getElementById("newuserform").style.display = "block";
    document.getElementById("btn-newuserform").style.display = "none";
    document.getElementById("btn-out").style.display = "none";
    document.querySelector(".statustext").innerText = "SNART ÄR DU MEDLEM";
    document.querySelector(".statustext").style.color = "yellow";
    document.querySelector(".smallheading").innerText = "Vad roligt att du vill bli medlem hos AmazingPage";
    document.querySelector(".smallheading").style.color = "black";
    document.getElementById("loginform").style.display = "none";
    document.querySelector(".textarea").innerText = "Vänligen välj ett användarnamn och ett lösenord så är du snart medlem hos oss och kan ta del av unika medlemserbjudanden!";
    document.getElementById("btn-out").style.display = "none";
    document.getElementById("btn-startpage").style.display = "block";
}

function createNewUser(){
    const newUser = {
        username: inputNewUser.value,
        password: inputNewPassword.value
    }

    const createUser = inputNewUser.value;
    const createPassword = inputNewPassword.value;

    if (createUser && createPassword) {
        localStorage.setItem(createUser, createPassword);
    }

    const getUser = JSON.parse(localStorage.getItem("user"));

    getUser.push(newUser);

    localStorage.setItem("user", JSON.stringify(getUser));

    document.getElementById("newuserform").style.display = "none";
    document.getElementById("btn-newuserform").style.display = "none";
    document.getElementById("btn-out").style.display = "none";
    document.querySelector(".statustext").innerText = "VÄLKOMMEN";
    document.querySelector(".statustext").style.color = "black";
    document.querySelector(".smallheading").innerText = "Välkommen!!! Hurra, du är nu medlem hos AmazingPage";
    document.querySelector(".smallheading").style.color = "black";
    document.getElementById("loginform").style.display = "block";
    document.querySelector(".textarea").innerText = "Du kan logga in här direkt eller gå tillbaka till Startsidan";
    document.getElementById("btn-out").style.display = "none";

}

function backToStart() {

    document.querySelector(".statustext").innerText = "VÄLKOMMEN";
    document.querySelector(".statustext").style.color = "black";
    document.getElementById("btn-out").style.display = "none";
    document.querySelector(".smallheading").innerText = "Välkommen till AmazingPage AB";
    document.querySelector(".smallheading").style.color ="black";
    document.querySelector(".textarea").style.display = "block";
    document.querySelector(".textarea").innerText = "Är du medlem hos oss? Välkommen att logga in för att ta del av dina unika medlemserbjudanden.";
    document.getElementById("loginform").style.display = "block";
    document.getElementById("btn-startpage").style.display = "none";
    document.getElementById("btn-newuserform").style.display = "block";
    document.getElementById("newuserform").style.display = "none";
}