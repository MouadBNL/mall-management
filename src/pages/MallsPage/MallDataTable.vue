<script lang="ts" setup>
import UISelect from "../../components/UI/UISelect.vue";
import UIButton from "../../components/UI/UIButton.vue";
import DeleteIcon from "../../components/icons/DeleteIcon.vue";
import ViewIcon from "../../components/icons/ViewIcon.vue";
import EditIcon from "../../components/icons/EditIcon.vue";
import { computed, ref, unref, watch } from 'vue';
import { Filters, Mall, mallsData } from '../../data/malls';
import UIModal from "../../components/UI/UIModal.vue";

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
const showViewModal = ref(false)
const showEditModal = ref(false)
const selectedMall = ref<Mall>()
const selectedIndex = ref<number>()

const editMall = (idx: number) => {
    selectedIndex.value = idx
    selectedMall.value = {
        address: unref(data.value[idx].address),
        city: unref(data.value[idx].city),
        description: unref(data.value[idx].description),
        name: unref(data.value[idx].name),
    }
    showEditModal.value = true
}
const saveEdits = () => {
    if(selectedIndex.value != undefined && selectedMall.value !=undefined){
        data.value[selectedIndex.value] = selectedMall.value
    }
    showEditModal.value = false
    selectedIndex.value = undefined
    selectedMall.value = undefined
}

const viewMall = (idx: number) => {
    selectedMall.value = data.value[idx]
    showViewModal.value = true
}

const deleteMall = (idx: number) => {
    if(confirm("Are you sure you want to delete a mall ?")) {
        data.value.splice(idx, 1)
    }
}
</script>

<template>
    <UIModal v-model:show="showViewModal" @close="selectedMall = undefined">
        <div class="w-1/2 p-12 bg-white rounded shadow" @click="(e) => e.stopPropagation()" v-if="selectedMall">
            <div class="grid grid-cols-1 gap-y-8">
                <div>
                    <label class="text-lg text-gray-500">Name :</label>
                    <p class="text-xl font-bold">{{ selectedMall.name }}</p>
                </div>
                <div>
                    <label class="text-lg text-gray-500">City:</label>
                    <p class="text-xl font-bold">{{ selectedMall.city }}</p>
                </div>
                <div>
                    <label class="text-lg text-gray-500">Address :</label>
                    <p class="text-xl font-bold">{{ selectedMall.address }}</p>
                </div>
                <div>
                    <label class="text-lg text-gray-500">Description :</label>
                    <p class="text-xl font-bold">{{ selectedMall.description }}</p>
                </div>
            </div>
        </div>
    </UIModal>
    <UIModal v-model:show="showEditModal" @close="() => {selectedMall = undefined; selectedIndex = undefined} ">
        <div class="w-1/2 p-12 bg-white rounded shadow" @click="(e) => e.stopPropagation()" v-if="selectedMall">
            <div class="grid grid-cols-1 gap-y-8">
                <div>
                    <label class="text-lg text-gray-500 block mb-2">Name:</label>
                    <input class="block bg-gray-50 border border-gray-300 px-4 py-2 w-full rounded" v-model="selectedMall.name" />
                </div>
                <div>
                    <label class="text-lg text-gray-500 block mb-2">City:</label>
                    <input class="block bg-gray-50 border border-gray-300 px-4 py-2 w-full rounded" v-model="selectedMall.city" />
                </div>
                <div>
                    <label class="text-lg text-gray-500 block mb-2">Address:</label>
                    <input class="block bg-gray-50 border border-gray-300 px-4 py-2 w-full rounded" v-model="selectedMall.address" />
                </div>
                <div>
                    <label class="text-lg text-gray-500 block mb-2">Description:</label>
                    <input class="block bg-gray-50 border border-gray-300 px-4 py-2 w-full rounded" v-model="selectedMall.description" />
                </div>
                <div class="flex justify-end mt-4">
                    <UIButton @click="saveEdits">Save</UIButton>
                </div>
            </div>
        </div>
    </UIModal>
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
                        <img src="https://static.medias24.com/content/uploads/2019/11/MallRabat.jpg?x71515" class="w-12 aspect-square block bg-gray-300 rounded-full"/>
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
                        <UIButton type="secondary" color="primary" @click="() => viewMall(index)">
                            <ViewIcon/>
                        </UIButton>
                        <UIButton type="secondary" color="warning" @click="() => editMall(index)">
                            <EditIcon/>
                        </UIButton>
                        <UIButton type="secondary" color="danger" @click="() => deleteMall(index)">
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