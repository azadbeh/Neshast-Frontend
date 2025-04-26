<script setup lang="ts">
import type { User } from '@/api'

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'ثبت نام - نشست',
  description: 'ثبت نام در نشست',
})

const user = ref<User>({
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
})
</script>
<template>
  <div class="flex flex-col gap-6">
    <Card class="overflow-hidden p-0">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">
                خوش آمدی!
              </h1>
              <p class="text-muted-foreground text-balance">
                حساب نشست خود را بسازید
              </p>
            </div>
            <div class="grid grid-cols-2 gap-2 ">
              <div class="grid gap-3">
                <Label for="name">نام</Label>
                <Input
                  id="name"
                  v-model="user.first_name"
                  type="text"
                  placeholder="متین"
                  required
                />
              </div>
              <div class="grid gap-3">
                <Label for="name">نام خانوادگی</Label>
                <Input
                  id="name"
                  v-model="user.last_name"
                  type="text"
                  placeholder="سلیمانی"
                  required
                />
              </div>
            </div>
            <div class="grid gap-3">
              <Label for="username">نام کاربری</Label>
              <Input
                id="username"
                v-model="user.username"
                type="text"
                placeholder="matinsoleymni"
                required
              />
            </div>
            <div class="grid gap-3">
              <Label for="email">ایمیل</Label>
              <Input
                id="email"
                v-model="user.email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div class="grid gap-3">
              <div class="flex items-center">
                <Label for="password">رمزعبور</Label>
              </div>
              <Input id="password" v-model="user.password" type="password" required />
            </div>
            <Button type="submit" class="w-full">
              ثبت نام
            </Button>
            <div class="text-center text-sm">
              حساب کاربری دارید?
              <NuxtLink to="/login" class="underline underline-offset-4">
                ورود
              </NuxtLink>
            </div>
          </div>
        </form>
        <div class="bg-muted relative hidden md:block">
          <!-- <img
            src="/placeholder.svg"
            alt="Image"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          > -->
        </div>
      </CardContent>
    </Card>
  </div>
</template>
