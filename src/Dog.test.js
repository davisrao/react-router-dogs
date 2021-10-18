
import React from "react";
import { render } from "@testing-library/react";
import Dog from "./Dog"
import { MemoryRouter } from "react-router";

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

test("renders successfully", function () {
    jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ name: "whiskey"}),
      }))
    render(
        <MemoryRouter>
            <Dog dogsData={dogsData}/>
        </MemoryRouter>
    )
})

describe("testing Dog component", function () {



    it("renders successfully", function () {
        render(
            <MemoryRouter>
                <Dog dogsData={dogsData} dogName='whiskey' />
            </MemoryRouter>
        )
    })






});
