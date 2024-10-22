import logo from './logo.svg';
import './App.css';
import { CopilotKit } from '@copilotkit/react-core';
import { Mailer } from './Mailer';
import '@copilotkit/react-ui/styles.css';

function App() {
  return (
    <div className="App">
      <CopilotKit runtimeUrl="http://localhost:4000/copilotkit">
        <Mailer></Mailer>
      </CopilotKit>
    </div>
  );
}

export default App;
