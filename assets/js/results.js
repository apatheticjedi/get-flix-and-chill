let strainEl = document.querySelector(".strain-name")
let movieEl = document.querySelector("#result-movie")
let strainNumber = Math.floor(Math.random() * 9);
let randomStrain = '';
let favorites = [];


  var displayMovieResults = function (data) { 
    movieEl.innerHTML += `<img src="https://image.tmdb.org/t/p/original/${data[i].poster_path}.jpg">`;
  }  

var weedApi = function() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09fb503d34msh561206120c26ebcp10c139jsn18b1b84efe43',
            'X-RapidAPI-Host': 'brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/strains', options)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    randomStrain = data.data[strainNumber].name;
                    strainEl.textContent = `${data.data[strainNumber].name}`;
                    strainEl.style.color = '#EFF1F3'
                    console.log(data);
                });
            };
        });
};

weedApi();

let addFavorite = function() {
    favorites.push([randomStrain + ' and ']) //add movie here
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

let loadFavorites = function() {
    favorites = JSON.parse(localStorage.getItem('favorites'));
    if (cities) {
        for (let i = 0; i < favorites.length; i++) {
            let favEl = $('#PLACEHOLDER')
            let favAdd = document.createElement('h2')
            favAdd.textContent = favorites[i];
            favEl.appendchild(favAdd);
        }
    } else {
        //display no favorites saved
    }
};