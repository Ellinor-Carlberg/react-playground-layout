import React, { CSSProperties } from 'react';
import { ViewType } from './Layout'

interface Props {
    view: ViewType
}

export default function DetailView(props: Props) {
 const imageSrc = `../assets/${props.view}.jpg`;
    return (
        <div style={container}>
            <img style={image} src={imageSrc} />
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

const color: CSSProperties = {
    color: 'white'
}

const image: CSSProperties = {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
}