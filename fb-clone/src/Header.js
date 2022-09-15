import React from 'react'
import'./Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className="Header">
            <div className="header__left">

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />

                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="search Facebook" type="text"></input>
                </div>
            </div>
            <div className="header__center">

                <div className="header__option header__option--active">
                    <HomeIcon fontsize="large"/>
                </div>

                <div className="header__option">
                    <FlagIcon fontsize="large"/>
                </div>

                <div className="header__option">
                    <SubscriptionsIcon fontsize="large"/>
                </div>

                <div className="header__option">
                    <StorefrontIcon fontsize="large"/>
                </div>

                <div className="header__option">
                    <SupervisedUserCircleIcon fontsize="large"/>
                </div>

            </div>

            <div className="header__right">
                <div className="header__info">
                    < AccountCircleIcon />
                    <h4>karim kaddah</h4>
                </div>
                
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>

            </div>
        </div>
    )
}

export default Header
