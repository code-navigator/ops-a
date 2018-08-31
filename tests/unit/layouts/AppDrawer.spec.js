import AppDrawer from '@/components/layouts/AppDrawer/'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import {
  mount,
  createLocalVue,
  RouterLinkStub
} from '@vue/test-utils'
import { TestHelpers } from '../TestHelpers'

Vue.use(Vuetify)

describe('layout: AppDrawer.vue', () => {
  const name = 'AppDrawer'
  const routes = [
    {
      name: 'item1',
      path: '/path1'
    },
    {
      name: 'item2',
      path: '/path2'
    }
  ]
  const localVue = createLocalVue()
  const router = new VueRouter()
  let h, wrapper

  // Run these statements before each test
  beforeEach(() => {
    wrapper = mount(AppDrawer, {
      propsData: {
        drawer: false,
        routes
      },
      stubs: {
        RouterLink: RouterLinkStub
      },
      router,
      localVue
    })

    h = new TestHelpers(wrapper, expect)
  })

  // Is component mounted?
  test('should mount without errors', () => {
    h.isInstance()
  })

  // Does component have correct name?
  test('has name', () => {
    h.hasName(name)
  })

  // Does drawer slide in/out according to 'drawer' prop value?
  test('should slide out when drawer is true', () => {
    h.hasClass('.v-navigation-drawer', 'v-navigation-drawer--close')
    wrapper.setProps({ drawer: true })
    h.hasClass('.v-navigation-drawer', 'v-navigation-drawer--open')
  })

  // Does drawer contain correct number of tiles?
  test('should contain correct number of tiles', () => {
    h.hasSelectors('.v-list__tile', routes.length)
  })

  // Does drawer list contain module names?
  test(`should contain module's name`, () => {
    h.hasSelectorWithText('.v-list__tile__title', routes[0].name)
  })

  // Does drawer list contain links to module path
  test(`should contain module's name`, () => {
    h.hasRouterLinkPath(RouterLinkStub, routes[0].path)
  })
})
