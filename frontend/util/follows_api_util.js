export const follow = ids => (
  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: '/api/follows',
    method: 'POST',
    data: { follow: ids }
  })
);

export const unfollow = followId => (
  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: `/api/follows/${followId}`,
    method: 'DELETE'
  })
);