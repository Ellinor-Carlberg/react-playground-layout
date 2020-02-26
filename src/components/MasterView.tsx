import React, { CSSProperties } from 'react';
import NavigationItem from './NavigationItem';
import { ViewType } from './Layout'

interface Props {
    view: "main" | "forest" | "sky" | "desert" 
    onNavigationItemClick: () => void
}

export default function MasterView(props: Props) {
    const navigationIds viewType[] = ['forest', 'sky', 'desert'];

    return (
        <div style={container}>
            {navigationIds.map((value) => 
            <NavigationItem view={value}  onClick={} />)}
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