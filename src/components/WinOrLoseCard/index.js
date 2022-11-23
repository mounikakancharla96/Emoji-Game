import './index.css'

const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lossImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLossCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const resultStatus = isWon ? 'You Won' : 'You Loss'
  const scoreStatus = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon ? wonImage : lossImage

  return (
    <div className="win-or-loss-card-container">
      <div className="score-details-container">
        <h1 className="result-status">{resultStatus}</h1>
        <p className="score-status">{scoreStatus}</p>
        <p className="score-card">{score}/12</p>
        <button
          className="play-again-button"
          onClick={onClickPlayAgain}
          type="button"
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="win or loss" className="win-or-loss-image" />
      </div>
    </div>
  )
}

export default WinOrLossCard
