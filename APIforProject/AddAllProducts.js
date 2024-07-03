const connectDB = require('./connectionDatabase/connection');
const laptopSchema = require('./model/bookSchema');
const data = require('./BookData.json');

connectDB('mongodb+srv://niyateesanja:niy0206SA@cluster0.fhsfxei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const upload = async ()=>{
    await laptopSchema.create(data)
    .then(()=>console.log('Uploaded!'))
    .catch((err)=>console.log(err));
}
upload();