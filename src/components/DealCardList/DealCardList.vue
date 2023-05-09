<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="mb-2">
          <span v-for="item in list">
          <Card :messages="'stage: ' + item.stage" :title="item.deal_name" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Card from "@/components/Card/Card.vue";

export default {
  name: "DealCardList",
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
