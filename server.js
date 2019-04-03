
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static')
// app = express();
// app.use(serveStatic(path.join(__dirname, 'dist')));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+port);
// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'build')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


const express = require('express');
const path = require('path');
const port = process.env.PORT || 2000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('running on port:', 2000);