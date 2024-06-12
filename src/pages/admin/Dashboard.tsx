import useAuth from '../../hooks/useAuth'

export default function Dashboard() {
  const { currentUser, logout } = useAuth()

  async function handleLogout() {
    await logout()
  }

  return (
    <>
      <div
        className="
          relative
          flex
          flex-column
          min-w-0
          bg-white
          box-border
          border
          border-opacity-25
          rounded-sm"
      >
        <div className="flex-1 p-[1.25rem]">
          <h2 className="text-justify mb-1">Admin Dashboard</h2>
          <strong>Email: </strong> {currentUser && currentUser.email}
        </div>
      </div>

      <div className="w-100 text-center mt-2">
        <button type="button" className="" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </>
  )
}
