function openTab(evt, tabName) {
  console.log('openTab function called; tabName: ', tabName);

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  var z1 = document.querySelector("#z1");
  var h69 = document.querySelector("#" + tabName).querySelector("#h69");

  if(h69) {
    console.log("Attempting to modify Wedding Ring.");
    h69.disabled = z1.checked;
  }


}

var checkedItemsClass1 = 0;
var checkedItemsClass2 = 0;
var checkedItemsClass3 = 0;
var checkedItemsClass4 = 0;
var totalDropdownsClass5 = 0;
var totalDropdownsClass6 = 0;
var checkedItemsClass7 = 0;
var checkedItemsClass8 = 0;
var checkedItemsClass9 = 0;
var checkedItemsClass10 = 0;
var inputFieldClass11 = 0;

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOMContentLoaded event fired');

console.log("Script is running.");


document.addEventListener('change', function(event) {
  // If the element that triggered the event is a checkbox
  if (event.target.type === 'checkbox') {
    // If the checkbox has the class 'class10'
    if (event.target.classList.contains('class1')) {
      var checkedItemsClass1 = document.querySelectorAll('.class1:checked').length;
      console.log('Number of checked items in itemsShipped: ', checkedItemsClass1);
    }
    if (event.target.classList.contains('class2')) {
      var checkedItemsClass2 = document.querySelectorAll('.class2:checked').length;
      console.log('Number of checked items in buildings: ', checkedItemsClass2);
    }
    if (event.target.classList.contains('class3')) {
      var checkedItemsClass3 = document.querySelectorAll('.class3:checked').length;
      console.log('Number of checked items in goldClock: ', checkedItemsClass3);
    }
    if (event.target.classList.contains('class4')) {
      var checkedItemsClass4 = document.querySelectorAll('.class4:checked').length;
      console.log('Number of checked items in monsterEradication: ', checkedItemsClass4);
    }
    var dropdownsClass5 = document.querySelectorAll('.class5');
dropdownsClass5.forEach(function(dropdown) {
    dropdown.addEventListener('change', function() {
        var totalDropdownsClass5 = 0;
        dropdownsClass5.forEach(function(dropdown) {
            totalDropdownsClass5 += Number(dropdown.value);
        });
        console.log('Total value in friendship dropdowns: ', totalDropdownsClass5);
    });
});

var dropdownsClass6 = document.querySelectorAll('.class6');
dropdownsClass6.forEach(function(dropdown) {
    dropdown.addEventListener('change', function() {
        var totalDropdownsClass6 = 0;
        dropdownsClass6.forEach(function(dropdown) {
            totalDropdownsClass6 += Number(dropdown.value);
        });
        console.log('Total value in skills dropdowns: ', totalDropdownsClass6);
    });
});
    if (event.target.classList.contains('class7')) {
      var checkedItemsClass7 = document.querySelectorAll('.class7:checked').length;
      console.log('Number of checked items in stardrops: ', checkedItemsClass7);
    }
    if (event.target.classList.contains('class8')) {
      var checkedItemsClass8 = document.querySelectorAll('.class8:checked').length;
      console.log('Number of checked items in recipesCooked: ', checkedItemsClass8);
    }
    if (event.target.classList.contains('class9')) {
      var checkedItemsClass9 = document.querySelectorAll('.class9:checked').length;
      console.log('Number of checked items in recipesCrafted: ', checkedItemsClass9);
    }
    if (event.target.classList.contains('class10')) {
      var checkedItemsClass10 = document.querySelectorAll('.class10:checked').length;
      console.log('Number of checked items in fish: ', checkedItemsClass10);
    }
    var inputFieldClass11 = document.querySelector('.class11');
inputFieldClass11.addEventListener('input', function() {
    var inputValueClass11 = Number(inputFieldClass11.value);
    console.log('Value in walnuts input field: ', inputValueClass11);
});


  }
});


