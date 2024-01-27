<template>
    <v-text-field
      :label="label"
      hide-details="auto"
      variant="outlined"
    ></v-text-field>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps([
    'label',
]);

const label = ref(props.label);

</script>