// src/pages/CategoryPage.tsx
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { capitalizeString } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsByCategory from './ProductsByCategory';


interface Product {
  id: number
  name: string;
  description: string;
  categoryId: number;
  images: string[];
}

interface Category {
  id: number;
  name: string;
}

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();

        const category = data.categories.find((cat: Category) => cat.name === categoryName);
        const products = data.produtos.filter((prod: Product) => prod.categoryId === category.id);

        

        setCategory(category);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchProducts();

    
  }, [categoryName]);

  if (!category) {
    return <div>Categoria não encontrada</div>;
  }


  return (
    <MaxWidthWrapper className="mt-10">
      <h1 className="mb-3 font-semibold text-2xl text-blue-text">
        {capitalizeString(categoryName!)}
      </h1>
      <div className="flex gap-5">
        <ProductsByCategory products={products} />
      </div>
    </MaxWidthWrapper>
  )
}