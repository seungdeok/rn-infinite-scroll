/**
 * @format
 */

import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import App from '../App';

describe('Bottom Tab Navigation', () => {
  beforeEach(() => {
    const consoleSpyOn = jest.spyOn(console, 'error');
    consoleSpyOn.mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Bottom Tab Navigation 렌더링 테스트', () => {
    render(<App />);
    expect(screen.getByText('목록')).toBeDefined();
    expect(screen.getByText('배너')).toBeDefined();
  });

  it('Bottom Tab Navigation 탭 간 이동 테스트', async () => {
    render(<App />);
    fireEvent.press(screen.getByText('배너'));

    await waitFor(() => {
      expect(screen.getByText('HorizontalScreen')).toBeTruthy();
    });

    fireEvent.press(screen.getByText('목록'));
    await waitFor(() => {
      expect(screen.getByText('VerticalScreen')).toBeTruthy();
    });
  });
});
