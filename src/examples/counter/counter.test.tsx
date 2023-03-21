// @vitest-envrionment happy-dom

import { screen, fireEvent } from '@testing-library/react';
// import { fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { render } from './test/utilities'

test('it should render the component', () => {
  render(<Counter />);
});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    // const user = userEvent.setup(); // creates heuristics that are "more natural"
    const { user } = render(<Counter />);
    const currentCount = screen.getByTestId('current-count');
    expect(currentCount).toHaveTextContent('0');
    // screen.debug();
    const button = screen.getByRole('button', { name: 'Increment' })
    // fireEvent.click(button);
    await user.click(button); // this is a promise due to multiple events happening at once
    expect(currentCount).toHaveTextContent('1');
  },
);
