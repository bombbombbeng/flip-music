import React from 'react'
import Button from '@material-ui/core/Button'

const SongListItem = (props: {info: SongInfo}) => {
  const { info } = props
  return (
    <div>
      <span>{info.song}</span>
      <span>{info.singer}</span>
      <span>{info.album}</span>
      <span>{info.duration}</span>
      <Button>play</Button>
    </div>
  )
}

export default SongListItem
