import React from "react";
import { shallow } from "enzyme";
import AcademicXP from "./AcademicXP";

describe("AcademicXP", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AcademicXP />);
    expect(wrapper).toMatchSnapshot();
  });
});
