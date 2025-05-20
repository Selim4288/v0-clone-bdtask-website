import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+880 1234 567890</p>
              <p className="text-gray-600">+880 9876 543210</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@tlbsoft.com</p>
              <p className="text-gray-600">support@tlbsoft.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Software Avenue</p>
              <p className="text-gray-600">Tech Park, Dhaka, Bangladesh</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
              <p className="text-gray-600">Saturday: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We look forward to
                hearing from you!
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email *
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="+1 (123) 456-7890" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom-software">Custom Software Development</SelectItem>
                      <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                      <SelectItem value="consulting">IT Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your project or inquiry..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <p className="text-gray-600 mb-8">
                Visit our office to meet our team and discuss your project in person. We're conveniently located in the
                heart of the city.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923991057358!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">How quickly can you respond to my inquiry?</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, you
                  can also reach us by phone.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Do you offer remote services?</h3>
                <p className="text-gray-600">
                  Yes, we offer remote services to clients worldwide. We use various collaboration tools to ensure
                  effective communication and project management regardless of location.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">How do you handle project pricing?</h3>
                <p className="text-gray-600">
                  Our pricing depends on the scope, complexity, and requirements of your project. After an initial
                  consultation, we provide a detailed quote tailored to your specific needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Can I request a demo of your products?</h3>
                <p className="text-gray-600">
                  We offer demos for all our products. You can request a demo through our contact form, and our team
                  will schedule a convenient time for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Contact us today to discuss your project requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-6 py-2 rounded-md">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-600 px-6 py-2 rounded-md">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
