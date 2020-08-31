# [mewTrest](https://funkymewmew.herokuapp.com/#/)
mewTrest is a A visual discovery engine that allows users to connect and share ideas in the form of images inspired by [Pinterest](https://www.pinterest.com/). mewTrest is built on a Ruby on Rails backend, utilizing PostgreSQL and AWS S3 for data storage. React and Redux are the main libraries used for the frontend, along with HTML and CSS, with Heroku used for app deployment.

<p align="center">
  <img src="https://i.imgur.com/yhA8Jh0.png" width="85%" />
</p>


## Technologies
* Ruby on Rails
* Javascript
* React.js
* Redux.js
* HTML5
* CSS3
* PostgreSQL
* Amazon Web Services (AWS S3)
* Heroku


## Feature Highlights

* Responsive display
* Logged in users can complete full CRUD cycle for Boards and Pins or save Pins from other users' Boards
* User authentication built using backend Rails validations with regex and secure BCrypt password hashing
* Optimized minimal server load with cloud-based image storage via Rails ActiveStorage and Amazon Web Services S3

### Responsive Display

Utilized CSS grid and media queries for a dynamic display of page content and a smooth UI experience in imitation of Pinterest's aesthetic. Image heights are stored on the database level to guarantee consistant formatting and spacing between pins of varied heights during image load.

<p align="center">
  <img src="https://i.imgur.com/PGtkOqH.png" width="85%" />
</p>


### Modals

<p align="center">
  <img src="https://media.giphy.com/media/XdOfmQXvBl0CJAVAGx/giphy.gif" width="85%" />
</p>

Utilized lightweight, multi-purpose modals for all forms which significantly DRYed up code.

<details>
  <summary>Click to expand code snippet</summary>
  
  ```javascript
  function Modal({ modal,closeModal }) {
    if (!modal) {
        return null;
    }
    
    let component;
    switch (modal) {
        case 'createBoard':
            component = <CreateBoardContainer />;
            break;
        case 'editBoard':
            component = <EditBoardContainer />;
            break;    
        case 'editPin':
            component = <EditPinFormContainer />
            break;
        case 'savePinOnBoard':
            component = <SavePinOnBoardFormContainer />
            break;
        case 'deletePin':
            component = <DeletePinFormContainer />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}
  ```
</details>

## Future Plans
* Search
* Follows
* Notifications

