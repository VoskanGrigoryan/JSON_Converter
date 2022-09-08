import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedInvoices: [],
  referenceInvoice: {},
  referenceInvoiceSelected: false,
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoices(state, action) {
      state.selectedInvoices = action.payload;
    },
    addReferenceInvoice(state, action) {
      state.referenceInvoice = action.payload;
      state.referenceInvoiceSelected = true;
    },
  },
});

export const { addInvoices, addReferenceInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
