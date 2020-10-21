import React, { useState, useCallback } from "react";
import InputComponent from "../../components/Input/Input";
import "./style.scss";

const URL = "http://localhost:3000/rest";
const newArrr = [
  { inputLabel: "Custom name", inputValue: "", id: "0" },
  { inputLabel: "Custom name", inputValue: "", id: "1" },
  { inputLabel: "Custom name", inputValue: "", id: "2" },
  { inputLabel: "Custom name", inputValue: "", id: "3" },
  { inputLabel: "Custom name", inputValue: "", id: "4" },
  { inputLabel: "Custom name", inputValue: "", id: "5" },
  { inputLabel: "Custom name", inputValue: "", id: "6" },
  { inputLabel: "Custom name", inputValue: "", id: "7" },
  { inputLabel: "Custom name", inputValue: "", id: "8" },
  { inputLabel: "Custom name", inputValue: "", id: "9" },
  { inputLabel: "Custom name", inputValue: "", id: "10" },
  { inputLabel: "Custom name", inputValue: "", id: "11" },
  { inputLabel: "Custom name", inputValue: "", id: "12" },
  { inputLabel: "Custom name", inputValue: "", id: "13" },
  { inputLabel: "Custom name", inputValue: "", id: "14" },
  { inputLabel: "Custom name", inputValue: "", id: "15" },
];

const Home = () => {
  const [arr, setArr] = useState(newArrr);

  const handleSubmit = useCallback(async () => {
    let data = {};
    arr.map((el, i) => (data = { ...data, ...{ [i]: el } }));

    try {
      const response = await fetch(URL, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Success", json);
    } catch (error) {
      console.error("Error:", error);
    }
  }, [arr]);

  const handleInputChange = useCallback(
    (id, value, param) => {
      let newArr = [...arr];
      newArr[id][param] = value;

      setArr(newArr);
    },
    [arr]
  );

  const handleClearValue = useCallback(
    (id, param) => {
      let newArr = [...arr];
      newArr[id][param] = "";

      setArr(newArr);
    },
    [arr]
  );

  const handleClearAllValues = useCallback(() => {
    let newArr = [...arr];
    newArr.map((el, i) => {
      newArr[i].inputLabel = "";
      newArr[i].inputValue = "";
    });

    setArr(newArr);
  }, [arr]);

  return (
    <main>
      <form>
        {arr.map((item, i) => (
          <InputComponent
            key={item.id}
            id={i}
            value={item}
            handleInputChange={handleInputChange}
            handleClearValue={handleClearValue}
          />
        ))}
      </form>
      <button className="button" onClick={handleSubmit}>
        <span>Submit</span>
      </button>
      <button className="button" onClick={handleClearAllValues}>
        <span>Clear All</span>
      </button>
    </main>
  );
};

export default Home;
