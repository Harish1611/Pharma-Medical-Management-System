import React from "react";
import { Grid } from "@mui/material";
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import HeadingOne from "../../UiComponents/HeadingOne";
import TopResourceCards from "./TopResourceCards";
const ResourceRequests = () => {
  return (
    <div>
      <HeadingOne headText="Resource Requests" />
      <div className="mx-4 my-10 sm:mx-40 sm:my-20">

        <TopResourceCards />
      
      </div>
    </div>
  );
};

export default ResourceRequests;
