import {createLocalVue, mount, shallowMount} from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)

export class TestHelpers {
  constructor (component, type = 'S', options = {}) {
    const router = new VueRouter()
    const localVue = createLocalVue()
    localVue.use(VueRouter)

    const defaultOptions = {
      localVue,
      router
    }

    if (type === 'S') {
      this.wrapper = shallowMount(component, {...defaultOptions, ...options})
    } else {
      this.wrapper = mount(component, {...defaultOptions, ...options})
    }
  }

  // Trigger window event
  click (selector) {
    this.hasSelector(selector)
    this.wrapper.find(selector).trigger('click')
  }

  // Check if event is emitted
  emits (event) {
    expect(this.wrapper.emitted(event)).toBeTruthy()
  }

  getWrapper () {
    return this.wrapper
  }

  hasClass (selector, className) {
    expect(this.wrapper.find(selector).classes()).toContain(className)
  }

  hasDataProp (prop, value) {
    expect(this.wrapper.vm[prop]).toBe(value)
  }

  // Check if component has name as expected
  hasName (name) {
    expect(this.wrapper.name()).toBe(name)
  }

  // Check if routerlink has URL path
  hasRouterLinkPath (selector, path) {
    expect(this.wrapper.find(selector).props().to).toBe(path)
  }

  // Check if template has selector
  hasSelector (selector) {
    expect(this.wrapper.find(selector).exists()).toBeTruthy()
  }

  // Check if template has correct number of selectors
  hasSelectors (selector, count) {
    expect(this.wrapper.findAll(selector).length).toBe(count)
  }

  hasSelectorWithAttribute (selector, attribute, value) {
    expect(this.wrapper.attributes('split')).toBe('vertical')
  }

  // Check if selector is followed by text
  hasSelectorWithText (selector, text) {
    expect(this.wrapper.find(selector).text()).toContain(text)
  }

  // Check if selector has style set to given value
  hasSelectorWithStyle (selector, style, value) {
    expect(this.wrapper.find(selector).element.style[style]).toBe(value)
  }

  // Check if component is an instance of Vue
  isInstance () {
    expect(this.wrapper.isVueInstance()).toBeTruthy()
  }

  // Check if component renders correctly
  renders () {
    expect(this.wrapper.html()).toMatchSnapshot()
  }

  setProps (props) {
    this.wrapper.setProps(props)
  }
}
