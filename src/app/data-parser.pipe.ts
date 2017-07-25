import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataParser'
})
export class DataParserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let columns = args.columns.map(col => col.key)

    if (value.length > 0) {
      value = value.map(item => columns.map(col => item[col]))
    }

    return value
  }

}
