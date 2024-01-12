function Stats() {
  return (
    <section className="stats">
      <Stat text="words" number={0} />
      <Stat text="characters" number={0} />
      <Stat text="twitter" number={280} />
      <Stat text="tweets" number={0} />
    </section>
  );
}

function Stat({ text, number }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{text}</h2>
    </section>
  );
}

export default Stats;
