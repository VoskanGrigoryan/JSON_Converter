import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

const Error404 = () => {
  let navigate = useNavigate();
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Return home
        </Button>
      }
    />
  );
};

export default Error404;
