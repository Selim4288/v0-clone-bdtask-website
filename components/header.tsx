import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <>
      <div className="w-full bg-emerald-500 text-white py-3 px-4 text-center">
        <div className="container mx-auto flex justify-center items-center gap-2">
          <span>Save Extra Cost & Increase Your ROI</span>
          <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md">
            Grab it now
          </Button>
        </div>
      </div>
      <header className="w-full bg-white py-4 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" alt="BDTask Logo" width={150} height={50} className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors">
              All Products
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-600 transition-colors">
                Mobile Apps
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 hidden group-hover:block z-50">
                <div className="py-2">
                  <Link href="/mobile-apps/android" className="block px-4 py-2 text-sm hover:bg-gray-50">
                    Android Apps
                  </Link>
                  <Link href="/mobile-apps/ios" className="block px-4 py-2 text-sm hover:bg-gray-50">
                    iOS Apps
                  </Link>
                  <Link href="/mobile-apps/cross-platform" className="block px-4 py-2 text-sm hover:bg-gray-50">
                    Cross Platform
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/services" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors">
              Service
            </Link>
            <Link href="/blog" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors">
              Contact Us
            </Link>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
