import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Events from './pages/Events';
import AddEvents from './pages/AddEvents';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/addevent' element={<AddEvents/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
