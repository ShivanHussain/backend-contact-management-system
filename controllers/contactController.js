import Contact from '../models/Contact.js';
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/error.js';

// Get all contacts
export const getContacts = catchAsyncErrors(async (req, res, next) => {
  const contacts = await Contact.find();
  
  if (!contacts || contacts.length === 0) {
    return next(new ErrorHandler('No contacts found', 404));
  }

  res.status(200).json({
    success: true,
    count: contacts.length,
    contacts,
  });
});

// Create a new contact
export const createContact = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, company } = req.body;

  if (!name || !email || !phone || !company) {
    return next(new ErrorHandler('All fields are required', 400));
  }

  const contact = await Contact.create({ name, email, phone, company });

  res.status(201).json({
    success: true,
    message: 'Contact created successfully',
    contact,
  });
});

// Update an existing contact
export const updateContact = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, company } = req.body;

  if (!name || !email || !phone || !company) {
    return next(new ErrorHandler('All fields are required', 400));
  }

  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { name, email, phone, company },
    { new: true, runValidators: true }
  );

  if (!contact) {
    return next(new ErrorHandler('Contact not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Contact updated successfully',
    contact,
  });
});

// Delete a contact
export const deleteContact = catchAsyncErrors(async (req, res, next) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    return next(new ErrorHandler('Contact not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Contact deleted successfully',
  });
});
