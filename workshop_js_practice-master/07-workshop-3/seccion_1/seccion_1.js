
const your_name = prompt('escribe tu nombre').toLowerCase();
const UserName = your_name.split(' ');
const firstName = UserName[0];
const lastName = UserName[1];
const slice_firt_name = firstName.slice(0, 3);
const slice_second_lastname = lastName.slice(0, 3);
const user_names_concat = slice_firt_name + slice_second_lastname;
const email = user_names_concat + '@myDomain.com';
const user_names_initial = Object.keys(users);

if (user_names_initial.includes(user_names_concat)) {

  let i = 1;

  while (user_names_initial.includes(user_names_concat + i)) {

    i++;


  }
  user_names_concat += i;
  email = user_names_concat + '@myDomain.com';
}

const users = {};

users[user_names_concat] = email;



alert('Username: ' + user_names_concat + '\nEmail: ' + email);