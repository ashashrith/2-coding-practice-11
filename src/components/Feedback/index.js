import './index.css'

const Feedback = props => {
  const {resources} = props
  const {emojis, loveEmojiUrl} = resources

  const isTrue = true

  const onClickShow = () => {
    if (isTrue) {
      ;<div className="container">
        <img src={loveEmojiUrl} alt="love emoji" className="img" />
        <h1 className="heading">Thank You</h1>
        <p className="name">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    }
  }

  return (
    <div className="bg-container">
      <div className="container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="cont">
          {emojis.map(emoji => (
            <li key={emoji.id} className="list">
              <button type="button" onClick={onClickShow} className="btn">
                <img src={emoji.imageUrl} className="img" alt={emoji.name} />
                <br />
                <span className="name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Feedback
