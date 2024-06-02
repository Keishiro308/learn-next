import React, { useState, useCallback, useRef } from "react";

type DelayInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const DelayInput = (props: DelayInputProps) => {
  const { onChange } = props;
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [viewValue, setViewValue] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target', e.target);
    console.log('e.target.value', e.target.value);
    console.log('inputValue', inputValue);
    setIsTyping(true);
    setInputValue(e.target.value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setViewValue(inputValue);
      setIsTyping(false);
      onChange(e);
      timerRef.current = null;
    }, 100);
  }, [onChange]);

  const text = isTyping ? '入力中' : viewValue;

  return (
    <div>
      <input data-testid='input-text' value={inputValue} onChange={handleChange} />
      <span data-testid='display-text'>{text}</span>
    </div>
  )
}