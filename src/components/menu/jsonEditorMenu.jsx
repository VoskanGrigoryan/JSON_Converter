import React, { useRef, useState } from "react";
import { Button, Space, Input, Row, Col, Modal } from "antd";
import {
  DownloadOutlined,
  UploadOutlined,
  SaveOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "../../styles/Editor.css";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css';

const JSONEditorMenu = ({
  menuDisabled,
  fileDetail,
  setFileDetail,
  setFileContent,
  fileContent,
  onChangeFile,
}) => {
  const fileRef = useRef();

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
      setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };


  const onDeleteFile = () => {
    setFileContent({ ...fileContent, json: {} });
    setFileDetail({ fileName: "" });
    fileRef.current.value = "";
  };

  return (
    <div className="editorMenuContainer">
      <Modal
        open={open}
        width="100%"
        style={{
          top: 20,
        }}
        bodyStyle={{height: "70vh"}}
        title="JSON Preview"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <JSONPretty id="json-pretty" data={fileContent} className="modalDisplay"></JSONPretty>

      </Modal>
      <Row className="optionsContainer">
        <Col>
          <Space>
            <div>
              <label htmlFor="filePicker" className="uploadButton" >
                <UploadOutlined />
              </label>
              <input
                type="file"
                id="filePicker"
                ref={fileRef}
                style={{ display: "none", visibility: "hidden" }}
                onChange={onChangeFile}
              />
            </div>
            <Input
              placeholder="file name"
              value={fileDetail.fileName}
              name="fileName"
            />
            <Button
              type="primary"
              danger
              onClick={onDeleteFile}
              disabled={menuDisabled}
            >
              <DeleteOutlined />
            </Button>
          </Space>
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<SaveOutlined />}
            disabled={menuDisabled}
            style={{ width: 175, marginRight: 20 }}
          >
            Save template
          </Button>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            disabled={false}
            style={{ width: 175 }}
            onClick={() => {
              showModal()
            }}
          >
            Preview JSON
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default JSONEditorMenu;
