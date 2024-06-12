import { useRef, useState } from 'react'

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Button from '../../components/Button'
import CategoryInput from '../../components/inputs/CategoryInput'
import Input from '../../components/inputs/Input'
import { categories } from '../../utils/categories'
import { addProduct } from '../../utils/firebase.utils'
import FormWrap from './FormWrap'
import { Heading } from 'lucide-react'

export default function AddProduct() {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      description: '',
      price: '',
      category: '',
    },
  })

  type ProductDataType = {
    name: string
    description: string
    price: number
    category: string
  }

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
  //   event.preventDefault()

  //   const files = event.target.files

  //   // setSelectedFiles(files)

  //   setCustomValue('images', files)
  // }

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    /* Empty */
    setIsLoading(false)

    console.log(data)

    if (!data.category) {
      setIsLoading(false)
      return toast.error('Categoria não selecionada')
    }

    const product = await addProduct(data)

    console.log(product)

    // if (!data.images || data.images.length === 0) {
    //   setIsLoading(false)
    //   return toast.error('Não foi inserida imagem')
    // }
  }

  const categoryW = watch('category')

  return (
    <FormWrap>
      <Heading title="Adicionar Produto" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <div className="mb-2 font-semibold">Selecione uma categoria</div>
      <div className="grid max-h-[50vh] grid-cols-2 gap-3 overflow-y-auto md:grid-cols-3">
        {categories.map((category) => {
          return (
            <CategoryInput
              label={category.label}
              onClick={(category) => setCustomValue('category', category)}
              key={category.label}
              selected={categoryW === category.label}
            />
          )
        })}
      </div>

      <div className="grid max-v-[50h] gap-3">
        <div className="mb-2 font-semibold">Selecione as imagens</div>
        <label htmlFor="imagem"></label>
        <input
          type="file"
          ref={fileInputRef}
          // onChange={handleFileChange}
          name="imagem"
          id="fileInput"
          className="hidden"
          multiple
        />
        <label
          htmlFor="fileInput"
          className="text-[#023146] bg-[#f8f9fa] border border-[#023146] p-2 rounded-md cursor-pointer"
        >
          Selecione as imagens
        </label>
      </div>

      <Button
        label={isLoading ? 'Carregando' : 'Adicionar Produto'}
        onClick={handleSubmit(onSubmit)}
      />
    </FormWrap>
  )
}
