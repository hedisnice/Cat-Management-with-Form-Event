import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CatList from "./components/CatList";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
function App() {
  //useState
  const [cats, setCat] = useState(
    JSON.parse(localStorage.getItem("cats")) || []
  );
  // useEffects
  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);
  //Func. DeleteStudent
  const deleteCat = (id) => {
    setCat(cats.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <Header title="บ้านเรามีแมวน๊าาา" />
      <main>
        <AddForm cats={cats} setCat={setCat} />
        <CatList cats={cats} deleteCat={deleteCat} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
