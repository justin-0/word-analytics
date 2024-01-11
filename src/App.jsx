import AnalyticsContainer from "./components/AnalyticsContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Header />
      <AnalyticsContainer>
        <TextArea />
        <Stats />
      </AnalyticsContainer>
      <Footer />
    </>
  );
}

export default App;
