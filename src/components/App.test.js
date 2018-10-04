import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

describe("App", () => {
  const app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
});
