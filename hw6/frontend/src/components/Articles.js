import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindFetchFeedToDispatch} from '../actions/profileActions'
var articlesRendered = 0;
exports.articlesRendered = articlesRendered


class Articles extends Component {

  componentWillMount() {
    this.props.fetchArticles()
    //articlesRendered = 1
  }

  render() {
    const articles = this.props.articles

    return (
      <div>
        <h1>Articles</h1>
        {articles.map(article => (
          <div key={article.id}>
            <p>By {article.author}</p>
            <p>Posted at {article.date}</p>
            <p>{article.text}</p>
            <p>Comments: {article.comments}</p>
          </div>

        ))}
      </div>
    )
  }
}

export default connect(
  state => ({
    articles: state.articles
  }),
  dispatch => ({
    fetchArticles: bindFetchFeedToDispatch(dispatch)
  })
)(Articles)
