import Button from "./Button";
import styles from "./App.module.css";
import { useState , useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  console.log("i run all time");

  
  useEffect( () => {
    console.log("i run only once");
  }
  , []);

  useEffect( () => {
    console.log("Search For", keyword)
  }, [keyword]);
  // [] keyword 가 변화할때 코드를 실행


  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  return (
    <div> 
      <input 
        value = {keyword}
        type="text" 
        placeholder = "Search here" 
        onChange={onChange} 
        />

      <h1 className={styles.title}>{counter}</h1>
      <button onClick = {onClick}>click me </button>
    </div>

  );
}

export default App;
