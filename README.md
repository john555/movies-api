# Movies API
An API for movies.

## Installation requirements.
- [Node.js](https://nodejs.org/en/)
- Mongodb [Installation guide](https://docs.mongodb.com/manual/installation/)
- yarn (`npm  install -g yarn`)

## Installation.
First, you need to start mongodb.
- Open a terminal.
- Create a folder `mkdir -p data/db`
- Run `mongod --dbpath=data/db`

### Run the app.
- Open a new teminal.
- Run `git clone https://github.com/john555/movies-api.git`
- `cd movies-api`
- Run `yarn start:dev` (for development).

## Routes.

| Route   |      Description      
|----------|:-----------------
| POST /users | Creates a new user. Sample payload: `{"firstName": "","lastName": "", "username" : "","password":""}`
| POST /users/login | Authenticates a user. Sample payload: `{"username" : "","password":""}`
| GET /movies |  Gets all movies in batches of `8`. Specify `offset` as a query parameter e.g `?offset=2`
| POST /movies |   Adds new Movies. Sample payload: `{"title": "","description": "", "posterImage" : ""}`. <br> This endpoint is secure. Send token via the `Authorization` header. e.g `Authorization=Basic <token-string>`.

## Manual testing
Use [postman](https://www.getpostman.com/) to manually test the app.
