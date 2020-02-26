import React, { CSSProperties } from 'react';
import { centeredViewContanier } from '../css';

interface Props {
    view: string
    onClick: () => void
}


/** React function component */
export default function NavigationItem(props: Props) {
    const imageSrc = `../assets/${props.view}.jpg`;

    const onClick = () => props.onClick(props.view)>

    return (
        <div onClick={props.onClick} style={{ ...gridItem, ...centeredViewContanier }}>
            <img src={imageSrc} style={fullscreen} />
            <h1 style={{ ...centeredAbsolute, ...appearance}}>{props.view}</h1>
        </div>
    );
}

interface Props {
    id: string
}

const gridItem: CSSProperties = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%'
}

const fullscreen: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

const appearance: CSSProperties = {
    color: '#1E1E1E',
    textShadow: '0 0 3px white'
}