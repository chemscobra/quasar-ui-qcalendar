// Quasar
import { QIcon } from 'quasar'

// Mixins
import CalendarIntervals from '../mixins/calendar-intervals.js'

// Util
import props from '../utils/props'
import { convertToUnit } from '../utils/helpers.js'

// Icons
const mdiMenuRight = 'M10,17L15,12L10,7V17Z'
const mdiMenuUp = 'M7,15L12,10L17,15H7Z'

/* @vue/component */
export default {
  name: 'QCalendarResource',

  mixins: [
    CalendarIntervals
  ],

  props: {
    ...props.intervals,
    ...props.resource,
    direction: {
      type: String,
      default: 'next'
    }
  },

  data () {
    return {
      minWidth: '100px',
      scrollWidth: '0'
    }
  },

  created () {
    this.mdiMenuRight = mdiMenuRight
    this.mdiMenuUp = mdiMenuUp
  },

  computed: {
    parsedResourceHeight () {
      const height = parseFloat(this.resourceHeight)
      if (height === 0) {
        return 'auto'
      }
      return height
    },

    parsedResourceWidth () {
      return parseFloat(this.resourceWidth)
    },

    parsedIntervalHeight () {
      const height = parseFloat(this.intervalHeight)
      if (height === 0) {
        return 'auto'
      }
      return height
    }
  },

  methods: {
    __getParentWidth () {
      if (this.$parent && this.$parent.$el) {
        return this.$parent.$el.getBoundingClientRect().width + 15
      }
    },

    __renderHeadIntervals (h) {
      return h('div', {
        staticClass: 'q-calendar-resource__head-intervals'
      }, [
        this.intervals.map(intervals => intervals.map((interval, index) => this.__renderHeadInterval(h, interval, index)))
      ])
    },

    __renderHeadInterval (h, interval, index) {
      let colors = new Map(), color, backgroundColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'colorIntervalBody'
        backgroundColor = 'backgroundIntervalBody'
        colors = this.getThemeColors([color, backgroundColor])
        updateColors = this.setBothColors
      }

      const width = convertToUnit(this.parsedIntervalWidth)
      const height = convertToUnit(this.parsedIntervalHeight)
      const slot = this.$scopedSlots['interval-label']
      const short = this.shortIntervalLabel
      const label = this.intervalFormatter(interval, short)
      const scope = {
        interval,
        index,
        label
      }
      return slot ? slot(scope) : h('div', updateColors(colors.get(color), colors.get(backgroundColor), {
        staticClass: 'q-calendar-resource__head-label',
        style: {
          maxWidth: width,
          minWidth: width,
          height
        },
        on: this.getDefaultMouseEventHandlers(':interval', event => {
          return { interval, index, label, event }
        })
      }), label)
    },

    __renderBody (h) {
      return h('div', {
        staticClass: 'q-calendar-resource__body'
      }, [
        this.__renderScrollArea(h)
      ])
    },

    __renderScrollArea (h) {
      return h('div', {
        ref: 'scrollArea',
        staticClass: 'q-calendar-resource__scroll-area'
      }, [
        this.__renderDayContainer(h)
      ])
    },

    __renderHead (h) {
      return h('div', {
        staticClass: 'q-calendar-resource__head' + (this.sticky === true ? ' q-calendar__sticky' : '')
      }, [
        this.__renderHeadResource(h),
        this.__renderHeadIntervals(h)
      ])
    },

    __renderHeadResource (h) {
      const slot = this.$scopedSlots['resource-header']
      const width = convertToUnit(this.parsedResourceWidth)
      const height = convertToUnit(this.parsedIntervalHeight)

      let colors = new Map(), color, backgroundColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'colorResourceText'
        backgroundColor = 'backgroundResourceText'
        colors = this.getThemeColors([color, backgroundColor])
        updateColors = this.setBothColors
      }

      const intervals = this.intervals

      return h('div', updateColors(colors.get(color), colors.get(backgroundColor), {
        staticClass: 'q-calendar-resource__head-resource' + (this.sticky === true ? ' q-calendar__sticky' : ''),
        style: {
          maxWidth: width,
          minWidth: width,
          height
        }
      }), [
        slot && slot({ date: this.value, intervals })
      ])
    },

    __renderDayContainer (h) {
      const component = h('div', {
        staticClass: 'q-calendar-resource__day-container'
      }, [
        this.__renderHead(h),
        this.resources === void 0 && this.__renderResourcesError(h),
        this.resources !== void 0 && this.__renderBodyResources(h)
      ])

      if (this.animated === true) {
        const transition = 'q-transition--' + (this.direction === 'prev' ? this.transitionPrev : this.transitionNext)
        return h('transition', {
          props: {
            name: transition,
            appear: true
          }
        }, [
          component
        ])
      }
      return component
    },

    __renderBodyResources (h) {
      let colors = new Map(), color, backgroundColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'colorResourceBody'
        backgroundColor = 'backgroundResourceBody'
        colors = this.getThemeColors([color, backgroundColor])
        updateColors = this.setBothColors
      }

      const data = {
        staticClass: 'q-calendar-resource__resources-body'
      }

      // return h('div', updateColors(colors.get(color), colors.get(backgroundColor), data), this.__renderResourceLabels(h))
      return h('div', updateColors(colors.get(color), colors.get(backgroundColor), data), this.__renderResources(h))
    },

    __renderResources (h, resources = void 0, indentLevel = 0) {
      if (resources === void 0) {
        resources = this.resources
      }
      return resources.map((resource, idx) => {
        return this.__renderResourceRow(h, resource, idx, indentLevel)
      })
    },

    __renderResourceRow (h, resource, idx, indentLevel = 0) {
      const slot = this.$scopedSlots['resource-row']
      const resourceRow = h('div', {
        staticClass: 'q-calendar-resource__resource-row'
      }, [
        this.__renderResourceLabel(h, resource, idx, indentLevel),
        this.__renderResourceIntervals(h, resource),
        slot && slot({ resource, index: idx })
      ])
      if (resource.expanded === true) {
        return [resourceRow, ...this.__renderResources(h, resource.children, indentLevel + 1)]
      }

      return [resourceRow]
    },

    __renderResourceLabel (h, resource, idx, indentLevel = 0) {
      const slot = this.$scopedSlots['resource-label']
      const scope = {
        resource: resource,
        index: idx
      }
      const width = convertToUnit(this.parsedResourceWidth)
      const height = convertToUnit(this.parsedResourceHeight)

      let colors = new Map(), color, backgroundColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'colorResourceText'
        backgroundColor = 'backgroundResourceText'
        colors = this.getThemeColors([color, backgroundColor])
        updateColors = this.setBothColors
      }

      return h('div', updateColors(colors.get(color), colors.get(backgroundColor), {
        key: resource[this.resourceKey] + '-' + idx,
        staticClass: 'q-calendar-resource__resource' + (this.sticky === true ? ' q-calendar__sticky' : ''),
        style: {
          maxWidth: width,
          minWidth: width,
          height
        },
        on: this.getDefaultMouseEventHandlers(':resource', event => {
          return { resource, index: idx, event }
        })
      }), [
        slot ? slot(scope) : this.__renderResourceText(h, resource, idx, indentLevel)
      ])
    },

    __renderResourceText (h, resource, idx, indentLevel = 0) {
      const label = resource[this.resourceKey]
      if (label === void 0) {
        console.warn('QCalendarResource: resource object requires "resource-key" property to contain resource object key')
      }

      return h('div', {
        staticClass: 'q-calendar-resource__resource-text',
        style: {
          paddingLeft: (10 * indentLevel) + 'px'
        }
      }, [
        resource.children && resource.children.length > 0 && h(QIcon, {
          props: {
            name: (resource.expanded === true ? this.mdiMenuUp : this.mdiMenuRight),
            size: 'sm'
          },
          on: {
            click: () => {
              resource.expanded = !resource.expanded
            }
          }
        }),
        label
      ])
    },

    __renderResourceIntervals (h, resource) {
      const slot = this.$scopedSlots['resource-intervals']
      const timeStartPosX = this.timeStartPosX,
        timeDurationWidth = this.timeDurationWidth,
        intervals = this.intervals
      return h('div', {
        staticClass: 'q-calendar-resource__resource-intervals'
      }, [
        this.intervals.map(intervals => intervals.map(interval => this.__renderResourceInterval(h, resource, interval))),
        slot && slot({ resource, intervals, timeStartPosX, timeDurationWidth })
      ])
    },

    // interval related to resource
    __renderResourceInterval (h, resource, interval) {
      // called for each interval
      const slot = this.$scopedSlots['resource-interval']
      const slotData = { resource, interval }
      const width = convertToUnit(this.parsedIntervalWidth)
      const height = convertToUnit(this.parsedResourceHeight)
      return h('div', {
        staticClass: 'q-calendar-resource__resource-interval',
        style: {
          maxWidth: width,
          minWidth: width,
          height
        },
        on: this.getDefaultMouseEventHandlers(':time', event => {
          const scope = this.getScopeForSlotX(this.getTimestampAtEventX(event, interval))
          return { scope, resource, event }
        })
      }, [
        slot && slot(slotData)
      ])
    },

    __renderResourcesError (h) {
      return h('div', {}, 'No resources have been defined')
    }
  },

  render (h) {
    const maxWidth = convertToUnit(this.__getParentWidth())
    return h('div', {
      staticClass: 'q-calendar-resource',
      style: {
        maxWidth: maxWidth
      }
    }, [
      this.__renderBody(h)
    ])
  }
}
