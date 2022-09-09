import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addInvoices, addDownloadList } from "../../redux/invoiceSlice";

const InvoiceTable = () => {
  const dispatch = useDispatch();

  const [bottom] = useState("bottomCenter");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const data = useSelector((state) => state.configurationReducer.dummyData);

  useEffect(() => {
    const rows = selectedRowKeys.map((item) => data[item]);

    dispatch(addInvoices(rows));
  }, [selectedRowKeys]);

  const rowSelection = {
    hideSelectAll: true,
    selectedRowKeys,

    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
     
    },
    onSelect: (selectedRowKeys, selectedRows) => {
      // console.log(selectedRowKeys, selectedRows)
      dispatch(addDownloadList(selectedRowKeys))
    },
  };

  const columns = [
    {
      title: "Invoice number",
      dataIndex: ["data", "invoice_number"],
      sorter: (a, b) => a.data.invoice_number - b.data.invoice_number,
    },
    {
      title: "Emision date",
      dataIndex: ["Encabezado", "IdDoc", "FchEmis"],
    },
    {
      title: "Sender",
      dataIndex: ["Encabezado", "Emisor", "RUTEmisor"],
    },

    {
      title: "Reason",
      dataIndex: ["Encabezado", "Receptor", "RznSocRecep"],
    },
    {
      title: "Adress",
      dataIndex: ["Encabezado", "Receptor", "DirRecep"],
    },
    {
      title: "Adress city",
      dataIndex: ["Encabezado", "Receptor", "CiudadRecep"],
    },
  ];


  return (
    <Table
      style={{ backgroundColor: "#ffffff" }}
      bordered
      columns={columns}
      dataSource={data}
      rowSelection={rowSelection}
      size="small"
      pagination={{
        responsive: true,
        pageSize: 7,
        position: [bottom],
      }}
    />
  );
};

export default InvoiceTable;
