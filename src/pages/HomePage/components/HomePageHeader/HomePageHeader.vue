<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="btn btn-outline-secondary ml-auto" type="button" @click="logout">Logout</button>
    </nav>
  </header>

</template>

<script>
import {getAuthLink} from "@/helpers/requestHelper";

export default {
  name: "HomePageHeader",
  methods: {
    logout() {
      localStorage.removeItem('access_token');
      window.location.href = getAuthLink();
    }
  }

}
</script>
