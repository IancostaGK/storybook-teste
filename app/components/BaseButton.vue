<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  disabled?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

const base = [
  'inline-flex items-center justify-center font-medium rounded-lg',
  'transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
]

const variants: Record<Variant, string> = {
  primary:   'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
  accent:    'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-400',
  outline:   'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  ghost:     'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-400',
  danger:    'bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-500',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
}

const classes = computed(() => [
  ...base,
  variants[props.variant],
  sizes[props.size],
])
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
