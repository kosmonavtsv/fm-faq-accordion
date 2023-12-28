// The “behavior” pattern
// https://javascript.info/event-delegation#the-behavior-pattern
document.addEventListener('click', function(event) {
  const id = event.target.dataset.expandId;
  if (!id) return;

  const elem = document.getElementById(id);
  const expand = event.target.getAttribute('aria-expanded') !== 'true';

  event.target.setAttribute('aria-expanded',expand);
  elem.setAttribute('aria-hidden', !expand);
});