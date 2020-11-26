import React, { useRef, useEffect } from "react";
import "./App.css";

export const useMountEffect = (fun) => useEffect(fun, []);
const UseFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

export default function App() {
  const [input1Ref, setInput1Focus] = UseFocus();

  useMountEffect(setInput1Focus);

  return (
    <div>
      <button
        onClick={() => {
          setInput1Focus();
        }}
      >
        кнопка для фокуса
      </button>
      <select style={{ width: 180 }} ref={input1Ref}>
        <option value="1">Ромашка</option>
        <option value="2">Лютик</option>
        <option value="3">Кактус</option>
      </select>
    </div>
  );
}
