/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import {
  Users,
  GraduationCap,
  BookOpen,
  Search,
  Plus,
  Clock,
  Activity,
  TrendingUp,
  TrendingDown,
  Bell,
  Calendar,
  Settings,
  FileText,
  LogOut,
  User,
  Home,
  Filter,
  Download,
  MoreHorizontal,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  XCircle,
  Upload,
  Edit,
  ChevronLeft,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

// Datos para el gráfico de facultades
const facultyData = [
  { name: "FIKOM", value: 1423 },
  { name: "FEB", value: 2312 },
  { name: "FT", value: 1834 },
  { name: "FMIPA", value: 1231 },
  { name: "FK", value: 987 },
  { name: "FH", value: 1100 },
  { name: "FISIP", value: 1543 },
  { name: "FIB", value: 1123 },
]

// Datos para el gráfico de tendencias
const trendData = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 145 },
  { name: "Mar", value: 132 },
  { name: "Apr", value: 167 },
  { name: "May", value: 189 },
  { name: "Jun", value: 212 },
  { name: "Jul", value: 245 },
  { name: "Aug", value: 267 },
  { name: "Sep", value: 230 },
  { name: "Oct", value: 210 },
  { name: "Nov", value: 198 },
  { name: "Dec", value: 187 },
]

// Datos para el gráfico de rendimiento
const performanceData = [
  { name: "Week 1", value: 65 },
  { name: "Week 2", value: 59 },
  { name: "Week 3", value: 80 },
  { name: "Week 4", value: 81 },
  { name: "Week 5", value: 56 },
  { name: "Week 6", value: 55 },
  { name: "Week 7", value: 40 },
]

// Datos para el gráfico de estado de estudiantes
const studentStatusData = [
  { name: "Aktif", value: 8750, color: "#3D5AF1" },
  { name: "Cuti", value: 320, color: "#FFA500" },
  { name: "Lulus", value: 2450, color: "#10B981" },
  { name: "DO", value: 123, color: "#F43F5E" },
]

// Datos de estudiantes
const studentData = [
  {
    id: "1",
    nim: "1901234567",
    nama: "Ahmad Fauzi",
    programStudi: "Teknik Informatika",
    fakultas: "FIKOM",
    angkatan: "2019",
    status: "Aktif",
    ipk: "3.85",
    progress: 85,
  },
  {
    id: "2",
    nim: "1901234568",
    nama: "Siti Nurhaliza",
    programStudi: "Sistem Informasi",
    fakultas: "FIKOM",
    angkatan: "2019",
    status: "Aktif",
    ipk: "3.92",
    progress: 92,
  },
  {
    id: "3",
    nim: "2001234569",
    nama: "Budi Santoso",
    programStudi: "Teknik Elektro",
    fakultas: "FT",
    angkatan: "2020",
    status: "Aktif",
    ipk: "3.45",
    progress: 75,
  },
  {
    id: "4",
    nim: "2001234570",
    nama: "Dewi Lestari",
    programStudi: "Manajemen",
    fakultas: "FEB",
    angkatan: "2020",
    status: "Aktif",
    ipk: "3.78",
    progress: 80,
  },
  {
    id: "5",
    nim: "1801234571",
    nama: "Muhammad Rizki",
    programStudi: "Akuntansi",
    fakultas: "FEB",
    angkatan: "2018",
    status: "Lulus",
    ipk: "3.65",
    progress: 100,
  },
]

