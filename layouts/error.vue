<template lang="pug">
div
  p Whoops. That's an error: {{ error.message }}
  a(@click='handleError') Return to Homepage
  </template>

<script setup>
const error = useError()
const handleError = () => clearError({ redirect: '/' })
</script>