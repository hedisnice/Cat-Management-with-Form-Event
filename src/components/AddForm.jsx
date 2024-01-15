import "../components/AddForm.css";
import { useState } from "react";
export default function AddForm(props) {
  const { cats, setCat } = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const saveCat = (e) => {
    e.preventDefault();
    if (!name) {
      alert("ป้อนชื่อน้องแมวด้วยจ้า ... !");
    } else {
      const newCat = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender: gender,
      };
      setCat([...cats, newCat]);
      setName("");
      setGender("male");
    }
  };

  return (
    <section className="container">
      <form onSubmit={saveCat}>
        <label>ชื่อแมว</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">เพศผู้</option>
          <option value="female">เพศเมีย</option>
        </select>
        <button className="btn-add" type="submit">
          บันทึก
        </button>
      </form>
    </section>
  );
}
