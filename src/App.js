import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Section from './components/Section/Section';
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
        { 
          path: '/:sectionId', 
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.sectionId}`),
          element: <Section /> },
        { path: '/statistics', element: <Statistics /> },
        { path: '/blog', element: <Blog /> },
      ]
    },
  ])

  return (
    <div className="App font-mono mt-4 bg-slate-50">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
