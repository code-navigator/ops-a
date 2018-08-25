import { shallowMount } from '@vue/test-utils'
import { TestHelpers } from '../TestHelpers'
import AppHeader from '@/components/layouts/AppHeader/'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)

describe('layout: AppHeader.vue', () => {
  const name = 'AppHeader'
  let h, wrapper

  // Run these statements before each test
  beforeEach(() => {
    wrapper = shallowMount(AppHeader)

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

  // Does component emit a "Click" event when icon is clicked
  test('emits click event', () => {
    h.hasSelector('xxbutton')
  })
})
