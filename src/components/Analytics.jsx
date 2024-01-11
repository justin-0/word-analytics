import { useState } from "react";
import AnalyticsContainer from "./AnalyticsContainer";
import Stats from "./Stats";
import TextArea from "./TextArea";

function Analytics() {
  const [chars, setChars] = useState("");
  return (
    <>
      <AnalyticsContainer>
        <TextArea setChars={setChars} chars={chars} />
        <Stats />
      </AnalyticsContainer>
    </>
  );
}

export default Analytics;
