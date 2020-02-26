import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
import { fullScreen } from '../css';


interface Props {
view: ViewType
onClick (view: ViewType )
}

interface State {
view: "main" | "forest" | "sky" | "desert" 
}

export type ViewType = "main" | "forest" | "sky" | "desert" 

/** React function component */
export default class Layout extends React.Component<Props, State> {
constructor(props: Props) {
    super(props)
    this.state = { view: "sky" } 
}
navigateToMain = () => {
this.setState({view: 'main' })
}
navigateToDetailView = (view: ViewType) => {
    this.setState({view: view as any })
    }

    render() {
    return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Navbar onClickHeader={this.navigateToMain}/>
                <ViewContainer view={this.state.view} onNavigateToDetailView={this.navigateToDetailView} />
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
