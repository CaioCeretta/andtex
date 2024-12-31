import ImageSlider from '@/components/ImagesSlider';
import OrcamentoModal from '@/components/OrcamentoModal';
import { Button } from '@/components/ui/button';
import * as Dialog from '@/components/ui/dialog';
import { formatProductName } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Category {
  id: number
  name: string
}
  interface Product {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    images: string[];
  }

  interface Category {
    id: number;
    name: string;
  }

  const Produto: React.FC = () => {
    const { productName } = useParams<{ productName: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [categoryName, setCategoryName] = useState<string>('');

    useEffect(() => {
      const fetchProductAndCategories = async () => {
        // Since the data is local, you can just use the imported JSON data
        const response = await fetch('/data/products.json')
        const data = await response.json()

        const products = data.produtos;
        const categories = data.categories;

        const productData = products.find((prod: Product) => prod.name === productName);
        setProduct(productData || null);

        if (productData) {
          const category = categories.find((cat: Category) => cat.id === productData.categoryId);
          setCategoryName(category ? category.name : 'Unknown Category');
        }
      };

      fetchProductAndCategories();
    }, [productName]);


    if (!product) {
      return <div>Loading...</div>;
    }

    const formattedProductName = formatProductName(product.name);

  return (
    <div className="max-w-[1480px] mb-10 mx-auto">
      <div className="max-w-[1440px] w-full h-[780px] m-auto py-16 px-8 relative group">
        <ImageSlider images={product.images} />
        <span className="mt-1 absolute bottom-3 block font-medium text-md text-yellow-800">
          {formatProductName(categoryName)}
        </span>
      </div>
      <div className="flex flex-col items-center mt-2">
        <h1 className="text-4xl font-bold text-blue-text mb-5">
          {formattedProductName}
        </h1>
        <div className="flex-1">
          <p className="mt-1 px-10 text-md leading-loose mb-10 text-yellow-950">
            {product.description}
          </p>
        </div>
        <Dialog.Dialog>
          <Dialog.DialogTrigger asChild>
            <Button
              size="lg"
              type="button"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium w-[50%] flex mx-auto justify-center"
            >
              Solicitar Orçamento
            </Button>
          </Dialog.DialogTrigger>
          <OrcamentoModal product={{
            name: formatProductName(product.name)
          }}/>
        </Dialog.Dialog>
      </div>
    </div>
  );
};

export default Produto;