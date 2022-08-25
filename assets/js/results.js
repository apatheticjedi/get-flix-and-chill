let strainEl = document.querySelector("#result-strain")
let movieEl = document.querySelector("#result-movie")

var displayStrainResults = function (data) { 
    strainEl.textContent = `${data.name}`;
  }

  var displayMovieResults = function (data) { 
    movieEl.innerHTML += `<img src="https://image.tmdb.org/t/p/original/${data[i].poster_path}.jpg">`;
  }  