import App from '@/components/layouts/App/index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import { TestHelpers } from '../TestHelpers'

/* Add Vuetify to master Vue instance to prevent error about having
   having multiple vue instances */
Vue.use(Vuetify)

describe('layout: App.vue', () => {
  const name = 'App'
  const localVue = createLocalVue()
  const router = new VueRouter()
  let h, wrapper

  localVue.use(VueRouter)

  // Run these statements before each test
  beforeEach(() => {
    wrapper = mount(App, {
      localVue,
      router
    })

    h = new TestHelpers(wrapper, expect)
  })

  // Is component mounted?
  it('should mount without errors', () => {
    h.isInstance()
  })

  // Does component have correct name?
  it('should have name', () => {
    h.hasName(name)
  })

  // Does drawer open when button is clicked?
  it('should toggle "drawer" data property on "click" event', () => {
    h.hasDataProp('drawer', false)
    h.click('button')
    h.hasDataProp('drawer', true)
  })
})
