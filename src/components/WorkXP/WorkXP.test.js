import React from "react";
import { shallow } from "enzyme";
import WorkXP from "./WorkXP";

describe("WorkXP", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WorkXP />);
    expect(wrapper).toMatchSnapshot();
  });
});
