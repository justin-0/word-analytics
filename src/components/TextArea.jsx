import Warning from "./Warning";
import { useState } from "react";

function TextArea({ chars, setChars }) {
  const [warning, setWarning] = useState(false);

  const handleChange = (e) => {
    setWarning(false);
    let input = e.target.value;
    if (input.includes("<script>")) {
      setWarning(true);
      input = input.replace("<script>", "");
    }
    setChars(input);
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your text.."
        spellCheck="false"
        onChange={handleChange}
        value={chars}
      />
      {warning ? <Warning /> : null}
    </div>
  );
}

export default TextArea;
