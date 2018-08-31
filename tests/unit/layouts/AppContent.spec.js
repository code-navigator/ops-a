import AppContent from '@/components/layouts/AppContent/'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import { TestHelpers } from '../TestHelpers'

Vue.use(Vuetify)

describe('layout: AppContent.vue', () => {
  const localVue = createLocalVue()
  const name = 'AppContent'
  const router = new VueRouter()
  let h, wrapper

  localVue.use(VueRouter)

  // Run these statements before each test
  beforeEach(() => {
    wrapper = mount(AppContent, {
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

  // Does component render correct template
  test('renders correctly', () => {
    h.renders()
  })
})
