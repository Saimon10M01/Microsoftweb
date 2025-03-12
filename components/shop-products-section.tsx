import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronRight } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
  isNew?: boolean
}

export default function ShopProductsSection() {
  const products: Product[] = [
    {
      id: 1,
      name: "Surface Pro 9",
      price: "1,099.99€",
      image: "/placeholder.svg?height=200&width=200",
      category: "Dispositivos",
      isNew: true,
    },
    {
      id: 2,
      name: "Xbox Series X",
      price: "499.99€",
      image: "/placeholder.svg?height=200&width=200",
      category: "Gaming",
    },
    {
      id: 3,
      name: "Microsoft 365 Personal",
      price: "69.99€/año",
      image: "/placeholder.svg?height=200&width=200",
      category: "Software",
    },
    {
      id: 4,
      name: "Surface Laptop 5",
      price: "999.99€",
      image: "/placeholder.svg?height=200&width=200",
      category: "Dispositivos",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-2 dark:text-white">Comprar productos</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Descubre los dispositivos y servicios más recientes de Microsoft
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-contain p-4"
                />
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-[#0078d4] text-white text-xs font-medium px-2 py-1 rounded-full">
                    Nuevo
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.category}</div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{product.name}</h3>
                <p className="text-[#0078d4] dark:text-blue-400 font-bold mb-4">{product.price}</p>
                <div className="flex space-x-2">
                  <Button className="bg-[#0078d4] hover:bg-[#006cbe] flex-1 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar
                  </Button>
                  <Button variant="outline" className="dark:text-white dark:border-gray-600">
                    Detalles
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="group dark:text-white dark:border-gray-600">
            <span>Ver todos los productos</span>
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

