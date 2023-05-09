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
        <AccountCardList :list="getAccounts"/>
      </div>
      <div class="col-md-6">
        <h3>Deals</h3>
        <DealCardList :list="getDeals" />
      </div>
    </div>
  </div>
</template>

<script>

import AccountForm from "@/components/AccountForm/AccountForm.vue";
import DealForm from "@/components/DealForm/DealForm.vue";
import { mapGetters } from 'vuex';
import AccountCardList from "@/components/AccountCardList/AccountCardList.vue";
import DealCardList from "@/components/DealCardList/DealCardList.vue";

export default {
  name: "HomePageMain",
  components: {
    AccountForm,
    AccountCardList,
    DealForm,
    DealCardList
  },
  computed: {
    ...mapGetters(['getAccounts', 'getDeals'])
  },
}
</script>

<style scoped>

</style>
