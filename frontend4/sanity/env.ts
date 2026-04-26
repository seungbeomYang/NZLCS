function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Missing env var ${name}. Set it in .env.local — see .env.local.example.`,
    );
  }
  return value;
}

export const projectId = required(
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
);

export const dataset = required(
  "NEXT_PUBLIC_SANITY_DATASET",
  process.env.NEXT_PUBLIC_SANITY_DATASET,
);

// Pin a dated API version so schema/query behavior is stable across upgrades.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-01-01";

// Server-only — do NOT prefix with NEXT_PUBLIC. Used for previewDrafts and webhook auth.
export const readToken = process.env.SANITY_API_READ_TOKEN;
