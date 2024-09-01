import React from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";

import DashboardRawCards from "./DashboardRawCards";
import RecentResourceTable from "./RecentResourceTable";
const RawMaterialResources = () => {
  const navigate = useNavigate();

  return (
    <div className=" mx-4 my-10 sm:mx-40 sm:my-20 ">
      <div className=" flex justify-end mx-2">
        <button
          onClick={() =>
            navigate("/raw-material-resources/create-new-resource")
          }
          className="bg-yellow-500 hover:bg-black text-white font-semibold font-cinzel py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
          type="button"
        >        
          <AddIcon /> Create Resource
        </button>
      </div>

      <DashboardRawCards />

      <RecentResourceTable />

    </div>
  );
};

export default RawMaterialResources;
