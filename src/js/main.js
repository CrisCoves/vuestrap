// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../App.vue'

new Vue({
  // Provide the Vue instance an existing DOM element to mount on
  el: '#app',
  // A hash of components to be made available to the Vue instance.
  components: { App },
  // A string template to be used as the markup for the Vue instance
  template: '<App/>'
})
