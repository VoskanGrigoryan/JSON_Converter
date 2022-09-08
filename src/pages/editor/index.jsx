import React, { useState } from "react";
import BaseContainer from "../../containers/BaseContainer";
import { useDispatch, useSelector } from "react-redux";
import { changeNavigation } from "../../redux/configSlice";
import JSONEditorMenu from "../../components/menu/jsonEditorMenu";
import { Col, Row, Table, Typography } from "antd";
import SvelteJSONEditor from "./SvelteJSONEditor";

const { Title } = Typography;

const InvoiceEditorPage = () => {
  const [searchText, setSearchText] = useState({ searchText: "" });
  const [fileDetail, setFileDetail] = useState({ fileName: "" });
  const [menuDisabled, setMenuDisabled] = useState(true);
  const [fileContent, setFileContent] = useState({
    json: {
      greetings: "Edit this document or upload a file!",
    },
    text: undefined,
  });
  
  const [superFakeData] = useState([
    { property: "IndExe", value: "1" },
    { property: "MontoItem", value: "206" },
    { property: "NmbItem", value: "ALOJAMIENTO HABITACIONES" },
    { property: "PrcItem", value: "206" },
    { property: "QtyItem", value: "1" },
    { property: "RUTEmisor", value: "99581150-2" },
    { property: "FchEmis", value: "2019-05-28" },
    { property: "IndServicio", value: "4" },
    { property: "TipoDTE", value: "110" },
    { property: "MntTotOtrMnda", value: "700" },
    { property: "TpoCambio", value: "PESO CL" },
    { property: "CiudadRecep", value: "New Jersey" },
    { property: "CmnaRecep", value: "New Jersey" },
    { property: "DirRecep", value: "Somewhere" },
    { property: "Nacionalidad", value: "331" },
    { property: "GiroRecep", value: "Sin Giro" },
    { property: "RUTRecep", value: "55555555-5" },
    { property: "RznSocRecep", value: "Empresa Extranjera" },
    { property: "MntExe", value: "206" },
    { property: "TpoMoneda", value: "DOLAR USA" },
    { property: "FchRef", value: "2019-05-28" },
    { property: "FolioRef", value: "ACME" },
    { property: "RazonRef", value: "RESOLUCION SNA" },
    { property: "TpoDocRef", value: "831" },
    { property: "company_code", value: "231" },
    { property: "contract_number", value: "346246" },
    { property: "invoice_number", value: "257435" },
    { property: "Period", value: "15-09-2022" },

  ])
  const dispatch = useDispatch();

  dispatch(
    changeNavigation({
      headerTitle: "Template editor",
      menuIcon: "editor",
    })
  );

  const invoiceData = useSelector(
    (state) => state.invoiceReducer.selectedInvoices
  );

  console.log(invoiceData)

  const columns = [
    {
      title: "Property",
      dataIndex: "property",
      key: "property",
      sorter: (a, b) => a.property - b.property,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      sorter: (a, b) => a.value - b.value,
    },
  ];

  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      key: i,
      property: `Edward King ${i}`,
      value: `London, Park Lane no. ${i}`,
    });
  }

  const onChangeFile = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const updatedJSON = e.target.files[0];
      if (updatedJSON.type !== "application/json") {
        alert("Error: File could not be uploaded!");
      } else {
        alert("File uploaded");
        setFileDetail({ fileName: updatedJSON.name });

        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = (e) => {
          const target = e.target;
          const result = target?.result;

          setFileContent({ ...fileContent, json: JSON.parse(result) });
        };
      }
    }
  };

  return (
    <BaseContainer>
      <JSONEditorMenu
        menuDisabled={menuDisabled}
        searchText={searchText}
        setFileContent={setFileContent}
        setFileDetail={setFileDetail}
        fileDetail={fileDetail}
        fileContent={fileContent}
        onChangeFile={onChangeFile}
      />

      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col span={12} style={{ paddingRight: 20 }}>
          <div className="jsonEditorContainer">
            <SvelteJSONEditor content={fileContent} onChange={setFileContent} />
          </div>
        </Col>

        <Col span={12} style={{ paddingLeft: 20 }}>

          <div className="displayJson">
            <Table
              columns={columns}
              size="small"
              dataSource={superFakeData}
              pagination={false}
              scroll={{ y: "calc(66vh - 4em)" }}
              scrollToFirstRowOnChange={true}
            />
          </div>
        </Col>
      </Row>
    </BaseContainer>
  );
};

export default InvoiceEditorPage;
