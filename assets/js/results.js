let strainEl = document.querySelector(".strain-name")
let movieEl = document.querySelector("#result-movie")
let strainNumber = Math.floor(Math.random() * 9);
let randomStrain = '';
let favorites = [];

  var displayMovieResults = function (randomMovie) { 
    movieEl.innerHTML += `<img src="https://image.tmdb.org/t/p/original/${data.results[randomMovie].poster_path}.jpg">`;
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

var addFavorite = function() {
    favorites = favorites || [];
    favorites.push([randomStrain + ' and '])
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('button');
};

var loadFavorites = function() {
    favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
        let favH2 = document.querySelector('#favoritesH2');
        favH2.textContent = 'Favorites:'
        for (let i = 0; i < favorites.length; i++) {
            let favEl = document.querySelector('#favorites');
            let favAdd = document.createElement('p');
            favAdd.textContent = favorites[i];
            favEl.appendChild(favAdd);
            $('#clear').css('display', 'block')
        }
    } else {
        let favH2 = document.querySelector('#favoritesH2');
        favH2.textContent = 'No Favorites Yet!';
    };
    console.log('hey')
};

$('#goBack').click(function () {
    window.open('index.html', '_self')
});

$('#favBtn').click(function (e) { 
    e.preventDefault();
    addFavorite();
});

$('#clearFav').click(function() {
    localStorage.clear();
});

loadFavorites();