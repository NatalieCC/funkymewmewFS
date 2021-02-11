# [mewTrest](https://funkymewmew.herokuapp.com/#/)
mewTrest is a A visual discovery engine that allows users to connect and share ideas in the form of images inspired by [Pinterest](https://www.pinterest.com/). mewTrest is built on a Ruby on Rails backend, utilizing PostgreSQL and AWS S3 for data storage. React and Redux are the main libraries used for the frontend, along with HTML and CSS, with Heroku used for app deployment.

<p align="center">
  <img src="https://i.imgur.com/C98TwUq.jpg" width="85%" />
</p>


## Technologies

* Ruby on Rails
* Javascript
* React.js
* Redux.js
* HTML5
* CSS/SCSS
* PostgreSQL
* Amazon Web Services (AWS S3)
* Heroku

## Feature Highlights

* Realtime Search Bar
* Infinite Scroll
* Drag and Drop
* Modals and Navigations - UX/UI focused
* Responsive display
* Logged in users can complete full CRUD cycle for Boards and Pins or save Pins from other users' Boards
* User authentication built using backend Rails validations with regex and secure BCrypt password hashing
* Optimized minimal server load with cloud-based image storage via Rails ActiveStorage and Amazon Web Services S3

### Realtime Search Bar

Backend: Follows MVC best practices and implements the search method as a class method in the Pin model; this then goes to the controller and Active Record will handle the query string using SQL query to find all matched pins.

Frontend: A 'keyup' event handler will run a search function to fetch any pins that match the search word; passing the search term down in a query string.
          The debounce function basically wraps the 'onKeyUp' in and is designed to wait so,  if the user actually pauses for a moment, that is when the onKeyUP actually gets fired.
          
The search feature is so implemented with fewer queries to the backend, and users will not be overwhelmed with unnecessary results.

### Infinite Scroll

Backend: Set a 'page' token(an integer, tracking what page the user is on) and an amount limit in the Pins controller.
When the user scrolls and reaches the bottom of the page, make an API GET call passing the 'page' token and amount limit through.

Frontend: Paired jQuery '.on()' and '.off()' method with a throttle function which invokes the callback function at most once every 'wait' milliseconds.
          The state of the React component keeps track of the 'page' and hold the 'total_pages'. Each call to the nextPage() function returns the next page of pins.
         
### Drag and Drop

Users are able to upload images from their own devices onto the website by either clicking and upload or dragging images onto the drop zone. The uploaded images are automatically rendered based on where the user creates them.

### Responsive Display

Utilized CSS grid and media queries for a dynamic display of page content and a smooth UI experience in imitation of Pinterest's aesthetic. Image heights are stored on the database level to guarantee consistant formatting and spacing between pins of varied heights during image load.

<p align="center">
  <img src="https://i.imgur.com/PGtkOqH.png" width="85%" />
</p>


### Modals

<p align="center">
  <img src="https://s8.gifyu.com/images/ezgif.com-video-to-gifda4b9ba143c5858a.gif" width="85%" />
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


