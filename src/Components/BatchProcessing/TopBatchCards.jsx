import React from "react";
import { Grid } from "@mui/material";
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useNavigate } from "react-router-dom";

const TopBatchCards = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Grid container spacing={1} className="py-8">
        <Grid item md={4} xs={12}>
          <div  onClick={ () => navigate('/')} className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
            <div className="text-yellow-400 mx-2">
              <MedicationLiquidIcon />
            </div>
            <h2 className="font-medium font-poppins text-sm sm:text-lg  ">
              Start a Batch
            </h2>
          
          </div>
        </Grid>

        <Grid item md={4} xs={12}>
          <div onClick={ () => navigate('/')} className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
            <div className="text-yellow-400 mx-2">
              <AddHomeWorkIcon />
            </div>
            <h2 className=" font-medium font-poppins text-sm sm:text-lg   ">
              On Going Batches
            </h2>
            <div className="mx-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                10
              </span>
            </div>
          </div>
        </Grid>

        <Grid item md={4} xs={12}>
          <div onClick={ () => navigate('/')} className=" text-left border rounded-md py-6 px-6 mx-2 sm:p-6  hover:-translate-y-1  hover:shadow-md cursor-pointer flex  align-middle overflow-hidden">
            <div className="text-yellow-400 mx-2">
              <AssignmentTurnedInIcon />
            </div>
            <h2 className=" font-medium font-poppins text-sm sm:text-lg ">
              Completed Batches
            </h2>
            <div className="mx-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            120
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopBatchCards;
