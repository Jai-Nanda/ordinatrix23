const mongoose = require('mongoose');


const  UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
    products: [
        {
            productId: {type: String},
            quantity: {type: Number, default: 1 }
        }
    ],
    address: {type: String, required: true},
    amount: {type: Number, required: true},
    state: {type: String, default: "Pending", required: true},
  }, {timestamps: true})

  mongoose.model = {}

  export default mongoose.model('Product', ProductSchema)