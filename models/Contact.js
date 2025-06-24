import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'], 
    trim: true,
  },
  email: { 
    type: String,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    trim: true,
    minlength: [10, 'Phone number should be at least 10 digits'],
    maxlength: [15, 'Phone number should be no more than 15 digits']
  },
  company: {
    type: String,
    trim: true
  }
}, { timestamps: true });
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
