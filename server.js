import express from 'express';
import { posts } from './posts.js';

const app = express();
const port = 3000;

/* app.use((req, res, next) => {
console.log(req.path);
next();
}); */

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {
  res.send('Homepage of the posts');
});

app.get('/posts', (req, res) => {
res.json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});