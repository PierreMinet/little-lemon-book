import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import {updateTimes, initializeTimes} from './components/Main';

test('Renders the BookingForm heading', () => {
    render(<BookingForm
      availableTimes={["17:00", "18:00"]}
            dispatch={() => {}}  />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
})

test("initializeTimes returns the expected times array", () => {
  const date = new Date();
  const arrayExpected = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  expect(initializeTimes().length).toBeGreaterThan(0);
})

test('updateTimes returns current state for unknown action type', () => {
    const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: 'UPDATE_TIMES' };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
});