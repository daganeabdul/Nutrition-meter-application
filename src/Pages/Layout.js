import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    
    return (
        <div>
            <nav>
                <Link>
                    <i>NeuTrackeR</i>
                </Link>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/form">FORM</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <main>
                    <Outlet />
                </main>
            </div>

            <footer>
                
            </footer>
        </div>
    )
}