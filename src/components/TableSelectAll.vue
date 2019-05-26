
<!--https://stackoverflow.com/questions/33571382/check-all-checkboxes-vuejs-->

<template>
  <div class="c-table-sellect-all">
    <h2>{{ headline }}</h2>
    <table class="c-table-sellect-all__table">
      <thead>
        <tr>
            <th>
              <input type="checkbox" v-model="selectAll" @change="toggleAll">
            </th>
            <th v-for="column in columnsThead">
              {{ column.title }}
            </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in rowsTbody">
          <td>
            <input type="checkbox" v-model="selectedRows" :value="row.id">
          </td>
          <td v-for="value in row">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  export default {
    name: 'TableSelectAll',
    props: {
      // props = properties
      headline: {
        type: String,
        required: false
      },
      columnsThead: {
        type: Array,
        required: true
      },
      rowsTbody: {
        type: Array,
        required: true
      }
    },
    //  Only accepts Function when used in a component definition.
    data: function () {
      // data = Variables
      return {
        selectAll: false,
        selectedRows: []
      }
    },
    watch: {
      selectedRows: function() {
        if (this.rowsTbody.length !== this.selectedRows.length) {
          this.selectAll = false;
        }
      },
    },
    methods: {
      toggleAll: function() {
        console.log('selectAll', this.selectAll);

        if (this.selectAll) {
          this.selectedRows = this.rowsTbody.map(row => row.id);
        } else {
          this.selectedRows = [];
        }
      }
    }
  }
</script>
