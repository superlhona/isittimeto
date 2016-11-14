function renderTime() {
  var currentTime = new Date ();
  var diem = "AM";
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
  
  if (h === 0){
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    diem = "PM";
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;

  }


  var myClock = document.getElementById("clockDisplay");
  myClock.textContent = h + ":" + m + ":" + s + " " + diem;
  myClock.innerText = h + ":" + m + ":" + s + " " + diem;
  setTimeout("renderTime()",1000);
}

renderTime() ;

function checkMe() {
    var currentTime = new Date ();
    var diem = "AM";
    var h = currentTime.getHours();
    
    if (h === 0){
      h = 12;
    } else if (h > 12) {
      h = h - 12;
      diem = "PM";
    }

    // Get the value of the input field with id="theInput"

    // on click result generator
    // morning things
    var morningThings = ["wake up", "drink coffee", "eat breakfast", "work", "read newspaper"];
    var always = ["drink water", "dance", "be happy", "get a life"];
        var eveningThings = ["eat dinner", "have dinner", "sleep"];
        var drinking = ["drink beer", "drink alcohol", "drink wine", "drink tequila", "drink vodka"];
    x = document.getElementById("theInput").value;
console.log(x);


if (morningThings.indexOf(x) > -1 && diem == "AM" && (h > 7 || h < 11)) {
        window.location.href = "yes.html";
    } else if (eveningThings.indexOf(x) > -1 && diem == "PM" && (h > 5 || h < 11)) {
        window.location.href = "yes.html";
    } else if (drinking.indexOf(x) > -1 && diem == "PM" && (h > 4 || h < 12)) {
        window.location.href = "yes.html";
    }  else if (always.indexOf(x) > -1) {
        window.location.href = "always.html";
      } else {
        window.location.href = "no.html";
      }
}

