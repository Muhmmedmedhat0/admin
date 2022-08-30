import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Loader from './components/Loader/Loader';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Booklist = React.lazy(() => import('./pages/Booklist/Booklist'));
const Bookdetails = React.lazy(() =>
  import('./components/Bookdetails/Bookdetails')
);
const Error = React.lazy(() => import('./pages/404/404'));
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/book" element={<Booklist />} />
            <Route path="/book/:id" element={<Bookdetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
