export class TestHelpers {
  constructor (wrapper, expect) {
    this.wrapper = wrapper
    this.expect = expect
  }

  // Trigger window event
  click (selector) {
    this.hasSelector(selector)
    this.wrapper.find(selector).trigger('click')
  }

  // Check if event is emitted
  emits (event) {
    this.expect(this.wrapper.emitted(event)).toBeTruthy()
  }

  hasClass (selector, className) {
    this.expect(this.wrapper.find(selector).classes()).toContain(className)
  }

  hasDataProp (prop, value) {
    this.expect(this.wrapper.vm[prop]).toBe(value)
  }

  // Check if component has name as expected
  hasName (name) {
    this.expect(this.wrapper.name()).toBe(name)
  }

  // Check if routerlink has URL path
  hasRouterLinkPath (selector, path) {
    this.expect(this.wrapper.find(selector).props().to).toBe(path)
  }

  // Check if template has selector
  hasSelector (selector) {
    this.expect(this.wrapper.find(selector).exists()).toBeTruthy()
  }

  // Check if template has correct number of selectors
  hasSelectors (selector, count) {
    this.expect(this.wrapper.findAll(selector).length).toBe(count)
  }

  // Check if selector is followed by text
  hasSelectorWithText (selector, text) {
    this.expect(this.wrapper.find(selector).text()).toContain(text)
  }

  // Check if component is an instance of Vue
  isInstance () {
    this.expect(this.wrapper.isVueInstance()).toBeTruthy()
  }

  // Check if component renders correctly
  renders () {
    this.expect(this.wrapper.html()).toMatchSnapshot()
  }
}
