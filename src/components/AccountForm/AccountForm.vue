<template>
  <div class="container">
    <h3 class="mt-2">Create Account</h3>
    <form>
      <div class="form-group mb-2" >
        <label for="website">Website:</label>
        <input
            type="text"
            class="form-control"
            id="website"
            v-model="state.website"
            @blur="v$.website.$touch"
            placeholder="http://somesite.com"
        >
        <span class="text-danger" v-if="v$.website.$error">The field is not valid</span>
      </div>
      <div class="form-group mb-2">
        <label for="phone">Phone:</label>
        <input
            type="text"
            class="form-control"
            id="phone"
            v-model="state.phone"
            @blur="v$.phone.$touch"
            placeholder="+380502345670"
        >
        <span class="text-danger" v-if="v$.phone.$error">The field is not valid</span>
      </div>
      <div class="form-group mb-2">
        <label for="account_name">Account Name:</label>
        <input
            type="text"
            class="form-control"
            id="account_name"
            v-model="state.account_name"
            @blur="v$.account_name.$touch"
            placeholder="Vasya"
        >
        <span class="text-danger" v-if="v$.account_name.$error">The field is not valid</span>
      </div>
      <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="submitForm"
          :disabled="v$.error"
      >Create</button>
      <div class="alert alert-success mt-2" role="alert" @click="this.hideAccountSuccessMessage" v-if="this.getAccountSuccessStatus">
        Successful Creation
      </div>
    </form>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { required, url, helpers, minLength} from 'vuelidate/lib/validators';
import { useVuelidate } from '@vuelidate/core';
import { reactive } from 'vue';
import { mapActions } from 'vuex';

export default {
  setup () {
    const state = reactive({
      website: '',
      phone: '',
      account_name: '',
    })

    const phone = helpers.regex('phone', /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)

    const rules = {
      website: { required, url },
      phone: { required, phone },
      account_name: { required, minLength: minLength(2)},
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  },

  computed: {
    ...mapGetters([ 'getAccountSuccessStatus'])
  },
  methods: {
    ...mapActions(['createAccount', 'hideAccountSuccessMessage']),
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.createAccount({
          website: this.state.website,
          phone: this.state.phone,
          account_name: this.state.account_name
        })
        this.state.website = '';
        this.state.phone = '';
        this.state.account_name = '';
        this.v$.$reset();
      }
    }
  }
}
</script>
