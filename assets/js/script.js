

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


buttonClick = () => {
    $('input[type=checkbox][name=comedy]').change(function() {
        if ($(this).is(':checked')) {
            console.log(`${this.value} is checked`);
        }
        else {
            console.log(`${this.value} is unchecked`);
        }
    });
};   


buttonClick();











