import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Olá" },
      { name: "description", content: "Uma página simples para dizer olá." },
      { property: "og:title", content: "Olá" },
      { property: "og:description", content: "Uma página simples para dizer olá." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <p className="text-2xl font-medium text-foreground">Olá, mundo.</p>
    </main>
  );
}
