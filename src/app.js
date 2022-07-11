import express from 'express'
import morgan from 'morgan'

import persona from './routes/persona.routes'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Bienvenido a Node JS..!');
});

app.use('/api/auth/persona', persona);

export default app;