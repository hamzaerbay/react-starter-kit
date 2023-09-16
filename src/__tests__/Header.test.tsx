import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Header } from '../components/Header';

test('render App', async () => {
  const header = render(<Header title='shaka' />);

  screen.debug();

  expect((await header.findByTestId('header')).textContent).toBe('shaka 🤙');
});
