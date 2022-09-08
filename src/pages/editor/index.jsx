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
  // const [fakeData, setFakeData] = useState({
  //   IndExe: "1",
  //   MontoItem: "206",
  //   NmbItem: "ALOJAMIENTO HABITACIONES",
  //   PrcItem: "206",
  //   QtyItem: "1",
  //   RUTEmisor: "99581150-2",
  //   FchEmis: "2019-05-28",
  //   IndServicio: "4",
  //   TipoDTE: "110",
  //   MntTotOtrMnda: "700",
  //   TpoCambio: "PESO CL",
  //   CiudadRecep: "New Jersey",
  //   CmnaRecep: "New Jersey",
  //   DirRecep: "Somewhere",
  //   Nacionalidad: "331",
  //   GiroRecep: "Sin Giro",
  //   RUTRecep: "55555555-5",
  //   RznSocRecep: "Empresa Extranjera",
  //   MntExe: "206",
  //   MntTotal: "206",
  //   TpoMoneda: "DOLAR USA",
  //   FchRef: "2019-05-28",
  //   FolioRef: "ACME",
  //   RazonRef: "RESOLUCION SNA",
  //   TpoDocRef: "812",
  //   company_code: "231",
  //   contract_number: "346246",
  //   invoice_number: "257435",
  //   period: "15-09-2022"
  // })

  // const [fakeTableData, setFakeTableData] = useState({
  //   property: "name",
  //   value: "voskan"
  // })

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
              dataSource={invoiceData}
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
