import { FormEvent, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Button from './Button'
import { Heading } from './Heading'

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { signUp, currentUser } = useAuth()

  useEffect(() => {
    console.log(currentUser)
  }, [])

  const [loading, setIsLoading] = useState<boolean>(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (passwordConfirmRef.current?.value !== passwordRef.current?.value) {
      return toast.error('Passwords do not match')
    }

    if (
      emailRef.current?.value &&
      passwordConfirmRef.current?.value &&
      passwordRef.current?.value
    ) {
      try {
        setIsLoading(true)
        await signUp(emailRef.current.value, passwordRef.current.value)
      } catch {
        return toast.error('Failure in the account creation')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="flex flex-col border border-solid border-black border-opacity-25">
      <div className="flex-1 p-[1.25rem]">
        <Heading title="Criar sua Conta" center />
        {currentUser && currentUser.email}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="" className="inline-block">
              E-mail
            </label>
            <input
              ref={emailRef}
              type="text"
              name=""
              className="w-full pt-[0.375rem] px-[0.75rem]
                text-xs leading-6 text-gray-600 transition
              bg-[#FFE] border border-gray-200 rounded-sm"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="inline-block">
              Senha
            </label>
            <input
              ref={passwordRef}
              type="password"
              name=""
              className="w-full pt-[0.375rem] px-[0.75rem]
                text-xs leading-6 text-gray-600 transition
              bg-[#FFE] border border-gray-200 rounded-sm"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="inline-block">
              Confirmação da Senha
            </label>
            <input
              ref={passwordConfirmRef}
              type="password"
              name=""
              className="w-full pt-[0.375rem] px-[0.75rem]
                text-xs leading-6 text-gray-600 transition
              bg-[#FFE] border border-gray-200 rounded-sm"
            />
          </div>
          <Button type="submit" disabled={loading} label="Registrar" />
          <div className="w-full text-center mt-2">
            Já possui uma conta?{' '}
            <Link className="underline cursor-pointer" to="/login">
              Entrar
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
