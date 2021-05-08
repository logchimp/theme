<template>
  <div>
    <router-link to="/" class="site-info">
      <img
        class="site-logo"
        :src="getSiteSittings.logo"
        :alt="getSiteSittings.title"
      >
      <h5 class="site-name">
        {{ getSiteSittings.title }}
      </h5>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
