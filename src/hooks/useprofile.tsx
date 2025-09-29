import { useState, useEffect } from 'react';
import supabase from '@/auth/baseClient';
import { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  username: string;
  avatar_url: string | null;
  website: string | null;
  updated_at: string;
}

export function useProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get current user
    const getCurrentUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        
        if (error) throw error;
        setUser(user);
        
        if (user) {
          // Fetch the profile associated with this user
          const { data, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
            
          if (profileError) throw profileError;
          setProfile(data);
        }
      } catch (err: any) {
        console.error('Error loading user data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();
  }, []);

  return { user, profile, loading, error };
}