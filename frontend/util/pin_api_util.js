export const fetchAllPins = (page) => {
    return $.ajax({
        method: 'GET',
        url: `api/pins`,
        data: { page }
    });
};