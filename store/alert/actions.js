const show = ({ commit }, { type, content }) => {
  commit('SET_TYPE', type)
  commit('SET_CONTENT', content)
  commit('SET_IS_SHOW', true)
}

export default {
  show,
}
