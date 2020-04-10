<template>
  <div id="app">
    <router-view/>
	<CommonFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonFooter from '@/components/CommonFooter/CommonFooter.vue'

export default {
  components: {
    CommonFooter
  }
}
</script>

<style lang="scss">

</style>
