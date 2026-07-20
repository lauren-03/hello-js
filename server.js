require('dotenv').config();
const express = require('express'); //import framework
const app = express(); //create app instance
const path = require("path");
 //config port (env var later)


/*INTRODUCTION TO EXPRESS.JS...EXPRESS is a framework(an extension of a progamming language that you 
 can use to build software rapidly.) express is used for building backend using node.js other
frameworks include nest and next.
core definition: adds structure without bloat. handles HTTP request, routes and responses like a pro
 
express in Action(analogy)
node = Raw engine
express = Dashboard with GPS, speedometer and auto-pilot. gives us a way of how we can build a website and what not

*/

/*
SETUP 
RAW NODE(http module) : http.create((req, res) => {...}) Boilerplate heavy
 EXPRESS: const app = express(); app.get('/', (req, res) => {...})- clean

 ROUTING
 RAW NODE(http module) : MANUA*/
 /*WHAT IS MIDDLEWARE
 functions thatprocess request before they hit routes (e.g logging, auth checks).
 analogy:like airport security - scans every passenger
 
 
 */
//E.G JSON Parsing
app.use(express.json()); // parses SON bodies automatically
const PORT = process.env.PORT;


//Serve static files
app.use(express.static(path.join(__dirname, 'views')));


/*app.get('/', (req, res) => res.send('welcome to user API'));
app.post ('/register', (req, res) => {
    const{name, email} = req.body;
    if (!name || !email) return res.status(400).json({erroe: 'missing fields'});
    //simulate DB save
    res.status(201).json({message: `Registered: ${ name} (${email})`});

});
app.get('/user/:id', (req, res) => {
    res.json({id: req.params.id, name: 'Simple User'});

});

app.use((req, res, next) =>{
    //logs every request
    console.log{`$re`}
})
app.post('/echo', (req, res) =>{
   // console.log(req.body);
    res.json({echoed: req.body}); //req body now available
});
//Custom middleware example
app.use((req, res, next) =>{ //logs every request
    console.log('$ {req.method} ${req.url} - ${new Date()}');
    next(); //pass to next handler(required!)
});
  
app.get('/', (req, res) =>{
    res.send('hello');
});

app.get('/hello', (req, res) => {    //route : GET /(home) - No more if else
  res.send('Hello from express!</h1>'); //response: html or text (headers auto!)
//res.json({ message: "JSON response"}); //alternative: JSON
});*/
//serve main page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get("/", (req, res ) =>{
    res.send('hello');
} );

app.listen(PORT, () => { //start server
  console.log(`server running on http://localhost:${PORT}`);
});

/*app.get(path, callback): matches URL = method ; callback = (request, response)
req: incoming data (headers, params)
res: outgoing(send,json, status)
error check: if port busy? change to 3001. (express auto-handles 404s!)
client http request to route matching then routehandle execution then response sent*/

