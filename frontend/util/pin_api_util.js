export const fetchAllPins = (page) => {
    return $.ajax({
        method: 'GET',
        url: `api/pins`,
        //data: page,
        //we pass page down in a query string
        data: {page:page}
    });
};

export const fetchPin = pinId => (
    $.ajax({
        method: 'GET',
        url: `/api/pins/${pinId}`
    })
)

export const createPin = (pin) => {
    //debugger
    return $.ajax({
        method: 'POST',
        url: '/api/pins',
        data: pin,
        contentType: false,
        processData: false,
    })
}

export const updatePin = pin => (
    $.ajax({
        method: 'PATCH',
        url: `/api/pins/${pin.id}`,
        data: { pin }
    })
)

export const deletePin = pinId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/pins/${pinId}`
    })
)

export const fetchSearchPins = keyword => (
    $.ajax({
        method: 'GET',
        url: `/api/pins`,
        data: { keyword: keyword }   
    })
);
