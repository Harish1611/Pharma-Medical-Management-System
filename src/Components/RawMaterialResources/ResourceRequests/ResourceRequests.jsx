import React from "react";
import { Grid } from "@mui/material";
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import HeadingOne from "../../UiComponents/HeadingOne";
const ResourceRequests = () => {
  return (
    <div>
      <HeadingOne headText="Resource Requests" />
      <div className="mx-4 my-10 sm:mx-40 sm:my-20">
        <Grid container spacing={1} className="py-8">
          <Grid item md={4} xs={12}>
            <div className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
              <div className="text-yellow-400 mx-2">
                <AddHomeWorkIcon />
              </div>
              <h2 className=" font-medium font-poppins text-sm sm:text-lg   ">
                Resource Requests
              </h2>
              <div className="mx-2">
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  4
                </span>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
              <div className="text-yellow-400 mx-2">
                <PauseCircleFilledIcon />
              </div>
              <h2 className=" font-medium font-poppins text-sm sm:text-lg   ">
                Requests on Hold
              </h2>
              <div className="mx-2">
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  2
                </span>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
              <div className="text-yellow-400 mx-2">
                <RuleFolderIcon />
              </div>
              <h2 className=" font-medium font-poppins text-sm sm:text-lg   ">
                Closed Requests
              </h2>
              <div className="mx-2">
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-700 dark:text-green-300">
                  120
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ResourceRequests;
