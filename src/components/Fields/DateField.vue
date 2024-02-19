<script>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'


dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)

export default {
  name: "DateField",
  props: {
    modelValue: String,
    format: {
      type: String,
      default: 'lll'
    },
    relative: Boolean,
  },
  computed: {
    date() {
      return dayjs(this.modelValue).tz(dayjs.tz.guess())
    },
    formatted() {
      return this.relative ? dayjs().to(this.date) : this.date.format(this.format)
    },
    fullDate() {

      return {content: this.date.format(this.format), disabled: !this.relative}
    }
  }
}
</script>

<template>
  <span>
    <time :datetime="modelValue" v-tooltip="fullDate">{{ formatted }}</time>
  </span>
</template>
