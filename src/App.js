
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Skills from './components/other/skills/Skills';
import Contacts from './components/other/contacts/Contacts';
import Experience from './components/other/experience/Experience';
import Project from './components/other/pj-item/Project';


function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/skills/" element={<Skills />} />
                  <Route path="/contacts/" element={<Contacts />} />
                  <Route path="/experience/" element={<Experience />} />
                  <Route path="/pages/:id" element={<Project />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
