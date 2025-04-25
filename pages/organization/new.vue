<template>
    <div class="flex min-h-44 items-center justify-center bg-primary">
    <div class="m-6 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-md">
        <form class="space-y-4" @submit.prevent="submit">
        <Input v-model="form.name" label="نام سازمان" required />

        <div class="grid gap-1">
            <Label class="text-sm font-medium text-gray-700">توضیحات</Label>
            <Textarea
            v-model="form.description"
            class="rounded-md border border-gray-300 px-4 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="توضیحاتی درباره سازمان وارد کنید"
            />
        </div>

        <Input v-model="form.email" label="ایمیل سازمان" type="email" />
        <Input v-model="form.address" label="نشانی" />
        <Input v-model="form.website" label="وب‌سایت" type="url" />

        <Button class="w-full" type="submit">ثبت اطلاعات</Button>
        </form>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import type { OrganizationCreate } from '@/api'
  import OrgService from '~/services/organization'
  
  const form = ref<OrganizationCreate>({
    name: '',
    description: '',
    email: '',
    address: '',
    website: '',
  })
  
  function submit() {
    console.log('اطلاعات فرم ارسال شد:', form.value)
    OrgService.newOrganization(form.value)
  }
  </script>
  