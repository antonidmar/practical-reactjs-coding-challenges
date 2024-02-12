import React, { useState } from 'react'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import BottomResultBox from './components/BottomResultBox'

export const AppWrapper = () => {
  const [countChar, setCountChar] = useState('')
  const [countWords, setCountWords] = useState(0)
  const [countSentence, setCountSentence] = useState(0)
  const [countParagraph, setCountParagraph] = useState(0)
  const [countPron, setCountPron] = useState(0)

  return (
    <>
      <ResultBox
        countChar={countChar}
        countWords={countWords}
        countSentence={countSentence}
        countParagraph={countParagraph}
        countPron={countPron}
      />
      <TextArea
        setCountChar={setCountChar}
        setCountWords={setCountWords}
        setCountSentence={setCountSentence}
        setCountParagraph={setCountParagraph}
        setCountPron={setCountPron}
      />
      <BottomResultBox />
    </>
  )
}
