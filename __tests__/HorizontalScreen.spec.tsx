import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import {ReactTestInstance} from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import App from '../App';

describe('Horizontal Screen', () => {
  beforeEach(() => {
    const consoleSpyOn = jest.spyOn(console, 'error');
    consoleSpyOn.mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Horizontal Screen 접근 시 로딩 테스트', async () => {
    render(<App />);
    fireEvent.press(await screen.findByText('배너'));

    expect(screen.findByText('HorizontalScreen')).toBeTruthy();
    expect(screen.findByTestId('loadingView')).toBeTruthy();
  });

  it('Horizontal Screen 초기 API 요청 테스트', async () => {
    render(<App />);
    fireEvent.press(await screen.findByText('배너'));

    expect(await screen.findByText('HorizontalScreen')).toBeTruthy();

    const {props} = await screen.findByTestId('horizontalList');

    expect(props.data).toHaveLength(10);
  });

  it('Horizontal Screen 배너 동작 테스트', async () => {
    render(<App />);
    fireEvent.press(await screen.findByText('배너'));

    expect(screen.findByText('HorizontalScreen')).toBeTruthy();

    await screen.findByTestId('horizontalList');

    // 첫 번째 배너 확인
    const banner1 = await screen.findByTestId('banner1');
    const banner1Text = banner1.children[1] as ReactTestInstance;
    expect(banner1Text.props.children).toEqual(
      'accusamus beatae ad facilis cum similique qui sunt',
    );

    await new Promise(_ => setTimeout(_, 5000));

    // 두 번째 배너 확인
    const banner2 = await screen.findByTestId('banner2');
    const banner2Text = banner2.children[1] as ReactTestInstance;
    expect(banner2Text.props.children).toEqual(
      'reprehenderit est deserunt velit ipsam',
    );
  });
});