export const fetchPinsOnBoards = (boardId) => {
    return $.ajax({
        method: 'GET',
        url: `api/pins_on_boards/${boardId}`
    });
};

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