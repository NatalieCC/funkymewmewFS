// Save pin to board
// pinOnBoard appears in Chrom network Form Data header
// its controller requires :pinsOnBoard
export const savePinOnBoard = pinsOnBoard => (
    $.ajax({
        method: "POST",
        url: `/api/pins_on_boards`,
        data: { pinsOnBoard }
    })
);

//delete pin from board
export const deletePinOnBoard = pinOnBoard => {
    
    return $.ajax({
        method: "DELETE",
        url: `/api/pins_on_boards/`,
        data: { pinsOnBoard: pinOnBoard }
    })
};

// export const fetchBoardIdFromPinId = pin_id => {
//     debugger
//     return $.ajax({
//         method: "GET",
//         url: `/api/pins_on_boards?pin_id=${pin_id}`,
//         // data: { pin_id }
//     })
// };

// class Name {

//     constructor() {
//         this.firstName = "fisrt"
//         this.lastName = "last"
        
//     }

// }

// class Cat  {


//     constructor(colorArg) {
        
//         this.name = "my name"
//         this.color = colorArg
//         this.age = 20
//     }

    
// }
// dean = Cat.new
// dean.name