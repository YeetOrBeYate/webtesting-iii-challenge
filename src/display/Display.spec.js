// Test away!
import React from 'react';
import Display from "./Display";
import * as yeet from "@testing-library/react";

test("display rendered", ()=>{
    expect(yeet.render(<Display/>)).toMatchSnapshot();
})

test("Says its closed when true, and red-led is showing when only closed is true", ()=>{
    const {getByText} = yeet.render(<Display closed={true} 
        locked={false}/>)

    expect(getByText(/closed/i));
    expect(document.querySelector('.red-led'))
})

test("red-led is showing when only locked is true", ()=>{

    const {getByText} = yeet.render(<Display locked={true}
    closed={false}/>);
    expect(document.querySelector('.red-led'));
})


test("Says its locked when true, and green-led is showing when only locked is true", ()=>{
    const {getByText} = yeet.render(<Display locked = {true}
    closed={false}/>);

    expect(getByText(/locked/i));
    expect(document.querySelector(".green-led"))
})

test("green-led is showing when only closed is true", ()=>{

    const {getByText} = yeet.render(<Display locked={false}
    closed={true}/>);
    expect(document.querySelector('.green-led'));
})