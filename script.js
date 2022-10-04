let objUser = [
    {
        username: "fredrik",
        password: "12345"
    },
    {
        username: "kalle",
        password: "abcde"
    },
    {
        username: "stina",
        password: "hej22"
    },
    {
        username: "klara",
        password: "hejsan"
    },
    {
        username: "krister",
        password: "56789"
    }
]

const statusText = document.querySelector(".statustext");
const smallHeading = document.querySelector(".smallheading");
const textArea = document.querySelector(".textarea");
const logInForm = document.getElementById("loginform");
const username = document.getElementById("username");
const password = document.getElementById("password");
const btnIn = document.getElementById("btn-in");
const btnOut = document.getElementById("btn-out");
const headingFooter = document.querySelector(".headingfooter");
const textFooter = document.querySelector(".textfooter");

btnIn.addEventListener("click", checkLogIn);
btnOut.addEventListener("click", logOut);

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
    document.querySelector(".smallheading").innerText = `Välkommen ${username.value}! Jippi du är nu inloggad på din Medlemssida hos AmazingPage.`;
    document.querySelector(".smallheading").style.color = "green";
    document.getElementById("loginform").style.display = "none";
    document.querySelector(".textarea").innerText = "Här kan du ta del av dina Amazing Medlemserbjudanden!";
    document.getElementById("btn-out").style.display = "block";
}

function logInFail() {
    document.querySelector(".statustext").innerText = "MISSLYCKAD INLOGGNING";
    document.querySelector(".statustext").style.color = "red";
    document.querySelector(".smallheading").innerText = "Oops någonting gick fel";
    document.querySelector(".smallheading").style.color = "red";
    document.querySelector(".textarea").innerText ="Användarnamn och/eller lösenord är felaktigt. Vänligen försök igen";
    username.value = "";
    password.value = "";
}

function logOut() {
    document.querySelector(".statustext").innerText = "UTLOGGAD";
    document.querySelector(".statustext").style.color = "blue";
    document.getElementById("btn-out").style.display = "none";
    document.querySelector(".smallheading").innerText = "Du är nu utloggad! Va roligt att du besökte AmazingPage, vi ses snart igen.";
    document.querySelector(".smallheading").style.color ="blue";
    document.getElementById("loginform").style.display = "block";
    document.querySelector(".textarea").style.display = "none";
    username.value = "";
    password.value = "";
    localStorage.removeItem("username");
}

