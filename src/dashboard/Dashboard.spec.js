// Test away
import React from 'react';
import Dashboard from "./Dashboard";
import * as yeet from "@testing-library/react";


test("shows the controls and display", ()=>{
    expect(yeet.render(<Dashboard/>)).toMatchSnapshot();
})