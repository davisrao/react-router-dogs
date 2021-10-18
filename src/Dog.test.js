
import React from "react";
import { render } from "@testing-library/react";
import Dog from "./Dog"
import { MemoryRouter } from "react-router";

// mock useParams only
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({name: "whiskey"}),
  }));

const dogsData = [
    {
        "name": "Whiskey",
        "age": 5,
        "src": "whiskey",
        "facts": [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
    },
    {
        "name": "Duke",
        "age": 3,
        "src": "duke",
        "facts": [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    },
    {
        "name": "Perry",
        "age": 4,
        "src": "perry",
        "facts": [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    }
]


describe("testing Dog component", function () {
    test("renders successfully", function () {
        render(
            <MemoryRouter>
                <Dog dogsData={dogsData} dogName='whiskey' />
            </MemoryRouter>
        )
    })
    
    test("renders successfully", function () {
        render(
            <MemoryRouter>
                <Dog dogsData={dogsData}/>
            </MemoryRouter>
        )
    })
    
});
