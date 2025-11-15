function Progress({ index, numQuestion, points, maxPossiablePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        <strong>
          {index + 1}/{numQuestion}
        </strong>
      </p>
      <p>
        <strong>
          {points}/{maxPossiablePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
