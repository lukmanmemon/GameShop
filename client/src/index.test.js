import React from "react";
import { render } from "@testing-library/react";
import { App } from "./index";


// Check if the application renders correctly
test("App renders without crashing", () => {
    render(<App />)
});

