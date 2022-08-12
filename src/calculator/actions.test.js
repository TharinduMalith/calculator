import { addRow, changeNumberType, changePlusMinus, changeValue, deleteRow } from "./actions";
import { ACTIONS } from "./constants";

test("add row", () => {
  const data = {
    rows: [
    ],
    result: 0,
  };
  addRow(data, { type: ACTIONS.DELETE, payload: 0 });
  expect(data).toEqual({
    rows: [
      {
        isEnable: true,
        isPositive: true,
        value: 0,
      }
    ],
    result: 0,
  });
});


test("Check value will change", () => {
  const data = {
    rows: [
      {
        isEnable: true,
        isPositive: true,
        value: 0,
      },
    ],
    result: 0,
  };
  changeValue(data, {
    type: ACTIONS.CHANGE_VALUE,
    payload: { value: 7, index: 0 },
  });
  expect(data).toEqual({
    rows: [
      {
        isEnable: true,
        isPositive: true,
        value: 7,
      },
    ],
    result: 7,
  });
});

test("Check plus mines will change", () => {
  const data = {
    rows: [
      {
        isEnable: true,
        isPositive: true,
        value: 7,
      },
    ],
    result: 7,
  };
  changePlusMinus(data, { type: ACTIONS.CHANGE_PLUS_MINUS, payload: 0 });
  expect(data).toEqual({
    rows: [
      {
        isEnable: true,
        isPositive: false,
        value: 7,
      },
    ],
    result: -7,
  });
});

test("Check number type will change", () => {
  const data = {
    rows: [
      {
        isEnable: true,
        isPositive: true,
        value: 7,
      },
    ],
    result: 7,
  };
  changeNumberType(data, { type: ACTIONS.CHANGE_NUMBER_TYPE, payload: 0 });
  expect(data).toEqual({
    rows: [
      {
        isEnable: false,
        isPositive: true,
        value: 7,
      },
    ],
    result: 0,
  });
});


test("delete row", () => {
  const data = {
    rows: [
      {
        isEnable: true,
        isPositive: true,
        value: 7,
      },
    ],
    result: 7,
  };
  deleteRow(data, { type: ACTIONS.DELETE, payload: 0 });
  expect(data).toEqual({
    rows: [
      
    ],
    result: 0,
  });
});
