(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2374b5"],{fb03:function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-calendar\n      v-model="selectedDate"\n      :column-header-before="true"\n      :column-header-after="true"\n      view="day"\n      locale="en-us"\n      style="height: 400px;"\n    >\n      \x3c!-- eslint-disable vue/no-unused-vars --\x3e\n      <template #column-header-before="days">\n        <div class="q-ma-xs">\n          column-header-before slot\n        </div>\n      </template>\n      <template #column-header-after="days">\n        <div class="q-ma-xs">\n          column-header-ater slot\n        </div>\n      </template>\n    </q-calendar>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\'\n    }\n  }\n}\n<\/script>\n'}}]);