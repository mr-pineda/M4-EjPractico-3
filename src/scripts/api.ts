// lógica para consumir los datos
import { doctorInfo } from '../types/data'; 

export async function obtenerdoctorInfo(): Promise<doctorInfo[]> {
    try {
        const respuesta = await fetch('/src/data/doctors.json');
        if (!respuesta.ok) {
            throw new Error('Error al cargar los datos');
        }
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener los doctores:', error);
        return [];
    }    
}