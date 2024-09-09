import React from "react";
import { Grid } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useNavigate } from "react-router-dom";

const DashboardRawCards = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Grid container spacing={1} className="py-8">
        <Grid item md={4} xs={12}>
          <div  onClick={ () => navigate('/raw-material-resources/available-resources')} className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
            <div className="text-yellow-400 mx-2">
              <HomeWorkIcon />
            </div>
            <h2 className="font-medium font-poppins text-sm sm:text-lg  ">
              Available Resources
            </h2>
            <div className="mx-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                30
              </span>
            </div>
          </div>
        </Grid>

        <Grid item md={4} xs={12}>
          <div onClick={ () => navigate('/raw-material-resources/resource-requests')} className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
            <div className="text-yellow-400 mx-2">
              <AddHomeWorkIcon />
            </div>
            <h2 className=" font-medium font-poppins text-sm sm:text-lg   ">
              Resource Requests
            </h2>
            <div className="mx-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                4
              </span>
            </div>
          </div>
        </Grid>

        <Grid item md={4} xs={12}>
          <div className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
            <div className="text-yellow-400 mx-2">
              <MarkUnreadChatAltIcon />
            </div>
            <h2 className=" font-medium font-poppins text-sm sm:text-lg ">
              Resource Issues
            </h2>
            <div className="mx-2">
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                2 Issues
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardRawCards;
