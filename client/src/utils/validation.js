export default function validation (inputs){
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexpassword =  /^(?=\w*\d)\S{6,10}$/;
  const regexnumber =  /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i

  if(!regexEmail.test(inputs.email)){
      errors.email = 'Debe ser correo electronico'
  }
  if(!inputs.email){
      errors.email = 'No puede ser vacio'
  }
  if(inputs.email.length > 35){
      errors.email = 'Debe tener menos de 35 caracteres'
  }
  if(!regexnumber.test(inputs.password)){
      errors.password = "La contrasena debe tener un numero"
  }
  if(!regexpassword.test(inputs.password)){
      errors.password = "Debe tener entre 6 y 10 caracteres"
  }

  return errors;

}