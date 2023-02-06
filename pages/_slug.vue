<template>
  <div>
  </div>
</template>

<script>
export default {
  layout: "default",
  async asyncData({ $content, params }) {
    const article = await $content(params.slug).fetch();
    return { article };
  },
};
</script>

<style>
</style>