import { shallowMount } from '@vue/test-utils'
import { TestHelpers } from '../TestHelpers'
import App from '@/components/layouts/App/index.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)

describe('layout: App.vue', () => {
  const name = 'App'
  let h, wrapper

  // Run these statements before each test
  beforeEach(() => {
    wrapper = shallowMount(App)

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
})
