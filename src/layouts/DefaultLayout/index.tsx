import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Header/Navbar/Navbar'
import { LayoutContainer, Main } from './styles'

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<Navbar />
			<Main>
				<Outlet />
			</Main>
		</LayoutContainer>
	)
}
