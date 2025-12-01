import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../js/HomePage';
import Chicago from '../js/Chicago';
import Specials from '../js/Specials';
import Testimonials from '../js/Testimonials';

describe('Static pages content', () => {
  test('Home page contains welcome heading and about text', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /welcome to little lemon/i })).toBeInTheDocument();
    expect(screen.getByText(/Experience authentic Mediterranean cuisine/i)).toBeInTheDocument();
  });

  test('Chicago page contains location heading and contact info', () => {
    render(<Chicago />);
    expect(screen.getByRole('heading', { name: /little lemon — chicago/i })).toBeInTheDocument();
    expect(screen.getByText(/69 Vico Araratiano/i)).toBeInTheDocument();
  });

  test('Specials page lists specials with titles and prices', () => {
    render(<Specials />);
    expect(screen.getByRole('heading', { name: /this week's specials/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Greek salad/i })).toBeInTheDocument();
    expect(screen.getByText(/\$12.99/)).toBeInTheDocument();
  });

  test('Testimonials page shows customer reviews', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { name: /what do our customers think\?/i })).toBeInTheDocument();
    expect(screen.getByText(/Seriously cannot stop thinking/i)).toBeInTheDocument();
  });
});
