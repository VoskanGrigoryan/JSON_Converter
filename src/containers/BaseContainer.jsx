import React from "react";
import { Col, Layout, Menu, Row, Space, Typography } from "antd";
import { ReactComponent as SapLogo } from "../icons/sap-logo.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HomeOutlined,
  FormOutlined,
  ContainerOutlined,
  UserOutlined
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
    // {
    //   label: "Editor",
    //   key: "editor",
    //   icon: <FormOutlined />,
    //   disabled: true,
    //   onClick: () => {
    //     navigate("/editor");
    //   },
    //   style: { margin: 0 },
    // },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          backgroundColor: "#354A5F",
          paddingLeft: 0,
          paddingRight: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Row className="headerContainer">
          <Col>
            <Space>
            <SapLogo height={28} width={58} style={{marginTop: 30, marginLeft: 20}}/>
            <Title
              level={4}
              style={{ margin: 0, color: "#ffffff", marginLeft: 12 }}
            >
              {navigationConfig.headerTitle}
            </Title>
            </Space>
          </Col>
          <Col>
          <UserOutlined style={{marginRight: 24, marginTop: 35, fontSize: 20, color: '#ffffff', cursor:  "pointer"}} />
          </Col>
        </Row>
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
