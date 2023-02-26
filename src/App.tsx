import { ThemeProvider } from './styles/ThemeProvider';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