document.getElementById("defaultOpen").click();

  var z1 = document.querySelector("#z1");

  z1.addEventListener("change", function() {
    var h69 = document.querySelector("#h69");
    if(h69){
      if(this.checked) {
        console.log("Disabling Wedding Ring.");
        h69.disabled = true;
      } else {
        console.log("Enabling Wedding Ring.");
        h69.disabled = false;
      }
    }
  });


    document.getElementById("defaultOpen").click();

    var z1 = document.querySelector("#z1");

    z1.addEventListener("change", function() {
      var h69 = document.querySelector("#h69");
      if(h69){
        if(this.checked) {
          console.log("Disabling Wedding Ring.");
          h69.disabled = true;
        } else {
          console.log("Enabling Wedding Ring.");
          h69.disabled = false;
        }
      }
    });


    window.validateNumber = function(input) {
        var min = input.min ? parseInt(input.min) : null;
        var max = input.max ? parseInt(input.max) : null;

        if (input.value < min) {
          input.value = min;
        } else if (input.value > max) {
          input.value = max;
        }
    };


    var checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(function(checkbox) {
      var saved = localStorage.getItem(checkbox.id);
      if(saved !== null) {
        checkbox.checked = (saved === 'true');
      }

      checkbox.addEventListener("change", function() {
        localStorage.setItem(checkbox.id, checkbox.checked);
      });
    });

    var selects = document.querySelectorAll("select");
    selects.forEach(function(select) {

      var saved = localStorage.getItem(select.id);
      if(saved !== null) {
        select.value = saved;
      }

      select.addEventListener("change", function() {
        localStorage.setItem(select.id, select.value);
      });
    });

    var numberInputs = document.querySelectorAll("input[type=number]");
    numberInputs.forEach(function(numberInput) {
      var saved = localStorage.getItem(numberInput.id);
      if(saved !== null) {
        numberInput.value = saved;
      }

      numberInput.addEventListener("change", function() {
        localStorage.setItem(numberInput.id, numberInput.value);
      });
    });


  var z1Object = {
    _z1Value: false,
    recipesCraftedTotal: 130,
    set z1Value(value) {
      this._z1Value = value;
      this.recipesCraftedTotal = this._z1Value === true ? 129 : 130;
    },
    get z1Value() {
      return this._z1Value;
    }
  };

  var z1Checkbox = document.getElementById("z1");

  z1Object.z1Value = z1Checkbox.checked;

  z1Checkbox.addEventListener('change', function() {
    z1Object.z1Value = this.checked;
    console.log("Z1's Value: " + z1Object.z1Value);
    console.log("There are " + z1Object.recipesCraftedTotal + " obtainable recipes with the current configuration.");
  });


var itemsShippedTotal = 145;
var buildingsTotal = 4;
var goldClockTotal = 1;
var monsterEradication = 12;
var friendshipTotal = 136;
var skillsTotal = 125;
var stardropsTotal = 7;
var recipesCookedTotal = 80;
var recipesCraftedTotal = z1Object.recipesCraftedTotal;
var fishTotal = 67;
var walnutsTotal = 130;

/*

checkedItemsClass1 = 0;
checkedItemsClass2 = 0;
checkedItemsClass3 = 0;
checkedItemsClass4 = 0;
totalDropdownsClass5 = 0;
totalDropdownsClass6 = 0;
checkedItemsClass7 = 0;
checkedItemsClass8 = 0;
checkedItemsClass9 = 0;
checkedItemsClass10 = 0;
inputFieldClass11 = 0;

*/

var itemsShippedPCT, buildingsSubPCT, goldClockSubPCT, buildingsPCT, monsterEradicationPCT, friendshipPCT, skillsPCT, stardropsPCT, recipesCookedPCT, recipesCraftedPCT, fishPCT, walnutsPCT;

console.log("There are " + recipesCraftedTotal + " obtainable recipes with the current configuration.");








});
