import axios from 'axios';
import { AxiosBase } from '@/common/axios';

export const adminProfileApi = async (values) => {
  const { id, nombre, apellido, correo } = values;
  try {
    const response = await AxiosBase.put(`/usuarios/${id}`, { nombre, apellido, correo });
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.status >= 400 && error.status < 500
      ? 'No se pudo actualizar su perfil'
      : 'Un error ha ocurrido';
  }
};

export const createUserApi = async (values) => {
  try {
    const response = await AxiosBase.post('/auth/register', values);
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) &&
      error.status >= 400 &&
      error.status < 500
      ? 'No se pudo crear el usuario'
      : 'Un error ha ocurrido';
  }
};

export const sendUserDataApi = async (values) => {
  const { correo, contrasenaHash } = values;
  try {
    const response = await AxiosBase.post(`/email/mensaje-registro?email=${correo}`, { contrasenaHash });
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) &&
      error.status >= 400 &&
      error.status < 500
      ? 'No se pudo crear el usuario'
      : 'Un error ha ocurrido';
  }
};