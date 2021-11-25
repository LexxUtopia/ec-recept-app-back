import express from 'express';
import userRoutes from './routes/user.js';
import recipeRoutes from './routes/recipe.js';

const app = express();
const port = 3030;

app.use('/user', userRoutes);
app.use('/recipe', recipeRoutes);

app.get('/', (req, res) => {
  res.send('Recept App API, User, TODO\n')
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
