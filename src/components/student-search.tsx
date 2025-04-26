"use client"

import { useState } from "react"
import { Search, SearchCheck, Calendar, User, School, BookOpen, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Tipe data untuk mahasiswa
interface Student {
  id: string
  nim: string
  nama: string
  programStudi: string
  fakultas: string
  angkatan: string
  status: string
}

// Tipe data untuk nilai
interface Grade {
  kodeMK: string
  namaMK: string
  sks: number
  semester: string
  nilai: string
  bobot: number
}

export default function StudentSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Student[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)

  // Data contoh mahasiswa
  const dummyStudents: Student[] = [
    {
      id: "1",
      nim: "1901234567",
      nama: "Ahmad Fauzi",
      programStudi: "Teknik Informatika",
      fakultas: "Fakultas Ilmu Komputer",
      angkatan: "2019",
      status: "Aktif",
    },
    {
      id: "2",
      nim: "1901234568",
      nama: "Siti Nurhaliza",
      programStudi: "Sistem Informasi",
      fakultas: "Fakultas Ilmu Komputer",
      angkatan: "2019",
      status: "Aktif",
    },
    {
      id: "3",
      nim: "2001234569",
      nama: "Budi Santoso",
      programStudi: "Teknik Elektro",
      fakultas: "Fakultas Teknik",
      angkatan: "2020",
      status: "Aktif",
    },
    {
      id: "4",
      nim: "2001234570",
      nama: "Dewi Lestari",
      programStudi: "Manajemen",
      fakultas: "Fakultas Ekonomi dan Bisnis",
      angkatan: "2020",
      status: "Aktif",
    },
    {
      id: "5",
      nim: "1801234571",
      nama: "Muhammad Rizki",
      programStudi: "Akuntansi",
      fakultas: "Fakultas Ekonomi dan Bisnis",
      angkatan: "2018",
      status: "Lulus",
    },
  ]

  // Data contoh nilai
  const dummyGrades: Record<string, Grade[]> = {
    "1": [
      { kodeMK: "IF1101", namaMK: "Algoritma dan Pemrograman", sks: 3, semester: "1", nilai: "A", bobot: 4.0 },
      { kodeMK: "IF1102", namaMK: "Matematika Diskrit", sks: 3, semester: "1", nilai: "A-", bobot: 3.7 },
      { kodeMK: "IF1103", namaMK: "Pengantar Teknologi Informasi", sks: 2, semester: "1", nilai: "B+", bobot: 3.3 },
      { kodeMK: "IF2101", namaMK: "Struktur Data", sks: 3, semester: "2", nilai: "A", bobot: 4.0 },
      { kodeMK: "IF2102", namaMK: "Basis Data", sks: 3, semester: "2", nilai: "B", bobot: 3.0 },
      { kodeMK: "IF2103", namaMK: "Pemrograman Web", sks: 3, semester: "2", nilai: "A-", bobot: 3.7 },
    ],
    "2": [
      { kodeMK: "SI1101", namaMK: "Pengantar Sistem Informasi", sks: 3, semester: "1", nilai: "A", bobot: 4.0 },
      { kodeMK: "SI1102", namaMK: "Algoritma dan Pemrograman", sks: 3, semester: "1", nilai: "B+", bobot: 3.3 },
      { kodeMK: "SI1103", namaMK: "Matematika Diskrit", sks: 3, semester: "1", nilai: "A-", bobot: 3.7 },
      { kodeMK: "SI2101", namaMK: "Basis Data", sks: 3, semester: "2", nilai: "A", bobot: 4.0 },
      { kodeMK: "SI2102", namaMK: "Analisis dan Desain Sistem", sks: 3, semester: "2", nilai: "B", bobot: 3.0 },
      { kodeMK: "SI2103", namaMK: "Pemrograman Web", sks: 3, semester: "2", nilai: "A-", bobot: 3.7 },
    ],
    "3": [
      { kodeMK: "TE1101", namaMK: "Fisika Dasar", sks: 3, semester: "1", nilai: "B+", bobot: 3.3 },
      { kodeMK: "TE1102", namaMK: "Kalkulus I", sks: 3, semester: "1", nilai: "A-", bobot: 3.7 },
      { kodeMK: "TE1103", namaMK: "Pengantar Teknik Elektro", sks: 2, semester: "1", nilai: "A", bobot: 4.0 },
      { kodeMK: "TE2101", namaMK: "Rangkaian Listrik", sks: 3, semester: "2", nilai: "B", bobot: 3.0 },
      { kodeMK: "TE2102", namaMK: "Elektronika Dasar", sks: 3, semester: "2", nilai: "B+", bobot: 3.3 },
      { kodeMK: "TE2103", namaMK: "Kalkulus II", sks: 3, semester: "2", nilai: "A-", bobot: 3.7 },
    ],
    "4": [
      { kodeMK: "MN1101", namaMK: "Pengantar Bisnis", sks: 3, semester: "1", nilai: "A", bobot: 4.0 },
      { kodeMK: "MN1102", namaMK: "Ekonomi Mikro", sks: 3, semester: "1", nilai: "B+", bobot: 3.3 },
      { kodeMK: "MN1103", namaMK: "Matematika Ekonomi", sks: 3, semester: "1", nilai: "B", bobot: 3.0 },
      { kodeMK: "MN2101", namaMK: "Manajemen Keuangan", sks: 3, semester: "2", nilai: "A-", bobot: 3.7 },
      { kodeMK: "MN2102", namaMK: "Ekonomi Makro", sks: 3, semester: "2", nilai: "B+", bobot: 3.3 },
      { kodeMK: "MN2103", namaMK: "Statistika Bisnis", sks: 3, semester: "2", nilai: "A", bobot: 4.0 },
    ],
    "5": [
      { kodeMK: "AK1101", namaMK: "Pengantar Akuntansi I", sks: 3, semester: "1", nilai: "A", bobot: 4.0 },
      { kodeMK: "AK1102", namaMK: "Ekonomi Mikro", sks: 3, semester: "1", nilai: "A-", bobot: 3.7 },
      { kodeMK: "AK1103", namaMK: "Matematika Ekonomi", sks: 3, semester: "1", nilai: "B+", bobot: 3.3 },
      { kodeMK: "AK2101", namaMK: "Pengantar Akuntansi II", sks: 3, semester: "2", nilai: "A", bobot: 4.0 },
      { kodeMK: "AK2102", namaMK: "Akuntansi Biaya", sks: 3, semester: "2", nilai: "B", bobot: 3.0 },
      { kodeMK: "AK2103", namaMK: "Perpajakan", sks: 3, semester: "2", nilai: "A-", bobot: 3.7 },
    ],
  }

  // Fungsi untuk mencari mahasiswa
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      setHasSearched(true)
      return
    }

    const results = dummyStudents.filter((student) => student.nama.toLowerCase().includes(searchQuery.toLowerCase()))
    setSearchResults(results)
    setHasSearched(true)
  }

  // Fungsi untuk menghitung IPK
  const calculateGPA = (studentId: string) => {
    const grades = dummyGrades[studentId] || []
    if (grades.length === 0) return 0

    const totalPoints = grades.reduce((sum, grade) => sum + grade.bobot * grade.sks, 0)
    const totalCredits = grades.reduce((sum, grade) => sum + grade.sks, 0)

    return totalPoints / totalCredits
  }

  // Fungsi untuk mendapatkan inisial dari nama
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // Fungsi untuk mendapatkan warna berdasarkan nilai
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A":
        return "bg-green-100 text-green-800"
      case "A-":
        return "bg-green-100 text-green-700"
      case "B+":
        return "bg-blue-100 text-blue-800"
      case "B":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#3D5AF1] mb-2">Hey, Civitas Stikom</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Mau mencari data nilai siapa?</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <SearchCheck className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Masukkan Nama Mahasiswa atau Dosen"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 border-gray-200 rounded-xl text-lg"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="bg-[#7B9CFF]/10 p-3 rounded-full">
            <School className="h-6 w-6 text-[#3D5AF1]" />
          </div>
          <div className="bg-[#7B9CFF]/10 p-3 rounded-full">
            <BookOpen className="h-6 w-6 text-[#3D5AF1]" />
          </div>
          <div className="bg-[#7B9CFF]/10 p-3 rounded-full">
            <User className="h-6 w-6 text-[#3D5AF1]" />
          </div>
          <div className="bg-[#7B9CFF]/10 p-3 rounded-full">
            <Calendar className="h-6 w-6 text-[#3D5AF1]" />
          </div>
        </div>
        <Button
          onClick={handleSearch}
          className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-6 rounded-xl text-lg font-medium"
        >
          Cari
        </Button>
      </div>

      {hasSearched && (
        <div className="mt-8">
          {searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((student) => (
                <div
                  key={student.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16 border-2 border-[#7B9CFF]/20">
                        <AvatarFallback className="bg-[#3D5AF1] text-white text-xl">
                          {getInitials(student.nama)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{student.nama}</h3>
                        <div className="flex items-center mt-1 text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          <span>{student.nim}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge className="bg-[#7B9CFF]/10 text-[#3D5AF1] hover:bg-[#7B9CFF]/20 border-0">
                            {student.programStudi}
                          </Badge>
                          <Badge className="bg-[#7B9CFF]/10 text-[#3D5AF1] hover:bg-[#7B9CFF]/20 border-0">
                            {student.fakultas}
                          </Badge>
                          <Badge className="bg-[#7B9CFF]/10 text-[#3D5AF1] hover:bg-[#7B9CFF]/20 border-0">
                            Angkatan {student.angkatan}
                          </Badge>
                          <Badge
                            className={`${
                              student.status === "Aktif"
                                ? "bg-green-100 text-green-800 hover:bg-green-200"
                                : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            } border-0`}
                          >
                            {student.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <div className="text-yellow-500 flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-current" />
                          ))}
                          <Star className="h-5 w-5 text-yellow-500" />
                        </div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            onClick={() => setSelectedStudent(student)}
                            className="bg-[#FFA500] hover:bg-[#FF8C00] text-white border-0 rounded-xl px-6"
                          >
                            Lihat Nilai
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle className="text-xl flex items-center gap-2 text-[#3D5AF1]">
                              Data Akademik Mahasiswa
                            </DialogTitle>
                          </DialogHeader>
                          {selectedStudent && (
                            <div className="space-y-6">
                              <div className="flex items-center gap-4 p-6 bg-[#7B9CFF]/5 rounded-xl">
                                <Avatar className="h-16 w-16 border-4 border-white shadow-md">
                                  <AvatarFallback className="bg-[#3D5AF1] text-white text-xl">
                                    {getInitials(selectedStudent.nama)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-gray-900">{selectedStudent.nama}</h3>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="outline" className="text-xs">
                                      {selectedStudent.nim}
                                    </Badge>
                                    <Badge
                                      className={`text-xs ${
                                        selectedStudent.status === "Aktif"
                                          ? "bg-green-100 text-green-800"
                                          : "bg-blue-100 text-blue-800"
                                      }`}
                                    >
                                      {selectedStudent.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-3xl font-bold text-[#3D5AF1]">
                                    {calculateGPA(selectedStudent.id).toFixed(2)}
                                  </div>
                                  <div className="text-sm text-gray-500">IPK</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-4">
                                <div className="bg-[#7B9CFF]/5 p-4 rounded-xl">
                                  <div className="text-sm text-gray-500">Program Studi</div>
                                  <div className="font-medium">{selectedStudent.programStudi}</div>
                                </div>
                                <div className="bg-[#7B9CFF]/5 p-4 rounded-xl">
                                  <div className="text-sm text-gray-500">Fakultas</div>
                                  <div className="font-medium">{selectedStudent.fakultas}</div>
                                </div>
                                <div className="bg-[#7B9CFF]/5 p-4 rounded-xl">
                                  <div className="text-sm text-gray-500">Angkatan</div>
                                  <div className="font-medium">{selectedStudent.angkatan}</div>
                                </div>
                              </div>

                              <Tabs defaultValue="semester1" className="mt-6">
                                <TabsList className="grid grid-cols-2 w-[400px] rounded-xl bg-[#7B9CFF]/5">
                                  <TabsTrigger
                                    value="semester1"
                                    className="rounded-l-xl data-[state=active]:bg-[#3D5AF1] data-[state=active]:text-white"
                                  >
                                    Semester 1
                                  </TabsTrigger>
                                  <TabsTrigger
                                    value="semester2"
                                    className="rounded-r-xl data-[state=active]:bg-[#3D5AF1] data-[state=active]:text-white"
                                  >
                                    Semester 2
                                  </TabsTrigger>
                                </TabsList>
                                <TabsContent value="semester1" className="mt-4">
                                  <div className="bg-white rounded-xl overflow-hidden">
                                    <Table>
                                      <TableHeader className="bg-[#7B9CFF]/5">
                                        <TableRow>
                                          <TableHead className="w-[100px]">Kode MK</TableHead>
                                          <TableHead>Mata Kuliah</TableHead>
                                          <TableHead className="text-center">SKS</TableHead>
                                          <TableHead className="text-center">Nilai</TableHead>
                                          <TableHead className="text-center">Bobot</TableHead>
                                        </TableRow>
                                      </TableHeader>
                                      <TableBody>
                                        {dummyGrades[selectedStudent.id]
                                          ?.filter((grade) => grade.semester === "1")
                                          .map((grade, index) => (
                                            <TableRow key={index} className="hover:bg-gray-50">
                                              <TableCell className="font-medium">{grade.kodeMK}</TableCell>
                                              <TableCell>{grade.namaMK}</TableCell>
                                              <TableCell className="text-center">{grade.sks}</TableCell>
                                              <TableCell className="text-center">
                                                <span
                                                  className={`inline-block px-2 py-1 rounded-full text-xs ${getGradeColor(grade.nilai)}`}
                                                >
                                                  {grade.nilai}
                                                </span>
                                              </TableCell>
                                              <TableCell className="text-center">{grade.bobot.toFixed(1)}</TableCell>
                                            </TableRow>
                                          ))}
                                      </TableBody>
                                    </Table>
                                  </div>
                                </TabsContent>
                                <TabsContent value="semester2" className="mt-4">
                                  <div className="bg-white rounded-xl overflow-hidden">
                                    <Table>
                                      <TableHeader className="bg-[#7B9CFF]/5">
                                        <TableRow>
                                          <TableHead className="w-[100px]">Kode MK</TableHead>
                                          <TableHead>Mata Kuliah</TableHead>
                                          <TableHead className="text-center">SKS</TableHead>
                                          <TableHead className="text-center">Nilai</TableHead>
                                          <TableHead className="text-center">Bobot</TableHead>
                                        </TableRow>
                                      </TableHeader>
                                      <TableBody>
                                        {dummyGrades[selectedStudent.id]
                                          ?.filter((grade) => grade.semester === "2")
                                          .map((grade, index) => (
                                            <TableRow key={index} className="hover:bg-gray-50">
                                              <TableCell className="font-medium">{grade.kodeMK}</TableCell>
                                              <TableCell>{grade.namaMK}</TableCell>
                                              <TableCell className="text-center">{grade.sks}</TableCell>
                                              <TableCell className="text-center">
                                                <span
                                                  className={`inline-block px-2 py-1 rounded-full text-xs ${getGradeColor(grade.nilai)}`}
                                                >
                                                  {grade.nilai}
                                                </span>
                                              </TableCell>
                                              <TableCell className="text-center">{grade.bobot.toFixed(1)}</TableCell>
                                            </TableRow>
                                          ))}
                                      </TableBody>
                                    </Table>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            hasSearched && (
              <div className="p-12 text-center bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7B9CFF]/10 mb-4">
                  <Search className="h-8 w-8 text-[#3D5AF1]" />
                </div>
                <p className="text-gray-600 font-medium">Tidak ada mahasiswa yang ditemukan.</p>
                <p className="text-sm text-gray-500 mt-2">
                  Coba gunakan kata kunci yang berbeda atau periksa ejaan nama.
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}
