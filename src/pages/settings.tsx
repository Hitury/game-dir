import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useProfile } from "@/hooks/useprofile"

export default function DocsPage() {
    const { profile }= useProfile();
    return (
        <DefaultLayout>
            <div className="w-[300px] m-auto text-center bg-[#000000] p-[15px] rounded-[15px] flex flex-col items-center">
                <img src={profile?.avatar_url ? profile?.avatar_url : "/placeholder.jpg"} className="w-[75px] rounded-full border-2" />
                <Button className="my-[10px]">Upload..</Button>
                <Input placeholder="Insert Username.."></Input>
            </div>
        </DefaultLayout>
    );
}