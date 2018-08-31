import SplitPane from 'vue-splitpane'

export default {
  name: 'Split-Pane',

  props: {
    defaultPercent: Number,
    maxPercent: Number,
    minPercent: Number
  },

  components: {
    SplitPane
  }
}
