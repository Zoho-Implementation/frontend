<template>
  <div class="container">
    <HomePageHeader />
    <HomePageMain />
  </div>
</template>

<script>

import HomePageHeader from "@/pages/HomePage/components/HomePageHeader/HomePageHeader.vue";
import HomePageMain from "@/pages/HomePage/components/HomePageMain/HomePageMain.vue";
import { mapActions } from 'vuex';

export default {
  name: "HomePage",
  created() {
    setTimeout(() => {
      this.loadAccounts();
      this.loadDeals();
      setInterval(() => {
        this.loadAccounts();
        this.loadDeals();
      }, 5000)
    }, 1000);
  },
  methods: {
    ...mapActions(['loadAccounts', 'loadDeals'])
  },
  components: {
    HomePageHeader,
    HomePageMain,
  }
}
</script>
