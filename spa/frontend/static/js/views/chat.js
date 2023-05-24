import AbstractViews from "./AbstractViews.js"

export default class extends AbstractViews {
  constructor(params) {
    super(params);
    this.setTitle('Chat');
  }

  async getHtml() {
    return ` 
    <div class="maincontent">
    <div id="grid" class="imgrid"></div>
   </div>
      <section class="infos-liste">
        
      </section>`  
  }

  async afterRender() {
   //change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=40`;
const api_key = "DEMO_API_KEY"

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});
}}
