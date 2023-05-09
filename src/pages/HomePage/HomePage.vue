<template>
  <div class="container">
    <HomePageHeader />
    <HomePageMain />
    <HomePageFooter />
  </div>
</template>

<script>

import HomePageHeader from "@/pages/HomePage/components/HomePageHeader/HomePageHeader.vue";
import HomePageMain from "@/pages/HomePage/components/HomePageMain/HomePageMain.vue";
import HomePageFooter from "@/pages/HomePage/components/HomePageFooter/HomePageFooter.vue";
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
    HomePageFooter
  }
}
</script>
