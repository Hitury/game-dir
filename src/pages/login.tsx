import { title } from "@/components/primitives";
import AuthLayout from "@/layouts/auth";

export default function LoginPage() {
  return (
    <AuthLayout>
      <section className="gap-4 py-8 md:py-10">
        <div className="flex flex-row justify-center items-center">
         <div className="bg-white w-110 h-130">
            <h1 className={title()}>Login</h1>
          </div>
          <div className="bg-black w-110 h-130">
            <h1 className={title()}>Login</h1>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}