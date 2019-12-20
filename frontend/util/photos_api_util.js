export const fetchPhotos = filters => (
  $.ajax({
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    url: '/api/photos',
    method: 'GET',
    data: { filters }
  })
);

export const createPhoto = formData => (
  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: '/api/photos',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const fetchPhoto = photoId => (
  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: `/api/photos/${photoId}`,
    method: 'GET'
  })
);