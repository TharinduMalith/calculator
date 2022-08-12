import React from "react";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import Row from "./Row";

configure({ adapter: new Adapter() });

describe("Row will render", () => {
  it("Row should render correctly", () => {
    const component = shallow(<Row isEnable={true}
        isPositive={true}
        value={7}
        index={1}
        dispatch={(action) => console.log(`test ${action}`)} />);
    expect(component).toMatchSnapshot();
  });
});

