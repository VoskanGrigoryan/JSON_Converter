import React, { useEffect, useState } from "react";
import { Select, Col, Row, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addReferenceInvoice } from "../../redux/invoiceSlice";
import "../../styles/InvoiceReport.css";
import downloadFile from "../../util/blobDownload";

const { Option } = Select;

const InvoiceTableMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [format, setFormat] = useState({
    singleRow: true,
    multipleRows: true,
  });

  const invoice = useSelector((state) => state.invoiceReducer.selectedInvoices);
  const downloadList = useSelector((state) => state.invoiceReducer.downloadInvoiceList)

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

  const generateInvoiceFormat = () => {
    message.loading({
      content: 'Processing',
      duration: 1,
    });

    setTimeout(() => {
      message.success({
        content: 'File/s downloaded',
        duration: 2,
      });
      downloadFile(downloadList)
    }, 2000);
  }

  
  console.log(downloadList)

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
          <Option value="tramiteAduana321">Tramite aduana 321</Option>
          <Option value="tramiteAduana384">Tramite Aduana 384</Option>
          <Option value="embPeru">Embajada Peru</Option>
          <Option value="formImport21">Formulario importacion 21</Option>
          <Option value="embBrasil">Tramite Embajada Brasil</Option>
        </Select>
        <Button
          type="primary"
          disabled={format.multipleRows}
          style={{
            width: 150,
          }}
          onClick={() => {
            generateInvoiceFormat()
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
