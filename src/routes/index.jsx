import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "../pages/home";
import InvoiceEditorPage from "../pages/editor";
import TemplatePage from "../pages/template";
import ProtectedRoute from "./ProtectedRoute";
import Error404 from "../pages/404";

const Router = () => {
  const referenceInvoice = useSelector(
    (state) => state.invoiceReducer.referenceInvoiceSelected
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/templates" element={<TemplatePage />} />
        <Route
          path="/editor"
          element={
            <ProtectedRoute referenceFile={referenceInvoice}>
              <InvoiceEditorPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
