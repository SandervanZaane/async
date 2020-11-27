const getData = async() => {
    try {
        const apiUr = 'https://api.themoviedb.org/3/genre/movie/list';
        const api_Key = 'e8c91e364927d6dd958e5fe7eabb7541';

        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e8c91e364927d6dd958e5fe7eabb7541')
        const jsonResponse = await response.json()
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
};