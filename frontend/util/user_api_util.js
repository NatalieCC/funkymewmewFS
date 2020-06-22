export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
);

export const fetchAllUsers = () => (
    $.ajax({
        method: "GET",
        url: `/api/users`,
    })
);

export const updateUser = (user, id) => {
    //debugger 
    return ($.ajax({
        method: "PATCH",
        url: `/api/users/${id}`,
        data: user,
        contentType: false,
        processData: false
    })
    )
};