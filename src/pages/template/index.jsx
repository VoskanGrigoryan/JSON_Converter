import React from "react";
import BaseContainer from "../../containers/BaseContainer";
import { useDispatch } from "react-redux";
import { changeNavigation } from "../../redux/configSlice";
import TemplatesTable from "../../components/tables/templateTable";

const TemplatePage = () => {
  const dispatch = useDispatch();

  dispatch(
    changeNavigation({
      headerTitle: "Templates",
      menuIcon: "templates",
    })
  );

  return (
    <BaseContainer>
      <TemplatesTable />
    </BaseContainer>
  );
};

export default TemplatePage;
