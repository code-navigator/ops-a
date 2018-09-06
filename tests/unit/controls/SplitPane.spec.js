import SplitPane from '@/components/controls/SplitPane/'
import { TestHelpers } from '../TestHelpers'

describe('layout: SplitPane.vue', () => {
  const name = 'Split-Pane'
  let h

  const createWrapper = defaultPercent => {
    h = new TestHelpers(SplitPane, 'M', {
      propsData: {
        defaultPercent
      },
      slots: {
        paneL: '<div class="slotL"></div>',
        paneR: '<div class="slotR"></div>'
      }
    })
  }
  // Run these statements before each test
  beforeEach(() => {
    createWrapper(10)
  })

  // Is component mounted?
  test('should mount without errors', () => {
    h.isInstance()
  })

  // Does component have correct name?
  test('has name', () => {
    h.hasName(name)
  })

  test('has class of "vertical"', () => {
    h.hasClass('.splitter-paneL', 'vertical')
    h.hasClass('.splitter-paneR', 'vertical')
    h.hasClass('.splitter-pane-resizer', 'vertical')
  })

  test('has a "width" that reflects the "defaultPercent" prop', () => {
    h.hasSelectorWithStyle('.splitter-paneL', 'width', '10%')
    h.hasSelectorWithStyle('.splitter-paneR', 'width', '90%')
    createWrapper(40)
    h.hasSelectorWithStyle('.splitter-paneL', 'width', '40%')
    h.hasSelectorWithStyle('.splitter-paneR', 'width', '60%')
  })

  test('the position of the resizer control reflects the "defaultPercent" prop', () => {
    h.hasSelectorWithStyle('.splitter-pane-resizer', 'left', '10%')
    createWrapper(40)
    h.hasSelectorWithStyle('.splitter-pane-resizer', 'left', '40%')
  })

  test('rendered container has slots identified by class names', () => {
    h.hasSelector('.slotL')
    h.hasSelector('.slotR')
  })

  test('width of panes changes to 50% when the resizer is clicked', () => {
    h.click('.splitter-pane-resizer')
    h.hasSelectorWithStyle('.splitter-paneL', 'width', '50%')
    h.hasSelectorWithStyle('.splitter-paneR', 'width', '50%')
  })
})
