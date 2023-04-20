<template>
  <div class="oapi-not-found">
    <h1 class="">404</h1>
    <p class="oapi-not-found__msg">Not found</p>
  </div>
</template>

<script>
export default{
  name: 'NotFound',
};
</script>

<style>
.oapi-not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.oapi-not-found h1 {
  margin-bottom: 2rem;
  color: #6B7280;
  font-size: 8rem;
  line-height: 1;
  font-weight: 700;
}
.oapi-not-found__msg {
  color: #374151;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: center;
}
</style>
