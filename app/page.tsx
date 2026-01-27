import { redirect } from "next/navigation";

export default function RootRedirect() {
  // Server-side redirect to default language. Keep deterministic for tests.
  redirect("/en");
}
