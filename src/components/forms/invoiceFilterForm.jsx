import React from "react";
import { Select, Col, Row, Button, DatePicker } from "antd";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";
import "../../styles/InvoiceReport.css";

const InvoiceFilterForm = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const dateFormat = "DD/MM/YYYYY";

  return (
    <Row className="filterOptionsContainer">
      <Col>
        <div>Period</div>
        <RangePicker
          style={{ width: 200, marginRight: 15 }}
          format={dateFormat}
        />
      </Col>
      <Col>
        <div>Inv. Number</div>
        <Select
          style={{ width: 200, marginRight: 15 }}
          allowClear
          showSearch
          placeholder="Invoice number"
          name="invoice_number"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Col>
      <Col>
        <div>Comp. Code</div>
        <Select
          mode="multiple"
          placeholder="Company code"
          style={{ width: 200, marginRight: 15 }}
        >
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Col>
      <Col>
        <div>Contract Code</div>
        <Select
          mode="multiple"
          placeholder="Contract code"
          style={{ width: 200, marginRight: 10 }}
        >
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Col>
      <Col>
        <div>&nbsp;</div>

        <Button
          type="primary"
          icon={<SearchOutlined />}
          style={{ marginRight: 10, width: 100 }}
        >
          Fetch
        </Button>
        <Button icon={<ClearOutlined />} style={{ width: 100 }}>
          Clear
        </Button>
      </Col>
    </Row>
  );
};

export default InvoiceFilterForm;
