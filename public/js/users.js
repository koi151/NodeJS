/* Handle event add friend */
const listAddFriendBtn = document.querySelectorAll('[btn-add-friend]');
if (listAddFriendBtn.length > 0) {
  listAddFriendBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.box-user').classList.add('add');

      const userId = btn.getAttribute('btn-add-friend');
      socket.emit('USER_ADD_FRIEND', userId);
    })
  })
}
/* End handle event add friend */

/* Handle event cancel friend request */
const listCancelFriendBtn = document.querySelectorAll('[btn-cancel-friend]');
if (listCancelFriendBtn.length > 0) {
  listCancelFriendBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.box-user').classList.remove('add');

      const userId = btn.getAttribute('btn-cancel-friend');
      socket.emit('USER_CANCEL_FRIEND', userId);
    })
  })
}
/* End handle event cancel friend request */

/* Handle event refuse friend request */
const listRefuseFriendBtn = document.querySelectorAll('[btn-refuse-friend]');
if (listRefuseFriendBtn.length > 0) {
  listRefuseFriendBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.box-user').classList.add('refuse');

      const userId = btn.getAttribute('btn-refuse-friend');
      socket.emit('USER_REFUSE_FRIEND', userId);
    })
  })
}
/* End handle event refuse friend request */
