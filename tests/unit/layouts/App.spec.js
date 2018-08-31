import App from '@/components/layouts/App/index.vue'
import { TestHelpers } from '../TestHelpers'

describe('layout: App.vue', () => {
  const name = 'App'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(App, 'M')
  })

  // Is component mounted?
  it('should mount without errors', () => {
    debugger
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
