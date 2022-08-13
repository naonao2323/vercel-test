import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from "../components/Header"
import { useEffect, useState, useCallback } from 'react'


export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    if(count < 10) {
      setCount(prevCount =>(prevCount+1));
    }
  }, []);

  const handleChange = (e) => {
    if(e.target.value.length > 5) {
      alert("5文字以内にしてくだい。");
      return;
    }
    setText(e.target.value.trim());
  };

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  });

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

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div className={styles.countSpace}>
        {isShow ? <p>{count}</p>: null}
        <button onClick={handleClick}>ボタン</button>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleDisplay}>{isShow ?　"非表示" : "表示"}</button>
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>
      <Main page="index"/>
      <Footer />
    </div>
  )
}
