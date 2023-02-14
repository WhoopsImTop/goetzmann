<template>
  <div class="section">
    <div class="content-container">
      <div class="section-header">
        <div class="row justify-between">
          <div>
            <h3>{{ title }}</h3>
            <p v-html="subtitle ? $md.render(subtitle ?? '') : ''"></p>
          </div>
          <div class="align-end section-icons">
            <slot name="header"></slot>
          </div>
        </div>
      </div>
      <div class="section-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
}
</script>

<style>

</style>