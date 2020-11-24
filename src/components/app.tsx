// eslint-disable-next-line no-use-before-define
import React from 'react'
import Button from '@material-ui/core/Button'
import api from '../common/api'

interface AppProps {
    name: string;
}
interface AppState {
    list: SongInfo[];
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
      const res: SongList = await api.kw.search('coldplay', 1)
      console.log('getList', res)
      // const { total, data } = res
      const data = [
        {
          name: '哈哈哈',
          singer: 'singer',
          album: '宇宙神专',
          duration: '3分20秒'
        }
      ]
      this.setState({
        list: data
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { name } = this.props
    const { list } = this.state
    const listItem = list.map((item) => (
      <div>
        <span>{item.name}</span>
        <span>{item.singer}</span>
        <span>{item.album}</span>
        <span>{item.duration}</span>
        <Button variant="contained" color="primary">播放</Button>
      </div>
    ))
    return (
      <div>
        <span>
          hello
          {name}
        </span>
        <div>{listItem}</div>
      </div>
    )
  }
}

export default App
