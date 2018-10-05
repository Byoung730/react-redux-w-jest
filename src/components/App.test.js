import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

describe("App", () => {
  const app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a wallet component", () => {
    // console.log(app.debug());

    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });
});
