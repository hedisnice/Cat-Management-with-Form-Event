import { useState } from "react";
import "../components/CatList.css";
import Item from "./Item";

export default function CatList(props) {
  const { cats, deleteCat } = props;
  const [show, setShow] = useState(true);
  const btnStyle = {
    background: show ? "#83c5be" : "#3a86ff",
  };

  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนแมว {cats.length} ตัว </h1>
          <button
            className="btn-check"
            style={btnStyle}
            onClick={() => setShow(!show)}
          >
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show &&
          cats.map((data) => (
            <Item key={data.id} data={data} deleteCat={deleteCat} />
          ))}
      </ul>
    </>
  );
}
