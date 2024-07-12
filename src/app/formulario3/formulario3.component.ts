import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {


  //para inyección de dependencias con FormBuilder
  constructor(private fb: FormBuilder) {

  }


  //getters
  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  //todos los inputs del formulario se definen dentro del objeto.
  // formUser = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required, Validators.email]),
  // });

  //para usar formbuilder y no como arriba...
  formUser = this.fb.group({
    'name':['',Validators.required],
    'email':['',[Validators.required, Validators.email]]
  });



  // name = new FormControl('', Validators.required) ;
  // email = new FormControl('', [Validators.required, Validators.email]);

}
