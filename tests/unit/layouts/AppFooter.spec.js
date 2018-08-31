import AppFooter from '@/components/layouts/AppFooter/'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import { TestHelpers } from '../TestHelpers'

Vue.use(Vuetify)

describe('layout: AppFooter.vue', () => {
  const name = 'AppFooter'
  let h, wrapper

  // Run these statements before each test
  beforeEach(() => {
    wrapper = shallowMount(AppFooter)

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
