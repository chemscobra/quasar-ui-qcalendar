<template>
  <div class="q-markdown">
    <example-title title="Basic" />
    <example-card title="Week View - Basic" name="WeekViewBasic" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewBasic.vue').default)" />

    <example-title title="First Day Monday" />
    <example-card title="Week View - First Day Monday" name="WeekViewFirstDayMonday" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewMondayFirstDay.vue').default)" />

    <example-title title="5 Day Work Week" />
    <example-card title="Week View - 5 Day Work Week" name="WeekViewFiveDayWorkWeek" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewFiveDayWorkWeek.vue').default)" />

    <example-title title="Hide Header" />
    TBD

    <example-title title="Disabled Days" />
    <example-card title="Week View - Disabled Days" name="WeekViewDisabledDays" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewDisabledDays.vue').default)">
      <q-markdown>
When the property `disabled-days` has an array of disabled days, you can hook into the `interval-style` property to change the background color of the disabled day.
      </q-markdown>
    </example-card>

    <example-title title="Now" />
    <example-card title="Week View - Now" name="WeekViewNow" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewNow.vue').default)">
      <q-markdown>
You can use the `now` property to set a fixed date, otherwise the current date will be used. If the `v-model` property is empty, then it will receive the `now` property's value.
      </q-markdown>
    </example-card>

    <example-title title="Short Weekday Label" />
    <example-card title="Week View - Short Weekday Label" name="WeekViewShortWeekdayLabel" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewShortWeekdayLabel.vue').default)" />

    <example-title title="Hour24 Format" />
    <example-card title="Week View - Hour24 Format" name="WeekViewHour24Format" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewHour24Format.vue').default)">
      <q-markdown>
`hour24-format` is available only for one of the available `day` or `week` views.
      </q-markdown>
    </example-card>

    <example-title title="Short Interval Label" />
    <example-card title="Week View - Short Interval Label" name="WeekViewShortIntervalLabel" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewShortIntervalLabel.vue').default)">
      <q-markdown>
`short-interval-label` is available only for one of the available `day` or `week` views.
      </q-markdown>
    </example-card>

    <example-card title="Week View - Short Interval Label (Hour24Format)" name="WeekViewShortIntervalLabelHour24Format" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewShortIntervalLabelHour24Format.vue').default)" />

    <example-title title="Previous/Next" />
    <example-card title="Week View - Prev/Next" name="WeekViewPrevNext" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewPrevNext.vue').default)" />

    <example-title title="Swipe Navigation" />
    <example-card title="Week View - Swipe" name="WeekViewSwipe" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewSwipe.vue').default)" />

    <example-title title="Column Header" />
    <example-card title="Week View - Column Header" name="WeekViewColumnHeader" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewColumnHeader.vue').default)" />

    <example-title title="Working with Slots" />
    <q-markdown>
For slots that return `day` or `timestamp`, it looks like this:
```js
{
  date: '',       // YYYY-mm-dd
  time: '',       // 00:00:00 (optional)
  year: 0,        // YYYY
  month: 0,       // mm (Jan = 1, etc)
  day: 0,         // day of the month
  weekday: 0,     // week day
  hour: 0,        // 24-hr
  minute: 0,      // mm
  doy: 0,         // day of year
  workweek: 0,    // workweek number
  hasDay: false,  // if this timestamp is supposed to have a date
  hasTime: false, // if this timestamp is supposed to have a time
  past: false,    // if timestamp is in the past (based on `now` property)
  current: false, // if timestamp is current date (based on `now` property)
  future: false   // if timestamp is in the future (based on `now` property)
}
```
    </q-markdown>
    <example-card title="Week View - Slots" name="WeekViewSlots" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewSlots.vue').default)">
    <q-markdown>
You can use the slots `day-header` and `day-body` to control visual aspects of your event system.
The example below is using the `day-header` slot to indicate there are events on that day, in case it is not visible, indicating to the user they should scroll down to see the event.
The `day-body` slot is used to get information about the date and time of an event and then to calculate where the absolute position of the event based on passed in functions `timeStartPos` and `timeDurationHeight`.
    </q-markdown>
    </example-card>

    <example-title title="More Slots" />
    <example-card title="Week View (Current Time) - Slot (day-container)" name="WeekViewCurrentTime" :tag-parts="getTagParts(require('!!raw-loader!../examples/WeekViewCurrentTime.vue').default)">
      <q-markdown>
You can use the scopedSlot `day-container` to set an absolute position for a time tracking bar.
Scroll down if the current time is later for your location to see the example.
      </q-markdown>
    </example-card>

  </div>
</template>

<script>
import ExampleTitle from '../components/ExampleTitle'
import ExampleCard from '../components/ExampleCard'
import { slugify } from 'assets/page-utils'
import getTagParts from '@quasar/quasar-app-extension-qmarkdown/src/lib/getTagParts'

export default {
  name: 'WeekView',

  components: {
    ExampleTitle,
    ExampleCard
  },

  data () {
    return {
      tempToc: []
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('Basic')
    this.addToToc('Week View - Basic', 2)

    this.addToToc('First Day Monday')
    this.addToToc('Week View - First Day Monday', 2)

    this.addToToc('5 Day Work Week')
    this.addToToc('Week View - 5 Day Work Week', 2)

    this.addToToc('Disabled Days')
    this.addToToc('Week View - Disabled Days', 2)

    this.addToToc('Now')
    this.addToToc('Week View - Now', 2)

    this.addToToc('Short Weekday Label')
    this.addToToc('Week View - Short Weekday Label', 2)

    this.addToToc('Hour24 Format')
    this.addToToc('Week View - Hour24 Format', 2)

    this.addToToc('Short Interval Label')
    this.addToToc('Week View - Short Interval Label', 2)
    this.addToToc('Week View - Short Interval Label (Hour24Format)', 2)

    this.addToToc('Previous/Next')
    this.addToToc('Week View - Prev/Next', 2)

    this.addToToc('Swipe Navigation')
    this.addToToc('Week View - Swipe', 2)

    this.addToToc('Column Header')
    this.addToToc('Week View - Column Header', 2)

    this.addToToc('Working with Slots')
    this.addToToc('Week View - Slots', 2)

    this.addToToc('More Slots')
    this.addToToc('Week View (Current Time) - Slot (day-container)', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    getTagParts,

    addToToc (name, level = 1) {
      const slug = slugify(name)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>

<style lang="stylus">
.example-page
  padding: 16px 46px;
  font-weight: 300;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
</style>