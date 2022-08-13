import { useState, useCallback } from 'react'

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
  
    const handleChange = (e) => {
      if(e.target.value.length > 5) {
        alert("5文字以内にしてくだい。");
        return;
      }
      setText(e.target.value.trim());
    };
  
    const handleAdd = useCallback(() => {
      setArray((prevArray) => {
        if(prevArray.some(item => item === text)) {
          alert("同じ文字列禁止！！");
          setText("");
          return prevArray;
        }
        const newArray = [...prevArray, text];
        setText("");
        return newArray;
      });
    }, [text]);
    return {text, array, handleChange, handleAdd };
};