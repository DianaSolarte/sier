import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
//Se toman 3 parametros array, page_size:num maximo de elementos a mostrar por pagina,
//page_number: es el nùmero de pagina que se mostrara
  transform(array: any[], page_size: number | string, page_number: number):any[] {

    if (!array.length) return[] // la función comprueba si la lista de elementos es vacía y si es así, devuelve una matriz vacía.
    if (page_size === 'all' ) { //  si el valor de page_size es 'all', devuelve todo el array, es decir, no realiza la paginación.
  }
  //Si page_size no es 'all', se inicializa en 5 si no se proporciona otro valor y page_number se inicializa en 1 si no se proporciona otro valor.
    page_size = page_size || 5
    page_number = page_number || 1
    --page_number
    //@ts-ignore
    return array.slice(page_number * page_size, (page_number + 1) * page_size)
  }
//la función devuelve una porción de la matriz array que comienza en el índice page_number * page_size y tiene una longitud de page_size

}
