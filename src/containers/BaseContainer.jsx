import React from "react";
import { Layout, Menu, Typography } from "antd";
import { ReactComponent as AccentureLogo } from "../icons/acc_solid.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HomeOutlined,
  FormOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";

const { Header, Sider } = Layout;
const { Title } = Typography;

const BaseContainer = ({ children }) => {
  let navigate = useNavigate();

  const navigationConfig = useSelector(
    (state) => state.configurationReducer.navigation
  );

  const items = [
    {
      label: "Invoice report",
      key: "invoice_report",
      icon: <HomeOutlined />,
      onClick: () => {
        navigate("/");
      },
      style: { margin: 0 },
    },
    {
      label: "Templates",
      key: "templates",
      icon: <ContainerOutlined />,
      onClick: () => {
        navigate("/templates");
      },
      style: { margin: 0 },
    },
    {
      label: "Editor",
      key: "editor",
      icon: <FormOutlined />,
      disabled: true,
      onClick: () => {
        navigate("/editor");
      },
      style: { margin: 0 },
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          backgroundColor: "#1890ff",
          paddingLeft: 24,
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccentureLogo height={24} width={36} />
        <Title
          level={4}
          style={{ margin: 0, paddingLeft: 18, color: "#ffffff" }}
        >
          {navigationConfig.headerTitle}
        </Title>
      </Header>
      <Layout>
        <Sider collapsed={true} theme="light">
          <Menu
            theme="light"
            mode="inline"
            items={items}
            defaultSelectedKeys={navigationConfig.menuIcon}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: 16 }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseContainer;
