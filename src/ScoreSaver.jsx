import { useState } from "react";

export default function ScoreSaver({ score, maxScore }) {
  const [name, setName] = useState("");

  const updateName = (evt) => {
    setName(evt.target.value);
  };

  const sendName = () => {
    if (name.length === 0) {
      alert("Add meg a neved!");
    } else {
      console.log(name, score, maxScore);

      const result = {
        name: name,
        score: score,
        maxScore: maxScore,
      };

      const existing = JSON.parse(localStorage.getItem("scoreList")) || [];
      existing.push(result);
      localStorage.setItem("scoreList", JSON.stringify(existing));

      window.location.reload();
    }
  };

  return (
    <>
      <div className="card">
        <h3>Pontjaid mentése!</h3>
        <label htmlFor="name">Név:</label>
        <input
          type="text"
          name="text"
          id="name"
          value={name}
          onChange={updateName}
        />
        <button id="send" onClick={sendName}>
          Küldés
        </button>
      </div>
    </>
  );
}
