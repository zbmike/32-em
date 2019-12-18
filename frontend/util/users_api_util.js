export const fetchUser = userId => (
    $.ajax({
        beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
        url: `/api/users/${userId}`,
        method: 'GET'
    })
);