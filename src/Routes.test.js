import Routes from './Routes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DOGS_DATA } from "./_testCommon";

it('renders the dogs page', function () {
    const { container, debug, getByText } = render(
      <MemoryRouter initialEntries={["/dogs"]}>
        <Routes dogsData={DOGS_DATA}/>
      </MemoryRouter>
    );
    
    // debug();
    const img = container.querySelectorAll("img")
    expect(img).toHaveLength(3);
  
    const h1Text = getByText("Name: Whiskey");
    expect(h1Text).toBeInTheDocument();
  });
  
  it('renders whiskey dog page', function () {
    const { debug, container, getByText } = render(
      <MemoryRouter initialEntries={["/dogs/whiskey"]}>
        <Routes dogsData={DOGS_DATA}/>
      </MemoryRouter>
    );
    // debug();
    const img = container.querySelectorAll("img")
    expect(img).toHaveLength(1);
  
    const h1Text = getByText("Name: Whiskey");
    expect(h1Text).toBeInTheDocument();
  });

  it('renders duke dog page', function () {
    const { debug, container, getByText } = render(
      <MemoryRouter initialEntries={["/dogs/duke"]}>
        <Routes dogsData={DOGS_DATA}/>
      </MemoryRouter>
    );
    // debug();
    const img = container.querySelectorAll("img")
    expect(img).toHaveLength(1);
  
    const h1Text = getByText("Name: Duke");
    expect(h1Text).toBeInTheDocument();
  });

  it('renders redirect on unfound page', function () {
    const { debug, container, getByText } = render(
      <MemoryRouter initialEntries={["/notAPage"]}>
        <Routes dogsData={DOGS_DATA}/>
      </MemoryRouter>
    );
    // takes us back to the homepage
    const img = container.querySelectorAll("img")
    expect(img).toHaveLength(3);
  
    const h1Text = getByText("Name: Whiskey");
    expect(h1Text).toBeInTheDocument();
  });