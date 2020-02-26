export const like = ids =>
  $.ajax({
    beforeSend: function(xhr) {
      xhr.setRequestHeader(
        "X-CSRF-Token",
        $('meta[name="csrf-token"]').attr("content")
      );
    },
    url: "/api/likes",
    method: "POST",
    data: { like: ids }
  });

export const unlike = likeId =>
  $.ajax({
    beforeSend: function(xhr) {
      xhr.setRequestHeader(
        "X-CSRF-Token",
        $('meta[name="csrf-token"]').attr("content")
      );
    },
    url: `/api/likes/${likeId}`,
    method: "DELETE"
  });
