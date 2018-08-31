import AppFooter from '@/components/layouts/AppFooter/'
import { TestHelpers } from '../TestHelpers'

describe('layout: AppFooter.vue', () => {
  const name = 'AppFooter'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(AppFooter, 'S')
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
