import React from "react";
import { Rating } from "@mui/material";

export const CardGuide = () => {
    const rate = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  const [value, setValue] = React.useState(rate);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row d-flex align-items-center justify-content-between flex-row flex-nowrap">
            <div className="col">
              <h5 className="card-title">Gianluca</h5>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setValue(newValue);
                  }
                }}
              />
            </div>
            <div className="col d-flex justify-content-end">
              <div className="imgGuida"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
