<template>
  <div id="app">
    <router-view />
    <PannelComponent/>
  </div>
</template>

<script>
import PannelComponent from './components/Pannel.vue'

export default {
  name: 'app',
  components: {
    PannelComponent
  }
}
</script>



<style lang="scss">

</style>
