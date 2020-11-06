import React from "react";
interface AppProps {
    name: string;
}

class App extends React.Component {
    constructor(props: AppProps) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}


export default App;