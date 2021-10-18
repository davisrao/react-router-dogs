import Routes from './Routes';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DOGS_DATA } from "./_testCommon";
import NavBar from "./NavBar";

it('renders the nav bar page', function () {
    const { container, debug, getByText } = render(
      <MemoryRouter>
        <NavBar dogsData={DOGS_DATA}/>
      </MemoryRouter>
    );
    
    // debug();
    const anchors = container.querySelectorAll("nav a")
    expect(anchors).toHaveLength(4);
  });
  
  it('renders whiskey dog page', function () {
    const { debug, container, getByText } = render(
      <MemoryRouter>
        <NavBar dogsData={DOGS_DATA}/>
      </MemoryRouter>
    );
    // debug();
    
    let img = container.querySelectorAll("nav a")[1];
    
    fireEvent.click(img);

    img = container.querySelectorAll("nav a")[1];

    expect(img.classList[0]).toEqual("active");

  });