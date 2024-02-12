import './index.scss'
import { pronouns } from '../../data/pronouns'

type TextAreaProps = {
  setCountChar: (e: string) => void
  setCountWords: (e: number) => void
  setCountSentence: (e: number) => void
  setCountParagraph: (e: number) => void
  setCountPron: (e: number) => void
}

const TextArea = ({
  setCountChar,
  setCountWords,
  setCountSentence,
  setCountParagraph,
  setCountPron,
}: TextAreaProps) => {
  const handelInput = (e: string) => {
    const words = e.split(/\s+/).filter((word) => word.length > 0)
    const wordCount = e.split(/\s+/).filter((word) => word.length > 0).length
    const sentenceCount = e.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length
    const paragraphCount = e.split(/\n+/).filter((para) => para.trim().length > 0).length

    const pronCount = words.filter((word) =>
      pronouns.map((pronoun) => pronoun.toLowerCase()).includes(word.toLowerCase())
    ).length
    setCountPron(pronCount)
    setCountParagraph(paragraphCount)
    setCountSentence(sentenceCount)
    setCountWords(wordCount)
    setCountChar(e)
  }

  return (
    <>
      <textarea
        className="text-area"
        placeholder="Paste your text here..."
        autoFocus
        onChange={(e) => handelInput(e.target.value)}
      />
    </>
  )
}

export default TextArea
