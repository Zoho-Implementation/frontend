<template>
  <div class="card card-sm">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{messages}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    messages: String
  }
}
</script>

<style scoped>

</style>
