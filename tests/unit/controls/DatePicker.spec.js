import DatePicker from '@/components/controls/DatePicker/'
import { TestHelpers } from '../TestHelpers'

describe('layout: DatePicker.vue', () => {
  const name = 'DatePicker'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(DatePicker, 'M', {
      propsData: {
        label: 'a label',
        value: 'text'
      },
      sync: false
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

  it('should emit a "keyup" event on a change event', () => {
    h.noEmits('keyup')
    h.input('input')
    h.emits('keyup')
  })
})
