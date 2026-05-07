import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/dashboard/DashboardPage'
import ClientsListPage from '../pages/clients/ClientsListPage'
import OrdersListPage from '../pages/orders/OrdersListPage'
import UsersListPage from '../pages/users/UsersListPage'
import LoginPage from '../pages/auth/LoginPage'
import ProtectedLayout from '../components/layout/ProtectedLayout'
import PrivateRoute from './PrivateRoute'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/clients" element={<ClientsListPage />} />
            <Route path="/orders" element={<OrdersListPage />} />
            <Route path="/users" element={<UsersListPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}