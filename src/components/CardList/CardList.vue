<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="mb-2">
          <Card />
        </div>
        <div class="mb-2">
          <Card />
        </div>
        <div class="mb-2">
          <Card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Card from "@/components/Card/Card.vue";

export default {
  name: "CardList",
  components: {
    Card
  }
}
</script>

<style scoped>

</style>
