import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate' // El nombre del Pipe
})
export class PaginatePipe implements PipeTransform {

  // Se implementa la interfaz PipeTransform
  transform(array: any[], page_size: number, page_number: number): any[] {
    // Si el array de entrada no existe o está vacío, se devuelve un array vacío
    if (!array || array.length === 0) {
      return [];
    }
    // Si el tamaño de página es -1, se devuelve el array completo sin paginar
    if (page_size === -1) {
      return array;
    }
    // Si no se proporcionan los parámetros, se utiliza el tamaño de página por defecto de 10 y el número de página por defecto de 1
    page_size = page_size || 10;
    page_number = page_number || 1;

    // Se corrige el índice del número de página
    --page_number;

    // Se utiliza el método slice para obtener el subconjunto de elementos del array
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }
}
