import React from 'react'
import Button from '@material-ui/core/Button'
import FlipButton from 'flip-ui/src/Button'

const SongListItem = (props: {info: SongInfo}) => {
  const { info } = props
  const onClick = (name?: string) => console.log('onClick', name)
  return (
    <div>
      <span>{info.song}</span>
      <span>{info.singer}</span>
      <span>{info.album}</span>
      <span>{info.duration}</span>
      <Button name={info.song} onClick={() => { alert('clicked') }}>play</Button>
      <FlipButton name={info.song} onClick={() => { alert('clicked') }}>play</FlipButton>
    </div>
  )
}

interface ItemProps {
  name: string
}
interface ItemState {
  test: string;
}

class Item extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props)
    this.state = {
      test: 'name'
    }
  }

  render() {
    const { name, children } = this.props
    const { test } = this.state
    return (
      <div>
        <span>{name}</span>
        <span>{test}</span>
      </div>
    )
  }
}

export default SongListItem
