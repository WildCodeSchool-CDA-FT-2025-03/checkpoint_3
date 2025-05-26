import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col items-center justify-between lg:h-screen bg-auth-gradient">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}