import React from "react";
import renderer from "react-test-renderer";
import AppBackgroundComponent from "./AppBackgroundComponent"; // Asegúrate de importar el componente correctamente


test("AppBackgroundComponent renders correctly", () => {
  const tree = renderer.create(<AppBackgroundComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});