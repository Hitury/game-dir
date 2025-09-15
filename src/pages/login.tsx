import { title } from "@/components/primitives";
import AuthLayout from "@/layouts/auth";

export default function DocsPage() {
  return (
    <AuthLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Login</h1>
        </div>
      </section>
    </AuthLayout>
  );
}