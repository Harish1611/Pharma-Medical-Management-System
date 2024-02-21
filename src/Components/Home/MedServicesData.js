import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const MedServicesData = [
  {
    service: "PMMS Batch Processing",
    icon: <PublishedWithChangesIcon />,
    url:'batch-processing',
  },
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

  },
];
