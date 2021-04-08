const SET_TYPE = (state, type) => {
  state.type = type
}

const SET_CONTENT = (state, content) => {
  state.content = content
}

const SET_IS_SHOW = (state, isShow) => {
  state.isShow = isShow
}

export default {
  SET_TYPE,
  SET_CONTENT,
  SET_IS_SHOW,
}
