# Pokemon-Catcher :globe_with_meridians:
Call out a name and a pokemon might appear!

This application was built as an example of a full stack webpage with front and backend. 
The example:
* Takes input based on predefined routes.
* Receive information from forms.
* Output the backend database queries.
* Insert new rows into the database.
* Update query information based on conditionals.

[Click here](https://damp-hollows-13291.herokuapp.com/) to check out the deployed site on Heroku!

## Example of App :tv:

![demo](/public/assets/img/PokemonDemo2.gif)

## Getting Started :loudspeaker:
This repo utilizes various packages from Node Package Manager(NPM).

### Prerequisites :zap:
1. Please ensure node.js is install, node.js is required to install packages from NPM. You can download the program at:

    https://nodejs.org/en/download/


### Instructions for local use. :clipboard:

1. In your terminal navigate to your specified folder, type the following to install all required packages listed in package.json:
    ```
    npm install
    ```

2. From the db folder. Run the schema.sql and seeds.sql in your SQL tool of choice (i.e MySQL).

3. Update the following infromation "<>" in connection.js from the config folder.
    ```
    connection = mysql.createConnection({
        host: "<enter host>",
        port: <enter port numbers>,
        user: "<enter user>",
        password: "<enter password>",

        database: "pokemon_db"
    });
    ```

3. Start the server by writing in terminal:
    ```
    node server.js
    ```

4. Go to your browser and type enter http://localhost:8080/ into your address bar. (Or visit the live demo [here](https://damp-hollows-13291.herokuapp.com/).)

    
## Built With :hammer:
* [HTML5](https://www.w3.org/TR/html/) - Standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Styling html webpages.
* [Animate.css](https://github.com/daneden/animate.css) - A css library for animations.
* [Bootstrap](https://getbootstrap.com/) - Open source toolkit for developing with HTML, CSS, and JS. 
* [Javascript](https://www.javascript.com/) - An object-oriented computer programming language.
* [jQuery](https://jquery.com/) - A javascript library to simplify programs.
* [Node.js](https://nodejs.org/en/) - An open source server environment.
* [NPM - express](https://www.npmjs.com/package/express) - A node package for creating a web framework in node.
* [NPM - body-parser](https://www.npmjs.com/package/body-parser) - A body parsing middleware. Parse incoming request bodies in a middleware before your handlers
* [NPM - mysql](https://www.npmjs.com/package/mysql) - This is a node.js driver for MySQL. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
* [NPM - express-handlebars](https://www.npmjs.com/package/express-handlebars) - Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.



## Authors :squirrel: 
* **Eric Ng** [EricNg314](https://github.com/EricNg314)

## Acknowledgments 
* Original animations prior to modifications are from Animate.css from Daniel Eden. [Click here](https://github.com/daneden/animate.css)