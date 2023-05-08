<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-6">
        <AccountForm />
      </div>
      <div class="col-md-6">
      <DealForm />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h3>Accounts</h3>
        <CardList />
      </div>
      <div class="col-md-6">
        <h3>Deals</h3>
        <CardList />
      </div>
    </div>
  </div>
</template>

<script>

import AccountForm from "@/components/AccountForm/AccountForm.vue";
import CardList from "@/components/CardList/CardList.vue";
import DealForm from "@/components/DealForm/DealForm.vue";

export default {
  name: "HomePageMain",
  components: {
    AccountForm,
    CardList,
    DealForm
  }
}
</script>

<style scoped>

</style>
