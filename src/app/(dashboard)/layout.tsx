import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[16%]">
        <Link
          href="/"
          className="flex bg-purple-200 border rounded-2xl justify-center gap-2 border-b-2 border-gray-100 lg:justify-center py-4 lg:mx-4"
        >
          <div className="flex items-center gap-2 ">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
          </div>
          <span className="hidden lg:block font-bold px-1  text-2xl text-white">
            ZeeEdu
          </span>
        </Link>
        <div className="px-4">
          <Menu />
        </div>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]  flex flex-col  overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
