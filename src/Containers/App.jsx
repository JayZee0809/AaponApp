import { Routes, Route } from 'react-router-dom';
import '../Stylesheets/categories.styles.scss';
import { categories } from "../categories";
import Home from '../Routes/Home/Home.Routes';
import Navigation from '../Components/Navigation';
import AuthPage from '../Routes/Authentication/Authentication.routes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home categories={categories}/>}/>
        <Route path='shop' element={<h1>I am the Shop!</h1>}/>
        <Route path='signin' element={<AuthPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
