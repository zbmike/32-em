export const signup = user => (
  $.ajax({
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);
  
export const logout = () => (
  $.ajax({
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    url: '/api/session',
    method: 'DELETE'
  })
);