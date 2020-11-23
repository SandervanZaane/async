const clientCall = async() => {
    data = await getData();
    const genre = data.genres;

    for (let i = 0; i < genre.length; i++) {

        const ul = document.getElementById("complete-list");
        const li = document.createElement("li");
        const textHolder = document.createTextNode(`${genre[i].id} ${genre[i].name}`);
        ul.appendChild(li);
        li.appendChild(textHolder);
        console.log(genre[i]);
        console.log("loopje werkt! ")
    };
}
clientCall();

// favorite movie
const ul = document.getElementById("favorite");
const li = document.createElement("li");
const textHolder = document.createTextNode(`${genre[i].id} ${genre[i].name}`);
ul.appendChild(li);
li.appendChild(textHolder);
console.log(genre[i]);

https: //api.themoviedb.org/3/find/tt6105098?api_key=e8c91e364927d6dd958e5fe7eabb7541&language=en-US&external_source=imdb_id