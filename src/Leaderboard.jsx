export default function Leaderboard() {
  let scores = JSON.parse(localStorage.getItem('scoreList')) || [];
  return (
    <>
      <div className="leaderboard">
        Pontok: <br />
        {scores.map((score, index) => (
          <p key={score.name}>
            {score.name}: {score.score} / {score.maxScore}
          </p>
        ))}
      </div>
    </>
  );
}
