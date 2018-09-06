export default {
  name: 'SelectBox',

  props: [
    'label',
    'items',
    'value'
  ],

  computed: {
    input: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('keyup', newValue)
      }
    }
  }
}
