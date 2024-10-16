import useAuthStore from '@/store/user';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const onLogout = () => {
    logout();
    navigate('/auth');
  };
  return (
    <nav className='bg-orangeLight '>
      <section className='max-w-6xl mx-auto flex justify-between items-center px-3 py-3'>
        <Link to={`${user?.tipoUsuario === 'ADMIN' ? '/admin/dashboard' : ''}`}>
          <img src='/common/logo-inapp.svg' alt='family one' className='w-9 block md:hidden' />
          <img src='/common/logo-desktop.svg' alt='family one' className=' hidden md:block' />
        </Link>
        <div className='flex items-center gap-6'>
          <Link to={`${user?.tipoUsuario === 'ADMIN' ? '/admin/notificacion' : ''}`} className='hidden md:flex flex-col items-center gap-1'>
            <img src='/dashboard-admin/notification-desktop.svg' alt='notificación' className='w-6 mx-auto' />
            <p>Notificación</p>
          </Link>
          <Link to={`${user?.tipoUsuario === 'ADMIN' ? '/admin/perfil' : ''}`} className='hidden md:flex flex-col items-center gap-1'>
            <img src='/common/perfil.svg' alt='perfil' className='w-7 mx-auto' />
            <p>Perfil</p>
          </Link>
          <button onClick={onLogout} className='flex flex-col md:gap-1'>
            <img src='/common/logout.svg' alt='cerrar sesion' className='w-6 mx-auto' />
            <p className=''>Cerrar sesión</p>
          </button>
        </div>
      </section>
    </nav>
  );
}