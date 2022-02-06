import { render, screen } from '@testing-library/react';
import App from './App';

test('Button texts are displayed', () => {
  render(<App />);

  const playersText = screen.queryByText('Players');
  const heroesText = screen.queryByText('Heroes');
  const itemsText = screen.queryByText('Items');
  const esportsText = screen.queryByText('eSports');
  expect(playersText).toBeVisible();
  expect(heroesText).toBeVisible();
  expect(itemsText).toBeVisible();
  expect(esportsText).toBeVisible();
});
