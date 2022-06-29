import axios from 'axios'

const apiGithub = axios.create({
  baseURL: "https://api.github.com/users/lucasgabriel13/"
})

export { apiGithub }