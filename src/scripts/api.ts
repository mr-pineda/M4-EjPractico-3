// lógica para consumir los datos
import { doctorInfo } from '../types/data';

export async function obtenerdoctorInfo() {
  try {
    const respuesta = await fetch('/src/data/doctors.json');
    if (!respuesta.ok) {
      return [];
    }
    const datos = (await respuesta.json()) as doctorInfo[];
    return datos;
  } catch (error) {
    console.error('Error al obtener los doctores:', error);
    return [];
  }
}
