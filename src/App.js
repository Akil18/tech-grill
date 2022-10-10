import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './Layouts/Main';

function App() {

  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <Main />,
      children: [
        { 
          path: '/',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home /> },
        { path: '/statistics', element: <Statistics /> },
        { path: '/blog', element: <Blog /> },
      ]
    },
  ])

  return (
    <div className="App font-mono m-4">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
