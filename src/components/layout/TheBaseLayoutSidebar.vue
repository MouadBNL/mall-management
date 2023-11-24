<script lang="ts" setup>
import AradeiLogo from '../../assets/AradeiLogo.png'
import TheBaseLayoutSidebarNavItem from './TheBaseLayoutSidebarNavItem.vue';
import HomeIcon from '../icons/HomeIcon.vue'
import { RendererElement, RendererNode, VNode, h, ref } from 'vue';
import ContentIcon from '../icons/ContentIcon.vue';
import UserIcon from '../icons/UserIcon.vue';
import PermissionIcon from '../icons/PermissionIcon.vue';
import RecieptIcon from '../icons/RecieptIcon.vue';
import MessageIcon from '../icons/MessageIcon.vue';
import CameraIcon from '../icons/CameraIcon.vue';
import WifiIcon from '../icons/WifiIcon.vue';

const r = HomeIcon

interface NavItem {
    label: string,
    active: boolean,
    icon? : any,
    children?: NavItem[]
}

const navigation = ref<NavItem[]>([
    {
        label: 'Aradei',
        active: true,
        icon: HomeIcon,
        children: [
            {
                label: 'Malls',
                active: true
            },
            {
                label: 'Brands',
                active: false
            },
            {
                label: 'Units',
                active: false
            },
            {
                label: 'Tenants',
                active: false
            },
        ]
    },
    {
        label: 'Content',
        active: false,
        icon: ContentIcon,
        children: [
            {
                label: 'Events',
                active: false
            },
            {
                label: 'News',
                active: false
            },
            {
                label: 'Surveys',
                active: false
            },
            {
                label: 'Promos',
                active: false
            }
        ]
    },
    {
        label: 'App users',
        active: false,
        icon: UserIcon
    }, {
        label: 'Permission',
        active: false,
        icon: PermissionIcon,
        children: [
            {
                label: 'Users',
                active: false,
            },
            {
                label: 'Roles',
                active: false
            }
        ]
    },
    {
        label: 'Reciepts',
        active: false,
        icon: RecieptIcon,
        children: [
            {
                label: 'Validated',
                active: false
            },
            {
                label: 'Pending',
                active: false
            },
            {
                label: 'Rejected',
                active: false
            }
        ]
    },
    {
        label: 'Spport',
        active: false,
        icon: MessageIcon
    },
    {
        label: 'Foot fall',
        active: false,
        icon: CameraIcon
    },
    {
        label: 'Wifi Hotspot',
        active: false,
        icon: WifiIcon
    }
])
// Todo create structure for navigation to be stored in array
const active = ref("Aradei.Malls")

const setActive = (parentIdx: number, childIdx?: number) => {
    navigation.value.forEach((_, idx) => {
        navigation.value[idx].active = false;
        if(navigation.value[idx].children){
            navigation.value[idx].children?.forEach((_, idx2) => {
                navigation.value[idx].children[idx2].active = false
            })
        }
    })

    navigation.value[parentIdx].active = true
    navigation.value[parentIdx].children[childIdx ? childIdx : 0].active = true
}
</script>

<template>
    <aside class="w-[275px] h-screen border-r border-border px-[26px] pt-16">
        <div class="mb-[60px]">
            <img :src="AradeiLogo" alt="logo" class="block">
        </div>
        <div class="grid grid-cols-1 gap-y-4">
            <TheBaseLayoutSidebarNavItem
                v-for="(nav, idx) in navigation" :label="nav.label" :active="nav.active" @itemClick="() => setActive(idx)">
                <template #icon>
                    <component :is="nav.icon"/>
                </template>
                <template v-if="nav.children" #items>
                    <TheBaseLayoutSidebarNavItem 
                        v-for="(item, idx2) in nav.children" :label="item.label" :active="item.active" @itemClick="() => setActive(idx, idx2)">
                    </TheBaseLayoutSidebarNavItem>
                </template>
            </TheBaseLayoutSidebarNavItem>
        </div>
    </aside>
</template>