import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';


let app = express();

app.use(express.json());

let db = [];


// console.log(import.meta.url);
// console.log(fileURLToPath(import.meta.url));
// console.log(dirname(fileURLToPath(import.meta.url)));
// console.log(join(dirname(fileURLToPath(import.meta.url)), '/publicFE/index.html'));

app.get('/', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/publicFE/index.html'));
});

app.get('/css', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/publicFE/styles.css'));
});

app.get('/js', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/publicFE/main.js'));
});

app.get('/fighters', (req, res) => {
    res.status(200).send(db);
});

app.post('/create-fighter', (req, res) => {
    db.push(req.body) ;
    res.status(200).send(db);
});

app.delete('/delete-fighter', (req, res) => {
    let name = req.query.name
    for (let i = 0; i < db.length; i++) {
        if (db[i].name === name){
            db.splice(i, 1)
            i--
        }
    }
    res.status(200).send(db)
})

app.listen(8080, () => { 
    console.log('server cruising on port 8080');
});

