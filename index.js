const mongoose = require('mongoose')
const URI = "mongodb+srv://asirreshmi0103:asir0103@cluster0.ivhu6sq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



mongoose.connect(URI)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
})
