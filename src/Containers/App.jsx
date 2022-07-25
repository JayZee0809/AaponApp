import { Routes, Route } from 'react-router-dom';
import '../Stylesheets/categories.styles.scss';
import { categories } from "../categories";
import Home from '../Routes/Home/Home.Routes';
import Navigation from '../Components/Navbar/Navigation';
import AuthPage from '../Routes/Authentication/Authentication.routes';
import { ShoppingPage } from '../Routes/Shop/Shop.Routes';
import { Cart } from '../Routes/Cart/Cart.Routes';
import { useEffect } from 'react';
import { createUserDocFromAuth, onAuthStateChangeListener } from '../Utils/Firebase/Firebase.utils';
import { setCurrentUser } from '../Store/Actions/user.action';
import { User_Login_Failure, User_Login_Request, User_Logout_Request } from '../Store/Actions/actions.types';
import { useDispatch } from 'react-redux';
import { createAction } from '../Utils/Reducers/reducer.utils';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (user)=> {
        // dispatch({ type : User_Login_Request, ...state});
        try{
            if(user) {
              await createUserDocFromAuth(user);
              dispatch(createAction(User_Login_Request));
            }else {
              dispatch(createAction(User_Logout_Request));
            }
            dispatch(setCurrentUser(user));
        }catch(err){
            dispatch({ type : User_Login_Failure});
            console.log(err);
        }
    });
    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
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
