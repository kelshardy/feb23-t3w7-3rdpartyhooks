import { useEffect, useState } from 'react';
import './App.css';
import { useLocalStorage } from 'react-use';

function App() {

  const [storedMessage, setStoredMessage] = useLocalStorage('message', '');
  
  const [message, setMessage] = useState("");
  
  // Component is loaded
  // Gap of time
  // Component is rendered
  // Gap of time
  // componentDidMount a.k.a useEffect(() => {}, [])
  // Gap of time
  // componentWillUpdate a.k.a useEffect(() => {}, [message])

  useEffect(() => {
    setMessage(storedMessage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">

      {message && <h1>{message}</h1>}
    
    </div>
  );
}

export default App;
