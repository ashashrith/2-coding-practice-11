// Write your React code here.
import './index.css'

const Feedback = props => {
  const {resources} = props
  const {emojis, loveEmojiUrl} = resources
  const {name, imageUrl, id} = emojis

  const onClickImg = () => {
    ;<li className="container">
      <img src={loveEmojiUrl} alt="love emoji" className="img" />
      <h1 className="heading">Thank You</h1>
      <p className="name">
        We will use your feedback to improve our customer support performance.{' '}
      </p>
    </li>
  }

  return (
    <li className="bg-container">
      <div className="container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <div className="cont">
          <div className="mini">
            <img
              key={id}
              src={imageUrl}
              alt={name}
              className="img"
              onClick={onClickImg}
            />
            <p className="name"> {name}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Feedback
