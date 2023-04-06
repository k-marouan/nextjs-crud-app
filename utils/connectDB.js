const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://everest9k:admin@cluster0.vf864fw.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        console.log('connected!')
    } catch (error) {
        
    }
}

export default connectDB