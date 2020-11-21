import React from "react";
import api from '../common/api'

interface AppProps {
    name: string;
}
interface AppState {
    list: object;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }
    componentDidMount(): void {
        this.getList()
    }

    async getList() {
        try {
            const res = await api.kw.search('coldplay', 1)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>hello {this.props.name}</div>
        )
    }
}

// helloWorld.rex = /reg/


export default App;