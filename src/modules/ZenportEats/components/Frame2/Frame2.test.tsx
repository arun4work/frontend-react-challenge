import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ZenportEatsProvider } from '@modules/ZenportEats/hooks/useZenportEats';
import Frame2 from '@modules/ZenportEats/components/Frame2/Frame2';

describe('Frame2 Component test', () => {
  beforeEach(() => {
    render(
      <ZenportEatsProvider>
        <Frame2 />
      </ZenportEatsProvider>
    );
  });

  afterEach(cleanup);

  test('Frame2 Component rendered successfully!', async () => {
    fireEvent.click(screen.getByText('Add'));

    const tabElement = await screen.getByRole('tablist');
    expect(tabElement).toBeInTheDocument();

    let elements = await document.querySelectorAll('.ant-tabs-nav-list');
    expect(elements).toHaveLength(1);
  });

  test('Add persons successfully!', async () => {
    fireEvent.click(screen.getByText('Add'));

    let elements = await document.querySelectorAll('.anticon-close');
    expect(elements).toHaveLength(1);

    fireEvent.click(screen.getByText('Add'));
    elements = await document.querySelectorAll('.anticon-close');
    expect(elements).toHaveLength(2);
  });

  test('Delete persons successfully!', async () => {
    fireEvent.click(screen.getByText('Add'));
    fireEvent.click(screen.getByText('Add'));

    let elements = await document.querySelectorAll('.anticon-close');
    expect(elements).toHaveLength(2);

    fireEvent.click(elements[0]);
    elements = await document.querySelectorAll('.anticon-close');
    expect(elements).toHaveLength(1);
  });

  test('Food type filter works correctly!', async () => {
    let tabs = await document.querySelectorAll('.ant-tabs-tab');
    expect(tabs).toHaveLength(4);

    let foodContainers = await screen.getAllByTestId('food-heading');
    expect(foodContainers).toHaveLength(4);

    fireEvent.click(tabs[0]);
    expect(screen.getByTestId('food-heading').textContent).toEqual('Appetizer');

    fireEvent.click(tabs[1]);
    expect(screen.getByTestId('food-heading').textContent).toEqual('Nigiri');

    fireEvent.click(tabs[2]);
    expect(screen.getByTestId('food-heading').textContent).toEqual('Maki');

    fireEvent.click(tabs[3]);
    expect(screen.getByTestId('food-heading').textContent).toEqual('Entree');

    fireEvent.click(tabs[3]);
    foodContainers = await screen.getAllByTestId('food-heading');
    expect(foodContainers).toHaveLength(4);
  });
});
