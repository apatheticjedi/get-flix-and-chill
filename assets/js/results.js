let strainNumber = Math.floor(Math.random() * 9);
let randomStrain = '';


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
                    console.log(data);
                });
            };
        });
};

weedApi();