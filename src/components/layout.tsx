import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
import { fullScreen } from '../css';


interface Props {

}

interface State {
view: "main" | "forest" | "sky" | "desert" 
}


/** React function component */
export default class Layout extends React.Component<Props, State> {
constructor(props: Props) {
    super(props)
    this.state = { view: "main" } 
}
navigateToMain() {
alert('test')
}
    render() {
    return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Navbar onClickHeader={this.navigateToMain}/>
                <ViewContainer/>
            </div>
        );
    }
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