// Datos de actividades recientes
const recentActivities = [
  {
    id: 1,
    user: "Admin Akademik",
    action: "Menambahkan mata kuliah baru",
    target: "Kecerdasan Buatan",
    time: "10 menit yang lalu",
    icon: "add",
  },
  {
    id: 2,
    user: "Admin Keuangan",
    action: "Memperbarui status pembayaran",
    target: "Mahasiswa angkatan 2022",
    time: "25 menit yang lalu",
    icon: "update",
  },
  {
    id: 3,
    user: "Admin Sistem",
    action: "Mengubah jadwal ujian",
    target: "Fakultas Teknik",
    time: "1 jam yang lalu",
    icon: "edit",
  },
  {
    id: 4,
    user: "Admin Akademik",
    action: "Mengunggah pengumuman",
    target: "Jadwal UAS Semester Genap",
    time: "2 jam yang lalu",
    icon: "upload",
  },
  {
    id: 5,
    user: "Admin Keuangan",
    action: "Mengirim notifikasi pembayaran",
    target: "Mahasiswa dengan tunggakan",
    time: "3 jam yang lalu",
    icon: "notify",
  },
]

// Datos de tareas pendientes
const pendingTasks = [
  {
    id: 1,
    title: "Verifikasi data mahasiswa baru",
    deadline: "Hari ini, 15:00",
    priority: "high",
    status: "pending",
  },
  {
    id: 2,
    title: "Persetujuan KRS mahasiswa",
    deadline: "Besok, 12:00",
    priority: "medium",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Finalisasi jadwal ujian",
    deadline: "3 hari lagi",
    priority: "high",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Evaluasi kinerja dosen",
    deadline: "5 hari lagi",
    priority: "low",
    status: "pending",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Background patterns */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-8 border-[#3D5AF1]"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full border-8 border-[#FFA500]"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border-4 border-[#3D5AF1]"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full border-4 border-[#FFA500]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border-4 border-[#3D5AF1]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-[#3D5AF1] p-2 rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">SIMONI</span>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" className="text-gray-600 hover:text-[#3D5AF1]">
                    <Home className="h-5 w-5 mr-2" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="text-gray-600 hover:text-[#3D5AF1]">
                    <Users className="h-5 w-5 mr-2" />
                    Mahasiswa
                  </Button>
                  <Button variant="ghost" className="text-gray-600 hover:text-[#3D5AF1]">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Dosen
                  </Button>
                  <Button variant="ghost" className="text-gray-600 hover:text-[#3D5AF1]">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Akademik
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#3D5AF1] focus:border-[#3D5AF1] sm:text-sm"
                  placeholder="Cari..."
                  type="search"
                />
              </div>
              <Button variant="ghost" className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative rounded-full bg-white p-1 text-gray-600 focus:outline-none"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback className="bg-[#3D5AF1] text-white">AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Pengaturan</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Keluar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-[#3D5AF1] to-[#7B9CFF] rounded-3xl shadow-lg overflow-hidden mb-6">
            <div className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold text-white">Selamat Datang, Admin!</h1>
                <p className="mt-2 text-blue-100">
                  Pantau dan kelola seluruh aktivitas akademik dari dashboard admin Anda.
                </p>
                <div className="mt-4 flex space-x-3">
                  <Button className="bg-white text-[#3D5AF1] hover:bg-gray-100">
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Data
                  </Button>
                  <Button className="bg-white text-[#3D5AF1] hover:bg-gray-100">
                    <Download className="h-4 w-4 mr-2" />
                    Unduh Laporan
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <img
                  src="/images/maskot.png"
                  alt="Admin Dashboard"
                  className="h-44 w-44 object-cover"
                />
              </div>
            </div>
            <div className="bg-blue-900/10 px-8 md:px-10 py-4 flex flex-wrap gap-4 justify-between">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Total Mahasiswa</p>
                  <p className="text-xl font-bold text-white">12,543</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Total Dosen</p>
                  <p className="text-xl font-bold text-white">875</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Program Studi</p>
                  <p className="text-xl font-bold text-white">42</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Fakultas</p>
                  <p className="text-xl font-bold text-white">8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-4 rounded-xl bg-[#7B9CFF]/10">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#3D5AF1] data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="students" className="data-[state=active]:bg-[#3D5AF1] data-[state=active]:text-white">
                Mahasiswa
              </TabsTrigger>
              <TabsTrigger value="academic" className="data-[state=active]:bg-[#3D5AF1] data-[state=active]:text-white">
                Akademik
              </TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-[#3D5AF1] data-[state=active]:text-white">
                Laporan
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab Content */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              {/* Charts and Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Distribusi Mahasiswa per Fakultas */}
                <Card className="border-none shadow-md rounded-xl overflow-hidden lg:col-span-2">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        Distribusi Mahasiswa per Fakultas
                      </CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            <span>Unduh Data</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Filter className="mr-2 h-4 w-4" />
                            <span>Filter</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={facultyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              border: "none",
                            }}
                          />
                          <Bar dataKey="value" fill="#3D5AF1" radius={[4, 4, 0, 0]} barSize={30} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Status Mahasiswa */}
                <Card className="border-none shadow-md rounded-xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">Status Mahasiswa</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            <span>Unduh Data</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Filter className="mr-2 h-4 w-4" />
                            <span>Filter</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-[300px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={studentStatusData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                          >
                            {studentStatusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              border: "none",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {studentStatusData.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                          <span className="text-xs text-gray-600">
                            {item.name}: {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance and Tasks */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Performance Chart */}
                <Card className="border-none shadow-md rounded-xl overflow-hidden lg:col-span-2">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">Performa Akademik</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            <span>Unduh Data</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Filter className="mr-2 h-4 w-4" />
                            <span>Filter</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              border: "none",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#FFA500"
                            strokeWidth={3}
                            dot={{ r: 6, fill: "#FFA500", strokeWidth: 2, stroke: "white" }}
                            activeDot={{ r: 8, fill: "#FFA500", strokeWidth: 2, stroke: "white" }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Tasks */}
                <Card className="border-none shadow-md rounded-xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">Tugas Pending</CardTitle>
                      <Button variant="ghost" size="sm" className="text-[#3D5AF1]">
                        Lihat Semua
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {pendingTasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                        >
                          <div
                            className={`p-2 rounded-full flex-shrink-0 ${
                              task.priority === "high"
                                ? "bg-red-100"
                                : task.priority === "medium"
                                  ? "bg-yellow-100"
                                  : "bg-green-100"
                            }`}
                          >
                            <div
                              className={`h-4 w-4 ${
                                task.priority === "high"
                                  ? "text-red-600"
                                  : task.priority === "medium"
                                    ? "text-yellow-600"
                                    : "text-green-600"
                              }`}
                            >
                              {task.status === "pending" ? (
                                <AlertCircle className="h-4 w-4" />
                              ) : task.status === "in-progress" ? (
                                <Clock className="h-4 w-4" />
                              ) : (
                                <CheckCircle className="h-4 w-4" />
                              )}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-800">{task.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">Deadline: {task.deadline}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Student Table and Activities */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Student Table */}
                <Card className="border-none shadow-md rounded-xl overflow-hidden lg:col-span-2">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">Data Mahasiswa Terbaru</CardTitle>
                      <Button variant="outline" size="sm" className="text-[#3D5AF1] border-[#3D5AF1]">
                        Lihat Semua
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                            <th className="px-4 py-3 font-medium">Mahasiswa</th>
                            <th className="px-4 py-3 font-medium">Program Studi</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                            <th className="px-4 py-3 font-medium">IPK</th>
                            <th className="px-4 py-3 font-medium">Progress</th>
                            <th className="px-4 py-3 font-medium"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {studentData.map((student) => (
                            <tr key={student.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                              <td className="px-4 py-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt={student.nama} />
                                    <AvatarFallback className="bg-[#3D5AF1] text-white">
                                      {student.nama
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="font-medium text-gray-800">{student.nama}</div>
                                    <div className="text-gray-500 text-xs">{student.nim}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-gray-600 text-sm">{student.programStudi}</td>
                              <td className="px-4 py-4">
                                <Badge
                                  className={`${
                                    student.status === "Aktif"
                                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                                      : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                  } border-0`}
                                >
                                  {student.status}
                                </Badge>
                              </td>
                              <td className="px-4 py-4 font-medium text-gray-800">{student.ipk}</td>
                              <td className="px-4 py-4">
                                <div className="flex items-center gap-2">
                                  <Progress
                                    value={student.progress}
                                    className="h-2 w-24 bg-gray-100"
                                    indicatorClassName={`${
                                      student.progress >= 90
                                        ? "bg-green-500"
                                        : student.progress >= 70
                                          ? "bg-[#3D5AF1]"
                                          : "bg-yellow-500"
                                    }`}
                                  />
                                  <span className="text-xs text-gray-500">{student.progress}%</span>
                                </div>
                              </td>
                              <td className="px-4 py-4">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activities */}
                <Card className="border-none shadow-md rounded-xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">Aktivitas Terbaru</CardTitle>
                      <Button variant="ghost" size="sm" className="text-[#3D5AF1]">
                        Lihat Semua
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                        >
                          <div className="bg-[#7B9CFF]/10 p-2 rounded-full">
                            {activity.icon === "add" ? (
                              <Plus className="h-4 w-4 text-[#3D5AF1]" />
                            ) : activity.icon === "update" ? (
                              <Activity className="h-4 w-4 text-[#3D5AF1]" />
                            ) : activity.icon === "edit" ? (
                              <FileText className="h-4 w-4 text-[#3D5AF1]" />
                            ) : activity.icon === "upload" ? (
                              <Upload className="h-4 w-4 text-[#3D5AF1]" />
                            ) : (
                              <Bell className="h-4 w-4 text-[#3D5AF1]" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              <span className="text-[#3D5AF1]">{activity.user}</span> {activity.action}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{activity.target}</p>
                            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Students Tab Content */}
            <TabsContent value="students" className="space-y-6">
              <Card className="border-none shadow-md rounded-xl overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-semibold text-gray-800">Daftar Mahasiswa</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Cari mahasiswa..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3D5AF1] focus:border-transparent"
                        />
                      </div>
                      <Button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Tambah Mahasiswa
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                          <th className="px-4 py-3 font-medium">Mahasiswa</th>
                          <th className="px-4 py-3 font-medium">NIM</th>
                          <th className="px-4 py-3 font-medium">Program Studi</th>
                          <th className="px-4 py-3 font-medium">Fakultas</th>
                          <th className="px-4 py-3 font-medium">Angkatan</th>
                          <th className="px-4 py-3 font-medium">Status</th>
                          <th className="px-4 py-3 font-medium">IPK</th>
                          <th className="px-4 py-3 font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentData.map((student) => (
                          <tr key={student.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt={student.nama} />
                                  <AvatarFallback className="bg-[#3D5AF1] text-white">
                                    {student.nama
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="font-medium text-gray-800">{student.nama}</div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-gray-600 text-sm">{student.nim}</td>
                            <td className="px-4 py-4 text-gray-600 text-sm">{student.programStudi}</td>
                            <td className="px-4 py-4 text-gray-600 text-sm">{student.fakultas}</td>
                            <td className="px-4 py-4 text-gray-600 text-sm">{student.angkatan}</td>
                            <td className="px-4 py-4">
                              <Badge
                                className={`${
                                  student.status === "Aktif"
                                    ? "bg-green-100 text-green-800 hover:bg-green-200"
                                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                } border-0`}
                              >
                                {student.status}
                              </Badge>
                            </td>
                            <td className="px-4 py-4 font-medium text-gray-800">{student.ipk}</td>
                            <td className="px-4 py-4">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Lihat Profil</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <FileText className="mr-2 h-4 w-4" />
                                    <span>Lihat Nilai</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit Data</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <XCircle className="mr-2 h-4 w-4" />
                                    <span>Nonaktifkan</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-500">Menampilkan 1-5 dari 12,543 mahasiswa</div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 bg-[#3D5AF1] text-white border-[#3D5AF1]"
                      >
                        1
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        2
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        3
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Academic Tab Content */}
            <TabsContent value="academic" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md rounded-xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">Jadwal Akademik</CardTitle>
                      <Button variant="outline" size="sm" className="text-[#3D5AF1] border-[#3D5AF1]">
                        Tambah Jadwal
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-[#7B9CFF]/5 rounded-xl">
                        <div className="flex flex-col items-center justify-center bg-[#3D5AF1] text-white p-3 rounded-xl min-w-[60px]">
                          <span className="text-xl font-bold">20</span>
                          <span className="text-xs">Mei</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Batas Akhir Perkuliahan</h4>
                          <p className="text-sm text-gray-600 mt-1">Semester Genap 2023/2024</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-[#7B9CFF]/5 rounded-xl">
                        <div className="flex flex-col items-center justify-center bg-[#3D5AF1] text-white p-3 rounded-xl min-w-[60px]">
                          <span className="text-xl font-bold">25</span>
                          <span className="text-xs">Mei</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Mulai Ujian Akhir Semester</h4>
                          <p className="text-sm text-gray-600 mt-1">Semester Genap 2023/2024</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-[#7B9CFF]/5 rounded-xl">
                        <div className="flex flex-col items-center justify-center bg-[#3D5AF1] text-white p-3 rounded-xl min-w-[60px]">
                          <span className="text-xl font-bold">10</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Batas Akhir Penilaian</h4>
                          <p className="text-sm text-gray-600 mt-1">Semester Genap 2023/2024</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md rounded-xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">Pengumuman Terbaru</CardTitle>
                      <Button variant="outline" size="sm" className="text-[#3D5AF1] border-[#3D5AF1]">
                        Buat Pengumuman
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-800">Jadwal Ujian Akhir Semester Genap 2023/2024</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Jadwal ujian akhir semester genap 2023/2024 telah dirilis. Silakan cek jadwal ujian di
                              menu Jadwal.
                            </p>
                            <div className="flex items-center text-xs text-gray-500 mt-2">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>15 Mei 2024</span>
                            </div>
                          </div>
                          <Badge className="bg-[#FFA500] hover:bg-[#FF8C00] text-white border-0">Penting</Badge>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-800">Pembayaran UKT Semester Ganjil 2024/2025</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Pembayaran UKT semester ganjil 2024/2025 akan dibuka pada tanggal 1-15 Juli 2024.
                            </p>
                            <div className="flex items-center text-xs text-gray-500 mt-2">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>10 Mei 2024</span>
                            </div>
                          </div>
                          <Badge className="bg-[#3D5AF1] hover:bg-[#3D5AF1]/80 text-white border-0">Info</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Reports Tab Content */}
            <TabsContent value="reports" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md rounded-xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">Laporan Akademik</CardTitle>
                      <Button variant="outline" size="sm" className="text-[#3D5AF1] border-[#3D5AF1]">
                        <Download className="h-4 w-4 mr-2" />
                        Unduh Laporan
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#7B9CFF]/10 p-3 rounded-full">
                            <FileText className="h-5 w-5 text-[#3D5AF1]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Laporan Kelulusan Semester Genap 2023/2024</h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Dibuat pada 20 Mei 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#7B9CFF]/10 p-3 rounded-full">
                            <FileText className="h-5 w-5 text-[#3D5AF1]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Laporan Penerimaan Mahasiswa Baru 2024</h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Dibuat pada 15 Mei 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#7B9CFF]/10 p-3 rounded-full">
                            <FileText className="h-5 w-5 text-[#3D5AF1]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Laporan Kinerja Dosen Semester Genap 2023/2024
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Dibuat pada 10 Mei 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md rounded-xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        Tren Pendaftaran Mahasiswa (2024)
                      </CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            <span>Unduh Data</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Filter className="mr-2 h-4 w-4" />
                            <span>Filter</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={trendData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              border: "none",
                            }}
                          />
                          <Bar dataKey="value" fill="#FFA500" radius={[4, 4, 0, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-[#3D5AF1] p-2 rounded-full mr-2">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-600 text-sm">&copy; 2025 SIMONI - Sistem Monitoring Nilai</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600">
                Kebijakan Privasi
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                Syarat & Ketentuan
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                Bantuan
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
