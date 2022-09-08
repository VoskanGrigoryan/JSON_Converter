import React, { useEffect, useState } from "react";
import { Select, Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addReferenceInvoice } from "../../redux/invoiceSlice";
import "../../styles/InvoiceReport.css";

const { Option } = Select;

const InvoiceTableMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [format, setFormat] = useState({
    singleRow: true,
    multipleRows: true,
  });

  const invoice = useSelector((state) => state.invoiceReducer.selectedInvoices);

  useEffect(() => {
    if (invoice.length > 1) {
      setFormat({ singleRow: true, multipleRows: false });
    }

    if (invoice.length === 1) {
      setFormat({ multipleRows: false, singleRow: false });
    }

    if (invoice.length === 0) {
      setFormat({ singleRow: true, multipleRows: true });
    }
  }, [invoice]);

  const useInvoiceAsTemplate = () => {
    if (invoice.length === 1) {
      dispatch(addReferenceInvoice(invoice[0]));
      navigate("/editor");
    }
  };

  return (
    <Row className="invoiceTableMenuContainer">
      <Col>
        <Select
          defaultValue="embChile"
          disabled={format.multipleRows}
          style={{
            width: 200,
            marginRight: 10,
          }}
          placement="bottomLeft"
        >
          <Option value="embChile">Embajada Chile</Option>
          <Option value="tramiteAduana384">Tramite Aduana 384</Option>
        </Select>
        <Button
          type="primary"
          disabled={format.multipleRows}
          style={{
            width: 150,
          }}
        >
          Auto generate
        </Button>

        <Button
          type="primary"
          disabled={format.singleRow}
          style={{
            marginLeft: 10,
            width: 150,
          }}
          onClick={useInvoiceAsTemplate}
        >
          Create template
        </Button>
      </Col>
    </Row>
  );
};

export default InvoiceTableMenu;
