<script lang="ts" setup>
import { computed } from 'vue';


type Color = "primary" | "warning" | "danger";
type ButtonType = "primary" | "secondary";

interface Props {
    color?: Color,
    type?: ButtonType,
}
const props = withDefaults(defineProps<Props>(), {color: 'primary', type: 'primary'})

const classes = computed(() => {
    const color = props.color;
    const type = props.type;

    if(type == 'primary'){
        switch (color) {
            case 'primary':
                return 'bg-primary text-white hover:bg-primary/10 hover:text-primary'
            case 'danger':
                return 'bg-red-600 text-white hover:bg-red-600/10 hover:text-red-600'
            case 'warning':
                return 'bg-yellow-500 text-white hover:bg-yellow-500/10 hover:text-yellow-600'
        }
    } else {
        switch (color) {
            case 'primary':
                return 'bg-white text-primary hover:bg-primary hover:text-white'
            case 'danger':
                return 'bg-white text-red-600 hover:bg-red-600 hover:text-white'
            case 'warning':
                return 'bg-white text-yellow-500 hover:bg-yellow-500 hover:text-white'
        }
    }
})
</script>

<template>
    <button class="flex items-center gap-4 p-3 rounded-lg shadow font-medium" :class="classes">
        <slot name="icon"/>
        <slot/>
    </button>
</template>