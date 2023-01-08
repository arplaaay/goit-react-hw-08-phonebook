import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      Notiflix.Notify.success(`${contact.name} added to the contacts`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log('error', error);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
