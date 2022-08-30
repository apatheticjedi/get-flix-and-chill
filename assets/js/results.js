let strainEl = document.querySelector("#strain-name");
let strainNumber = Math.floor(Math.random() * 9);
let randomStrain = '';
let favorites = [];
let movieObj = JSON.parse(localStorage.getItem('movie'));
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '09fb503d34msh561206120c26ebcp10c139jsn18b1b84efe43',
        'X-RapidAPI-Host': 'brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com'
    }
};

// display movie poster
var displayMovieResults = function () {
    let movieImgEl = document.querySelector('#movieImg');
    movieImgEl.setAttribute('src', `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieObj.poster_path}`);
    weedApi();
};

// get random cannabis strain
var weedApi = function () {
    fetch('https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/strains', options)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    randomStrain = data.data[strainNumber].name;
                    strainEl.textContent = `${data.data[strainNumber].name}`;
                });
            };
        });
};

// add to favorites
var addFavorite = function () {
    favorites = favorites || [];
    favorites.push([randomStrain + ' and ' + movieObj.title])
    localStorage.setItem('favorites', JSON.stringify(favorites));
    let favEl = document.querySelector('#favorites');
    let favAdd = document.createElement('p');
    favAdd.textContent = randomStrain + ' and ' + movieObj.title;
    favEl.appendChild(favAdd);
    $('#clear').css('display', 'block');
};

// display favorites on page load
var loadFavorites = function () {
    favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
        let favH2 = document.querySelector('#favoritesH2');
        favH2.textContent = 'Favorites:'
        for (let i = 0; i < favorites.length; i++) {
            let favEl = document.querySelector('#favorites');
            let favAdd = document.createElement('p');
            favAdd.textContent = favorites[i];
            favEl.appendChild(favAdd);
            $('#clear').css('display', 'block');
        }
    } else {
        let favH2 = document.querySelector('#favoritesH2');
        favH2.textContent = 'No Favorites Yet!';
    };
};

$('#goBack').click(function () {
    window.open('index.html', '_self')
});

$('#favBtn').click(function (e) {
    e.preventDefault();
    addFavorite();
});

$('#clearFav').click(function () {
    localStorage.clear();
});

displayMovieResults();
loadFavorites();