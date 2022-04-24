import classes from './Header.module.css';
import logo from '../logo.png';

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src={logo} alt='logo'/>
            </div>
        </header>
    );
}

export default Header;