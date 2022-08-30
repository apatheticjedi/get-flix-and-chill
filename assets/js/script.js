var genreId;
var rating = 5; 
var movie;
var movieNameEl = document.querySelector("#movie-name");
var movieImageEl = document.querySelector("#movie-image");
var randomPage = Math.floor(Math.random() * 50);
const slider = document.getElementById("myRange");
const output = document.getElementById("rating-choice");
const apiKey = 'c7806b5cf84fe221af2805836d4a18d9';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '08a39320afmsh509774a913e5772p14518fjsn09fc77a7f220',
//     'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
//   }
// };

//sliderInput
function sliderInput() {
    slider.oninput = function () {
      rating = this.value;
      console.log(rating);
    }
  }
//
var buttonClick = function (e) {
  e.preventDefault();
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7806b5cf84fe221af2805836d4a18d9&with_genres=${genreId}&vote_average.gte=${rating}&page=1`)
    .then(response => response.json())
    .then(data => {
      let randomInd = Math.floor(Math.random() * 19)
      movie = data.results[randomInd];
      localStorage.setItem('movie', JSON.stringify(movie));

window.open('results.html', '_self');
      
      console.log(movie);
      //same thing but append span with title
    })
    .catch(err => console.error(err));

    
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
    console.log(e);
    if (e.target.innerHTML === "Comedy") {
      genreId = '35';
    } else if (e.target.innerHTML === "Horror") {
      genreId = '27';
    } else if (e.target.innerHTML === "Action") {
      genreId = '28';
    } else if (e.target.innerHTML === "Drama / Romance") {
      genreId = '18,10749';
    } else if (e.target.innerHTML === "Sci-Fi / Fantasy") {
      genreId = '878,14';
    } else if (e.target.innerHTML === "Documentary") {
      genreId = '99';
    } else {
      genreId = '';
    }
  });
  console.log(genreId);
};

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
};

// if the user clicks anywhere outside the select box, then close all select boxes:
document.addEventListener("click", closeAllSelect);


//Modal functions
$(document).ready(function () {
  $("#exampleModal").modal('show');
});

$('#yesBtn').click(function () {
  $('#exampleModal').modal('hide');
});

$('#noBtn').click(function () {
  window.open('https://www.disney.com/', "_self");
});

$('#getMovie').click(buttonClick);

slider.addEventListener('mouseup', sliderInput());