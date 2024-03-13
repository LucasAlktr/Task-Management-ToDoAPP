import { Link } from 'react-router-dom';


export default function MainMenu() {
    return(
    <>
        <nav className='main'>
            <Link to='/'>Tasks</Link>
            <Link to='/add'>Add</Link>
            <Link to='/help'>Help</Link>
        </nav>
    </>
    );
}