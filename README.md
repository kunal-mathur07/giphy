This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Giphy
This loads the gifs from the giphy.com limit for the number of gifs is defined as 25. On selecting any image it opens up in a popup and from there we can navigate to other images.

### How to run

Clone the repository on you system got to the folder Giphy and then run npm install. This will install all the dependencies in the package.json. Since the boilerplate used is CRA all the CRA dependencies will be installed. Once dependencies installed run npm start this will start the application in development mode.

### Folders structure

  Following is the folder structure for the app.
  
   ### Src
    This is the main folder where the code resides.
    
   ### index.js
    This is the starting file 
    
   ### api
    This folder contains the helper methods for api urls and the actual fetch call.
    
      apiService.js
        
        This file contains the actual api call to the giphy website to fetch images.
        
      apiUrl.js
        This file contains the api urls.
   
   ### Components
   
     There are two components App and Popup.
     
      App
       
       App Component which is the main component loaded when the app starts. This component is responsible for loading the gifs on the main page and on                    clicking any of the images will load popup component.
       
      Popup
      
       Popup component has two navigation buttons Next and Prev and selected image in the center. Clicking on Next will show the next image which comes after the          selected image and the Prev the previous one. If we are on the first image and click on prev it will load the 25th image and similarly if we are on the 25th        image clicking on next will load the first image. 
       
   
    
            
    

