import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App.js';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';


afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug()
});

it('has score on screen',() => {
  const { getByText } = rtl.render(<Display />);
  getByText("Balls", "Strikes", "Outs")
})

it('Has the buttons rendered',() => {
  const { getByText } = rtl.render(<Dashboard />)
  getByText('Strike', 'Ball', 'Foul', 'Hit')
})