import { Link } from 'react-router-dom';
import './style.scss';

export default function MainMenu() {
    return(
    <>
        <div className='container-menu'>
            <nav className='mainMenu'>
                <Link to='/'>Tasks</Link>
                <Link to='/add'>Add</Link>
                <Link to='/help'>Help</Link>
            </nav>
        </div>
    </>
    );
}