import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Skeleton } from "@heroui/skeleton";
import { useAuth } from "@/hooks/auth";
import { useProfile } from "@/hooks/useprofile";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Avatar() {
  const { session, signOut } = useAuth();
  const { profile } = useProfile();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    if (profile?.avatar_url) {
      // load the real avatar
      setLoading(true);
      setSrc(profile.avatar_url);
    } else {
      // no avatar: show skeleton briefly, then fallback
      setLoading(true);
      const t = setTimeout(() => {
        if (mounted) {
          setSrc("/placeholder.jpg");
          setLoading(false); // stop skeleton after fallback applied
        }
      }, 600); // adjust delay as you like
      return () => {
        mounted = false;
        clearTimeout(t);
      };
    }
  }, [profile?.avatar_url]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="ml-4">
          {loading ? (
            <Skeleton className="w-[35px] h-[35px] rounded-full" />
          ) : (
            <img
              src={src ?? ""}
              className="w-[35px] h-[35px] rounded-full object-cover hover:cursor-pointer"
              alt="Avatar"
            />
          )}

          {/* invisible preloader for the *real* avatar */}
          {src && src !== "/placeholder.jpg" && (
            <img
              src={src}
              alt=""
              className="hidden"
              onLoad={() => setLoading(false)}
              onError={() => {
                setSrc("/placeholder.jpg");
                setLoading(false);
              }}
            />
          )}
        </button>
      </DropdownTrigger>

      <DropdownMenu aria-label="User Actions">
        <DropdownItem key="profile" className="h-14 gap-2" onPress={() => navigate(`/profile/${profile?.username ?? "error"}`)}>
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">
            {session?.user ? profile?.username || "Loading..." : "Guest"}
          </p>
        </DropdownItem>
        <DropdownItem key="settings" onPress={() => navigate("/settings")}>Settings</DropdownItem>
        <DropdownItem key="placeholder">Placeholder</DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          onPress={signOut}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
