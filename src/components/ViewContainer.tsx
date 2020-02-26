import React, { CSSProperties } from 'react';
import MasterView from './MasterView';
import { ViewType } from './Layout'

interface Props {
    view: "main" | "forest" | "sky" | "desert" 
    onNavigateToDetailView: (view: ViewType) => void
}

/** React function component */
export default function ViewContainer(props: Props) {
    if (props.view === 'main') {
        return <MasterView onNavigationItemClick={props.onNavigateToDetailView}/>  
}
return >DetailView />
}
