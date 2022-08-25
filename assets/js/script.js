

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4da9750526msh5e9df71beb541e3p19a53ajsn43bfbaa5b30f',
		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
	}
};

fetch('https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=80&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

let movies = []

buttonClick = () => {
    $('#genre').change(function(event) {
        if ($(event.target).is(':checked')) {
            movies.push($(event.target).attr('id'))
            console.log(movies)
        } else {
            movies = movies.filter(item => item !== $(event.target).attr('id'))
            console.log(movies)
        }
    });
};   


buttonClick();











