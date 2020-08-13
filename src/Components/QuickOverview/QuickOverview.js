import React from "react";
import "./QuickOverview.css";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CardHeader from "@material-ui/core/CardHeader";
const QuickOverview = (props) => {
  const { number, text } = props;
  return (
    <Card className="root" style={{ background: "orange" }} variant="outlined">
      <CardHeader />

      <ShoppingCartIcon style={{ color: "white" }} />
      <Typography variant="h5" component="h2">
        <p style={{ color: "white", fontSize: "20", marginLeft: "60px" }}>
          {number}
        </p>
        <p>{text}</p>
      </Typography>

      <CardContent>
        <Typography
          className="title"
          color="textSecondary"
          gutterBottom
          title="Update Logo on all pages"
          timestamp="Due Date Aug 8"></Typography>
      </CardContent>
    </Card>
  );
};
export default QuickOverview;
