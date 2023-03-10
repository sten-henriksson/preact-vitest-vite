
import { beforeEach, describe, expect, test } from 'vitest';
import { App } from "../src/app"
import { render, fireEvent, screen, waitFor } from '@testing-library/preact';


test('should display initial count', () => {
  const { container } = render(<App></App>);
  expect(container.textContent).toMatch('pepepopo');
});