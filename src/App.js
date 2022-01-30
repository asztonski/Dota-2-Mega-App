import './App.css';
import StartBtns, { StartBtnPersonal, StartBtnCharacters, StartBtnItems, StartBtnEsport } from './components/start/start_buttons';

// Ok So basically its a start view that has 4 buttons every button have 25% of window width and 25% of window height

function App() {
  return (
    <div className='App'>
      <StartBtnPersonal/>
      <StartBtnCharacters/>
      <StartBtnItems/>
      <StartBtnEsport/>
    </div>
  );
}

export default App;
