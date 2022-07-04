function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  document.body.append(ul);

  friends.forEach(element => {
    let li  = ul.insertAdjacentHTML('beforeEnd', `<li>${element.firstName + ' ' + element.lastName + '\n'}</li>`);
  });

  return ul;
}
