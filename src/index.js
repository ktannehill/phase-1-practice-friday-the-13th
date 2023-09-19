// Global variables
const MOVIESURL = "http://localhost:3000/movies"
const nav = document.querySelector("#movie-list")
const movieImgDetail = document.querySelector("#detail-image")
const movieTitleDetail = document.querySelector("#title")
const movieReleaseYear = document.querySelector("#year-released")
const movieDescription = document.querySelector("#description")
const movieWatched = document.querySelector("#watched")
const movieBloodAmount = document.querySelector("#amount")

// global variable for persistence of watched/ unwatched between clicks
let currentFilm;



// Helper functions
const displayMovieDetails = movie => {
    currentFilm = movie
    movieImgDetail.src = movie.image
    movieTitleDetail.textContent = movie.title
    movieReleaseYear.textContent = movie["release_year"]
    movieDescription.textContent = movie.description
    // movieWatched.textContent = movie.watched ? "Watched" : "Unwatched"
    //     // add button event listener
    //     movieWatched.addEventListener("click", (e) => {
    //         // console.log(e)
    //         // debugger
    //         // change button text
    //         const watchStatus = e.target.textContent === "Unwatched" ? "Watched" : "Unwatched"
    //         e.target.textContent = watchStatus
    //         // change object temporarily
    //         movie.watched = !movie.watched
    movieWatched.textContent = currentFilm.watched ? "Watched" : "Unwatched"
        // add button event listener
        movieWatched.addEventListener("click", (e) => {
            // console.log(e)
            // debugger
            // change button text
            // change object temporarily
            currentFilm.watched = !currentFilm.watched;
            movieWatched.textContent = currentFilm.watched ? 'Watched' : 'Unwatched'
            console.log(movie)
        })
    movieBloodAmount.textContent = movie["blood_amount"]
    }



// Execute code
fetch(MOVIESURL)
.then(resp => resp.json())
.then(movies => {
    // DISPLAY FIRST MOVIE
    // console.log(movies)
    // debugger
    displayMovieDetails(movies[0])
    // load ever image into nav
    movies.forEach(movieObj => {
        const image = document.createElement("img")
        image.src = movieObj.image
        image.alt = movieObj.title

        // attach event listener
        image.addEventListener("click", () => displayMovieDetails(movieObj))
        nav.append(image)
    })
})