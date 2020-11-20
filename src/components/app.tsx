import React from "react";
import { WY_SEARCH } from '../common/api/wy'

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
            const res = await WY_SEARCH('哈哈', 1)
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