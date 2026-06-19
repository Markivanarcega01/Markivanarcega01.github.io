// Edit this file to manage your portfolio. Each entry renders as a card on the home page.
// Tip: put the resume-worthy numbers in `metrics` — they're displayed prominently.

export type Project = {
  /** Display name of the project. */
  title: string;
  /** One- or two-sentence summary of what it does and who it's for. */
  description: string;
  /** Live, deployed URL. Shown as the primary "Visit site" button. */
  liveUrl: string;
  /** Public source code URL. Omit if the repo is private. */
  repoUrl?: string;
  /** Tech used — rendered as tags. */
  stack: string[];
  /** Headline metrics that match your resume, e.g. { label: "Users", value: "1.2k" }. */
  metrics?: { label: string; value: string }[];
  /** Optional screenshot in /public (e.g. "/projects/myapp.png"). Falls back to a gradient. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Example Project One",
    description:
      "Replace this with a real deployed project. Describe the problem it solves and the impact it had.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourname/example-one",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    metrics: [
      { label: "Monthly users", value: "5k+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Load time", value: "<1s" },
    ],
  },
  {
    title: "Example Project Two",
    description:
      "Another deployed site. Keep descriptions tight and lead with outcomes, not implementation details.",
    liveUrl: "https://example.org",
    repoUrl: "https://github.com/yourname/example-two",
    stack: ["React", "Node.js", "Tailwind CSS"],
    metrics: [
      { label: "API requests/day", value: "120k" },
      { label: "Lighthouse", value: "100" },
    ],
  },
];
