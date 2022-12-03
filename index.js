const ContactController = require('./src/App/Controllers/ContactController');
const Validation = require('./src/App/Midlewares/Validation');
const express = require('express')
const app = express()





app.get('/', Validation, ContactController.showAll);
app.get('/contatos',  ContactController.show);
app.post('/contato', ContactController.store);
app.put('/contato/:id', ContactController.update);
app.delete('/contato/:id', ContactController.remove);


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.listen(process.env.PORT || 3000)