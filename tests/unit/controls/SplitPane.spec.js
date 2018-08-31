import SplitPane from '@/components/controls/SplitPane/'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import { TestHelpers } from '../TestHelpers'

Vue.use(Vuetify)

describe('layout: SplitPane.vue', () => {
  const name = 'Split-Pane'
  let h, wrapper

  // Run these statements before each test
  beforeEach(() => {
    wrapper = mount(SplitPane, {
      slots: {
        paneL: '<div class="test"></div>',
        paneR: '<div></div>'
      },
      propsData: {
        defaultPercent: 10,
        minPercent: 10,
        maxPercent: 10
      }
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
})
