import {Component} from 'react'
import HistoryItem from 'src/Components/HistoryItem'
import './index.css'

class SearchHistory extends Component {
  state = {
    historyList: initialHistoryList,
  }

  render() {
    const {historyList} = this.state
    const {initialHistoryList} = this.props

    return (
      <div className="app-container">
        <div className="history-header-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="applogo"
            className="app-logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="text"
              value=""
              placeholder="search history"
              className="search-input"
            />
          </div>
        </div>
        <div className="history-body-section">
          <ul className="history-list-container">
            {historyList.map(eachItem => (
              <HistoryItem historyList={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchHistory
