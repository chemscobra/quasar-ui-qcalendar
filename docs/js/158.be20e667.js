(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[158],{"0135":function(a,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div style=\"max-width: 800px; width: 100%;\">\n    <q-calendar\n      ref=\"calendar\"\n      v-model=\"selectedDate\"\n      view=\"week-agenda\"\n      v-touch-swipe.mouse.left.right=\"handleSwipe\"\n      animated\n      transition-prev=\"slide-right\"\n      transition-next=\"slide-left\"\n      locale=\"en-us\"\n      style=\"height: 400px; overflow: hidden\"\n    >\n      <template #day-body=\"day\">\n        <template v-for=\"(agenda) in getAgenda(day)\">\n          <div\n            :key=\"day.date + agenda.time\"\n            :label=\"agenda.time\"\n            class=\"justify-start q-ma-sm shadow-5 bg-grey-6\"\n          >\n            <div v-if=\"agenda.avatar\" class=\"row justify-center\" style=\"margin-top: 30px; width: 100%;\">\n              <q-avatar style=\"margin-top: -25px; margin-bottom: 10px; font-size: 60px; max-height: 50px;\">\n                <img :src=\"agenda.avatar\" style=\"border: #9e9e9e solid 5px;\">\n              </q-avatar>\n            </div>\n            <div class=\"col-12 q-px-sm\">\n              <strong>{{ agenda.time }}</strong>\n            </div>\n            <div v-if=\"agenda.desc\" class=\"col-12 q-px-sm\" style=\"font-size: 10px;\">\n              {{ agenda.desc }}\n            </div>\n          </div>\n        </template>\n      </template>\n    </q-calendar>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      agenda: {\n        // value represents day of the week\n        1: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',\n            desc: 'Meeting with CEO'\n          },\n          {\n            time: '08:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png',\n            desc: 'Meeting with HR'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',\n            desc: 'Meeting with Karen'\n          }\n        ],\n        2: [\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',\n            desc: 'Meeting with Alisha'\n          },\n          {\n            time: '17:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',\n            desc: 'Meeting with Sarah'\n          }\n        ],\n        3: [\n          {\n            time: '08:00',\n            desc: 'Stand-up SCRUM',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '10:00',\n            desc: 'Sprint planning',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'\n          }\n        ],\n        4: [\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          }\n        ],\n        5: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '09:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'\n          },\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          },\n          {\n            time: '13:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '14:00',\n            avatar: 'https://cdn.quasar.dev/img/linux-avatar.png'\n          },\n          {\n            time: '14:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png'\n          },\n          {\n            time: '15:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '15:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '16:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          }\n        ]\n      }\n    }\n  },\n\n  methods: {\n    getAgenda (day) {\n      return this.agenda[parseInt(day.weekday, 10)]\n    },\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n    handleSwipe ({ evt, ...info }) {\n      if (info.duration >= 30) {\n        if (info.direction === 'right') {\n          this.calendarPrev()\n        } else if (info.direction === 'left') {\n          this.calendarNext()\n        }\n      }\n      // stopAndPrevent(evt)\n      evt.cancelable !== false && evt.preventDefault()\n      evt.stopPropagation()\n    }\n  }\n}\n<\/script>\n"}}]);