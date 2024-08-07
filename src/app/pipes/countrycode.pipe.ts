import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
  standalone: true
})
export class CountrycodePipe implements PipeTransform {

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1563195625.
  transform(phoneNumber: number, countryCode?: string): string {
    if(countryCode=="USA"){
      return "+1 " + phoneNumber;
    }
    else{
      return "+91 " + phoneNumber;
    }
  }

}
