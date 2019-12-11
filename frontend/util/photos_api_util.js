export const fetchPhotos = () => (
  $.ajax({
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    url: '/api/photos',
    method: 'GET'
  })
);

export const createPhoto = photo => (
  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: '/api/photos',
    method: 'POST',
    data: { photo }
  })
);