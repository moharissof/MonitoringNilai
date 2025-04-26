"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementasi reset password akan ditambahkan di sini
    console.log({ email })
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#7B9CFF] font-poppins relative overflow-hidden flex items-center justify-center">
      {/* Background patterns */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-8 border-white"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full border-8 border-white"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border-4 border-white"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border-4 border-white"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Link href="/login" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Halaman Login
          </Link>

          <Card className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-[#7B9CFF]/10 p-4 rounded-full">
                  <GraduationCap className="h-10 w-10 text-[#3D5AF1]" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Lupa Password</h1>
                <p className="text-gray-600 mt-2">
                  Masukkan email yang terdaftar untuk menerima instruksi reset password
                </p>
              </div>

              {isSubmitted ? (
                <Alert className="bg-green-50 border-green-200 text-green-800 mb-6">
                  <AlertDescription>
                    Instruksi reset password telah dikirim ke email Anda. Silakan periksa kotak masuk atau folder spam
                    Anda.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Masukkan email terdaftar"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 py-6 rounded-xl border-gray-200"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white py-6 rounded-xl text-lg font-medium h-auto"
                  >
                    Kirim Instruksi Reset
                  </Button>
                </form>
              )}

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  Sudah ingat password?{" "}
                  <Link href="/login" className="text-[#3D5AF1] hover:underline">
                    Kembali ke Login
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-white text-sm">&copy; 2024 SIAKAD - Sistem Informasi Akademik. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
