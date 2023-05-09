<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="mb-2">
          <span v-for="item in list">
          <Card :messages="'id: ' + item.id" :title="item.account_name" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Card from "@/components/Card/Card.vue";

export default {
  name: "AccountCardList",
  props: {
    list: Array
  },
  components: {
    Card
  },
}
</script>

<style scoped>

</style>
