import React, { useState } from "react";
import { Table } from "antd";
import "../../styles/Templates.css";
import { EditOutlined, EyeOutlined, DeleteFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const data = [
  {
    key: "1",
    name: "John Brown",
    date: 32,
    tags: ["Q1", "Q4"],
  },
  {
    key: "2",
    name: "Jim Green",
    date: 42,
    tags: ["Q3"],
  },
  {
    key: "4",
    name: "John Brown",
    date: 32,
    tags: ["Q1", "Q4"],
  },
  {
    key: "5",
    name: "Jim Green",
    date: 42,
    tags: ["Q3"],
  },
  {
    key: "19",
    name: "John Brown",
    date: 32,
    tags: ["Q1", "Q4"],
  },
  {
    key: "20",
    name: "Jim Green",
    date: 42,
    tags: ["Q3"],
  },
  {
    key: "22",
    name: "Joe Black",
    date: 32,
    tags: ["Q1", "Q2"],
  },
  {
    key: "23",
    name: "John Brown",
    date: 32,
    tags: ["Q1", "Q4"],
  },
  {
    key: "24",
    name: "Jim Green",
    date: 42,
    tags: ["Q3"],
  },
  {
    key: "25",
    name: "Joe Black",
    date: 32,
    tags: ["Q1", "Q2"],
  },
];
const TemplatesTable = () => {

  const navigate = useNavigate();
  
  const [bottom] = useState("bottomCenter");

  const columns = [
    {
      title: "Name",
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
          className="EditButton"
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
          onClick={() =>  navigate("/editor")}
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
          onClick={() =>  navigate("/editor")}
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
        //     Saved templates
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
