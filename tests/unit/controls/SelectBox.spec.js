import SelectBox from '@/components/controls/SelectBox/'
import { TestHelpers } from '../TestHelpers'

describe('layout: SelectBox.vue', () => {
  const name = 'SelectBox'
  let h

  // Run these statements before each test
  beforeEach(() => {
    h = new TestHelpers(SelectBox, 'M', {
      propsData: {
        items: ['item1'],
        label: 'a label',
        value: 'item1'
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
    h.change('input')
    h.emits('keyup')
  })
})
