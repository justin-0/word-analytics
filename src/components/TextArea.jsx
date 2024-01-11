function TextArea({ chars, setChars }) {
  const handleChange = (e) => {
    setChars(e.target.value);
  };

  return (
    <textarea
      placeholder="Enter your text.."
      className="textarea"
      spellCheck="false"
      onChange={handleChange}
      value={chars}
    />
  );
}

export default TextArea;
