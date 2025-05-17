import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.svg" alt="BDTask Logo" width={150} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              BDTask, Inc. has a global reputation for up to scratch customer experience which marks us as one of the
              best software development companies in the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/erp-solutions" className="text-gray-400 hover:text-white transition-colors">
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/pos-systems" className="text-gray-400 hover:text-white transition-colors">
                  POS Systems
                </Link>
              </li>
              <li>
                <Link href="/products/accounting-software" className="text-gray-400 hover:text-white transition-colors">
                  Accounting Software
                </Link>
              </li>
              <li>
                <Link href="/products/hrm-solutions" className="text-gray-400 hover:text-white transition-colors">
                  HRM Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/ecommerce" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce Platforms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/custom-software" className="text-gray-400 hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app" className="text-gray-400 hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="text-gray-400 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-400 hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400">123 Software Avenue, Tech Park, Dhaka, Bangladesh</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400">+880 1234 567890</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400">info@bdtask.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500">© {new Date().getFullYear()} BDTask. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
