(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{653:function(s,a,n){"use strict";n.r(a),n.d(a,"sources",function(){return l});var l=[{filename:"component.ts",contents:{raw:n(846),highlighted:n(845)}},{filename:"template.html",contents:{raw:n(844),highlighted:n(843)}},{filename:"module.ts",contents:{raw:n(842),highlighted:n(841)}}]},841:function(s,a){s.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},842:function(s,a){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},843:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span>\n  [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span>\n  [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">ng-template</span> #<span class="hljs-attribute">customCellTemplate</span> <span class="hljs-attribute">let-day</span>=<span class="hljs-value">"day"</span> <span class="hljs-attribute">let-locale</span>=<span class="hljs-value">"locale"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"cal-cell-top"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"cal-day-badge"</span> *<span class="hljs-attribute">ngIf</span>=<span class="hljs-value">"day.badgeTotal &gt; 0"</span>&gt;</span>{{ day.badgeTotal }}<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"cal-day-number"</span>&gt;</span>{{ day.date | calendarDate:\'monthViewDayNumber\':locale }}<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">small</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"margin: 5px"</span>&gt;</span>There are {{ day.events.length }} events on this day<span class="hljs-tag">&lt;/<span class="hljs-title">small</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">ng-template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">cellTemplate</span>]=<span class="hljs-value">"customCellTemplate"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>'},844:function(s,a){s.exports='<mwl-demo-utils-calendar-header\n  [(view)]="view"\n  [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<ng-template #customCellTemplate let-day="day" let-locale="locale">\n  <div class="cal-cell-top">\n    <span class="cal-day-badge" *ngIf="day.badgeTotal > 0">{{ day.badgeTotal }}</span>\n    <span class="cal-day-number">{{ day.date | calendarDate:\'monthViewDayNumber\':locale }}</span>\n  </div>\n  <small style="margin: 5px">There are {{ day.events.length }} events on this day</small>\n</ng-template>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [cellTemplate]="customCellTemplate">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events">\n  </mwl-calendar-day-view>\n</div>'},845:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent } from <span class="hljs-string">\'angular-calendar\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [];\n}\n'},846:function(s,a){s.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n}\n"}}]);