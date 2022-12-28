import "./CardWorkers.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CardWorkers = ({ worker,background }) => {
  const { name, office, imgPath } = worker;
 
  return (
    <Card className="worker">
        <div className="header" style={{backgroundColor:background}}>
          <img alt={name} src={imgPath} />
        </div>
      <CardContent className="footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </CardContent>
    </Card>
  );
};

export default CardWorkers;
