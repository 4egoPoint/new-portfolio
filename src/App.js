
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';


function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/skills/" element={<Home />} />
                  <Route path="/contacts/" element={<Home />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
