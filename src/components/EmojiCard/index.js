import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiIcon = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="emoji-button" onClick={onClickEmojiIcon}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
