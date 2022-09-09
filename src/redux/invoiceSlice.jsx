import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedInvoices: [],
  downloadInvoiceList: [],
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
    addDownloadList(state, action) {
      state.downloadInvoiceList = action.payload
    }
  },
});

export const { addInvoices, addReferenceInvoice, addDownloadList } = invoiceSlice.actions;
export default invoiceSlice.reducer;
