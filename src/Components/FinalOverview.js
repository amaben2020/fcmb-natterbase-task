import React from "react";
import QuickOverview from "../Components/QuickOverview/QuickOverview";
import { Grid } from "@material-ui/core";

/** This is to render the dynamic data into the card at the far right */

function FinalOverview(title, timestamp) {
  return (
    <Grid item xs={12} sm={4}>
      <QuickOverview number={20} text={"Total Modules"} />
    </Grid>
  );
}

export default FinalOverview;
