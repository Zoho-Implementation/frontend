<template>
  <div class="container">
    <h3 class="mt-2">Create Account</h3>
    <form>
      <div class="form-group mb-2">
        <label for="website">Website:</label>
        <input type="text" class="form-control" id="website" v-model="website">
      </div>
      <div class="form-group mb-2">
        <label for="phone">Phone:</label>
        <input type="text" class="form-control" id="phone" v-model="phone">
      </div>
      <div class="form-group mb-2">
        <label for="account_name">Account Name:</label>
        <input type="text" class="form-control" id="account_name" v-model="account_name">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      website: '',
      phone: '',
      account_name: '',
    }
  },
  methods: {
    submitForm() {
      // Додатковий код для відправлення форми
    }
  }
}
</script>
