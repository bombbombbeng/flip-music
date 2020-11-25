import React from 'react'

const SongListItem = (props: {info: SongInfo}) => {
  const { info } = props
  return (
    <div>
      <span>{info.song}</span>
      <span>{info.singer}</span>
      <span>{info.album}</span>
      <span>{info.duration}</span>
    </div>
  )
}

export default SongListItem
