import { AppLayout } from '@/layouts/app-layout';
import { useNavigate } from 'react-router-dom';

export default function FollowUpFamilies () {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <section className='h-full md:bg-grayDefault md:grid'>
        <div className='p-0 grid md:flex md:flex-col gap-6 max-w-6xl mx-auto px-2 md:px-4 md:py-4 md:mt-[10vh] md:h-fit md:bg-white md:w-[650px] md:rounded-lg md:border-0 md:mx-auto'>
          <div className='flex flex-col gap-4'>
            <div className='flex md:flex-col gap-2 md:gap-5'>
              <img onClick={() => navigate('/admin/dashboard')} src='/common/arrow-left.svg' alt='Regresar a la página principal' className='self-start pt-2 md:pt-0 hover:cursor-pointer' />
              <p className='self-center -mb-2 md:-mb-0 text-2xl md:w-full'>Seguimiento de Familias</p>
            </div>
            {/* <p className='px-2 md:px-0 text-lf'>Estas son las familias a las cuales se les debe realizar seguimiento:</p> */}
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-2xl md:text-base text-center py-6 mt-[20%] md:mt-0'>No tienes <br className='block md:hidden'/> seguimientos <br className='block md:hidden'/> pendientes</p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}