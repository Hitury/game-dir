import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

export default function DocsPage() {
    return (
        <DefaultLayout>
            <div className="w-[300px] m-auto text-center bg-[#000000] p-[15px] rounded-[15px] flex flex-col items-center">
                <img src="./public/placeholder.jpg" className="w-[75px] rounded-full border-2" />
                <Button className="my-[10px]">Upload..</Button>
                <Input placeholder="Insert Username.."></Input>
            </div>
        </DefaultLayout>
    );
}