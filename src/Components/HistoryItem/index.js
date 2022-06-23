import './index.css'

const HistoryItem = props => {
  const {historyList, deleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item-container">
      <p className="date-time">{timeAccessed}</p>
      <div className="logo-title-url-delete-container">
        <div className="logo-title-url-container">
          <img src={logoUrl} alt="domain logo" className="image" />
          <div className="title-url-container">
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>

        <button
          className="delete-button"
          type="button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
    /* <li className="history-item-container">
      <div className="title-container">
        <p className="date-time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li> */
  )
}

export default HistoryItem
