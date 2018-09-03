import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

import ChildComponent from "./ChildComponent";

Enzyme.configure({ adapter: new Adapter() });

it("Testing ChildComponent Snapshot", () => {
  const component = shallow(<ChildComponent />);
  expect(toJSON(component)).toMatchSnapshot();
});

it("Function handleClick Run Correctly", () => {
  const component = shallow(<ChildComponent />);
  component
    .find("div")
    .children()
    .first()
    .simulate("click");
  expect(component.state().name).toEqual("husni");
  component.instance().handleNotJonny();
  component.instance().handleClick();
  expect(component.state().name).toEqual("habil");
});

test("ComponentDidMount Run Correctly", () => {
  const component = shallow(<ChildComponent />);
  component.instance().componentDidMount();
  expect(component.state().name).toEqual("jonny");
});

describe("Conditional testing", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ChildComponent />);
  });

  test("Condition if this.state.name === jonny", () => {
    component.instance().componentDidMount();
    expect(component.state().name).toEqual("jonny");
  });

  test("Condition if this.state.name !== jonny", () => {
    component
      .find("div")
      .children()
      .first()
      .simulate("click");
    expect(component.state().name).toEqual("husni");
  });
});

test("They have 2 Children div", () => {
  const component = shallow(<ChildComponent />);
  expect(component.find("div").children("div")).toHaveLength(2);
});
