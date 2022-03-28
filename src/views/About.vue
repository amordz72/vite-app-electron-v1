<template>
  <h1>Abaut Page</h1>
  <h2>{{ data }}</h2>
</template>

<script>

export default {
  data() {
    return {
      data: this.$store.state.name,
    };
  },
};
</script>