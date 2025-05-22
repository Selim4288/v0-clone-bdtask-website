import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const products = [
    // Existing products
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

    // New products
    {
      id: "accounting-inventory",
      title: "Accounting & Inventory Software",
      description: "Integrated solution for managing finances and inventory in one platform.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Financial Accounting",
        "Inventory Tracking",
        "Purchase Management",
        "Sales Management",
        "Reporting & Analytics",
      ],
      link: "/products/accounting-inventory",
    },
    {
      id: "hr-payroll",
      title: "HR & Payroll Management Software",
      description: "Comprehensive solution for managing human resources and payroll processing.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Employee Management",
        "Attendance Tracking",
        "Payroll Processing",
        "Tax Calculations",
        "Leave Management",
      ],
      link: "/products/hr-payroll",
    },
    {
      id: "office-management",
      title: "Office Management Software with HRM",
      description: "Complete office management solution with integrated human resource management.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Document Management", "Task Management", "HR Functions", "Meeting Scheduling", "Asset Management"],
      link: "/products/office-management",
    },
    {
      id: "garments-erp",
      title: "Garments ERP Software",
      description: "Specialized ERP solution for garment manufacturing and textile industries.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Production Planning",
        "Material Management",
        "Quality Control",
        "Order Management",
        "Cost Calculation",
      ],
      link: "/products/garments-erp",
    },
    {
      id: "company-management-crm",
      title: "Company Management CRM",
      description: "Comprehensive CRM solution for managing company operations and customer relationships.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Customer Management",
        "Sales Pipeline",
        "Marketing Automation",
        "Service Management",
        "Business Analytics",
      ],
      link: "/products/company-management-crm",
    },
    {
      id: "medicine-shop",
      title: "Medicine Shop Management Software",
      description: "Specialized solution for pharmacies and medicine shops to manage inventory and sales.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Medicine Inventory",
        "Prescription Management",
        "Expiry Tracking",
        "Customer Records",
        "Sales Reporting",
      ],
      link: "/products/medicine-shop",
    },
    {
      id: "invoice-billing",
      title: "Invoice / Billing Software",
      description: "Streamlined solution for creating, managing, and tracking invoices and bills.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Invoice Generation",
        "Payment Tracking",
        "Client Management",
        "Tax Calculations",
        "Financial Reporting",
      ],
      link: "/products/invoice-billing",
    },
    {
      id: "product-stock",
      title: "Product Stock Management Software",
      description: "Efficient solution for tracking and managing product inventory and stock levels.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Stock Tracking", "Inventory Valuation", "Reorder Alerts", "Barcode Integration", "Stock Reports"],
      link: "/products/product-stock",
    },
    {
      id: "retail-shop",
      title: "Retail Shop Management Software",
      description: "Complete solution for managing retail store operations and inventory.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "POS Integration",
        "Inventory Management",
        "Customer Loyalty",
        "Employee Management",
        "Sales Analytics",
      ],
      link: "/products/retail-shop",
    },
    {
      id: "wholesale-shop",
      title: "Wholesale Shop Management Software",
      description: "Specialized solution for wholesale businesses to manage inventory and orders.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Bulk Order Processing",
        "Supplier Management",
        "Price Management",
        "Customer Accounts",
        "Inventory Control",
      ],
      link: "/products/wholesale-shop",
    },
    {
      id: "fashion-clothing",
      title: "Fashion & Clothing Shop Management Software",
      description: "Tailored solution for fashion retailers to manage inventory, sales, and customers.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Size/Color Variants",
        "Season Management",
        "Fashion Inventory",
        "Customer Profiles",
        "Sales Reporting",
      ],
      link: "/products/fashion-clothing",
    },
    {
      id: "super-shop",
      title: "Super Shop / Departmental Shop Management Software",
      description: "Comprehensive solution for managing large retail stores with multiple departments.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Multi-department Management",
        "Inventory Control",
        "Customer Loyalty",
        "Employee Scheduling",
        "Sales Analytics",
      ],
      link: "/products/super-shop",
    },
    {
      id: "cable-network",
      title: "Cable Network Dish Bill Collection Software",
      description: "Specialized solution for cable operators to manage subscriptions and bill collection.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Subscriber Management",
        "Billing Cycles",
        "Payment Tracking",
        "Service Plans",
        "Technician Scheduling",
      ],
      link: "/products/cable-network",
    },
    {
      id: "optics-shop",
      title: "Optics Shop Billing System Software",
      description: "Tailored solution for optical shops to manage inventory, prescriptions, and sales.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Prescription Management",
        "Frame Inventory",
        "Lens Management",
        "Customer Records",
        "Appointment Scheduling",
      ],
      link: "/products/optics-shop",
    },
    {
      id: "sme-trading",
      title: "SME Trading Business Software",
      description: "Comprehensive solution for small and medium trading businesses.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Purchase Management",
        "Sales Management",
        "Inventory Control",
        "Financial Tracking",
        "Customer Management",
      ],
      link: "/products/sme-trading",
    },
    {
      id: "tiles-sanitary",
      title: "Tiles and Sanitary Business Software",
      description: "Specialized solution for tiles and sanitary ware businesses.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Product Catalog",
        "Inventory Management",
        "Sales Processing",
        "Customer Management",
        "Supplier Management",
      ],
      link: "/products/tiles-sanitary",
    },
    {
      id: "footwear-shop",
      title: "Footwear Shop Management Software",
      description: "Tailored solution for footwear retailers to manage inventory and sales.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Size/Style Management",
        "Inventory Control",
        "POS Integration",
        "Customer Loyalty",
        "Sales Reporting",
      ],
      link: "/products/footwear-shop",
    },
    {
      id: "jewelry-management",
      title: "Jewelry Management Software",
      description: "Specialized solution for jewelry stores to manage inventory, sales, and customers.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Precious Metal Tracking",
        "Stone Inventory",
        "Custom Order Management",
        "Customer Profiles",
        "Sales Reporting",
      ],
      link: "/products/jewelry-management",
    },
    {
      id: "food-color-shop",
      title: "Food-Color Shop Management Software",
      description: "Tailored solution for food color and additive businesses.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Product Catalog", "Inventory Management", "Batch Tracking", "Expiry Management", "Sales Reporting"],
      link: "/products/food-color-shop",
    },
    {
      id: "chemical-shop",
      title: "Chemical Shop Management Software",
      description: "Specialized solution for chemical retailers to manage inventory and compliance.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Chemical Inventory",
        "Safety Compliance",
        "Batch Tracking",
        "Customer Management",
        "Supplier Management",
      ],
      link: "/products/chemical-shop",
    },
    {
      id: "hardware-shop",
      title: "Hardware Shop Management Software",
      description: "Complete solution for hardware stores to manage inventory and sales.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Product Catalog",
        "Inventory Management",
        "POS Integration",
        "Customer Accounts",
        "Supplier Management",
      ],
      link: "/products/hardware-shop",
    },
    {
      id: "multi-business",
      title: "Multi-Business Management Software",
      description: "Versatile solution for managing multiple business units under one platform.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Multi-branch Management",
        "Consolidated Reporting",
        "Role-based Access",
        "Centralized Database",
        "Business Unit Analytics",
      ],
      link: "/products/multi-business",
    },
    {
      id: "computer-shop",
      title: "Computer Shop (POS) Management Software",
      description: "Specialized solution for computer and IT equipment retailers.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Hardware Inventory",
        "Software Licensing",
        "Service Management",
        "Customer Database",
        "Sales Reporting",
      ],
      link: "/products/computer-shop",
    },
    {
      id: "mobile-shop",
      title: "Mobile Shop (POS) Management Software",
      description: "Tailored solution for mobile phone retailers to manage inventory and sales.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Device Inventory", "IMEI Tracking", "Accessory Management", "Repair Tracking", "Customer Database"],
      link: "/products/mobile-shop",
    },
    {
      id: "stationery-shop",
      title: "Stationery Shop (POS) Management Software",
      description: "Complete solution for stationery stores to manage inventory and sales.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Product Catalog",
        "Inventory Management",
        "Bulk Order Processing",
        "Customer Accounts",
        "Sales Reporting",
      ],
      link: "/products/stationery-shop",
    },
    {
      id: "electronics-shop",
      title: "Electronics Shop Management Software",
      description: "Specialized solution for electronics retailers to manage inventory and sales.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Product Catalog",
        "Serial Number Tracking",
        "Warranty Management",
        "Customer Database",
        "Sales Reporting",
      ],
      link: "/products/electronics-shop",
    },
    {
      id: "web-hosting",
      title: "Web & Hosting Company Management Software",
      description: "Comprehensive solution for web hosting companies to manage services and clients.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Domain Management",
        "Hosting Package Management",
        "Client Portal",
        "Billing & Invoicing",
        "Support Ticket System",
      ],
      link: "/products/web-hosting",
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
              Explore our comprehensive range of innovative software products designed to streamline your business
              operations and drive growth across various industries.
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

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse by Industry</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Retail",
              "Healthcare",
              "Education",
              "Hospitality",
              "Manufacturing",
              "Real Estate",
              "Financial Services",
              "E-commerce",
              "Telecommunications",
              "Construction",
              "Transportation",
              "Technology",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center border border-gray-100 hover:border-emerald-500 hover:shadow-md transition-all"
              >
                <div className="text-lg font-medium">{category}</div>
              </div>
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
