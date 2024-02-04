import { useEffect, useState } from "react";
import AnalyticsContainer from "./AnalyticsContainer";
import Stats from "./Stats";
import TextArea from "./TextArea";

function Analytics() {
  const checkStorage = localStorage.getItem("text");
  const initStorage = () => {
    if (checkStorage) {
      return JSON.parse(checkStorage);
    } else {
      return "";
    }
  };

  const [chars, setChars] = useState(initStorage());

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(chars));
  }, [chars]);

  return (
    <>
      <AnalyticsContainer>
        <TextArea setChars={setChars} chars={chars} />
        <Stats chars={chars} />
      </AnalyticsContainer>
    </>
  );
}

export default Analytics;
