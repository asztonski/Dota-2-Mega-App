import { render, screen } from '@testing-library/react';
import StatBar from './StatBar';

test('StarBar fillColor with predefined color value changes the background-color property', () => {
  render(<StatBar children fillColor={'blue'} percentFilled={50} />);

  const barElement = document.getElementsByClassName('StatBar');
  const barElementStyle = window.getComputedStyle(barElement[0]);
  expect(barElementStyle.backgroundColor).toEqual('blue');
});

test('StarBar fillColor with rgba value changes the background-color property', () => {
  render(
    <StatBar
      children
      fillColor={'rgba(255, 255, 255, 0.5)'}
      percentFilled={50}
    />
  );

  const barElement = document.getElementsByClassName('StatBar');
  const barElementStyle = window.getComputedStyle(barElement[0]);
  expect(barElementStyle.backgroundColor).toEqual('rgba(255, 255, 255, 0.5)');
});

test('StarBar width property is a percentage value', () => {
  render(<StatBar children percentFilled={50} />);

  const barElement = document.getElementsByClassName('StatBar');
  const barElementStyle = window.getComputedStyle(barElement[0]);
  expect(barElementStyle.width).toContain('%');
});

test('StatBar width is not negative', () => {
  render(<StatBar children percentFilled={-10} />);

  const barElement = document.getElementsByClassName('StatBar');
  const barElementStyle = window.getComputedStyle(barElement[0]);
  const widthInt = parseInt(barElementStyle.width.replaceAll('%', ''));
  expect(widthInt).toBeGreaterThanOrEqual(0);
});

test('StatBar width is not greater than 100%', () => {
  render(<StatBar children percentFilled={120} />);

  const barElement = document.getElementsByClassName('StatBar');
  const barElementStyle = window.getComputedStyle(barElement[0]);
  const widthInt = parseInt(barElementStyle.width.replaceAll('%', ''));
  expect(widthInt).toBeLessThanOrEqual(100);
});
