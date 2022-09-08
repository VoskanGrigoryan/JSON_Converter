import React from "react";
import BaseContainer from "../../containers/BaseContainer";
import { useDispatch } from "react-redux";
import { changeNavigation } from "../../redux/configSlice";
import InvoiceFilterForm from "../../components/forms/invoiceFilterForm";
import InvoiceTable from "../../components/tables/invoiceTable";
import InvoiceTableMenu from "../../components/menu/invoiceTableMenu";

const HomePage = () => {
  const dispatch = useDispatch();

  dispatch(
    changeNavigation({
      headerTitle: "Invoice report",
      menuIcon: "invoice_report",
    })
  );
  return (
    <BaseContainer>
      <InvoiceFilterForm />
      <InvoiceTable />
      <InvoiceTableMenu />
    </BaseContainer>
  );
};

export default HomePage;
