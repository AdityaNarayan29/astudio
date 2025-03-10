import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-[#c0e3e5] to-[#fdc936] text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4 text-[#322625]">Welcome to Our Platform</h1>
      <p className="text-lg mb-6 max-w-2xl text-[#322625]">
        Experience the future of innovation with our cutting-edge technology and seamless user experience.
      </p>
      <div className="flex space-x-4">
        <Button asChild>
        <Link href="/users">Users</Link>
      </Button>
      <Button asChild>
        <Link href="/products">Products</Link>
      </Button>
      </div>
    </div>
  );
}
