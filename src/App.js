 import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import { route } from './Routes/Routes';

function App() {
  return (
    <div style={{width:'80%', margin:'0 auto'}} className="App">
        <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
