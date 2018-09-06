import CheckBox from '@/components/controls/CheckBox/'
import { TestHelpers } from '../TestHelpers'

describe('layout: CheckBox.vue', () => {
  const name = 'CheckBox'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(CheckBox, 'M', {
      propsData: {
        label: 'a label',
        value: 'some value'
      }
    })
  })

  test('should mount without errors', () => {
    h.isInstance()
  })

  test('has name', () => {
    h.hasName(name)
  })

  it('should display a label', () => {
    h.hasText('a label')
  })

  it('should change state when clicked', () => {
    h.hasText('false')
    h.click('input')
    h.hasText('true')
  })
})
