export default {
  name: 'AppDrawer',

  props: [
    'drawer',
    'routes'
  ],

  computed: {
    position: {
      get () {
        return this.drawer
      },
      set (newValue) {
      }
    }
  }
}
