import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { DropdownProvider } from "../../Contexts/dropdown.context";
import { UserContext } from "../../Contexts/user.context";
import '../../Stylesheets/navigation.styles.scss';
import { signOutUser } from "../../Utils/Firebase/Firebase.utils";
import { CartIcon } from "../Cart-icon/Cart-icon-component";

const Header = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        <h2>SHOP</h2>
                    </Link>
                    {currentUser ? (<span className="nav-link" onClick={signOutUser}>
                        <h2>SIGN OUT</h2>
                    </span>) : (<Link className="nav-link" to='/signin'>
                        <h2>SIGN IN</h2>
                    </Link>)}
                    <DropdownProvider>
                        <CartIcon/>
                    </DropdownProvider>
                </div>
            </div>
            <Outlet/>
        </>
    );
};

export default Header;