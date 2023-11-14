<template lang="pug">
.base-icon(v-html="icon" v-if='!font')
span.base-icon-font(v-html="icon" v-else='font', :class="{ 'base-icon-font--stroke': hasStroke }")
</template>

<script setup>
// Based off of nuxt-icon module:
// https://github.com/gitFoxCode/nuxt-icons/blob/main/src/runtime/components/nuxt-icon.vue
const props = defineProps({
  name: String,
  font: { type: Boolean, default: false }
})
const icon = ref('')
let hasStroke = false

async function getIcon() {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      as: 'raw',
      eager: false // only import icons used
    })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    hasStroke = rawIcon.includes('stroke')
    icon.value = rawIcon
  } catch {
    console.error(`The icon ${props.name} does not exist in assets/icons.`)
  }
}

await getIcon()
watchEffect(getIcon)
</script>

<style>
.base-icon-font svg {
  width: 1em;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
  fill: currentColor;
}

.base-icon-font--stroke svg {
  stroke: currentColor;
}

</style>