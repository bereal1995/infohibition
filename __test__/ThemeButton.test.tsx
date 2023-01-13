import { render } from '@testing-library/react';

describe('ThemeButtonButton', () => {
  it('테마 모드 버튼을 렌더할 수 있다.', () => {
    const wrapper = render(<div />);
  });

  it('테마 모드 버튼을 누르면 테마 상태가 변경된다.', () => {
    // const wrapper = render(<ThemeButton />);
    // const button = wrapper.getByRole('button');
    // const text = button.textContent;
    // fireEvent.click(button);
    // expect(button).toHaveTextContent(text === 'D' ? 'L' : 'D');
  });

  it('이전에 방문한적이 있으면 저장된 테마 모드 상태를 불러온다.', () => {});

  it('새로고침을 했을 때, 현재 테마 모드 상태 유지', () => {});
});
