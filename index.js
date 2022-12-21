var fs = require('fs');
var inquirer = require('inquirer');
const Employee = require('./lib/employee')
const Manager = require("./lib/manager");
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer');
const { Console } = require('console');

//Empty string for card HTML to fill after entered by user in CLI
var htmlCards = ''

//Function to create HTML document
function html() {

    //Header HTML
    const htmlHead =
        `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Team Profile</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="">
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class=bg-white>
<!--header-->
<header class="bg-blue-500">
<h1 class="text-5xl text-center py-20">Meet Our Team</h1>
</header>
<!--Grid layout-->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-20 pt-5">`

    //Closing HTML
    const htmlEnd =
        `</section>
</body>
</html>`

    //Combines everything to create complete HTML document
    let htmlFull = htmlHead + htmlCards + htmlEnd

    console.log("Finished! File saved as index.html")
    fs.writeFile("index.html", htmlFull, function (err) { if (err) throw err; })
}