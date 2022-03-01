const mongoose = require('mongoose')
const Schema = mongoose.Schema
//schema is blue print for database
const Address = new Schema( {
    street: { type: String, required: true },
    city: { type: String, required: true},
    state: { type: String, required: true},
    zip: { type: String, required: true},
 },
 {timestamps: true},
 )
const Employee = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: {type: String, required: true},
    address:  Address,
  },
  {timestamps: true},
)

//first argument for model is collection
module.exports = mongoose.model('employees', Employee)
