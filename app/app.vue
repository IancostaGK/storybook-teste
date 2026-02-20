<template>
  <div class="min-h-screen bg-neutral-50 p-10">
    <h1 class="text-2xl font-bold text-neutral-900 mb-2">Design System — Botões</h1>
    <p class="text-neutral-500 text-sm mb-10">Variantes e tamanhos disponíveis.</p>

    <!-- Variantes -->
    <section class="mb-10">
      <h2 class="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Variantes</h2>
      <div class="flex flex-wrap gap-3">
        <BaseButton variant="primary">Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="accent">Accent</BaseButton>
        <BaseButton variant="outline">Outline</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton variant="danger">Danger</BaseButton>
      </div>
    </section>

    <!-- Tamanhos -->
    <section class="mb-10">
      <h2 class="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Tamanhos</h2>
      <div class="flex flex-wrap items-center gap-3">
        <BaseButton size="sm">Small</BaseButton>
        <BaseButton size="md">Medium</BaseButton>
        <BaseButton size="lg">Large</BaseButton>
      </div>
    </section>

    <!-- Estado desabilitado -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Desabilitado</h2>
      <div class="flex flex-wrap gap-3">
        <BaseButton variant="primary" disabled>Primary</BaseButton>
        <BaseButton variant="outline" disabled>Outline</BaseButton>
        <BaseButton variant="danger" disabled>Danger</BaseButton>
      </div>
    </section>
  </div>
</template>
