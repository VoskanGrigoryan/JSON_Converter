import React, { useState } from "react";
import { Table } from "antd";
import "../../styles/Templates.css";
import { EditOutlined, EyeOutlined, DeleteFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const data = [
  {
    key: "1",
    name: "Emabajada Chile",
    date: "21-06-2022",
  },
  {
    key: "3",
    name: "Tramite aduana 384",
    date: "21-06-2022",
  },
  {
    key: "2",
    name: "Tramite aduana 321",
    date: "14-07-2022",
  },
  {
    key: "4",
    name: "Embajada Peru",
    date: "17-07-2022"
  },
  {
    key: "12",
    name: "Formulario importacion 21",
    date: "29-08-2022",
  },
  {
    key: "5",
    name: "Tramite Embajada Brasil",
    date: "09-09-2022",
  },
];
const TemplatesTable = () => {

  const navigate = useNavigate();

  const [bottom] = useState("bottomCenter");

  const columns = [
    {
      title: "Template name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Creation Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Edit",
      key: "edit",
      align: "center",
      width: "80px",
      render: (text, record) => (
        <EditOutlined
          style={{cursor: "pointer"}}
          onClick={navigate("/editor")}
        />
      ),
    },
    {
      title: "Visualize",
      key: "visualize",
      align: "center",
      width: "80px",
      render: (text, record) => (
        <EyeOutlined
          className="visualizeButton"
          onClick={() => navigate("/editor")}
        />
      ),
    },
    {
      title: "Delete",
      key: "delete",
      align: "center",
      width: "80px",
      render: (text, record) => (
        <DeleteFilled
          className="DeleteButton"
          onClick={() => navigate("/editor")}
        />
      ),
    },
  ];
  return (
    <div>
      <Table
        size="small"
        style={{ backgroundColor: "#ffffff" }}
        bordered
        // title={() => (
        //   <Title level={4} style={{ margin: 0 }}>
        //    User Template Table
        //   </Title>
        // )}
        pagination={{
          responsive: true,
          pageSize: 10,
          position: [bottom],
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default TemplatesTable;
