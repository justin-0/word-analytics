function Stats({ chars }) {
  const words = chars.split(/\s+/).filter(Boolean).length;
  const characters = chars.length;
  const maxCharactersPerTweet = 280;
  const tweetLength = maxCharactersPerTweet - characters;
  const numberOfTweets = Math.ceil(characters / maxCharactersPerTweet);

  return (
    <section className="stats">
      <Stat label="words" number={words} />
      <Stat label="characters" number={characters} />
      <Stat label="twitter" number={tweetLength} />
      <Stat label="tweets" number={numberOfTweets} />
    </section>
  );
}

function Stat({ label, number }) {
  const isLimit = label === "twitter" && number < 0;

  return (
    <section className="stat">
      <span
        className={`stat__number ${isLimit ? "stat__number--limit" : null}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default Stats;
