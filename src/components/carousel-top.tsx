import React from "react";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function GameShowcase() {
return (
<div className="min-h-screen flex flex-col items-center justify-center text-white p-6">
{/* Top Sellers Title */}
<h2 className="text-sm text-[#d4a373] mb-4 self-start">Top Sellers</h2>


<div className="flex items-center gap-4 w-full max-w-5xl">
{/* Left Arrow */}
<button className="p-2 bg-[#2e2237] rounded-full hover:bg-[#3a2b47] transition">
<ChevronLeft className="text-[#d4a373]" />
</button>


{/* Main Content */}
<div className="flex bg-[#2e2237] shadow-lg rounded-xl overflow-hidden w-full">
{/* Left Side - Image */}
<div className="relative w-2/3 h-[400px] bg-black flex items-center justify-center">
<img
src="https://picsum.photos/500/400"
alt="Hollow Knight"
className="object-cover w-full h-full"
/>
</div>


{/* Right Side - Description */}
<div className="w-1/3 bg-[#1E1525] flex flex-col justify-between p-6">
<div>
<h3 className="text-xl font-semibold mb-2">Description</h3>
<p className="text-[#d4a373] mb-2">$19,99</p>
<p className="text-sm text-gray-300">
Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam, earum non
eum fuga ipsum sit non, quibusdam numquam beatae, nemo placeat provident
veritatis aperiam deserunt eaque neque temporibus delectus recusandae.
</p>
</div>
<Button className="bg-[#d4a373] text-black hover:bg-[#b88a5c] mt-4 w-fit">
Buy Now
</Button>
</div>
</div>


{/* Right Arrow */}
<button className="p-2 bg-[#2e2237] rounded-full hover:bg-[#3a2b47] transition">
<ChevronRight className="text-[#d4a373]" />
</button>
</div>


{/* Thumbnail Images */}
<div className="flex gap-2 mt-4">
{Array.from({ length: 5 }).map((_, i) => (
<img
key={i}
src={`https://picsum.photos/80/80?random=${i}`}
alt={`Thumbnail ${i}`}
className="w-16 h-16 object-cover rounded-md border border-gray-700 hover:border-[#d4a373] cursor-pointer"
/>
))}
</div>
</div>
);
}