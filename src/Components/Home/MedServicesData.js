import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BiotechIcon from '@mui/icons-material/Biotech';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';

export const MedServicesData = [
  {
    service: "PMMS Batch Processing",
    icon: <PublishedWithChangesIcon />,
    url:'batch-processing',
  },
  {
    service: "PMMS Raw Material & Resources",
    icon: <MedicationLiquidIcon />,
    url:'raw-material-resources',
  }
  ,
  
  {
    service: "PMMS Report Generation",
    icon: <SummarizeIcon />,
    url:'report-generation',
  },
  {
    service: "PMMS Manufacturing",
    icon: <PrecisionManufacturingIcon />,
    url:'manufacturing',

  },
  {
    service: "PMMS Packaging & Shipping",
    icon: <LocalShippingIcon />,
    url:'packaging-shipping',

  }
  ,
  {
    service: "PMMS Research & Development",
    icon: <BiotechIcon />,
    url:'research-development',
  }
];
