import './index.css'

const HistoryItem = props => {
  const {historyList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyList

  return (
    <li className="history-item-container">
      <p className="date-time">{timeAccessed}</p>
      <img src={logoUrl} alt="logoUrl" className="image" />
      <div className="title-container">
        <>
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </>
        <div className="delete-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
