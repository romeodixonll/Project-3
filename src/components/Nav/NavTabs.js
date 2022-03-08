import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';


import homeBlack from '../../assets/images/nav-images/home-black.png';
import algoBlack from '../../assets/images/nav-images/algorithm-black.png';
import gameBlack from '../../assets/images/nav-images/game-black.png';
import stockBlack from '../../assets/images/nav-images/crypto-black.png';
import settingBlack from '../../assets/images/nav-images/settings-black.png';
import homeWhite from '../../assets/images/nav-images/home-white.png';
import algoWhite from '../../assets/images/nav-images/algorithm-white.png';
import gameWhite from '../../assets/images/nav-images/game-white.png';
import stockWhite from '../../assets/images/nav-images/crypto-white.png';
import settingWhite from '../../assets/images/nav-images/settings-white.png';
import homeGrey from '../../assets/images/nav-images/home-grey.png';
import algoGrey from '../../assets/images/nav-images/algorithm-grey.png';
import gameGrey from '../../assets/images/nav-images/game-grey.png';
import stockGrey from '../../assets/images/nav-images/crypto-grey.png';
import settingGrey from '../../assets/images/nav-images/settings-grey.png';

import classes from './NavTabs.module.css'

import { ColorContext } from '../../store/color-context';


const NavTabs = () => {

    const [textColor, , theme] = useContext(ColorContext)
    const [iconColor, setIconColor] = useState('Grey')
    let noStyle = {color:'white', backgroundColor:'transparent'}
    let activeAnchorBackground = {backgroundColor:'#232323'};
    let activeAnchorColor = {color:textColor}

    const styleHandler = () => {
        if (theme === "#393939") {
            setIconColor('Grey')
            return classes.darkModeSelection
        } else {
            setIconColor('Black')
            return classes.lightModeSelection
        }
    }

    return (
        <ul className={classes.ul}>
            <li>
                <NavLink
                    to="/home" activeStyle={activeAnchorColor} activeClassName={styleHandler}>
                    <div className={classes.flex}>
                        <img 
                        className={classes.logo} 
                        src={theme === "#393939" ? homeGrey : homeBlack} 
                        alt="home logo"/>
                        <p>Home</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/algorithm" activeStyle={activeAnchorColor} activeClassName={styleHandler}>
                    <div className={classes.flex}>
                        <img 
                        className={classes.logo} 
                        src={theme === "#393939" ? algoGrey : algoBlack} alt="algo logo"/>
                        <p>Algorithm</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/game" activeStyle={activeAnchorColor} activeClassName={styleHandler}>
                    <div className={classes.flex}>
                        <img  
                        className={classes.logo} 
                        src={theme === "#393939" ? gameGrey : gameBlack} 
                        alt="game logo"/>
                        <p>Game</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/stocks" activeStyle={activeAnchorColor} activeClassName={styleHandler}> 
                    <div className={classes.flex}>
                        <img  
                        className={classes.logo} 
                        src={theme === "#393939" ? stockGrey : stockBlack} 
                        alt="crypto logo"/>
                        <p>Stocks</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/settings" activeStyle={activeAnchorColor} activeClassName={styleHandler}>
                    <div className={classes.flex}>
                        <img 
                        className={classes.logo} 
                        src={theme === "#393939" ? settingGrey : settingBlack}
                        alt="settings logo"/>
                        <p>Settings</p>
                    </div>
                </NavLink>
            </li>
        </ul>
    );
};

export default NavTabs