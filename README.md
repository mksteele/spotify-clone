# spotify-clone

A REST API to service a digital music library clone

By Miranda Steele

# Setting up the API

## Prerequisites
* Node -  I ran this with node 12.17.0
* Yarn - https://classic.yarnpkg.com/en/docs/install/

## Running
To install dependencies:

    $ yarn

To build the routes and compile the code:

    $ yarn build
    ✨  Done in 4.22s.

    $ yarn start
    Example app listening at http://localhost:3000
 
# Usage

I used Postman once the REST server was running on http://localhost:3000.

Link to Postman collection: https://www.getpostman.com/collections/1acbd4e60c38c74c7358

The available URLs are:
* GET http://localhost:3000/songs
* GET http://localhost:3000/songs/<uuid-from-previous-request\>
* GET http://localhost:3000/songs/<uuid-from-previous-request\>/stream for streamed song audio.

The stream endpoint should pop up a little mp3 player - it works in either Postman or the browser. The songs should work & actually play the audio.

# Thought Process

* First thing I went for was setting up scaffolding/infrastructure.
* Even though GraphQL feels like it would be amazing for this use case (given the wide variety of search/views wanted), I've never used GraphQL before and thought this would not be the ideal time to start.
* So, given that I knew I wanted to use a REST server, I decided on the express and tsoa libraries to serve the REST API.
    * For a while, generally followed this link: https://tsoa-community.github.io/docs/getting-started.html#creating-our-express-server
* I decided on the following general file structure:
    * `api` for REST-specific code such as controllers and data-contract interfaces
    * `dao` to encapsulate database access
    * `domain` to contain business logic
    * `migrations` for database migrations

# Features to prioritize

Uhh where to begin...

* Add database tables to hold songs, playlists, artists
    * I'd recommend a simple MySQL database
* Authentication for the API
* Allow upload of songs via POST /songs
* Store song files in a GCP bucket rather than on disk
* Addition of extra features such as creating playlists, etc.
