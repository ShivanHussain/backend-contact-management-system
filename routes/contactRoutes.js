import express from 'express';
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// GET all contacts
router.get('/', getContacts);

// POST create new contact
router.post('/create', createContact);

// PUT update existing contact by ID
router.put('/update/:id', updateContact);

// DELETE a contact by ID
router.delete('/delete/:id', deleteContact);

export default router;
