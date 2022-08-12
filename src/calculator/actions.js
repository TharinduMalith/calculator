export const addRow = (calculator) => {
  calculator.rows = [...calculator.rows, getNewRow()]
}

export const changeValue = (calculator, action) => {
  for (let index = 0; index < calculator.rows.length; index++) {
    if (index === action.payload.index) {
      let row = calculator.rows[index];
      if (action.payload.value === "") {
        calculator.result =
        getZeroForEmpty(calculator.result) + (row.isPositive ? -1 * getZeroForEmpty(row.value) : getZeroForEmpty(row.value));
        row.value = "";
      } else {
        calculator.result =
        getZeroForEmpty(calculator.result) +
          (row.isPositive
            ? getZeroForEmpty(action.payload.value) - getZeroForEmpty(row.value)
            : getZeroForEmpty(row.value) - getZeroForEmpty(action.payload.value));
        row.value = action.payload.value;
      }
      calculator.rows[index] = row;
      break;
    }
  }
};

export const changePlusMinus = (calculator, action) => {
  let row = calculator.rows[action.payload];
  for (let index = 0; index < calculator.rows.length; index++) {
    if (index === action.payload) {
      calculator.result =
      getZeroForEmpty(calculator.result) + (row.isPositive ? -2 * getZeroForEmpty(row.value) : 2 * getZeroForEmpty(row.value));
      calculator.rows[index].isPositive = !calculator.rows[index].isPositive;
      break;
    }
  }
};

export const changeNumberType = (calculator, action) => {
  calculator.rows = calculator.rows.map((value, index) => {
    if (index === action.payload) {
      calculator.result =
      getZeroForEmpty(calculator.result) +
        xorOperator(value.isEnable, value.isPositive) * getZeroForEmpty(value.value);
      return { ...value, isEnable: !value.isEnable };
    }
    return value;
  });
};

export const deleteRow = (calculator, action) => {
  let row = calculator.rows[action.payload];
  calculator.result = getZeroForEmpty(calculator.result) - (row.isPositive ? getZeroForEmpty(row.value) : -1 * getZeroForEmpty(row.value));
  calculator.rows.splice(action.payload, 1);
};

// XOR gate
const xorOperator = (a, b) => (!a ^ !b ? 1 : -1);

const getNewRow = () => ({
  isEnable: true,
  isPositive: true,
  value: 0,
});

// to add decimal values
const getZeroForEmpty = (value) => value === "" ? 0 : parseFloat(value) ;