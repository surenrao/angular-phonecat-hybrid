// lib
import $ from 'jquery';
import 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-route';

// app
import './app.module.js';
import './app.config.js';
import './app.animations.js';
import './core/core.module.js';
import './core/checkmark/checkmark.filter.js';
import './core/phone/phone.module.js';
import './core/phone/phone.service.js';
import './phone-list/phone-list.module.js';
import './phone-list/phone-list.component.js';
import './phone-detail/phone-detail.module.js';
import './phone-detail/phone-detail.component.js';

window.$ = $;
window.jQuery = $;
$(document).ready(()=>{
    console.log('jquery is loaded!');
});