import React from 'react';
import './header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue} from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user}, dispatch] = useStateValue();
    const handleAuthentication = () =>
    {
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
            <img
                className='header__logo'
                src="https://seeklogo.com/images/E/E__Online-logo-29779231D8-seeklogo.com.png"
            />
            </Link>

            <div className='header__search'>
                <input
                    className='header__searchInput'
                    type='text'
                />
                <SearchIcon className="header__searchIcon" />       </div>

            <div>
                <div className='header__nav'>
                <Link to={!user&&'/login'}>
                    <div onClick={handleAuthentication}
                    
                    className='header__option'>
                        <span className='header__optionLineOne'>
                            Hello {user?.email}
                        </span>
                        
                        <span className='header__optionLineTwo'>
                           {user ? 'sign Out' :'Sign In'}
                        </span>
                        
               
                    </div>
                    </Link>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Returns
                        </span>
                        <span className='header__optionLineTwo'>
                            Orders
                        </span>

                    </div>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Your
                        </span>
                        <span className='header__optionLineTwo'>
                            Prime
                        </span>
                    </div>
<Link to='/checkout'>
<div className='header__optionBasket'>
    <ShoppingBasketIcon />
    <span className='header__optionLineTwo heder__basketCount'>
        {basket?.length}
    </span>
</div>
</Link>



                </div>
            </div>
        </div>
    )
}

export default Header;
