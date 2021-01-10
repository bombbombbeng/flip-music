import React from 'react'
import ThemeProvider from 'flip-ui/src/ThemeProvider'
import api from '../../common/api'
import SongListItem from './SongListItem'
import 'src/styles/app.css'

interface AppState {
    list: SongInfo[];
}

class SearchSong extends React.Component<{}, AppState> {
  constructor(props: {}) {
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
          song: '哈哈哈',
          singer: 'singer',
          album: '宇宙神专',
          duration: '3分20秒',
          id: '001'
        },
        {
          song: '呵呵呵',
          singer: 'singer',
          album: '宇宙神专',
          duration: '3分20秒',
          id: '002'
        },
        {
          song: '嘻嘻嘻',
          singer: '凌凌漆',
          album: '地球神专',
          duration: '2分33秒',
          id: '003'
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
    const { list } = this.state
    const listItem = list.map((item) => (
      <SongListItem key={item.id} info={item} />
    ))
    return (
      <ThemeProvider theme={{ color: '#f3d853' }}>
        <div>
          {listItem}
        </div>
      </ThemeProvider>
    )
  }
}

export default SearchSong
