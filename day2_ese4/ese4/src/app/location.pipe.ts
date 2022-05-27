import { JsonPipe } from '@angular/common';
import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'location'
})

export class LocationPipe implements PipeTransform {
  
  transform(value: any) {
    return JSON.stringify(value, null,1).replace(/[^a-zA-Z0-:à ]/g, "");
  }
}