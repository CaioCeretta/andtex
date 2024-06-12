import { FormEvent, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Button from './Button'
import { Heading } from './Heading'

export default function Login() {
  const navigate = useNavigate()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { signIn, currentUser } = useAuth()

  useEffect(() => {
    console.log(currentUser)

    if (currentUser) {
      navigate('/admin/dashboard')
    }
  }, [])

  const [loading, setIsLoading] = useState<boolean>(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (emailRef.current?.value && passwordRef.current?.value) {
      try {
        setIsLoading(true)

        await signIn(emailRef.current.value, passwordRef.current.value)

        if (currentUser) {
          navigate('/admin/dashboard')
        } else {
          toast.error('Failed to sign in')
        }
      } catch {
        return toast.error('Failed to sign in')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="flex flex-col border border-solid border-black border-opacity-25">
      <div className="flex-1 p-[1.25rem]">
        <Heading title="Logar" center />
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

          <Button type="submit" disabled={loading} label="Entrar" />
          <div className="w-full text-center mt-2">
            Não possui uma conta?{' '}
            <Link className="cursor-pointer underline" to="/registrar">
              Cadastrar
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
