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
const displayMoviePoster = movieObj => {
    const image = document.createElement("img")
    image.src = movieObj.image
    image.alt = movieObj.title

    // attach event listener
    image.addEventListener("click", () => displayMovieDetails(movieObj))
    nav.append(image)
}

const displayMovieDetails = movie => {
    currentFilm = movie
    movieImgDetail.src = movie.image
    movieTitleDetail.textContent = movie.title
    movieReleaseYear.textContent = movie["release_year"]
    movieDescription.textContent = movie.description
    movieWatched.textContent = movie.watched ? "Watched" : "Unwatched"
    movieBloodAmount.textContent = currentFilm["blood_amount"]
}

const toggleWatchedProperty = (e) => {
    console.log(currentFilm)
    // Change button text
    const newText = e.target.textContent === "Unwatched" ? "Watched" : "Unwatched"
    e.target.textContent = newText
    // Change the object itself temporarily
    currentFilm.watched = !currentFilm.watched
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
    movies.forEach(displayMoviePoster)
})



// add event listener to watched button
movieWatched.addEventListener("click", toggleWatchedProperty)



