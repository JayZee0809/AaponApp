import { Routes, Route } from 'react-router-dom';
import '../Stylesheets/categories.styles.scss';
import { categories } from "../categories";
import Home from '../Routes/Home/Home.Routes';
import Navigation from '../Components/Navbar/Navigation';
import AuthPage from '../Routes/Authentication/Authentication.routes';
import { ShoppingPage } from '../Routes/Shop/Shop.Routes';
import { Cart } from '../Routes/Cart/Cart.Routes';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home categories={categories}/>}/>
        <Route path='shop/*' element={<ShoppingPage/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='signin' element={<AuthPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
