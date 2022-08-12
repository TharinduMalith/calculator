import React from "react";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { shallow, configure } from "enzyme";
import Item from "./Item";

configure({ adapter: new Adapter() });

describe("Item will render", () => {
  it("Item should render correctly", () => {
    const component = shallow(<Item  />);
    expect(component).toMatchSnapshot();
  });
});

