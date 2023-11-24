<script lang="ts" setup>

interface Option {
    label: string,
    value: string
}

interface Props {
    placeholder: string,
    options?: Option[],
}
const props = withDefaults(defineProps<Props>(), {
    options: []
})

// TODO: add v-model
// const emits = defineEmits<{(e: 'update:modelValue', value: string): void}>()

</script>

<template>
    <select  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
        <option selected>{{ props.placeholder }}</option>
        <option v-for="opt in props.options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
</template>