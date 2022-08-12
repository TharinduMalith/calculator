import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useReducer } from "react";
import { ACTIONS, JS_ERROR_INDEX } from "./constants";
import Row from "./Row";
import { Button } from "@mui/material";
import { addRow, changeNumberType, changePlusMinus, changeValue, deleteRow } from "./actions";
import Item from "./Item";
import './style.css'

const reducer = (state, action) => {
  let calculator = {...state};
  switch (action.type) {
    case ACTIONS.ADD:
      addRow(calculator);
      break;
    case ACTIONS.DELETE:
      deleteRow(calculator , action);
      break;
    case ACTIONS.CHANGE_VALUE:
      if(isNaN(action.payload.value)){
        alert("Please insert number")
        break;
      }
      changeValue(calculator , action)
      break;
    case ACTIONS.CHANGE_NUMBER_TYPE:
      changeNumberType(calculator , action);
      break;
    case ACTIONS.CHANGE_PLUS_MINUS:
      changePlusMinus(calculator , action)
      break;
    default:
      console.warn("Run the default case");
  }
  return calculator;
};


function Calculator() {
  const [calculator, dispatch] = useReducer(reducer, {rows :[] , result : 0});

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs></Grid>
        <Grid xs={12} lg={6} md={6}>
          <Item>
            {
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => dispatch({ type: ACTIONS.ADD })}
                >
                  Add Row
                </Button>
                {calculator.rows.map((row, index) => (
                  <Row
                    key={index}
                    isEnable={row.isEnable}
                    isPositive={row.isPositive}
                    value={row.value}
                    index={index}
                    dispatch={(action) =>dispatch(action)}
                  />
                ))}
                <p>{`Result  :  ${Math.round(calculator.result * JS_ERROR_INDEX) / JS_ERROR_INDEX}`}</p>
              </>
            }
          </Item>
        </Grid>
        <Grid xs></Grid>
      </Grid>
    </Box>
  );
}

export default Calculator;
