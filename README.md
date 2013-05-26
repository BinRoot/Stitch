# Stitch

Prototype for Stitch Just in Time's network for Hospitals

# About the code

Important note: this website is not a static bunch of html files. It's a bit more fun.

This website uses nodejs with express for the server-side stuff. 

It uses [ejs](http://embeddedjs.com/) to template the html. Notice how there are no *.html files. 
Instead the html lives in *.ejs files in the `views` folder. 

Also, the not-html stuff, like *.css and *.js files live in the `public` folder.

We'll never learn this stuff in school, so learn it here! :)

# Setting up the website

### Set up your environment by installing relevant stuff:

(0) Get git if you don't already have it.

(1) You will need the [heroku-toolbelt](https://toolbelt.heroku.com/).

(2) Install Nodejs.
    - If you're on a mac, install [Homebrew](http://brew.sh/). `ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"`
    - Next, use brew to install node. `brew install node`.

### Get the code:

(3) Open up a terminal. Type `git clone git@github.com:BinRoot/Stitch.git` to download the code.

(4) You will now see a folder called 'Stitch' containing all website code. `cd Stitch`. 

(5) Run the website. `foreman start`. (If that fails, `node web.js` also does the same thing).

(6) Open up a browser and navigate to http://localhost:5000
