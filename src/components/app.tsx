// eslint-disable-next-line no-use-before-define
import React from 'react'
import api from '../common/api'

interface AppProps {
    name: string;
}
interface AppState {
    list: object;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount(): void {
    this.getList()
  }

  async getList() {
    try {
      const res = await api.kw.search('coldplay', 1)
      console.log('getList', res)
      this.setState({
        list: res
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { name } = this.props
    const { list } = this.state
    return (
      <div>
        <span>
          hello
          {name}
        </span>
        <span>{ list }</span>
      </div>
    )
  }
}

// helloWorld.rex = /reg/

export default App
