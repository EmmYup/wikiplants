<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-form-input
          v-model="text"
          placeholder="Enter the name of a plant"
        ></b-form-input>
      </b-col>
      <b-col>
        <b-dropdown id="dropdown-1" variant="primary" text="Filter family">
          <b-dropdown-item>Family 1</b-dropdown-item>
          <b-dropdown-item>Family 2</b-dropdown-item>
          <b-dropdown-item>Family 3</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {},
  data() {
    return {
      text: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
