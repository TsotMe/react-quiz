export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  const currentIndex = answer !== null ? index + 1 : index;

  return (
    <header className="progress">
      <progress max={numQuestions} value={currentIndex} />

      <p>
        Question <strong>{currentIndex}</strong> /{" "}
        <strong>{numQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong> / <strong>{maxPossiblePoints}</strong> points
      </p>
    </header>
  );
}
