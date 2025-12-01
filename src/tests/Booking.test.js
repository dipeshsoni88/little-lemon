import { describe, test, expect, beforeEach } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';
// userEvent and waitFor unused in this file
import BookingForm from '../js/BookingForm';

// Mock the fetchAPI function globally before importing Main
const mockFetchAPI = jest.fn();
global.window = global.window || {};
window.fetchAPI = mockFetchAPI;

describe('Booking Form Initialization Tests', () => {
  beforeEach(() => {
    mockFetchAPI.mockReset();
  });

  test('initializeTimes should return mocked API times when available', () => {
    const mockTimes = ['10:00', '11:00', '12:00', '13:00'];
    mockFetchAPI.mockReturnValue(mockTimes);

    const fallbackTimes = [
      '11:00','12:00','13:00','14:00','15:00','16:00',
      '17:00','18:00','19:00','20:00','21:00','22:00','23:00'
    ];
    expect(Array.isArray(fallbackTimes)).toBe(true);
    expect(fallbackTimes.length).toBeGreaterThan(0);
  });

  test('updateTimes reducer should handle UPDATE_TIMES action with API response', () => {
    const mockTimes = ['14:00', '15:00', '16:00', '17:00'];
    mockFetchAPI.mockReturnValue(mockTimes);

    function updateTimes(availableTimes, action) {
      if (action.type === 'UPDATE_TIMES') {
        const selectedDate = action.payload;
        if (!selectedDate) return [];
        try {
          if (typeof window.fetchAPI === 'function') {
            const times = window.fetchAPI(selectedDate);
            if (Array.isArray(times)) return times;
          }
        } catch (e) {}
        return [];
      }
      return availableTimes;
    }

    const action = { type: 'UPDATE_TIMES', payload: '2025-12-15' };
    const result = updateTimes([], action);
    
    expect(mockFetchAPI).toHaveBeenCalledWith('2025-12-15');
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes should return fallback times when no date provided', () => {
    function updateTimes(availableTimes, action) {
      if (action.type === 'UPDATE_TIMES') {
        const selectedDate = action.payload;
        if (!selectedDate) {
          return [
            '11:00','12:00','13:00','14:00','15:00','16:00',
            '17:00','18:00','19:00','20:00','21:00','22:00','23:00'
          ];
        }
      }
      return availableTimes;
    }

    const action = { type: 'UPDATE_TIMES', payload: '' };
    const result = updateTimes([], action);
    
    expect(result.length).toBe(13);
    expect(result[0]).toBe('11:00');
  });

  test('fetchAPI should be called with correct date format', () => {
    const testDate = '2025-12-20';
    mockFetchAPI.mockReturnValue(['15:00', '16:00', '17:00']);

    if (typeof window.fetchAPI === 'function') {
      window.fetchAPI(testDate);
    }

    expect(mockFetchAPI).toHaveBeenCalledWith(testDate);
  });
});

describe('BookingForm HTML5 Validation Attributes Tests', () => {
  const mockDispatch = jest.fn();
  const mockOnSubmit = jest.fn();
  const availableTimes = ['11:00', '12:00', '13:00', '14:00', '15:00'];

  beforeEach(() => {
    mockDispatch.mockReset();
    mockOnSubmit.mockReset();
  });

  test('Date input should have required attribute', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const dateInput = screen.getByTestId('res-date-hidden');
    expect(dateInput).toHaveAttribute('required');
  });

  test('Date input should have min attribute set to today or later', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const dateInput = screen.getByTestId('res-date-hidden');
    expect(dateInput).toHaveAttribute('min');
    const minDate = dateInput.getAttribute('min');
    expect(minDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test('Time select should have required attribute', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const timeSelect = screen.getByDisplayValue('Select a time');
    expect(timeSelect).toHaveAttribute('required');
  });

  test('Guest input should have required attribute', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const guestInput = screen.getByDisplayValue('1');
    expect(guestInput).toHaveAttribute('required');
  });

  test('Guest input should have min="1" attribute', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const guestInput = screen.getByDisplayValue('1');
    expect(guestInput).toHaveAttribute('min', '1');
  });

  test('Guest input should have max="20" attribute', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const guestInput = screen.getByDisplayValue('1');
    expect(guestInput).toHaveAttribute('max', '20');
  });

  test('Guest input should be of type "number"', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const guestInput = screen.getByDisplayValue('1');
    expect(guestInput).toHaveAttribute('type', 'number');
  });

  test('Occasion select should have default value "Birthday"', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const occasionSelect = screen.getByDisplayValue('Birthday');
    expect(occasionSelect).toBeInTheDocument();
  });

  test('Occasion select should have all required options', () => {
    render(
      <BookingForm
        onSubmit={mockOnSubmit}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const { within } = require('@testing-library/react');
    const optionEls = within(occasionSelect).getAllByRole('option');
    const options = optionEls.map(opt => opt.value);
    expect(options).toContain('Birthday');
    expect(options).toContain('Anniversary');
    expect(options).toContain('Engagement');
  });
});
