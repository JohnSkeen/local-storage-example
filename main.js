const green = document.getElementById("green");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const greenBox = document.getElementById('greenbox');
const blueBox = document.getElementById('bluebox');
const redBox = document.getElementById('redbox');

//===========================================
//  Creating event listener to change color based on preference
//===========================================

function colorClicker(x, y, color) {
    x.addEventListener("change", function(){
    y.style.backgroundColor = this.checked ? color : "grey";
  });
};

document.addEventListener("DOMContentLoaded", colorClicker(green, greenBox, "green"), colorClicker(blue, blueBox, "blue"), colorClicker(red, redBox, "red"));

//===========================================
//  Creating and Implementing Local Storage
//===========================================

// Create const for saved values
const greenPref = localStorage.getItem('greenPref');
const bluePref = localStorage.getItem('bluePref');
const redPref = localStorage.getItem('redPref');


// Sets value of ID based on saved profile settings
const loadSettings = function() {
  if (greenPref !== null) {
    green.checked = (greenPref === 'true');
  }
  if (bluePref !== null) {
    blue.checked = (bluePref === 'true');
  }
  if (redPref !== null) {
    red.checked = (redPref === 'true');
  }
}

// Check if localStorage is available
function testStorage() {
  var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
  }
}

// Runs function if localStorage is enabled
if(testStorage() === true){
  // Run function after DOM loaded
  document.addEventListener("DOMContentLoaded", function() {

    // Save settings to local storage when save button pushed
    document.getElementById("save").addEventListener("click", function() {
      localStorage.setItem('greenPref', green.checked);
      localStorage.setItem('bluePref', blue.checked);
      localStorage.setItem('redPref', red.checked);
      alert('Settings successfully saved!');
    });

    // Send all settings back to default values when cancel pushed
  document.getElementById("cancel").addEventListener("click", function() {
      const cancel = confirm('Are you sure you want to cancel changes?');

      if (cancel) {
        localStorage.setItem('greenPref', green.checked = null)
        localStorage.setItem('bluePref', blue.checked = null)
        localStorage.setItem('redPref', red.checked = null)
      }
    });

    // Run function to load correct settings
    loadSettings();
  });
}

//===========================================
//  Ensuring correct color is loaded when page loads
//===========================================

function correctColor(x, y, color) {
  if(x.checked == true) {
    y.style.backgroundColor = color;
  } else {
    y.style.backgroundColor = "grey";
  }
}

document.addEventListener("DOMContentLoaded", function(){
  correctColor(green, greenBox, "green");
  correctColor(blue, blueBox, "blue");
  correctColor(red, redBox, "red");
});
