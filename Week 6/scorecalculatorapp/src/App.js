import './App.css';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Student Scoreboard</h1>
      <CalculateScore Name="John Doe" School="Greenwood High" Total={450} goal={500} />
      <CalculateScore Name="Jane Smith" School="Oakridge International" Total={480} goal={500} />
      <CalculateScore Name="Sam Wilson" School="Public Central School" Total={390} goal={500} />
    </div>
  );
}

export default App;