import React, { useState } from 'react';

import AllMenu from './AllMenu';

let All = () => {
    alert(1);
    //<AllMenu menuOpen={setMenuOpen('open')} />
}
const Header = () => {
    let [menuOpen, setMenuOpen] = useState('');
    return (
        <>
            <header className='header'>
                <button type="button" className="nav" onClick={() => {<AllMenu/>}}>
                    {/* icon({name: 'user', family: 'classic', style: 'solid'}) */}
                    {/* <FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} /> */}
                </button>
            </header>
        </>
    )
}
export default Header;