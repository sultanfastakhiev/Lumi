import React from 'react'
import {fireEvent, render, screen} from "@testing-library/react";

import TemplateName from "./TemplateName";

test("render", () => {
    render(<TemplateName />);
    const target = screen.getByTestId('TemplateName');
    expect(target).toBeInTheDocument();
    expect(target).toMatchSnapshot()
})