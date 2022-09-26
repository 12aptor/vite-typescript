import { useEffect, useState } from "react"
import { getProductService } from "../services/productServices"

interface IProducts {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export const Products = () => {

  const [products, setProducts] = useState<IProducts[]>([])

  useEffect(() => {
    const getData = async () => {
      const data = await getProductService()
      setProducts(data.products)
    }
    getData()
  }, [])

  console.log(products)

  return (
    <div>
      {
        products.length > 0 &&
        products.map((product) => (
          <div>{product.title}</div>
        ))
      }
    </div>
  )
}