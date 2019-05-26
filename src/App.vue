/* eslint-disable */
<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld/>-->
  <!--</div>-->
  <main>
    <!-- TableSort Component -->
    <table-sort
      headline="Das ist die Headline"
      :tableHead="[
          {
              title: 'firstname',
              text: 'Vorname'
          },
          {
              title: 'lastname',
              text: 'Nachname'
          },
          {
              title: 'age',
              text: 'Alter'
          },

      ]"
      :tableBody="[
          {
              firstname: 'Cristina',
              lastname: 'Coves Mora',
              age: 25
          },
          {
              firstname: 'Vicente',
              lastname: 'XYZ',
              age: 10
          },
          {
              firstname: 'Thomas',
              lastname: 'ABC',
              age: 28
          },
          {
              firstname: 'Simon',
              lastname: 'Koch',
              age: 24
          }
       ]"
    />

    <br>
    <br>

    <!-- TableSelectAll Component -->
    <table-select-all
      headline="Component TableSelectAll"
      :columnsThead="[
          {
              title: 'ID',
          },
          {
              title: 'title 1',
          },
          {
              title: 'title 2'
          },
          {
              title: 'title 3',
          },

      ]"

      :rowsTbody="[
          {
              id: 1,
              firstname: 'Cristina',
              lastname: 'Coves Mora',
              age: 25
          },
          {
              id: 2,
              firstname: 'Vicente',
              lastname: 'XYZ',
              age: 10
          },
          {
              id: 3,
              firstname: 'Thomas',
              lastname: 'ABC',
              age: 28
          },
          {
              id: 4,
              firstname: 'Simon',
              lastname: 'Koch',
              age: 24
          }
       ]"

    />


  </main>

</template>

<script>
// import HelloWorld from './components/HelloWorld';
import TableSort from './components/TableSort.vue';
import TableSelectAll from './components/TableSelectAll.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    TableSort,
    TableSelectAll
  }
}
</script>
