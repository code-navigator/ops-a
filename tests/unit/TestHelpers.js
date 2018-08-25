export class TestHelpers {
  constructor (wrapper, expect) {
    this.wrapper = wrapper
    this.expect = expect
  }

  // Check if component has name as expected
  hasName (name) {
    this.expect(this.wrapper.name()).toBe(name)
  }

  // Check if template has selector
  hasSelector (selector) {
    this.expect(this.wrapper.find(selector).exists()).toBeTruthy()
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
