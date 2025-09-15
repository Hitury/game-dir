import { title } from "@/components/primitives";
import AuthLayout from "@/layouts/auth";

export default function LoginPage() {
  return (
    <AuthLayout>
      <section className="h-[100%] flex items-center justify-center">
        <div className="flex flex-row bg-[#2d1f2c] rounded-sm p-7 rounded-lg shadow-lg">
          <div className="bg-[#DB924B] w-110 h-130 rounded-sm flex items-start justify-center p-10 bg-[url('public/solaireandsiegmeyer.jpg')] bg-cover">
            
          </div>
          <div className="bg-[#2d1f2c] w-110 h-130 flex items-start justify-center p-10 ml-7">
            <h1 className="font-semibold text-[40px] text-white">Create an Account</h1>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
