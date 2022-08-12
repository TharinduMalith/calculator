import React from "react";
import PropTypes from "prop-types";
import { ACTIONS } from "./constants";
import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";

function Row({ isEnable, isPositive, value, index, dispatch }) {
  return (
    <div className="input-group mb-3 row-container">
      <Grid container spacing={2}>
      <Grid item xs={6} md={6} lg={3}>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={isPositive ? "plus" : "minus"}
        label="Age"
        style={{height : "40px" , width : "100%"}}
        onChange={() => {
          dispatch({ type: ACTIONS.CHANGE_PLUS_MINUS, payload: index });
        }}
      >
        <MenuItem value={"plus"}>{"Plus (+)"}</MenuItem>
        <MenuItem value={"minus"}>{"Minus (-)"}</MenuItem>
      </Select>
      </Grid>
      <Grid item xs={6} md={6} lg={3}>
      <TextField
        label="Insert Number"
        variant="outlined"
        value={value}
        size="small"
        style={{ width:"100%"}}
        onChange={(event) =>{
          dispatch({
            type: ACTIONS.CHANGE_VALUE,
            payload: { value: event.target.value, index: index },
          })
        }
        }
      />
      </Grid>
      <Grid  item xs={12} md={12} lg={6}>
      <Button
        variant="contained"
        color="error"
        style={{height : "40px" , marginRight:"10px"}}
        onClick={() => dispatch({ type: ACTIONS.DELETE, payload: index })}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        style={{height : "40px" , marginLeft:"10px"}}
        color={isEnable ? "info" : "warning"}
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_NUMBER_TYPE, payload: index })
        }
      >
        {" "}
        {isEnable ? "Disable" : "Enable"}
      </Button>
      </Grid>
      </Grid>
    </div>
  );
}

Row.propTypes = {
  isEnable: PropTypes.bool.isRequired,
  isPositive: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.any.isRequired,
};

export default Row;
