import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ui>
                    <li>
                        <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ui>
            </nav>
        </header>
    );
};

export default MainHeader;
