global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00", "20:00"]);

import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import {updateTimes, initializeTimes} from './components/Main';


test("initializeTimes returns an array", () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns a new array based on payload date', () => {
  const currentState = ["17:00", "18:00", "19:00"];
  const action = { type: 'UPDATE_TIMES', payload: '2025-07-21' };

  const result = updateTimes(currentState, action);

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

// Those tests will fail because of the API itself, since it is imported to index.html instead of React itself, the behaviour on the website is working and you can test it out like so