<script lang="ts" setup>
import { onMounted, reactive, unref } from 'vue';
import UIButton from '../../components/UI/UIButton.vue';
import UISelect from '../../components/UI/UISelect.vue';
import SearchIcon from '../../components/icons/SearchIcon.vue';

import { mallsData, Mall, Filters } from '../../data/malls';

const filters = reactive<Filters>({
    name: null,
    address: null,
    city: null
})
const generateOptions = (fnt: (e: Mall) => string) => {
    const arr = mallsData.map(fnt)
    const set = new Set(arr)
    return Array.from(set).map(e => ({label: e, value: e}))
}

const emits = defineEmits<{
   ( e: 'update', filters: Filters):void
}>()

onMounted(() => {
    emits('update', filters)
})
</script>

<template>
    <div class="flex gap-4">
        <div class="w-[250px]">
            <UISelect v-model:model-value="filters.name" placeholder="Mall" :options="generateOptions(e => e.name)" />
        </div>
        <div class="w-[250px]">
            <UISelect v-model:model-value="filters.address" placeholder="Address" :options="generateOptions(e => e.address)" />
        </div>
        <div class="w-[250px]">
            <UISelect v-model:model-value="filters.city" placeholder="City" :options="generateOptions(e => e.city)" />
        </div>
        <div>
            <UIButton @click="() => emits('update', unref(filters))">
                <template #icon>
                    <SearchIcon/>
                </template>
            </UIButton>
        </div>
    </div>
    <div>
        <pre>{{ filters }}</pre>
    </div>
</template>