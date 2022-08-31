var genreId;
var movie;
var rating = 5;
var randomPage = Math.floor(Math.random() * 30) + 1;
const slider = document.getElementById("myRange");
const output = document.getElementById("rating-choice");
const apiKey = 'c7806b5cf84fe221af2805836d4a18d9';

//sliderInput
function sliderInput() {
  slider.oninput = function () {
    rating = this.value;
  }
}

// click button to get strain and movie results
var buttonClick = function (e) {
  e.preventDefault();
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7806b5cf84fe221af2805836d4a18d9&with_genres=${genreId}&vote_average.gte=${rating}&page=${randomPage}`)
    .then(response => response.json())
    .then(data => {
      let randomInd = Math.floor(Math.random() * 19)
      movie = data.results[randomInd];
      if (!movie) {
        $("#errorModal").modal('show');
      } else {
        localStorage.setItem('movie', JSON.stringify(movie));

        // open results page and display results
        window.open('results.html', '_self');
      }
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

    // convert genre input to genre id number
    if (e.target.innerHTML === "Comedy") {
      genreId = '35';
    } else if (e.target.innerHTML === "Horror") {
      genreId = '27';
    } else if (e.target.innerHTML === "Action") {
      genreId = '28';
    } else if (e.target.innerHTML === "Adventure") {
      genreId = '12';
    } else if (e.target.innerHTML === "Drama") {
      genreId = '18';
    } else if (e.target.innerHTML === "Romance") {
      genreId = '10749';
    } else if (e.target.innerHTML === "Sci-Fi") {
      genreId = '878';
    } else if (e.target.innerHTML === "Fantasy") {
      genreId = '14';
    } else if (e.target.innerHTML === "Family") {
      genreId = '10751';
    } else if (e.target.innerHTML === "Animation") {
      genreId = '16';
    } else if (e.target.innerHTML === "Music") {
      genreId = '10402';
    } else if (e.target.innerHTML === "Crime") {
      genreId = '80';
    } else if (e.target.innerHTML === "Thriller") {
      genreId = '53';
    } else if (e.target.innerHTML === "Mystery") {
      genreId = '9648';
    } else if (e.target.innerHTML === "History") {
      genreId = '36';
    } else if (e.target.innerHTML === "Documentary") {
      genreId = '99';
    } else if (e.target.innerHTML === "War") {
      genreId = '10752';
    } else if (e.target.innerHTML === "Western") {
      genreId = '37';
    } else if (e.target.innerHTML === "TV Movie") {
      genreId = '10770';
    } else {
      genreId = '';
    }
  });
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

// error modal
// $('#errorBtn').click(function () {
//   window.open('index.html', '_self');
// });

$('#getMovie').click(buttonClick);

slider.addEventListener('mouseup', sliderInput());