import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="app-nav">
            <Link to="/">Home Page</Link>
            {/* <Link to="/decimal-time">Decimal Time</Link>
            <Link to="/over-time">Over Time</Link>
            <Link to="/binary-time">Binary Time</Link>
            <Link to="/negative-time">Negative Time</Link> */}
        </nav>
    )
}

export default Navigation;