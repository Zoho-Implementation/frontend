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
    this.loadAccounts()
  },
  methods: {
    ...mapActions(['loadAccounts'])
  },
  components: {
    HomePageHeader,
    HomePageMain,
  }
}
</script>
