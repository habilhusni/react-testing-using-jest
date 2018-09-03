import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

import DemoComponent from "./DemoComponent";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Snapshot and Functional", () => {
  let component;

  beforeEach(() => {
    component = shallow(<DemoComponent />);
  });

  it("Testing DemoComponent Snapshot", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("Testing handleClick", () => {
    component.find("div").simulate("click");
    expect(component.state("name")).toEqual("kevin");
  });
});

it("Testing ComponentDidMount", () => {
  let component = shallow(<DemoComponent />);
  component.instance().componentDidMount();
  expect(component.state("name")).toEqual("habil");
});
