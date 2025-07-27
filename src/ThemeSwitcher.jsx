export default function ThemeSwitcher() {
  const handleClick = (theme) => {
    {
      document.body.className = theme;
    }
  };
  return (
    <>
      <div className="themeSwitchBtns">
        <button onClick={() => handleClick("tema1")}>🌿 Zöld</button>
        <button onClick={() => handleClick("tema2")}>🔵 Kék</button>
        <button onClick={() => handleClick("tema3")}>🟣 Lila</button>
      </div>
    </>
  );
}
