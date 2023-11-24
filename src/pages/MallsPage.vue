<script lang="ts" setup>
import UserCard from "../components/user/UserCard.vue";
import UISelect from "../components/UI/UISelect.vue";
import { Filters, mallsData } from "../data/malls";
import { ref } from "vue";
import UIButton from "../components/UI/UIButton.vue";
import SearchIcon from "../components/icons/SearchIcon.vue";
import SettingsIcon from "../components/icons/SettingsIcon.vue";
import PlusIcon from "../components/icons/PlusIcon.vue";
import DeleteIcon from "../components/icons/DeleteIcon.vue";
import ViewIcon from "../components/icons/ViewIcon.vue";
import EditIcon from "../components/icons/EditIcon.vue";
import MallFillter from './MallsPage/MallFilter.vue'
import MallDataTable from "./MallsPage/MallDataTable.vue";


const filters = ref<Filters>()
</script>

<template>
  <div class="mb-11">
    <div class="flex items-center justify-between">
      <h1 class="text-5xl font-bold">Malls</h1>
      <UserCard />
    </div>
  </div>
  <div class="flex justify-between items-center mb-8">
    <MallFillter @update="(newFilters) => filters = newFilters" />

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
        <MallDataTable :filters="filters"/>
    </div>
</template>
