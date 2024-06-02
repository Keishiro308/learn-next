import {
  render,
  screen,
  RenderResult,
  fireEvent,
  getByRole,
} from '@testing-library/react';
import { Input } from './index';


describe('Input', () => {

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input label="Username" id="username" />);
  })

  afterEach(() => {
    renderResult.unmount();
  })

  it('should empty in input on initial render', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    expect(inputNode.value).toBe('');
  })

  it('should update input value on change', () => {
    const inputText = 'Hello World';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode.value).toBe(inputText);
  })

  it('should reset input value on button click', () => {
    const inputText = 'Hello World';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
    const resetButton = screen.getByRole('button');

    fireEvent.change(inputNode, { target: { value: inputText } });
    fireEvent.click(resetButton);

    expect(inputNode.value).toBe('');
  })
})
