// 콜백 패턴

const getMovies = (movieName, callback) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            callback()
        })
}

getMovies('frozen', () => {
    console.log('겨울왕국')
})