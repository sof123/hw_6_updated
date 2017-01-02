import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindFetchFeedToDispatch} from '../actions/profileActions'
import {addCommentAction, editCommentAction} from '../actions/articleActions'
var articlesRendered = 0;
exports.articlesRendered = articlesRendered


class Articles extends Component {

  componentWillMount() {
    this.props.fetchArticles()
    //articlesRendered = 1
  }

  render() {
    const articles = this.props.articles;
    let commentValue;
    let editCommentValue
    let editArticleValue

    return (
      <div>
        <h1>Articles</h1>
        {articles.map(article => (
          <div key={article.id}>
            <p>By {article.author}</p>
            <p>Posted at {article.date}</p>
            <p>{article.text}</p>
            <p><input id="articleDisplayBox" name="articleDisplayBox"  ref={(a)=>editArticleValue=a} defaultValue={article.text} required />
              <input type="button" defaultValue="Edit Article"
                onClick={() => this.props.editArticle(editArticleValue.value, article.id)} id="editArticleButton" /></p>
            <p>Comments:</p>
            {article.comments.map(comment =>(
              <div key={article.comments.indexOf(comment)}>
                <input id="commentDisplayBox" name="commentDisplayBox"  ref={(a)=>editCommentValue=a} defaultValue={comment} required />
                  <input type="button" defaultValue="Edit comment"
                    onClick={() => this.props.editComment(editCommentValue.value, article.id, article.comments.indexOf(comment))} id="addCommentButton" />
              </div>
            ))}
              <input id="commentBox" name="commentBox" ref={(a)=>commentValue=a} required />
              <input type="button" defaultValue="Comment!"
                onClick={() => this.props.addComment(commentValue.value, article.id)} id="addCommentButton" />
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
    fetchArticles: bindFetchFeedToDispatch(dispatch),
    addComment: (comment, id) => addCommentAction(comment, id)(dispatch),
    editComment: (comment, articleId, commentIndex) => editCommentAction(comment, articleId, commentIndex)(dispatch),
    editArticle: (newText, articleId) => editArticleAction(newText, articleId)(dispatch)
  })
)(Articles)
