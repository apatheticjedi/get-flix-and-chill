
const genreSelect = document.querySelector('#genre-select');
const slider = document.getElementById("myRange");
const output = document.getElementById("rating-choice");


const getMovie = function (genreID, rating) {
  const selectPage = Math.floor(Math.random() * (50));
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '33eee97110msh1be2865e316c1ebp135d28jsn8f4bc7796a63',
      'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
    }
  };
  //pass in genreID and randomly select a page of the movies to choose from
  const API = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genreID}&vote_average.gte=${rating}&page=${selectPage}`

  fetch(API, options)
    .then(response => response.json())
    .then(function (data) {
      //create random movie index 
      const randomMovie = Math.floor(Math.random() * data.results.length)
      console.log(data.results[randomMovie]);
    })
    .catch(err => console.error(err))
}

//assign the genreID based on the drop down selection
let genreID;
function assignID() {
  if (genreSelect.value === "comedy") {
    genreID = 35;
  } else if (genreSelect.value === "horror") {
    genreID = 36;
  } else if (genreSelect.value === "action") {
    genreID = 28;
  } else if (genreSelect.value === "drama") {
    genreID = 18;
  } else if (genreSelect.value === "scifi") {
    genreID = 10770;
  } else if (genreSelect.value === "documentary") {
    genreID = 99;
  }
};

// function for custom drop-down menu
var x, i, j, l, ll, selElmnt, a, b, c;
// look for any elements with the class "custom-select":
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  // for each element, create a new DIV that will act as the selected item:
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  // for each element, create a new DIV that will contain the option list:
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    // for each option in the original select element, create a new DIV that will act as an option item:
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      // when an item is clicked, update the original select box, and the selected item:
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    // when the select box is clicked, close any other select boxes,and open/close the current select box:
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  //  function that will close all select boxes in the document, except the current select box:
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
  assignID();
}
// if the user clicks anywhere outside the select box, then close all select boxes:
document.addEventListener("click", closeAllSelect);

//sliderInput
let rating; 
function sliderInput() {
  slider.oninput = function () {
    rating = this.value;
    console.log(rating);
  }
}
//Modal functions
$(document).ready(function () {
  $("#exampleModal").modal('show');
});

$('#yesBtn').click(function () {
  $('#exampleModal').modal('hide');
});

$('#noBtn').click(function () {
  window.open('https://www.disney.com/', "_self");
})

let movies = []
let genres = {}

var buttonClick = function() {
  e.preventDefault();
  
}

buttonClick();
