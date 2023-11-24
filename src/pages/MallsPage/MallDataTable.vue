<script lang="ts" setup>
import UISelect from "../../components/UI/UISelect.vue";
import UIButton from "../../components/UI/UIButton.vue";
import DeleteIcon from "../../components/icons/DeleteIcon.vue";
import ViewIcon from "../../components/icons/ViewIcon.vue";
import EditIcon from "../../components/icons/EditIcon.vue";
import { computed, ref, watch } from 'vue';
import { Filters, mallsData } from '../../data/malls';

const props = defineProps<{
    filters?: Filters
}>()
const perPage = 5;
watch([() => props.filters?.city, () => props.filters?.address, () => props.filters?.name], () => {
    data.value = mallsData.filter(mall => {
        let ok = true;
        if(props.filters?.address){
            ok = ok && mall.address == props.filters.address
        }
        if(props.filters?.name){
            ok = ok && mall.name == props.filters.name
        }
        if(props.filters?.city){
            ok = ok && mall.city == props.filters.city
        }
        return ok;
    })
    page.value = 0;
})

const page = ref<number>(0)
const paginatedData = computed(() => {
    return data.value.slice(page.value * perPage, page.value*perPage + perPage)
})


const data = ref(mallsData);
</script>

<template>
    <div class="p-4 bg-gray-200"><pre>{{ props.filters }}</pre></div>
    <table class="mb-6">
        <thead>
            <tr class="border-b border-gray-300">
            <th class="text-lg font-bold text-gray-400 text-left py-5 px-1">
                Name
            </th>
            <th class="text-lg font-bold text-gray-400 text-left py-5 px-1">
                Address
            </th>
            <th class="text-lg font-bold text-gray-400 text-left py-5 px-1">
                City
            </th>
            <th class="text-lg font-bold text-gray-400 text-left py-5 px-1">
                Description
            </th>
            <th class="text-lg font-bold text-gray-400 text-left py-5 px-1"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in paginatedData" :key="index" class="border-b border-gray-200">
                <td  class="py-5 px-2">
                    <div class="flex items-center gap-4">
                        <div class="w-12 aspect-square block bg-gray-300 rounded-full">

                        </div>
                        <span class="text-base font-bold">
                            {{ item.name }}
                        </span>
                    </div>
                </td>
                <td  class="py-5 px-2">{{ item.address }}</td>
                <td  class="py-5 px-2">{{ item.city }}</td>
                <td  class="py-5 px-2">{{ item.description }}</td>
                <td  class="py-5 px-2">
                    <!-- Define actions here, e.g., buttons for edit and delete -->
                    <div class="flex gap-4">
                        <UIButton type="secondary" color="primary">
                            <ViewIcon/>
                        </UIButton>
                        <UIButton type="secondary" color="warning">
                            <EditIcon/>
                        </UIButton>
                        <UIButton type="secondary" color="danger">
                            <DeleteIcon/>
                        </UIButton>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="flex items-center justify-between">
        <p>Displaying page {{ page+1 }} of {{ Math.ceil(data.length / perPage) }} results</p>

        <div class="flex gap-4">
            <span v-for="(pg, idx) in Array.from({length: Math.ceil(data.length / perPage)})"
                class="cursor-pointer p-2 rounded aspect-square h-8 flex items-center justify-center"
                :class="{
                    'text-white bg-primary': idx == page,
                    'text-primary bg-gray-100': idx != page
                }"
                @click="() => page = idx">
                {{ idx + 1 }}
            </span>
        </div>

        <div class="flex items-center gap-4">
            <p class="block w-[150px]">Go to page</p>
            <UISelect 
                placeholder="page" 
                :options="Array.from({length: Math.ceil(data.length / perPage)}).map((_, idx) => ({label: (idx+1).toString(), value: idx.toString()}))"
                v-model:model-value="page"/>
        </div>
    </div>
</template>