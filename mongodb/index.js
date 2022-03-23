const mongoose = require('mongoose')

mongoose.connect('')
    .then(() => {
        console.log('mongooose is connected')
    })
    .catch((err)=>{
        console.log(err , 'mongoose didn\'t connect')
    })