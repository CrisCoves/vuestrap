
<template>
    <div class="c-tablesort">
        <h1>{{ headline }}</h1>
      <table class="c-tablesort__table">
          <thead>
              <tr>
                  <th v-for="tableHeadItem in tableHead" @click="toggleSort( tableHeadItem.title )" >
                    {{ tableHeadItem.text }}
                  </th>
              </tr>
          </thead>
          <tbody>
                <tr v-for="row in rows">
                    <td v-for="item in row">{{ item }}</td>
                </tr>
          </tbody>
      </table>
    </div>
</template>

<script>
  import compareValues from '../js/compareValues';
  export default {
    name: 'TableSort',
    props: {
      // props = properties
      headline: {
        type: String,
        required: false
      },
      tableHead: {
        type: Array,
        required: true
      },
      tableBody: {
        type: Array,
        required: true
      }
    },
    //  Only accepts Function when used in a component definition.
    data: function () {
      // data = Variables
      return {
        rows: this.tableBody,
        activeColumn: '',
        activeOrder: ''
      }
    },
    methods: {
      toggleSort: function( column ) {
        const order = this.activeOrder === 'asc' && column === this.activeColumn ? 'desc' : 'asc';
        this.rows.sort(compareValues(column, order));

        this.activeOrder = order;
        this.activeColumn = column;
      }
    }
  }
</script>

