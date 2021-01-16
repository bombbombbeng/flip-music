import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import {
  FlipSoftBox,
  FlipButton,
  useTheme,
  ThemeContext
} from 'flip-ui'

function HookTest(props: any) {
  const { name } = props
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `click ${count} times`
  })
  return (
    <div>
      {name}
      <span>
        count:
        {count}
      </span>
      <FlipButton onClick={() => setCount(count + 1)}>click count</FlipButton>
    </div>
  )
}

const SongListItem = (props: {info: SongInfo}) => {
  const { info } = props
  const onClick = (name?: string) => console.log('onClick', name)
  const theme = useTheme()
  console.log('SongListItem', ThemeContext)
  const MemoFlipSoftBox = React.memo(FlipSoftBox)
  return (
    <div>
      <span>{info.song}</span>
      <span>{info.singer}</span>
      <span>{info.album}</span>
      <span>{info.duration}</span>
      <MemoFlipSoftBox />
      <FlipButton onClick={() => { alert('clicked') }}>play</FlipButton>
      <HookTest name="zoe" />
    </div>
  )
}

export default SongListItem
