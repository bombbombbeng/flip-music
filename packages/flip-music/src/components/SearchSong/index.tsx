import React from 'react'
import { ThemeProvider, FlipButton } from 'flip-ui'
import api from '../../common/api'
import SongListItem from './SongListItem'
import 'src/styles/app.css'

interface AppState {
    list: SongInfo[];
    color: String;
}

class SearchSong extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      list: [],
      color: '#c7d651'
    }
  }

  componentDidMount(): void {
    this.getList()
  }

  async getList() {
    try {
      // const res: SongList = await api.kw.search('coldplay', 1)
      // console.log('getList', res)
      // const { total, data } = res
      const data = [
        {
          song: '哈哈哈',
          singer: 'singer',
          album: '宇宙神专',
          duration: '3分20秒',
          id: '001'
        },
        // {
        //   song: '呵呵呵',
        //   singer: 'singer',
        //   album: '宇宙神专',
        //   duration: '3分20秒',
        //   id: '002'
        // },
        // {
        //   song: '嘻嘻嘻',
        //   singer: '凌凌漆',
        //   album: '地球神专',
        //   duration: '2分33秒',
        //   id: '003'
        // }
      ]
      this.setState({
        list: data
      })
    } catch (e) {
      console.log(e)
    }
  }

  changeTheme() {
    const getRandom = () => Math.round(Math.random() * 255)
    const color = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`
    this.setState({
      color
    })
  }

  render() {
    const { list, color } = this.state
    const listItem = list.map((item) => (
      <SongListItem key={item.id} info={item} />
    ))
    return (
      <div>
        <FlipButton onClick={() => this.changeTheme()}>changeTheme</FlipButton>
        <ThemeProvider theme={{ color }}>
          <div>
            {listItem}
          </div>
        </ThemeProvider>
      </div>
    )
  }
}

export default SearchSong
