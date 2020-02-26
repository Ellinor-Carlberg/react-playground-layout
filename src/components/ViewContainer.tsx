import React, { CSSProperties } from 'react';
import NavigationItem from './NavigationItem';

/** React function component */
export default function ViewContainer() {

    const viewContainerIds = ['forest', 'sky', 'desert'];

    return (
        <div style={container}>
            {viewContainerIds.map((value) => <NavigationItem id={value} />)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch'
}