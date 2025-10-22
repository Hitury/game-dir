import AuthLayout from "@/layouts/auth";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function SignupSuccess() {
  return (
    <AuthLayout>
      <section className="flex items-center justify-center px-4">
        <div className="bg-[#2d1f2cc6] text-white rounded-xl shadow-lg p-8 md:p-10 w-full max-w-md flex flex-col gap-5">
          <h2 className="text-center text-2xl font-bold text-[#C59F60]">
            Account Created!
          </h2>
          
          <div className="text-center py-4">
            {/* Green circle with white checkmark */}
            <div className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            
            <p className="mt-6 text-gray-300">
              Your account has been successfully created! You can now log in and start using the platform.
            </p>
          </div>
          
          <Button
            as={Link}
            href="/login"
            className="w-full h-12 font-medium bg-[#C59F60] text-black rounded-md hover:opacity-90 transition"
          >
            Go to Login
          </Button>
        </div>
      </section>
    </AuthLayout>
  );
}