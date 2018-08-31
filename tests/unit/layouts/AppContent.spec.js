import AppContent from '@/components/layouts/AppContent/'
import { TestHelpers } from '../TestHelpers'

describe('layout: AppContent.vue', () => {
  const name = 'AppContent'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(AppContent, 'M')
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
