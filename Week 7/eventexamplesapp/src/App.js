import './App.css';
import './Events.css'; // Import our new stylesheet
import EventExamples from './components/EventExamples';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="container">
      <h1>React Event Examples</h1>
      <EventExamples />
      <CurrencyConverter />
    </div>
  );
}

export default App;