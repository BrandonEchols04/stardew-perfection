console.log("Script is running.");

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

  if (tabName === 'itemsShipped') {
    console.log('Items Shipped tab opened');

    setTimeout(function() {
        var checkboxes = document.querySelectorAll('.class10');
        console.log('Number of checkboxes in Items Shipped: ', checkboxes.length);

        checkboxes.forEach(function(checkbox) {
          console.log('Adding event listener to checkbox in Items Shipped');

          checkbox.addEventListener('change', function() {
            console.log('Checkbox in Items Shipped checked or unchecked');

            var checkedItems = 0;
            checkboxes.forEach(function(checkbox) {
              if (checkbox.checked) {
                checkedItems++;
              }
            });

            console.log('Number of checked items in itemsShipped: ', checkedItems);
          });
        });
    }, 1000);
}

    if (tabName === 'buildings') {
        // Set up event listeners for the 'subcat1' subcategory
        var checkboxes1 = document.querySelectorAll('.class2');
        checkboxes1.forEach(function(checkbox) {
          checkbox.addEventListener('change', function() {
            var checkedItems = 0;
            checkboxes1.forEach(function(checkbox) {
              if (checkbox.checked) {
                checkedItems++;
              }
            });
            console.log('Number of checked items in buildings: ', checkedItems);
          });
        });

        // Set up event listeners for the 'subcat2' subcategory
        var checkboxes2 = document.querySelectorAll('.class3');
        checkboxes2.forEach(function(checkbox) {
          checkbox.addEventListener('change', function() {
            var checkedItems = 0;
            checkboxes2.forEach(function(checkbox) {
              if (checkbox.checked) {
                checkedItems++;
              }
            });
            console.log('Number of checked items in goldClock: ', checkedItems);
          });
        });
      }



    if (tabName === 'monsterEradication') {
        var checkboxes = document.querySelectorAll('.class4');
        checkboxes.forEach(function(checkbox) {
          checkbox.addEventListener('change', function() {
            var checkedItems = 0;
            checkboxes.forEach(function(checkbox) {
              if (checkbox.checked) {
                checkedItems++;
              }
            });
            console.log('Number of checked items in monsterEradication: ', checkedItems);
          });
        });
    }

    //HERE BE FRIENDSHIP

    //HERE BE SKILLS


    if (tabName === 'stardrops') {
        var checkboxes = document.querySelectorAll('.class7');
        checkboxes.forEach(function(checkbox) {
          checkbox.addEventListener('change', function() {
            var checkedItems = 0;
            checkboxes.forEach(function(checkbox) {
              if (checkbox.checked) {
                checkedItems++;
              }
            });
            console.log('Number of checked items in stardrops: ', checkedItems);
          });
        });
    }


    if (tabName === 'recipesCooked') {
        var checkboxes = document.querySelectorAll('.class8');
        checkboxes.forEach(function(checkbox) {
          checkbox.addEventListener('change', function() {
            var checkedItems = 0;
            checkboxes.forEach(function(checkbox) {
              if (checkbox.checked) {
                checkedItems++;
              }
            });
            console.log('Number of checked items in recipesCooked: ', checkedItems);
          });
        });
    }


    if (tabName === 'recipesCrafted') {
        var checkboxes = document.querySelectorAll('.class9');
        checkboxes.forEach(function(checkbox) {
          checkbox.addEventListener('change', function() {
            var checkedItems = 0;
            checkboxes.forEach(function(checkbox) {
              if (checkbox.checked) {
                checkedItems++;
              }
            });
            console.log('Number of checked items in recipesCrafted: ', checkedItems);
          });
        });
    }


    if (tabName === 'fish') {
        var checkboxes = document.querySelectorAll('.class10');
        checkboxes.forEach(function(checkbox) {
          checkbox.addEventListener('change', function() {
            var checkedItems = 0;
            checkboxes.forEach(function(checkbox) {
              if (checkbox.checked) {
                checkedItems++;
              }
            });
            console.log('Number of checked items in fish: ', checkedItems);
          });
        });
    }

    //HERE BE WALNUTS


}

document.getElementById("defaultOpen").click();

document.addEventListener("DOMContentLoaded", function(){
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
});



function validateNumber(input) {
    var min = input.min ? parseInt(input.min) : null;
    var max = input.max ? parseInt(input.max) : null;

    if (input.value < min) {
      input.value = min;
    } else if (input.value > max) {
      input.value = max;
    }
  }





  document.addEventListener("DOMContentLoaded", function(){

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

  });

document.addEventListener("DOMContentLoaded", function() {

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

console.log("There are " + recipesCraftedTotal + " obtainable recipes with the current configuration.");

});

document.addEventListener('DOMContentLoaded', function() {
console.log('DOMContentLoaded event fired');


});
