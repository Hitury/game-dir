import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '@/auth/baseClient';

export default function AuthCallbackPage() {
  const router = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          // Redirect to dashboard or home page
          router('/');
        }
      }
    );

    // Handle the OAuth callback
    const handleAuthCallback = async () => {
      const { error } = await supabase.auth.getSession();
      if (error) {
        router('/signup?error=Authentication failed');
      }
    };

    handleAuthCallback();

    return () => {
      authListener.subscription?.unsubscribe();
    };
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1625]">
      <div className="bg-[#2d1f2cc6] text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#C59F60] mb-4">Authenticating...</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C59F60]"></div>
        </div>
      </div>
    </div>
  );
}