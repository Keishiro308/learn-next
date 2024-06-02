import { render, screen, RenderResult, fireEvent, act } from '@testing-library/react';
import { DelayInput } from './index';

describe('DelayInput', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
    renderResult = render(<DelayInput onChange={handleChange} />);
    jest.useFakeTimers();
  })

  afterEach(() => {
    renderResult.unmount();
    jest.useRealTimers();
  })

  it('should empty in input on initial render', () => {
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    expect(inputNode.value).toBe('');
  })

  it('should update input value on change', () => {
    const inputText = 'Hello World';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode.value).toBe('入力中');
  })

  it('should display input value after 1 second', () => {
    const inputText = 'Hello World';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    act(() => {
      jest.runAllTimers();
    });

    const displayNode = screen.getByTestId('display-text');

    expect(displayNode.textContent).toBe(inputText);
  })

  it('should call onChange after 1 second', () => {
    const inputText = 'Hello World';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    act(() => {
      jest.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalled();
  })
})