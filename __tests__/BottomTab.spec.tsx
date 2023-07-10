/**
 * @format
 */

import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import {render, screen, fireEvent} from '@testing-library/react-native';
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
    expect(screen.findByText('목록')).toBeTruthy();
    expect(screen.findByText('배너')).toBeTruthy();
  });

  it('Bottom Tab Navigation 탭 간 이동 테스트', async () => {
    render(<App />);
    fireEvent.press(await screen.findByText('배너'));
    expect(screen.findByText('HorizontalScreen')).toBeTruthy();

    fireEvent.press(await screen.findByText('목록'));
    expect(screen.findByText('VerticalScreen')).toBeTruthy();
  });
});
