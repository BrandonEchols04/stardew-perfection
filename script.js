var overallPCT = 0;

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

  document.getElementById(tabName + "Content").style.display = "block";
  evt.currentTarget.className += " active";

  var z1 = document.querySelector("#z1");
  var h69 = document.querySelector("#" + tabName).querySelector("#h69");

  if(h69) {
    console.log("Attempting to modify Wedding Ring.");
    h69.disabled = z1.checked;
  }


}

var itemsShippedPCT, buildingsSubPCT, goldClockSubPCT, buildingsPCT, monsterEradicationPCT, friendshipPCT, skillsPCT, stardropsPCT, recipesCookedPCT, recipesCraftedPCT, fishPCT, walnutsPCT;

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

var itemsShippedTotal = 145;
var buildingsTotal = 4;
var goldClockTotal = 1;
var monsterEradicationTotal = 12;
var friendshipTotal = 136;
var skillsTotal = 50;
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

console.log("There are " + recipesCraftedTotal + " obtainable recipes with the current configuration.");

document.addEventListener('change', function(event) {



itemsShippedPCT = +((checkedItemsClass1/itemsShippedTotal)*100).toFixed(3);
buildingsSubPCT = +((checkedItemsClass2/buildingsTotal)*100).toFixed(3);
goldClockSubPCT = +((checkedItemsClass3/goldClockTotal)*100).toFixed(3);
buildingsPCT = +((goldClockSubPCT/0.2 + buildingsSubPCT/0.8)).toFixed(3);
monsterEradicationPCT = +((checkedItemsClass4/monsterEradicationTotal)*100).toFixed(3);
friendshipPCT = +((totalDropdownsClass5/friendshipTotal)*100).toFixed(3);
skillsPCT = +((totalDropdownsClass6/skillsTotal)*100).toFixed(3);
stardropsPCT = +((checkedItemsClass7/stardropsTotal)*100).toFixed(3);
recipesCookedPCT = +((checkedItemsClass8/recipesCookedTotal)*100).toFixed(3);
recipesCraftedPCT = +((checkedItemsClass9/recipesCraftedTotal)*100).toFixed(3);
fishPCT = +((checkedItemsClass10/fishTotal)*100).toFixed(3);
walnutsPCT = +((inputFieldClass11/walnutsTotal)*100).toFixed(3);


});

function updateHTML() {
    document.getElementById('itemsShipped').textContent = `Items Shipped: ${itemsShippedPCT}%`;
    document.getElementById('buildingsBuilt').textContent = `Farm Buildings Built: ${buildingsSubPCT}%`;
    document.getElementById('monsterEradication').textContent = `Monster Eradication Goals Completed: ${monsterEradicationPCT}%`;
    document.getElementById('friendship').textContent = `Villager Friendship Levels Maxed: ${friendshipPCT}%`;
    document.getElementById('skills').textContent = `Skill Levels Aquired: ${skillsPCT}%`;
    document.getElementById('stardrops').textContent = `Stardrops Aquired: ${stardropsPCT}%`;
    document.getElementById('recipesCooked').textContent = `Recipes Cooked: ${recipesCookedPCT}%`;
    document.getElementById('recipesCrafted').textContent = `Recipes Crafted: ${recipesCraftedPCT}%`;
    document.getElementById('fish').textContent = `Fish Caught: ${fishPCT}%`;
    document.getElementById('walnuts').textContent = `Golden Walnuts Found: ${walnutsPCT}%`;

    // Calculate the overall percentage as a simple average of all the other percentages:
    document.getElementById('overall').textContent = `Overall: ${overallPCT.toFixed(3)}%`;

}


