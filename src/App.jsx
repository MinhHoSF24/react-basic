import './components/todo/todo.css';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import './styles/global.css';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
