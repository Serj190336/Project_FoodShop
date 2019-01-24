# RECIPE/MENU PROJECT
Still in development

## INFO
Project allows to use 50 API requests per day! To use more please contact me.
Used cors proxy (https://cors-anywhere.herokuapp.com/) to work correctly with API.

## Description: Load any recipe from API using search field or menu buttons
Click on loaded recipe to open Modal window with recipe info

## Getting Started
Download ZIP file, unpack and run index.html from DIST folder
No installation needed for testing.

## Project Folders
**dist** - Final distributed version
**src** - Development folder

## Used in project:
* MVC architectural pattern 
* Node.js
* Webpack Module Bundler
* [Food2fork API](https://www.food2fork.com/about/api)
* ES6
* Babel
* AJAX (+axios)
* OOP

## Currently finished
* Loading API using async await and fetch(axios)
* Search field - enter any recipe or dish name to load results from API, creates new Instance
* Buttons - create new Instance and load results from API
* Clear previous results on new Search or Menu Buttons click
* Spinner while waiting for API response in main and modal window
* Page pagination
* Modal window
* Modal window loads detailed information about selected recipe from API (new API request)
* Modal window clears results on closing

## In progress
* Fix multiply spinners on multiply menu button clicks
* Automaticly switch API Key when 50 uses ends
* Add styles using SASS

## Author
Segey Yusha
## Contacts
sergii190336@gmail.com