function updateCounts() {
    checkedItemsClass1 = document.querySelectorAll('.class1:checked').length;
    checkedItemsClass2 = document.querySelectorAll('.class2:checked').length;
    checkedItemsClass3 = document.querySelectorAll('.class3:checked').length;
    checkedItemsClass4 = document.querySelectorAll('.class4:checked').length;

    var dropdownsClass5 = document.querySelectorAll('.class5');
    totalDropdownsClass5 = 0;
    dropdownsClass5.forEach(function(dropdown) {
        totalDropdownsClass5 += Number(dropdown.value);
    });
    var dropdownsClass6 = document.querySelectorAll('.class6');
    totalDropdownsClass6 = 0;
    dropdownsClass6.forEach(function(dropdown) {
        totalDropdownsClass6 += Number(dropdown.value);
    });

    checkedItemsClass7 = document.querySelectorAll('.class7:checked').length;
    checkedItemsClass8 = document.querySelectorAll('.class8:checked').length;
    checkedItemsClass9 = document.querySelectorAll('.class9:checked').length;
    checkedItemsClass10 = document.querySelectorAll('.class10:checked').length;

    inputFieldClass11 = Number(document.querySelector('.class11').value);

    itemsShippedPCT = Math.min(100, +((checkedItemsClass1/itemsShippedTotal)*100).toFixed(3));
    buildingsSubPCT = Math.min(100, +((checkedItemsClass2/buildingsTotal)*100).toFixed(3));
    goldClockSubPCT = Math.min(100, +((checkedItemsClass3/goldClockTotal)*100).toFixed(3));
    buildingsPCT = Math.min(100, +(((goldClockSubPCT*0.2) + (buildingsSubPCT*0.8))).toFixed(3));
    monsterEradicationPCT = Math.min(100, +((checkedItemsClass4/monsterEradicationTotal)*100).toFixed(3));
    friendshipPCT = Math.min(100, +((totalDropdownsClass5/friendshipTotal)*100).toFixed(3));
    skillsPCT = Math.min(100, +((totalDropdownsClass6/skillsTotal)*100).toFixed(3));
    stardropsPCT = Math.min(100, +((checkedItemsClass7/stardropsTotal)*100).toFixed(3));
    recipesCookedPCT = Math.min(100, +((checkedItemsClass8/recipesCookedTotal)*100).toFixed(3));
    recipesCraftedPCT = Math.min(100, +((checkedItemsClass9/recipesCraftedTotal)*100).toFixed(3));
    fishPCT = Math.min(100, +((checkedItemsClass10/fishTotal)*100).toFixed(3));
    walnutsPCT = Math.min(100, +((inputFieldClass11/walnutsTotal)*100).toFixed(3));

    var itemsShippedWeightedPCT = itemsShippedPCT * 0.15;
    var buildingsWeightedPCT = buildingsPCT * 0.14;
    var monsterEradicationWeightedPCT = monsterEradicationPCT * 0.1;
    var friendshipWeightedPCT = friendshipPCT * 0.11;
    var skillsWeightedPCT = skillsPCT * 0.05;
    var stardropsWeightedPCT = stardropsPCT * 0.1;
    var recipesCookedWeightedPCT = recipesCookedPCT * 0.1;
    var recipesCraftedWeightedPCT = recipesCraftedPCT * 0.1;
    var fishWeightedPCT = fishPCT * 0.1;
    var walnutsWeightedPCT = walnutsPCT * 0.05;

    overallPCT = itemsShippedWeightedPCT + buildingsWeightedPCT + monsterEradicationWeightedPCT + friendshipWeightedPCT + skillsWeightedPCT + stardropsWeightedPCT + recipesCookedWeightedPCT + recipesCraftedWeightedPCT + fishWeightedPCT + walnutsWeightedPCT;

    updateHTML();
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    updateCounts();
    updateHTML();
});

document.addEventListener('change', function(event) {
    updateCounts();
    updateHTML();
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




  var z1Checkbox = document.getElementById("z1");

  z1Object.z1Value = z1Checkbox.checked;

  z1Checkbox.addEventListener('change', function() {
    z1Object.z1Value = this.checked;
    console.log("Z1's Value: " + z1Object.z1Value);
    console.log("There are " + z1Object.recipesCraftedTotal + " obtainable recipes with the current configuration.");
  });
