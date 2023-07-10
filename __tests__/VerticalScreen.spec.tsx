import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import {ReactTestInstance} from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import App from '../App';

describe('Vertical Screen', () => {
  const size = {
    width: 375,
    height: 667,
  };
  beforeEach(() => {
    const consoleSpyOn = jest.spyOn(console, 'error');
    consoleSpyOn.mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Vertical Screen 접근 시 로딩 테스트', async () => {
    render(<App />);
    fireEvent.press(await screen.findByText('목록'));

    expect(screen.findByText('VerticalScreen')).toBeTruthy();
    expect(screen.findByTestId('loadingView')).toBeTruthy();
  });

  it('Vertical Screen 초기 API 요청 테스트', async () => {
    render(<App />);
    fireEvent.press(await screen.findByText('목록'));

    expect(await screen.findByText('VerticalScreen')).toBeTruthy();

    const {props} = await screen.findByTestId('verticalList');

    expect(props.data).toHaveLength(10);
  });

  it('Vertical Screen 목록 동작 테스트', async () => {
    render(<App />);
    fireEvent.press(await screen.findByText('목록'));

    expect(screen.findByText('VerticalScreen')).toBeTruthy();

    const flatlist = await screen.findByTestId('verticalList');
    expect(flatlist.props.data).toHaveLength(10);

    // 첫 번째 카드 확인
    const card1 = await screen.findByTestId('card1');
    const card1Text = card1.children[1] as ReactTestInstance;
    expect(card1Text.props.children).toEqual(
      'accusamus beatae ad facilis cum similique qui sunt',
    );

    // 스크롤 bottom
    fireEvent.scroll(flatlist, {
      nativeEvent: {
        contentSize: {height: size.height, width: size.width},
        contentOffset: {y: size.height, x: 0},
        layoutMeasurement: {height: size.height, width: size.width},
      },
    });

    // loading
    expect(screen.findByTestId('loadingIndicator')).toBeTruthy();

    await new Promise(_ => setTimeout(_, 2000));

    // 10개 추가
    expect(flatlist.props.data).toHaveLength(20);
  });
});
