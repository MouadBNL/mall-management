<script lang="ts" setup>
import AradeiLogo from '../../assets/AradeiLogo.png'
import TheBaseLayoutSidebarNavItem from './TheBaseLayoutSidebarNavItem.vue';
import HomeIcon from '../icons/HomeIcon.vue'
import { ref } from 'vue';

// Todo create structure for navigation to be stored in array
const active = ref("Aradei.Malls")

const isActive = (label: string, level: 1 | 2) => {
    // Todo fix active navigation
    return active.value.split('.')[level - 1] == label
}
</script>

<template>
    <aside class="w-[275px] h-screen border-r border-border px-[26px] pt-16">
        <div class="mb-[60px]">
            <img :src="AradeiLogo" alt="logo" class="block">
        </div>
        <div class="grid grid-cols-1 gap-y-4">
            <TheBaseLayoutSidebarNavItem label="Aradei" :active="isActive('Aradei', 1)" @click="active = 'Aradei'">
                <template #icon>
                    <HomeIcon/>
                </template>
                <template #items>
                    <TheBaseLayoutSidebarNavItem label="Malls" :active="isActive('Malls', 2)"  @click="active = 'Aradei.Malls'"/>
                    <TheBaseLayoutSidebarNavItem label="Brands" :active="isActive('Brands', 2)"  @click="active = 'Aradei.Brands'"/>
                    <TheBaseLayoutSidebarNavItem label="Units" :active="isActive('Units', 2)"  @click="active = 'Aradei.Units'"/>
                    <TheBaseLayoutSidebarNavItem label="Tenants" :active="isActive('Tenants', 2)"  @click="active = 'Aradei.Tenants'"/>
                </template>
            </TheBaseLayoutSidebarNavItem>
            <TheBaseLayoutSidebarNavItem label="Content" :active="isActive('Content', 1)" @click="active = 'Content'">
                <template #icon>
                    <HomeIcon/>
                </template>
                <template #items>
                    <TheBaseLayoutSidebarNavItem label="Events" :active="isActive('Events', 2)"  @click="active = 'Content.Events'"/>
                    <TheBaseLayoutSidebarNavItem label="News" :active="isActive('News', 2)"  @click="active = 'Content.News'"/>
                    <TheBaseLayoutSidebarNavItem label="Survey" :active="isActive('Survey', 2)"  @click="active = 'Content.Survey'"/>
                    <TheBaseLayoutSidebarNavItem label="Promos" :active="isActive('Promos', 2)"  @click="active = 'Content.Promos'"/>
                </template>
            </TheBaseLayoutSidebarNavItem>
        </div>
    </aside>
</template>