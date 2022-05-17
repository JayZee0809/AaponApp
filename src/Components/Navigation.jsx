import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/crown.svg";
import '../Stylesheets/navigation.styles.scss'

const Header = () => {
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
                    <Link className="nav-link" to='/signin'>
                        <h2>SIGN IN</h2>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
};

export default Header;