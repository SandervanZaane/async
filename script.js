const clientCall = async() => {
    const data = await getData();
    const genre = data.genres;

    for (let i = 0; i < genre.length; i++) {

        const ul = document.getElementById("complete-list");
        const li = document.createElement("li");
        const textHolder = document.createTextNode(`${genre[i].id} ${genre[i].name}`);
        ul.appendChild(li);
        li.appendChild(textHolder);
        console.log(genre[i]);
        console.log("loopje werkt! ")
    }
};
clientCall();

// favorite movie

const favorite = async() => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/find/tt6105098?api_key=e8c91e364927d6dd958e5fe7eabb7541&sort_by=popularity.desc&language=en-US&external_source=imdb_id")
        const jsonResponse = await response.json()
        console.log(jsonResponse);
        const heading = document.getElementById("favorite");
        const textHolder = document.createTextNode(`${jsonResponse.movie_results[0].original_title}`);
        heading.appendChild(textHolder);
        console.log("favorite functie logt ")
    } catch (error) {
        console.log(error);
    }

};

favorite();

// TOP 10

const getPopulairest = async() => {
    try {
        const apiUr = 'https://api.themoviedb.org/3/genre/movie/list';
        const api_Key = 'e8c91e364927d6dd958e5fe7eabb7541';

        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=e8c91e364927d6dd958e5fe7eabb7541&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1')
        const jsonResponse = await response.json()
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
};

getPopulairest();

// post

// see postman