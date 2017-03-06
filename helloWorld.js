var figlet = require("figle");

//A comment
figlet.text("Hello world!", function(error, data) {
    console.log(error || data);
 });
