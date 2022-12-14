import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes';


function App() {
  return (
    <div style={{width:'94%', margin:'0 auto'}} className="App">
        <RouterProvider router={route}></RouterProvider>
        
    </div>
  );
}

export default App;
