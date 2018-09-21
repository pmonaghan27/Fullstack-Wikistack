const express = require("express");
const morgan = require("morgan");
const layout = require('./views/layout');
const { db } = require('./models');
const userRoutes = require("./routes/user");
const wikiRoutes = require('./routes/wiki');

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));
app.use('/user', userRoutes);
app.use('/wiki', wikiRoutes);
app.get('/', (req, res) => {
    res.redirect('/wiki');
})

db.authenticate().
    then(() => {
    console.log('connected to the database');
    })


app.get("/", (req, res) => {
//   res.redirect("/posts");
    console.log('Respond to requst here');
    res.send(layout('Respond to requst here'));

})

const PORT = 1337;

const init = async () => {
    console.log('App init, start sync');
    
    await db.sync();

    console.log('App init, finish sync');

    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
    
}

init();