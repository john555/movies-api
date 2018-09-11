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
| GET /movies |  Gets all movies in batches of `8`. Specify `offset` as a query parameter e.g `?offset=2`
| POST /movies |   Adds new Movies. Sample payload: `{"title": "","description": "", "posterImage" : ""}`

## Manual testing
Use [postman](https://www.getpostman.com/) to manually test the app.
