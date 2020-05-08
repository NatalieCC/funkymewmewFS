export const fetchAllPins = () => {
    return $.ajax({
        method: 'GET',
        url: `api/pins`
    });
};

export const fetchPin = pinId => (
    $.ajax({
        method: 'GET',
        url: `/api/pins/${pinId}`
    })
)