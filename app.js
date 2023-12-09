const express = require('express');

const path = require('path');

const adminRoutes = require('./routes/admin');

const homeRoutes = require('./routes/home.js');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rootDir = require('./utils/path')
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(rootDir, 'public')));


app.use(homeRoutes);
app.use(adminRoutes);


app.use((req, res) => {
   res.status(404).render('error', { pageTitle: 'Page Not Found' });
 });
 
app.listen(3000, function() {
   console.log("listening on 3000");
});
