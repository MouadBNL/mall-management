<script lang="ts" setup>

const props = defineProps<{
    show?: boolean
}>()
const emits = defineEmits<{
    (e: 'update:show', value: boolean):void,
    (e: 'close'):void
}>()
</script>

<template>
    <div v-if="show" class="fixed inset-0 bg-black/20 flex items-center justify-center" @click="() => {emits('update:show', false); emits('close')}">
        <slot/>
    </div>
</template>