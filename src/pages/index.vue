<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">

    <div class="row col-12 justify-center">
      {{ textFromApi }}
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      textFromApi: null
    }
  },

  async created () {
    var response = await this.$axios.get('/HelloWorld')
    this.textFromApi = response.data.text
  }
}
</script>
