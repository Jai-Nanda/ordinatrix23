const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},
    presentQTY: {type: Number, required: true},
    
    products: [
        {
            productId: {type: String},
            quantity: {type: Number, default: 1 }
        }
    ],
    address: {type: String, required: true},
    amount: {type: Number, required: true},
    status: {type: String, default: "Pending", required: true},
  }, {timestamps: true})

  mongoose.model = {}
  const myModel = mongoose.model('Product', ProductSchema);
  export default myModel;