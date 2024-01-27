<template>

    <v-btn
        class="text-none"
        color="indigo-darken-3"
        variant="elevated"
        size="large"
      >{{ label }}
    </v-btn>


</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps([
    'label',
]);

const label = ref(props.label);

</script>