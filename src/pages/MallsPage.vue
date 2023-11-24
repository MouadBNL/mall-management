<script lang="ts" setup>
import UserCard from "../components/user/UserCard.vue";
import UISelect from "../components/UI/UISelect.vue";
import { mallsData } from "../data/malls";
import { ref } from "vue";
import UIButton from "../components/UI/UIButton.vue";
import SearchIcon from "../components/icons/SearchIcon.vue";
import SettingsIcon from "../components/icons/SettingsIcon.vue";
import PlusIcon from "../components/icons/PlusIcon.vue";
import DeleteIcon from "../components/icons/DeleteIcon.vue";
import ViewIcon from "../components/icons/ViewIcon.vue";
import EditIcon from "../components/icons/EditIcon.vue";

const data = ref(mallsData);
</script>

<template>
  <div class="mb-11">
    <div class="flex items-center justify-between">
      <h1 class="text-5xl font-bold">Malls</h1>
      <UserCard />
    </div>
  </div>
  <div class="flex justify-between items-center mb-8">
    <div class="flex gap-4">
      <div class="w-[250px]">
        <UISelect placeholder="Mall" :options="[]" />
      </div>
      <div class="w-[250px]">
        <UISelect placeholder="Address" :options="[]" />
      </div>
      <div class="w-[250px]">
        <UISelect placeholder="City" :options="[]" />
      </div>
      <div>
        <UIButton>
            <template #icon>
                <SearchIcon/>
            </template>
        </UIButton>
      </div>
    </div>

    <div class="flex gap-4">
        <UIButton color="warning">
            <template #icon>
                <SettingsIcon/>
            </template>
        </UIButton>
        <UIButton>
            <template #icon>
                <PlusIcon/>
            </template>
            Add mall
        </UIButton>
    </div>
  </div>

    <div class="p-8" style="box-shadow: 0px 7px 74px -24px rgba(162, 163, 172, 0.26);">
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
                <tr v-for="(item, index) in data" :key="index" class="border-b border-gray-200">
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
            <p>Displaying page1 of 24 results</p>

            <div class="flex gap-4">
                <span class="cursor-pointer text-white bg-primary p-2 rounded aspect-square h-8 flex items-center justify-center">
                    1
                </span>
                <span class="cursor-pointer text-primary bg-gray-100 p-2 rounded aspect-square h-8 flex items-center justify-center">
                    2
                </span>
                <span class="cursor-pointer text-primary bg-gray-100 p-2 rounded aspect-square h-8 flex items-center justify-center">
                    3
                </span>
                <span class="cursor-pointer text-primary bg-gray-100 p-2 rounded aspect-square h-8 flex items-center justify-center">
                    4
                </span>
            </div>

            <div class="flex items-center gap-4">
                <p class="block w-[150px]">Go to page</p>
                <UISelect placeholder="page" :options="[{label: '1', value: '1'},{label: '2', value: '2'},{label: '3', value: '3'},]" />
            </div>
        </div>
    </div>
</template>
