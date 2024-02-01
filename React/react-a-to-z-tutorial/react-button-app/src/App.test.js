import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  // expect(counterElement).toBe(0); // (X)
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => { 
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test('plus button has correct test', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test('when the + button is pressed, the counter chagnes to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  // fireEvent
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test('when the - button is pressed, the counter chagnes to 0', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  // fireEvent
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test('on/off buttons has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'});
});

test('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled(false);
});