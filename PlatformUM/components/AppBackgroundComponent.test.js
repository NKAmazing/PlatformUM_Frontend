import React from "react";
import renderer from "react-test-renderer";
import AppBackgroundComponent from "./AppBackgroundComponent";
import { testMessages } from "../Constants";

test(testMessages.appBackground, () => {
  const tree = renderer.create(<AppBackgroundComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});