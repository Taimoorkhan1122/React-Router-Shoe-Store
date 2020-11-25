import { Link } from "react-router-dom"
const Header = () => {
    return(
        <nav>
            <Link to="/">Home</Link> {" "}
            <Link to="products">Products</Link>
        </nav>
    )
}

export default Header;