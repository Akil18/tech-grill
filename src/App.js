import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Main from './Layouts/Main';

function App() {

  const notify = (verdict) => toast(verdict, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });

  const handleOptionClick = (option) => {
    if(option) {
        notify("Correct Answer!");
    } else {
        notify("Wrong Answer");
    }
  }

  const handleShowAnswer = (answer) => {
    notify(answer);
  }

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
          element: <Section 
                      handleOptionClick={handleOptionClick}
                      handleShowAnswer={handleShowAnswer}
                    /> },
        { path: '/statistics', element: <Statistics /> },
        { path: '/blog', element: <Blog /> },
      ]
    },
  ])

  return (
    <div className="App font-mono mt-4 bg-slate-50">
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>
    </div>
  );
}

export default App;
