import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useUserStore from './store';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoIosEyeOff, IoIosEye } from 'react-icons/io';

const PersonalizeCredentialsAdmin = () => {
  const schema = yup.object({
    username:
    yup.string('Introduce nombre de usuario valido')
      .required('Introduce nombre de usuario valido')
      .min(3, 'El nombre de usuario no puede tener menos de 3 caracteres')
      .max(25, 'El nombre de usuario no puede tener más que 25 caracteres')
      .matches(
        /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$/,
        'El nombre de usuario debe contener al menos una letra y solo puede incluir letras, números, _ y -'
      ),
    password:
    yup.string('Introduce contraseña valida')
      .required('Introduce contraseña valida')
      .min(8, 'Una contraseña tiene que tener un minimo de 8 caracteres')
      .max(35, 'Una contraseña no puede tener que tener más que 35 caracteres')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'La contraseña debe contener al menos una letra, un número y un carácter especial'),
    confirmPassword: yup
      .string('Introduce tu contraseña de nuevo')
      .required('Tienes que introducer tu contraseña de nuevo')
      .oneOf([yup.ref('password')], 'La contraseña y la confirmación deben ser las mismas'),
  });
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: ''
    }
  });
  const { register: registerUser, loading } = useUserStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit = async (data) => {
    await registerUser(data);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Link className='absolute z-30 top-8 left-4' to={'/auth/admin/ingresar'}>
        <MdArrowBackIosNew />
      </Link>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl text-gray-900">
            Ahora, personaliza tus credenciales
          </h2>
        </div>
        <Form {...form}>
          <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="rounded-md -space-y-px flex flex-col gap-4">
              <div className='flex flex-col gap-2'>
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Escribe tu nombre de usuario"
                  {...form.register('username', { required: true })}
                />
                {form.formState.errors && <p className="text-red-500 text-sm">{form?.formState?.errors?.username?.message}</p>}
              </div>
              <div className='flex flex-col gap-2 relative'>
                <Label htmlFor="password">Nueva contraseña</Label>
                <IoIosEyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className={`${
                    !showPassword ? 'block' : 'hidden'
                  } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
                />
                <IoIosEye
                  onClick={() => setShowPassword(!showPassword)}
                  className={`${
                    showPassword ? 'block' : 'hidden'
                  } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
                />
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Escribe tu nueva contraseña"
                  {...form.register('password', { required: true })}
                />
                {form.formState.errors && <p className="text-red-500 text-sm">{form?.formState?.errors?.password?.message}</p>}
              </div>
              <div className='flex flex-col gap-2 relative'>
                <Label htmlFor="confirmPassword">Repite contraseña</Label>
                <IoIosEyeOff
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`${
                    !showConfirmPassword ? 'block' : 'hidden'
                  } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
                />
                <IoIosEye
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`${
                    showConfirmPassword ? 'block' : 'hidden'
                  } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
                />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text': 'password'}
                  placeholder="Repite tu nueva contraseña"
                  {...form.register('confirmPassword', { required: true })}
                />
                {form.formState.errors && <p className="text-red-500 text-sm">{form?.formState?.errors?.confirmPassword?.message}</p>}
              </div>
            </div>
            <div>
              <Button
                type="submit"
                disabled={loading}
                variant="default"
                className="w-full mt-4 py-6"
              >
                {loading ? 'Cargando...' : 'Iniciar Sesión'}
              </Button>
            </div>
          </form>
        </Form>
      </div >
    </div >
  );
};

export default PersonalizeCredentialsAdmin;
