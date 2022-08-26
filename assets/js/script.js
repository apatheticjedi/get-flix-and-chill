

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
let genres = {}

buttonClick = () => {
    $('.genreId').change(function(event) {
        if ($(event.target).is(':checked')) {
            movies.push($(event.target).attr('id'))
            console.log(movies)
        } else {
            movies = movies.filter(item => item !== $(event.target).attr('id'))
            console.log(movies)
        };
        
      
    });
};   

let movieChoice = () => {
if (movies[0] === 'comedy') {
    genres.push('35')
    console.log(genres)

} else if (movieChoice === horror) {
    genres.push('36')
    console.log(genres)

} else if (movieChoice === action) {
    genres.push('28')

} else if (movieChoice === drama) {
    genres.push('18')

} else {
    genres.push('99')
};
}

buttonClick();













