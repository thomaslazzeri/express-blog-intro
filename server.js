import express from 'express';
const app = express();
const port = 3000;

app.use((req, res, next) => {
console.log(req.path);
next();
});

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})