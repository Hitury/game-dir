import AuthLayout from "@/layouts/auth";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { useState, FormEvent } from "react";
import supabase from "@/auth/baseClient";

export default function ResetPassword() {
  const [mode, setMode] = useState<"email" | "username">("email");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      let emailToUse = value;

      if (mode === "username") {
        // Look up email by username in your "profiles" table
        const { data, error } = await supabase
          .from("profiles")
          .select("email")
          .eq("username", value)
          .single();

        if (error || !data) throw new Error("Username not found.");
        emailToUse = data.email;
      }

      const { error: resetError } = await supabase.auth.resetPasswordForEmail(emailToUse, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (resetError) throw resetError;

      setMessage({
        type: "success",
        text: `Reset instructions sent to ${emailToUse}`,
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          typeof error === "object" && error !== null && "message" in error
            ? String((error as { message?: string }).message)
            : "An error occurred while sending reset instructions",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSelectionChange = (key: string | number) => {
    setMode(key as "email" | "username");
    setValue("");
    setMessage(null);
  };

  return (
    <AuthLayout>
      <section className="flex items-center justify-center min-h-screen px-4">
        <Card className="w-full max-w-md bg-gradient-to-br from-[#2d1f2c]/90 to-[#1a1218]/90 backdrop-blur-sm border border-[#C59F60]/20">
          <CardBody className="p-8 md:p-10">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#C59F60] to-[#d4b070] bg-clip-text text-transparent">
                  Reset Password
                </h2>
                <p className="text-gray-400 text-sm">
                  Choose how you'd like to reset your password
                </p>
              </div>

              {/* Message Alert */}
              {message && (
                <div
                  className={`${
                    message.type === "success"
                      ? "bg-success/10 border-success/20 text-success"
                      : "bg-danger/10 border-danger/20 text-danger"
                  } border px-4 py-3 rounded-lg text-sm text-center backdrop-blur-sm`}
                >
                  {message.text}
                </div>
              )}

              {/* Tabs */}
              <Tabs
                selectedKey={mode}
                onSelectionChange={handleSelectionChange}
                variant="underlined"
                classNames={{
                  tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-[#C59F60]",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-[#C59F60] text-gray-400 font-medium"
                }}
              >
                <Tab
                  key="email"
                  title={
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>Email</span>
                    </div>
                  }
                />
                <Tab
                  key="username"
                  title={
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>Username</span>
                    </div>
                  }
                />
              </Tabs>

              {/* Form */}
              <form onSubmit={handleResetPassword} className="flex flex-col gap-6 mt-2">
                <Input
                  isRequired
                  type="text"
                  placeholder={mode === "email" ? "Enter your email address" : "Enter your username"}
                  label={mode === "email" ? "Email Address" : "Username"}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  variant="bordered"
                  classNames={{
                    input: "text-white placeholder:text-gray-500",
                    inputWrapper: "border-gray-600 hover:border-[#C59F60]/50 focus-within:!border-[#C59F60] bg-black/20",
                    label: "text-gray-300"
                  }}
                  startContent={
                    mode === "email" ? (
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    )
                  }
                />

                <Button
                  type="submit"
                  isLoading={loading}
                  className="w-full h-12 font-semibold bg-gradient-to-r from-[#C59F60] to-[#d4b070] text-black rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-[#C59F60]/25"
                  size="lg"
                >
                  {loading ? "Sending..." : "Send Reset Instructions"}
                </Button>
              </form>

              {/* Footer */}
              <div className="text-center pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Remember your password?{" "}
                  <Link 
                    href="/login" 
                    className="text-[#C59F60] hover:text-[#d4b070] text-sm font-medium transition-colors"
                  >
                    Back to Login
                  </Link>
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </AuthLayout>
  );
}