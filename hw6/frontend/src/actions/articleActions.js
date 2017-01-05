import resource, {CREATE_ARTICLE_SUCCESS, ADD_COMMENT_SUCCESS, EDIT_COMMENT_SUCCESS, EDIT_ARTICLE_SUCCESS} from '../actions'

export const bindCreateArticleToDispatch = (dispatch) => (articleText) => {
  resource('POST', 'article', {text:articleText})
    .then(json =>
      dispatch({
        type: CREATE_ARTICLE_SUCCESS,
        payload: json
      })
    )
}

export const addCommentAction = (comment, id) => (dispatch) =>{

  console.log("Comment is ",comment)
  console.log("id is ",id)

  return resource('PUT', `articles/${id}`, {text:comment, commentId: "-1"})
    .then(r =>
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: r
      })
    )
}

export const editCommentAction = (comment, id, commentIndex) => (dispatch) => {

  console.log("Comment editing is ", comment)
  console.log("id is ", id)
  console.log("")

  return resource('PUT', `articles/${id}`, {text:comment, commentId: commentIndex.toString()})
    .then(r =>
      dispatch({
        type: EDIT_COMMENT_SUCCESS,
        payload: r
      })
    )
}

export const editArticleAction = (newText, id) => (dispatch) => {

  console.log("new text is ", newText)
  console.log("id is ", id)
  console.log("")

  return resource('PUT', `articles/${id}`, {text:newText})
    .then(r =>
      dispatch({
        type: EDIT_ARTICLE_SUCCESS,
        payload: r
      })
    )
}
