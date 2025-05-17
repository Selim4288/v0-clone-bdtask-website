import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const products = [
    {
      id: "erp-solutions",
      title: "ERP Solutions",
      description: "Comprehensive enterprise resource planning systems for businesses of all sizes.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Financial Management",
        "Inventory Control",
        "HR Management",
        "CRM Integration",
        "Business Intelligence",
      ],
      link: "/products/erp-solutions",
    },
    {
      id: "pos-systems",
      title: "POS Systems",
      description: "Advanced point of sale systems for retail, restaurant, and service industries.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Inventory Management",
        "Sales Tracking",
        "Customer Management",
        "Payment Processing",
        "Reporting & Analytics",
      ],
      link: "/products/pos-systems",
    },
    {
      id: "accounting-software",
      title: "Accounting Software",
      description: "Powerful accounting tools to manage finances, invoicing, and financial reporting.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "General Ledger",
        "Accounts Payable/Receivable",
        "Financial Reporting",
        "Tax Management",
        "Multi-currency Support",
      ],
      link: "/products/accounting-software",
    },
    {
      id: "hrm-solutions",
      title: "HRM Solutions",
      description: "Human resource management systems to streamline HR processes and employee management.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Employee Database",
        "Attendance Tracking",
        "Payroll Management",
        "Performance Evaluation",
        "Recruitment Tools",
      ],
      link: "/products/hrm-solutions",
    },
    {
      id: "ecommerce",
      title: "E-commerce Platforms",
      description: "Scalable e-commerce solutions for online stores and marketplaces.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Product Management",
        "Shopping Cart",
        "Payment Gateway Integration",
        "Order Processing",
        "Customer Management",
      ],
      link: "/products/ecommerce",
    },
    {
      id: "crm-software",
      title: "CRM Software",
      description: "Customer relationship management tools to improve customer engagement and sales.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Contact Management", "Sales Pipeline", "Email Marketing", "Task Management", "Analytics & Reporting"],
      link: "/products/crm-software",
    },
    {
      id: "inventory-management",
      title: "Inventory Management System",
      description: "Comprehensive inventory tracking and management solutions for businesses of all sizes.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Real-time Stock Tracking",
        "Barcode & QR Code Scanning",
        "Purchase Order Management",
        "Supplier Management",
        "Inventory Forecasting",
      ],
      link: "/products/inventory-management",
    },
    {
      id: "school-management",
      title: "School Management System",
      description: "Complete education management solution for schools, colleges, and educational institutions.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Student Information System",
        "Attendance Management",
        "Exam & Grading System",
        "Fee Management",
        "Parent-Teacher Communication",
      ],
      link: "/products/school-management",
    },
    {
      id: "hospital-management",
      title: "Hospital Management System",
      description: "Integrated healthcare management solution for hospitals and medical facilities.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Patient Records Management",
        "Appointment Scheduling",
        "Billing & Insurance",
        "Pharmacy Management",
        "Laboratory Information System",
      ],
      link: "/products/hospital-management",
    },
    {
      id: "project-management",
      title: "Project Management Software",
      description: "Powerful tools to plan, track, and manage projects efficiently.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Task Management",
        "Team Collaboration",
        "Gantt Charts & Timelines",
        "Resource Allocation",
        "Time & Budget Tracking",
      ],
      link: "/products/project-management",
    },
    {
      id: "real-estate-management",
      title: "Real Estate Management System",
      description: "Comprehensive solution for real estate agencies, property managers, and developers.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Property Listing Management",
        "Client Database",
        "Lead Management",
        "Document Management",
        "Financial Reporting",
      ],
      link: "/products/real-estate-management",
    },
    {
      id: "restaurant-management",
      title: "Restaurant Management System",
      description: "All-in-one solution for restaurants, cafes, and food service businesses.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Order Management",
        "Table Reservation",
        "Kitchen Display System",
        "Inventory & Recipe Management",
        "Customer Loyalty Program",
      ],
      link: "/products/restaurant-management",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our range of innovative software products designed to streamline your business operations and
              drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.link}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-500 font-medium flex items-center gap-1">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-6 py-2 rounded-md">Contact Us</Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-600 px-6 py-2 rounded-md">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
