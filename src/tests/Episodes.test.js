import React from "react";
import { render } from "@testing-library/react";

import Episodes from "../components/Episodes";

test("Renders Episodes first without props, then with props", () => {
    const mockData = { 
        id: '123',
        image: { medium: 'medium_image'},
        name: 'name',
        season: 1,
        number: 3,
        summary: '<p>Summary</p>',
        runtime: 20
    }

    const { queryAllByText, rerender } =  render(<Episodes episodes={[]}/>);
    
    expect(queryAllByText(/season/i)).toHaveLength(0);

    rerender(<Episodes episodes={[mockData]}/>);

    expect(queryAllByText(/name/i)).toHaveLength(1);
})
