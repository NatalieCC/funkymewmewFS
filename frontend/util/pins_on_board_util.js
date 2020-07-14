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
// export const deleteBoardPin = boardPinId => (
//     $.ajax({
//         method: "DELETE",
//         url: `/api/boards_pins/${boardPinId}`
//     })
// );

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