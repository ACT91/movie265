import axios from "axios";

const urlFetcher = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    headers:{
        Authorization: `Bear eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTQwOWM2NmUzNjkzNTA0MmU5MTk1OGUzNGRmNWQxMSIsIm5iZiI6MTczNTU0Mzc1NS4yNzQsInN1YiI6IjY3NzI0YmNiMGYyNDhlODUwODEyODA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjZO2E9Vna6lKZj2SVQ1NJ6y1ucVKCbfht7jBg49xBs`
    }
})

export default urlFetcher;
