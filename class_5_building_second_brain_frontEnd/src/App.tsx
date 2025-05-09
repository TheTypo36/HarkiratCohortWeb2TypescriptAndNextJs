import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex gap-4">
        <Card
          type="twitter"
          title="tweet"
          link="https://x.com/BJP4India/status/1919948763482743127"
        />
        <Card
          type="youtube"
          title="youTube Video"
          link="https://www.youtube.com/watch?v=Wa16im-gG6Q&t=2596s"
        />
      </div>
    </div>
  );
}

export default App;
