// ----- Global variables -----
var totalHours = 0;
var slideIndex = 1;

// ----- Greeting (runs when the home page loads) -----
function start() {
  var hour = new Date().getHours();
  var greeting = "";
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("welcome").innerHTML = greeting + "! Pick an opportunity today and be the reason someone smiles.";
  showCity("All");
}

// ----- Show only the rows of the chosen city -----
function showCity(city) {
  var i = 1;
  var shown = 0;
  while (i <= 7) {
    if (city == "All" || document.getElementById("c" + i).innerHTML == city) {
      document.getElementById("r" + i).style.display = "table-row";
      shown++;
    } else {
      document.getElementById("r" + i).style.display = "none";
    }
    i++;
  }
  document.getElementById("oppCount").innerHTML = "Opportunities shown: " + shown;
}

// ----- Sign up for an opportunity -----
function register(id, hours, title) {
  var seats = parseInt(document.getElementById("seats" + id).innerHTML);
  if (seats > 0) {
    seats--;
    document.getElementById("seats" + id).innerHTML = seats;
    totalHours += hours;
    document.getElementById("hoursCount").innerHTML = totalHours;
    window.alert("You are signed up for: " + title);
  } else {
    window.alert("Sorry, this opportunity is full.");
  }
}

// ----- Photo gallery -----
function showSlide(n) {
  var picture = "";
  var text = "";
  switch (n) {
    case 1:
      picture = "https://plus.unsplash.com/premium_photo-1681493792027-22c4c22d2067?auto=format&fit=crop&w=720&q=80";
      text = "A meal handed out with a smile makes a difference in a whole family's day.";
      break;
    case 2:
      picture = "https://plus.unsplash.com/premium_photo-1661769800950-a36da6a69d44?auto=format&fit=crop&w=720&q=80";
      text = "One hour of your time teaches a child a new letter.";
      break;
    default:
      picture = "https://plus.unsplash.com/premium_photo-1663076301966-13da19785af4?auto=format&fit=crop&w=720&q=80";
      text = "A tree planted today shades the neighborhood for many years.";
  }
  document.getElementById("slideBox").innerHTML = "<img src='" + picture + "' width='360' height='220' alt='Volunteering photo'><p>" + text + "</p>";
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > 3) { slideIndex = 1; }
  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex--;
  if (slideIndex < 1) { slideIndex = 3; }
  showSlide(slideIndex);
}

// ----- Ideas list -----
function addIdea() {
  var text = document.getElementById("ideaInput").value;
  if (text == "") {
    window.alert("Please write your idea first.");
  } else {
    document.getElementById("ideaList").innerHTML += "<li>" + text + "</li>";
    document.getElementById("ideaInput").value = "";
  }
}

function clearIdeas() {
  document.getElementById("ideaList").innerHTML = "";
}

// ----- Mouse and focus events -----
function focusField(x) { x.style.backgroundColor = "yellow"; }
function blurField(x) { x.style.backgroundColor = "white"; }
function highlight(x) { x.style.backgroundColor = "#fff3d6"; x.style.color = "#12263a"; }
function unhighlight(x) { x.style.backgroundColor = ""; x.style.color = ""; }

// ----- Form validation -----
function validateLogin() {
  var email = document.forms["loginForm"]["email"].value;
  var password = document.forms["loginForm"]["password"].value;
  if (email == "") {
    window.alert("Email must be filled out");
    return false;
  }
  if (password == "") {
    window.alert("Password must be filled out");
    return false;
  }
  document.getElementById("result").innerHTML = "<p class='msg-ok'>Signed in successfully. Welcome back, " + email + "!</p>";
  return false;
}

function validateSignup() {
  var name = document.forms["signupForm"]["fullname"].value;
  var city = document.forms["signupForm"]["city"].value;
  var password = document.forms["signupForm"]["password"].value;
  var confirm = document.forms["signupForm"]["confirm"].value;
  if (name == "") {
    window.alert("Name must be filled out");
    return false;
  }
  if (city == "") {
    window.alert("Please choose your city");
    return false;
  }
  if (password == "") {
    window.alert("Password must be filled out");
    return false;
  }
  if (password != confirm) {
    window.alert("The passwords do not match");
    return false;
  }
  document.getElementById("result").innerHTML = "<p class='msg-ok'>Welcome, " + name + "! Your account has been created.</p>";
  return false;
}

function resetMessage() {
  document.getElementById("result").innerHTML = "";
}
