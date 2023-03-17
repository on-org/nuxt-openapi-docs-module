const EventBusPlugin = (context, inject) => {
  const $auth = true;
  inject('auth', $auth);
  context.$bus = $auth;
};

export default EventBusPlugin;
