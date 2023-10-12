<template>
  <div class="lt-sm:(text-white max-w-292px)">Hello World</div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>

<i18n>
{
  "en": {
    "Twitter": "Twitter"
  },
}
</i18n>
