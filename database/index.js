const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.9x11ml0.mongodb.net/?retryWrites=true&w=majority')
        .then( () => console.log('connexion db ok !'))
        .catch( err => console.log(err));