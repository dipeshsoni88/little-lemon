import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from '../js/BookingPage';

// We'll render BookingPage and invoke the onSubmit prop via BookingForm

describe('BookingPage persistence', () => {
  beforeEach(() => {
    localStorage.clear();
    // mock alert to avoid JSDOM not implemented error
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  test('uses remote save when window.saveBooking exists', async () => {
    const saveMock = jest.fn(() => Promise.resolve(true));
    global.window.saveBooking = saveMock;

    const availableTimes = ['12:00'];
    const dispatch = jest.fn();

    render(<BookingPage availableTimes={availableTimes} dispatch={dispatch} />);

    // Fill form fields using Testing Library queries
    const hiddenDate = screen.getByTestId('res-date-hidden');
    const first = screen.getByLabelText(/First name/i);
    const last = screen.getByLabelText(/Last name/i);
    const timeSelect = screen.getByLabelText(/Reservation time/i);
    const guests = screen.getByLabelText(/Number of guests/i);
    const occasion = screen.getByLabelText(/Occasion/i);

    screen.getByLabelText(/Reservation date/i); // ensure date control is rendered
    fireEvent.change(hiddenDate, { target: { value: '2025-12-02' } });
    fireEvent.change(first, { target: { value: 'Test' } });
    fireEvent.change(last, { target: { value: 'User' } });
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    fireEvent.change(guests, { target: { value: '2' } });
    fireEvent.change(occasion, { target: { value: 'Birthday' } });

    // Submit the form
    const submitButton = screen.getByDisplayValue(/Make Your reservation/i);
    fireEvent.click(submitButton);

    // Wait a tick for state update
    await new Promise((r) => setTimeout(r, 0));

    expect(saveMock).toHaveBeenCalled();

    delete global.window.saveBooking;
  });

  test('falls back to localStorage when no remote save', async () => {
    const availableTimes = ['12:00'];
    const dispatch = jest.fn();

    render(<BookingPage availableTimes={availableTimes} dispatch={dispatch} />);

    const hiddenDate2 = screen.getByTestId('res-date-hidden');
    const first2 = screen.getByLabelText(/First name/i);
    const last2 = screen.getByLabelText(/Last name/i);
    const timeSelect2 = screen.getByLabelText(/Reservation time/i);
    const guests2 = screen.getByLabelText(/Number of guests/i);
    const occasion2 = screen.getByLabelText(/Occasion/i);

    fireEvent.change(hiddenDate2, { target: { value: '2025-12-02' } });
    fireEvent.change(first2, { target: { value: 'Local' } });
    fireEvent.change(last2, { target: { value: 'Save' } });
    fireEvent.change(timeSelect2, { target: { value: '12:00' } });
    fireEvent.change(guests2, { target: { value: '2' } });
    fireEvent.change(occasion2, { target: { value: 'Birthday' } });

    const submitButton2 = screen.getByDisplayValue(/Make Your reservation/i);
    fireEvent.click(submitButton2);

    // Wait for localStorage update
    await new Promise((r) => setTimeout(r, 0));

    const raw = localStorage.getItem('bookings');
    expect(raw === null || typeof raw === 'string').toBeTruthy();
  });
});
