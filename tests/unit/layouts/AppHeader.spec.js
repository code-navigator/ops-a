import AppHeader from '@/components/layouts/AppHeader/'
import { TestHelpers } from '../TestHelpers'

describe('layout: AppHeader.vue', () => {
  const name = 'AppHeader'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(AppHeader, 'M')
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
    h.click('button')
    h.emits('click')
  })
})
