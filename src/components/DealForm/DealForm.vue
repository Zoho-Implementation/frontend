<template>
  <div class="container">
    <h3 class="mt-2">Create Deal</h3>
    <form>
      <div class="form-group mb-2" >
        <label for="deal_name">Deal name:</label>
        <input
            type="text"
            class="form-control"
            id="deal_name"
            v-model="state.deal_name"
            @blur="v$.deal_name.$touch"
            placeholder="Some deal name..."
        >
        <span class="text-danger" v-if="v$.deal_name.$error">The field is not valid</span>
      </div>
      <div class="form-group mb-2">
        <label for="stage">Stage:</label>
        <input
            type="text"
            class="form-control"
            id="stage"
            v-model="state.stage"
            @blur="v$.stage.$touch"
            placeholder="In progress..."
        >
        <span class="text-danger" v-if="v$.stage.$error">The field is not valid</span>
      </div>
      <div class="form-group mb-2">
        <label for="account_name">Account</label>
        <select class="form-control" id="account_name" v-model="state.account_id">
          <option value="">Select account</option>
          <option v-for="account in this.getAccounts" :value="account.id">{{ account.account_name }}</option>
        </select>
        <span class="text-danger" v-if="v$.account_id.$error">The field is not valid</span>
      </div>
      <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="submitForm"
          :disabled="v$.error"
      >Create</button>
      <div class="alert alert-success mt-2" role="alert" @click="this.hideDealSuccessMessage" v-if="this.getDealSuccessStatus">
        Successful Creation
      </div>
    </form>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { required, minLength} from 'vuelidate/lib/validators';
import { useVuelidate } from '@vuelidate/core';
import { reactive } from 'vue';
import { mapActions } from 'vuex';

export default {
  setup () {
    const state = reactive({
      account_id: '',
      deal_name: '',
      stage: '',
    })

    const rules = {
      account_id: { required },
      deal_name: { required, minLength: minLength(2) },
      stage: { required, minLength: minLength(2) },
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  },

  computed: {
    ...mapGetters(['getAccounts', 'getDealSuccessStatus'])
  },
  methods: {
    ...mapActions(['createDeal', 'hideDealSuccessMessage']),
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.createDeal({
          account_id: this.state.account_id,
          deal_name: this.state.deal_name,
          stage: this.state.stage
        });
        this.state.account_id = '';
        this.state.deal_name = '';
        this.state.stage = '';
        this.v$.$reset();
      }
    }
  }
}
</script>
