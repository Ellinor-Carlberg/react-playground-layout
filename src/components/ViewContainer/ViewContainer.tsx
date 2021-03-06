import React, { CSSProperties, Fragment } from 'react';
import DetialView from './DetailView';
import MasterView from './MasterView';

interface Props {
    currentView: string;
    onViewSelected: (view: string) => void;
}

/** React function component */
export default function ViewContainer(props: Props) {

    const detailViews = ['forest', 'sky', 'desert'];

    if (props.currentView === '') {
        return <MasterView detailViews={detailViews} onDetaltViewSelected={props.onViewSelected}/>
    } else {
        return <DetialView id={props.currentView}/>
    }
}