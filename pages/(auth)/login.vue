<script setup lang="ts">
import type { User } from "~/types/user"

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'ورود - نشست',
  description: 'ورود در نشست',
})

const user = ref<User>({
  email: '',
  password: '',
})

function login() {
  console.log('اطلاعات فرم ارسال شد:', user.value)
  // Call your login API here
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <Card class="overflow-hidden p-0">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8" @submit.prevent="login">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">
                خوش برگشتی!
              </h1>
              <p class="text-muted-foreground text-balance">
                به حساب نشست خود وارد شوید
              </p>
            </div>
            <div class="grid gap-3">
              <Label for="email">ایمیل</Label>
              <Input
                id="email"
                v-model="user.password"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div class="grid gap-3">
              <div class="flex items-center">
                <Label for="password">رمزعبور</Label>
                <a
                  href="#"
                  class="mr-auto text-sm underline-offset-2 hover:underline"
                >
                  رمزعبور رو فراموش کردی؟
                </a>
              </div>
              <Input id="password" v-model="user.password" type="password" required />
            </div>
            <Button type="submit" class="w-full">
              ورود
            </Button>
            <div class="text-center text-sm">
              حساب کاربری نداری?
              <NuxtLink to="/register" class="underline underline-offset-4">
                ثبت نام
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
