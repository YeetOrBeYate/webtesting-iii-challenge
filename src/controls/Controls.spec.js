import React from 'react';
import Controls from "./Controls";
import * as yeet from "@testing-library/react";
import { fireEvent } from '@testing-library/react';

test("control rendered", ()=>{
    expect(yeet.render(<Controls/>)).toMatchSnapshot();
})

test("Close button triggers toggle close",   ()=>{
    const toggleClosedMock = jest.fn();
    
    const {getByText, findByText} = yeet.render(<Controls toggleClosed ={toggleClosedMock}/>)

    const button =  getByText(/close gate/i);

    fireEvent.click(button);

    expect(toggleClosedMock).toHaveBeenCalled();
    
     expect(findByText(/open gate/i))
    
})

test("Close button triggers toggle close", ()=>{
    const toggleClosedMock = jest.fn();
    
    const {getByText, findByText} = yeet.render(<Controls toggleClosed ={toggleClosedMock}/>)

    const button =  getByText(/close gate/i);

    fireEvent.click(button);

    expect(toggleClosedMock).toHaveBeenCalled();
    
    expect(findByText(/open gate/i))
    
})


test('The lock gate is disabled ', () => {
    
    const {getByText} = yeet.render(<Controls />);

    const Gate = getByText(/lock gate/i);

    expect(Gate).toBeTruthy();
    expect(Gate.disabled).toBeTruthy();
})

