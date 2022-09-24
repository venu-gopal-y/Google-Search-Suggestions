// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, onChange} = props

  const icon = () => {
    onChange(suggestion)
  }

  return (
    <li>
      <div className="suggestion-container">
        <p className="suggestion"> {suggestion} </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
          onClick={icon}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
