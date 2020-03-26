import { Component, OnInit } from '@angular/core';
import { isAndroid } from 'tns-core-modules/ui/page/page';
import { NativeAPIFactory } from '~/app/shared/libs/native-api/native-api.factory';


declare let java: any;
declare let pow: any;

@Component({
  selector: 'ns-native-api',
  templateUrl: './native-api.component.html',
  styleUrls: ['./native-api.component.css']
})
export class NativeAPIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    //That's don't recommended
    if (isAndroid){
      this.setNumericTypeAndroid();
    } else {
      this.setNumericTypesIOS();
    }

    //That's recommended to implement "Factory Method Pattern Design"
    const powResult = NativeAPIFactory.getNativeAPIInstance().pow(3.2, 5);
    console.log(`Android/iOS Factory pow(3.2, 5) = ${powResult}`);

    const booleanValue = NativeAPIFactory.getNativeAPIInstance().getBoolValueOfString("0");
    console.log(`Android/iOS booleanValue of 'Y' is: ${booleanValue}`);
    
  }

  setNumericTypesIOS(){
    console.log(`iOS pow(2.5, 3) = ${pow(2.5, 3)}`);
  }

  setNumericTypeAndroid(){
    console.log(`Android pow(3, 4) = ${java.lang.Math.pow(3, 4)}`);
  }

}
