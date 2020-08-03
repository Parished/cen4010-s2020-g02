const search_movie = function(){
    document.getElementById('search_button').addEventListener('click', sendMovie);
}

const sendMovie = function(event){
    event.preventDefault();
    const user_title = document.getElementById('title').value;
    localStorage.setItem('title', JSON.stringify(user_title));
    document.getElementById('form-search').submit();
}

function consoleTitle(){
    console.log('Hello, Console!')
}

  
async function apiCall(){
    let movie_name_storage = localStorage.getItem('title');
    
    const response = await fetch('https://www.omdbapi.com/?t=' + movie_name_storage + encodeURI('&apikey=7b3941a8')+ "&plot=full");
    const api_response_print = await response.json();
    document.querySelector('#details_title').innerHTML = api_response_print.Title;
    document.querySelector('#director_name').innerHTML = api_response_print.Director;
    document.querySelector('#cast_names').innerHTML = api_response_print.Actors;
    document.querySelector('#genre_details').innerHTML = api_response_print.Genre;
    document.querySelector('#release_year').innerHTML = api_response_print.Year;  
    document.querySelector('#runtime_details').innerHTML = api_response_print.Runtime;
    document.querySelector('#country_details').innerHTML = api_response_print.Country;
    document.querySelector('#plot_details').innerHTML = api_response_print.Plot;
    document.querySelector('#poster_details').src = api_response_print.Poster;
	console.log(api_response_print);
}
    


document.addEventListener('DOMContentLoaded', search_movie);

function modify_details_page(){
    console.log("loading modify details script");
    apiCall();
}
