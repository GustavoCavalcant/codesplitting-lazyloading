// import logo from './logo.svg';
import './App.css';
import { Suspense, lazy} from 'react';

// import Slogan from './code-splitting/Slogan'
// import Rodape from './code-splitting/Rodape'

const Logo = lazy(() => import('./code-splitting/Logo'))
const Slogan = lazy(() => import('./code-splitting/Slogan'))
const Rodape = lazy(() => import('./code-splitting/Rodape'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Suspense fallback={<p>Carregando...Um momento!</p>}>
          <Logo />
        </Suspense>
        <Suspense fallback={<p>Carregando...Um momento!</p>}>
          <Slogan />
        </Suspense>
        <Suspense fallback={<p>Carregando...Um momento!</p>}>
          <Rodape />
        </Suspense>

        
      </header>
    </div>
  );
}

export default App;
