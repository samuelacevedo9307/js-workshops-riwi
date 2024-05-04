
// const your_name = prompt('escribe tu nombre').toLowerCase();
// const user_name = your_name.split(' ');
// const firstName = user_name[0];
// const lastName = user_name[1];
// const slice_firt_name = firstName.slice(0, 3);
// const slice_second_lastname = lastName.slice(0, 3);
// const user_names_concat = slice_firt_name + slice_second_lastname;
// const user_email = user_names_concat + '@myDomain.com';
// const user_names_initial = Object.keys(the_users_object);

// if (user_names_initial.includes(user_names_concat)) {

//   let i = 1;

//   while (user_names_initial.includes(user_names_concat + i)) {

//     i++;


//   }
//   user_names_concat += i;
//   user_email = user_names_concat + '@myDomain.com';
// }

// const the_users_object = {};

// the_users_object[user_names_concat] = user_email;



// alert('user_name: ' + user_names_concat + '\nuser_email: ' + user_email);

//------------------------SECCION1---------------------------------------

// const the_users_object = {};

// const name_complete = prompt('ingrese su primer nombre y primer apellido');
// function create_user_email () {
  
//   const [name_array, surname_array] = name_complete.toLowerCase().split(' ');
//   const nameInitial =  name_array.slice(0, 3);
//   const surnameInitial = surname_array.slice(0, 3);
  
//   let user_name = nameInitial + surnameInitial;

//   if (the_users_object[user_name]) {
    
//     for (let i= 1; the_users_object[user_name + i] ; i++) {}
    
//     user_name += i;
//   }
//   const user_email = user_name + '@Domain.com';
  
//   the_users_object[user_name] = user_email;

//   console.log(`su nickname : ${user_name}`);

//   console.log(`su email: ${user_email}`);
// }
// create_user_email();

//-------------------------RETO3---------------------------------------
// const user_email_input = prompt("ingresa tu email:");

// if (true_email(email_input)) {

//   alert("Email : " + email_input);

// } else {

//   alert("Porfavor, ingrese un correo electrónico nuevamente.");

// }

// function true_email(email) {
//   const caracter_format = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//   return caracter_format.test(email);
// }

//-------------------------RETO4---------------------------------------
// let events_list = [];

// function create_event() {

//   const name_event = prompt("Ingrese el nombre del evento:");
//   const date_event = prompt("Ingrese la fecha del evento (formato YYYY-MM-DD):");
//   const description = prompt("DEseas agregar algo al evento ?:");
//   const id_event = events_list.length + 1;

//   const new_event = {

//     id_event,
//     name_event: name_event.trim().toLowerCase(),
//     date_event,
//     description: description.trim()

//   };
//   events_list.push(new_event);

//   console.log( `el evento fue creado: ${new_event.name_event}`);

// }

// function watch_events() {

//   console.log( "Estos son tus eventos:");
//   events_list.forEach(event => {
    
//     console.log(`  ${event.id}. ${event.name_event} - ${event.date} - ${event.description}`);

//   });

//   const search_event = prompt("Ingrese el nombre del evento a buscar (opcional):");

//   if (search_event) {
//     const searchResults = events_list.filter(event => {

//       return event.name_event.includes(search_event.trim().toLowerCase()); 

//     });

//     if (searchResults.length > 0) {
//       console.log(`Resultados de búsqueda para "${search_event}":`);

//       searchResults.forEach(event => {

//         console.log(`  ${event.id}. ${event.name_event} - ${event.date} - ${event.description}`);

//       });
//     } else {
//       console.log(`No se encontraron eventos que coincidan con la búsqueda`);
//     }
//   }
// }

// function actually_event() {
//   const event_id_actual = parseInt(prompt("Ingrese el identificador del evento a actualizar:"));
//   const eventToUpdate = events_list.find(event => event.id === event_id_actual);

//   if (eventToUpdate) {

//     const newName = prompt(`Ingrese el nuevo nombre del evento (actual: ${eventToUpdate.name}):`);
//     const newDate = prompt(`Ingrese la nueva fecha del evento (actual: ${eventToUpdate.date}):`);
//     const newDescription = prompt(`Ingrese la nueva descripción del evento (actual: ${eventToUpdate.description}):`);

//     eventToUpdate.name = newName.trim().toLowerCase();
//     eventToUpdate.date = newDate;
//     eventToUpdate.description = newDescription.trim();

//     console.log(`Evento actualizado con éxito: ${eventToUpdate.name}`);

//   } else {

//     console.log(`No se encontró el evento con el identificador ${event_id_actual}`);

//   }
// }

// function erase_event() {

//   const event_id_actual = parseInt(prompt("Ingrese el identificador del evento a eliminar:"));

//   const event_index = events_list.findIndex(event => event.id === event_id_actual); //me trae el primer indice del elemento  y lo cguarda en event

//   if (event_index !== -1) {  //
    
//     events_list.splice(event_index, 1);

//     console.log(`Evento eliminado con éxito`);

//   } else {

//     console.log(`No se encontró el evento con el identificador ${event_id_actual}`);

//   }
// }

// while (true) {

//   console.log("Eventos");
//   console.log("1- Crear un nuevo evento");
//   console.log("2- buscar eventos");
//   console.log("3- Actualizar un evento(reemplazar)");
//   console.log("4- Eliminar un evento");
//   console.log("5- Salir");

//   const option = parseInt(prompt("Ingrese una opción:"));//intento switch en while 
//   switch (option) {

//     case 1:
//       create_event();
//       break;
//     case 2:
//       watch_events();
//       break;
//     case 3:
//       actually_event();
//       break;
//     case 4:
//       erase_event();
//       break;
//     case 5:
//       console.log("...");
//       return;
//     default:

//       console.log("Intentalo nuevamente");

//   }
// }