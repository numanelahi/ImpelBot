import express from 'express';

const app = express();

app.get('/', (req, res) => {
       res.send('Asalamualaikum');
})

export {app as default};

