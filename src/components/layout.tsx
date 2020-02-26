import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
import { fullScreen } from '../css';

/** React function component */
export default function Layout() {

    return (
        <div style={{ ...columnFlex, ...fullScreen, ...background }}>
            <Navbar/>
            <ViewContainer/>
        </div>
    );
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
