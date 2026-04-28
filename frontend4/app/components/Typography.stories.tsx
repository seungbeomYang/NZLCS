import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Foundation/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#141311" },
        { name: "surface", value: "#1E1D1A" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-10 p-8 bg-background text-foreground">

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-eyebrow</p>
        <Typography variant="eyebrow">Our Services</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-h1</p>
        <Typography variant="h1">NZ Laser Cleaning Solutions</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-h2</p>
        <Typography variant="h2">Industrial Surface Prep</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-h2-sm</p>
        <Typography variant="h2-sm">Similar projects.</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-h3</p>
        <Typography variant="h3">Rust & Corrosion Removal</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-body (Lato)</p>
        <Typography variant="body">
          Laser cleaning is an eco-friendly, chemical-free process that removes rust,
          paint, graffiti, and other contaminants from metal and other surfaces with
          precision. No abrasives, no solvents — just light.
        </Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-body-sm (Lato)</p>
        <Typography variant="body-sm">
          Suitable for delicate heritage surfaces, industrial equipment, and
          everything in between. Our mobile units come to your site.
        </Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-body-lg (Lato)</p>
        <Typography variant="body-lg">
          Our PULSE laser system delivers concentrated light energy directly to the corroded layer.
          The rust and oxidation absorb the energy and are ablated away, leaving the steel clean
          and structurally intact.
        </Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-caption (Lato)</p>
        <Typography variant="caption">
          © 2025 NZ Laser Cleaning Solutions Ltd. All rights reserved.
        </Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-label</p>
        <Typography variant="label">Get a Free Quote</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-logo</p>
        <Typography variant="logo" className="text-foreground/70">NZLCS</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-nav</p>
        <Typography variant="nav" className="text-foreground">Services</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-form-label</p>
        <Typography variant="form-label" className="text-foreground/70">Name *</Typography>
      </div>

      <div className="space-y-1 border-b border-border pb-8">
        <p className="type-caption text-muted mb-4">type-badge</p>
        <Typography variant="badge" className="text-foreground">Before / After</Typography>
      </div>

      <div className="space-y-1">
        <p className="type-caption text-muted mb-4">type-stat</p>
        <Typography variant="stat">100+</Typography>
        <p className="type-form-label text-muted mt-2">Projects Completed</p>
      </div>

    </div>
  ),
};

export const Eyebrow: Story = { args: { variant: "eyebrow", children: "Our Services" } };
export const H1: Story = { args: { variant: "h1", children: "NZ Laser Cleaning Solutions" } };
export const H2: Story = { args: { variant: "h2", children: "Industrial Surface Prep" } };
export const H2Sm: Story = { args: { variant: "h2-sm", children: "Similar projects." } };
export const H3: Story = { args: { variant: "h3", children: "Rust & Corrosion Removal" } };
export const Body: Story = {
  args: {
    variant: "body",
    children: "Laser cleaning is an eco-friendly, chemical-free process that removes rust, paint, and contaminants with precision.",
  },
};
export const BodySm: Story = {
  args: {
    variant: "body-sm",
    children: "Suitable for delicate heritage surfaces and industrial equipment.",
  },
};
export const BodyLg: Story = {
  args: {
    variant: "body-lg",
    children: "Our PULSE laser system delivers concentrated light energy directly to the corroded layer, leaving the steel clean and structurally intact.",
  },
};
export const Caption: Story = {
  args: {
    variant: "caption",
    children: "© 2025 NZ Laser Cleaning Solutions Ltd.",
  },
};
export const Label: Story = { args: { variant: "label", children: "Get a Free Quote" } };
export const Logo: Story = {
  args: { variant: "logo", children: "NZLCS", className: "text-foreground/70" },
};
export const Nav: Story = {
  args: { variant: "nav", children: "Services", className: "text-foreground" },
};
export const FormLabel: Story = {
  args: { variant: "form-label", children: "Name *", className: "text-foreground/70" },
};
export const Badge: Story = {
  args: { variant: "badge", children: "Before / After", className: "text-foreground" },
};
export const Stat: Story = { args: { variant: "stat", children: "100+" } };
