import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  title: 'UI/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'outline', 'ghost', 'danger'],
      description: 'Visual style of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button interaction',
      table: {
        defaultValue: { summary: undefined },
      },
    },
    default: {
      control: 'text',
      description: 'Slot content (label, icons, etc.)',
      table: { category: 'Slots' },
    },
  },
  args: {
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    default: 'Click me',
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">{{ args.default }}</BaseButton>`,
  }),
}

// ─── Variants ────────────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Primary</BaseButton>`,
  }),
}

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Secondary</BaseButton>`,
  }),
}

export const Accent: Story = {
  args: { variant: 'accent', size: 'md' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Accent</BaseButton>`,
  }),
}

export const Outline: Story = {
  args: { variant: 'outline', size: 'md' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Outline</BaseButton>`,
  }),
}

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Ghost</BaseButton>`,
  }),
}

export const Danger: Story = {
  args: { variant: 'danger', size: 'md' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Danger</BaseButton>`,
  }),
}

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Small</BaseButton>`,
  }),
}

export const Medium: Story = {
  args: { variant: 'primary', size: 'md' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Medium</BaseButton>`,
  }),
}

export const Large: Story = {
  args: { variant: 'primary', size: 'lg' },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Large</BaseButton>`,
  }),
}

// ─── States ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', disabled: true },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Disabled</BaseButton>`,
  }),
}

export const DisabledOutline: Story = {
  args: { variant: 'outline', size: 'md', disabled: true },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `<BaseButton v-bind="args">Disabled Outline</BaseButton>`,
  }),
}

// ─── All Variants Grid ───────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="font-size: 12px; color: #888; margin-bottom: 8px; font-family: sans-serif;">VARIANTS</p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <BaseButton variant="primary">Primary</BaseButton>
            <BaseButton variant="secondary">Secondary</BaseButton>
            <BaseButton variant="accent">Accent</BaseButton>
            <BaseButton variant="outline">Outline</BaseButton>
            <BaseButton variant="ghost">Ghost</BaseButton>
            <BaseButton variant="danger">Danger</BaseButton>
          </div>
        </div>
        <div>
          <p style="font-size: 12px; color: #888; margin-bottom: 8px; font-family: sans-serif;">SIZES</p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <BaseButton size="sm">Small</BaseButton>
            <BaseButton size="md">Medium</BaseButton>
            <BaseButton size="lg">Large</BaseButton>
          </div>
        </div>
        <div>
          <p style="font-size: 12px; color: #888; margin-bottom: 8px; font-family: sans-serif;">DISABLED STATES</p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <BaseButton variant="primary" :disabled="true">Primary</BaseButton>
            <BaseButton variant="secondary" :disabled="true">Secondary</BaseButton>
            <BaseButton variant="outline" :disabled="true">Outline</BaseButton>
            <BaseButton variant="danger" :disabled="true">Danger</BaseButton>
          </div>
        </div>
      </div>
    `,
  }),
}

// ─── With Icons (via slot) ───────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  args: {
    default: "saaaasasd"
  },

  name: 'With Leading Icon',

  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <BaseButton variant="primary" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Item
        </BaseButton>
        <BaseButton variant="primary" size="md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Item
        </BaseButton>
        <BaseButton variant="primary" size="lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Item
        </BaseButton>
      </div>
    `,
  })
}

export const WithTrailingIcon: Story = {
  name: 'With Trailing Icon',
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <BaseButton variant="outline" size="md">
          Download
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>
        </BaseButton>
        <BaseButton variant="ghost" size="md">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </BaseButton>
        <BaseButton variant="danger" size="md">
          Delete
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
        </BaseButton>
      </div>
    `,
  }),
}

export const IconOnly: Story = {
  name: 'Icon Only',
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <BaseButton variant="primary" size="sm" title="Add">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </BaseButton>
        <BaseButton variant="outline" size="md" title="Edit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </BaseButton>
        <BaseButton variant="danger" size="lg" title="Delete">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
        </BaseButton>
      </div>
    `,
  }),
}

// ─── Sizes × Variants Matrix ─────────────────────────────────────────────────

export const SizeVariantMatrix: Story = {
  name: 'Size × Variant Matrix',
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="font-family: sans-serif;">
        <table style="border-collapse: collapse;">
          <thead>
            <tr>
              <th style="padding: 8px 16px 8px 0; text-align: left; font-size: 12px; color: #888; font-weight: 500;"></th>
              <th style="padding: 8px 16px; text-align: center; font-size: 12px; color: #888; font-weight: 500;">SM</th>
              <th style="padding: 8px 16px; text-align: center; font-size: 12px; color: #888; font-weight: 500;">MD</th>
              <th style="padding: 8px 16px; text-align: center; font-size: 12px; color: #888; font-weight: 500;">LG</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="v in ['primary','secondary','accent','outline','ghost','danger']" :key="v">
              <td style="padding: 8px 16px 8px 0; font-size: 12px; color: #888; text-transform: capitalize;">{{ v }}</td>
              <td style="padding: 8px 16px; text-align: center;">
                <BaseButton :variant="v" size="sm">Label</BaseButton>
              </td>
              <td style="padding: 8px 16px; text-align: center;">
                <BaseButton :variant="v" size="md">Label</BaseButton>
              </td>
              <td style="padding: 8px 16px; text-align: center;">
                <BaseButton :variant="v" size="lg">Label</BaseButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
}
