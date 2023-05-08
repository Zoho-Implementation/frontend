<template>
  <div class="container">
    <h3 class="mt-2">Create Deal</h3>
    <form>
      <div class="form-group mb-2">
        <label for="account_id">Account ID</label>
        <select class="form-control" id="account_id" v-model="accountId">
          <option value="">Select Account ID</option>
          <option v-for="account in accounts" :key="account.id" :value="account.id">{{ account.name }}</option>
        </select>
      </div>
      <div class="form-group mb-2">
        <label for="deal_name">Deal Name</label>
        <input type="text" class="form-control" id="deal_name" v-model="dealName">
      </div>
      <div class="form-group mb-2">
        <label for="stage">Stage</label>
        <input type="text" class="form-control" id="stage" v-model="stage">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountId: '',
      accounts: [
        { id: 1, name: 'Account 1' },
        { id: 2, name: 'Account 2' },
        { id: 3, name: 'Account 3' }
      ],
      dealName: '',
      stage: '',
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
    }
  }
}
</script>
