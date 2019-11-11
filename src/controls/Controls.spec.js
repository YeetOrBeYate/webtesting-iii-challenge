import React from 'react';
import Controls from "./Controls";
import * as yeet from "@testing-library/react";

test("control rendered", ()=>{
    expect(yeet.render(<Controls/>)).toMatchSnapshot();
})