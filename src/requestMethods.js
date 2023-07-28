// import axios from "axios";

// const BASE_URL="http://localhost:5000/api/";
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmNlNDE0MjIxM2JiNGIzOWFmOWYyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDI2ODI1MSwiZXhwIjoxNjkwNTI3NDUxfQ.prCkmFAAVZcceZb1gO4KcilO3LYAFiypMntqZ45cQAI";

// export const publicRequest=axios.create({
//     baseURL:BASE_URL,
// });
// export const userRequest=axios.create({
//     baseURL:BASE_URL,
//     header: {token: `Bearer ${TOKEN}`},
// });



import axios from "axios";

//const BASE_URL = "http://localhost:5000/api/"
const BASE_URL = "https://chic-api.onrender.com/api/"
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTY2MThlYWUyNzc4NDc1NzhmNDU5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODg4OTM0OCwiZXhwIjoxNjg5MTQ4NTQ4fQ.3GRs4H6d6eXTK6iYugXYlKP_QPBKHFWOkV0vJhiGMgM"
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL : BASE_URL,
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
})