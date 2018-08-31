import appContent from './../AppContent/'
import appDrawer from './../AppDrawer/'
import appFooter from './../AppFooter/'
import appHeader from './../AppHeader/'
import { routes } from './../../../router/routes'

export default {
  name: 'App',

  components: {
    appContent,
    appDrawer,
    appFooter,
    appHeader
  },

  data: () => ({
    // Drawer position (false = in; true = out)
    drawer: false,
    // Routes for navigation menu
    routes
  }),

  methods: {
    // Toggle drawer in and out
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
