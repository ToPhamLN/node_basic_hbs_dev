import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express();
const port = 8080;

configViewEngine(app);

app.get('/', (req, res) => {
    // res.send('Hello World! vs Hoi Dan IT and Eric');
    res.render('test/index.ejs');
})
app.get('/about', (req, res) => {
    res.send(`I'm Eric!`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})