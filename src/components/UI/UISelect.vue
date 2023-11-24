<script lang="ts" setup>

interface Option {
    label: string,
    value: string
}

interface Props {
    placeholder: string,
    options?: Option[],
    modelValue?: any
}
const props = defineProps<Props>()

// TODO: add v-model
const emits = defineEmits<{(e: 'update:modelValue', value: string|null): void}>()
const valueChanges = (value: string|null) => {
    if(value && value.length > 0){
        emits('update:modelValue', value)
    } else {
        emits('update:modelValue', null)
    }
}
</script>

<template>
    <select
        :placeholder="props.placeholder" 
        :value="props.modelValue ?? null" 
        @change="(v: any) => valueChanges(v.target.value)" 
        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
        <option value="">{{ props.placeholder }}</option>
        <option v-if="props.options" v-for="opt in props.options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
</template>