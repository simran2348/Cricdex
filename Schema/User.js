import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  mobileNo: Number,
  userName: String,
  userEmail: String
})

export default mongoose.model('userBase', userSchema)
