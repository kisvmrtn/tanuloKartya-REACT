export const DifficultySelector = ({ handleLevelBtn }) => {
  return (
    <>
      <button id="easyBtn" onClick={() => handleLevelBtn('EASY')}>
        Könnyű kérdések
      </button>
      <button id="hardBtn" onClick={() => handleLevelBtn('HARD')}>
        Nehéz kérdések
      </button>
    </>
  );
};
