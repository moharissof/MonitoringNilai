// import Link from "next/link";
import StudentSearch from "@/components/student-search";
import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#00a0ef] font-poppins relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-8 border-white"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full border-8 border-white"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border-4 border-white"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border-4 border-white"></div>
      </div>

      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <GraduationCap className="h-6 w-6 text-[#00a0ef]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                SIMONI
              </h1>
              <span className="text-sm text-white/80">
                Sistem Monitoring Nilai
              </span>
            </div>
          </div>
          {/* <nav className="hidden md:flex space-x-8 text-sm">
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Beranda
            </Link>
            <Link href="#" className="text-white font-medium">
              Pencarian
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Statistik
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Bantuan
            </Link>
            <Link
              href="#"
              className="bg-white text-[#3D5AF1] px-4 py-1 rounded-full font-medium"
            >
              Login
            </Link>
          </nav> */}
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8 bg-cover bg-center">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <StudentSearch />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
