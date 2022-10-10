import { Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <div className="App font-mono m-4">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            
          </Route>
          <Route path="/statistics" element={<Statistics></Statistics>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
        </Routes>
    </div>
  );
}

export default App;
