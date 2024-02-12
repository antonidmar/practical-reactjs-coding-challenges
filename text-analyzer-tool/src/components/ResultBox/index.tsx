import './index.scss'

type ResultBoxProps = {
  countChar: string
  countWords: number
  countSentence: number
  countParagraph: number
  countPron: number
}

const ResultBox = ({
  countChar,
  countWords,
  countSentence,
  countParagraph,
  countPron,
}: ResultBoxProps) => {
  const resultBar = [
    {
      title: 'Words',
      value: countWords,
    },
    {
      title: 'Characters',
      value: countChar.length,
    },
    {
      title: 'Sentences',
      value: countSentence,
    },
    {
      title: 'Paragraphs ',
      value: countParagraph,
    },
    {
      title: 'Pronouns',
      value: countPron,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
