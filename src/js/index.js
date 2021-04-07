import {DOMSelectors} from "./DOM";
import {menu, veganOptions, instockOptions} from "./menu";
const init = function (){
    menu.forEach((item) =>//for every item, it will insert HTML that we will use to show
      DOMSelectors.displayContainer.insertAdjacentHTML(
      "afterbegin",
      `<ul class="item-list">
          <li class="item-name item-value">${item.name}</li>
          <li class="item-price item-value">${item.price}</li>
          <li class="item-vegetarian item-value">${item.vegetarian}</li>
          <li class="item-image">
       <img
         class="item-image"
         src="${item.img}"
         alt=""
       />
     </li>
     <li class="item-in-stock item-value">${item.inStock}</li>
   </ul>`
      ) 
    );
  };

  DOMSelectors.vegetarianButton.addEventListener("click", function(e){
    DOMSelectors.displayContainer.innerHTML = "";
    veganOptions.forEach((item) => {          //add the array method for the vegan 
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<ul class="item-list">
            <li class="item-name item-value">${item.name}</li>
            <li class="item-price item-value">${item.price}</li>
            <li class="item-vegetarian item-value">${item.vegetarian}</li>
            <li class="item-image">
         <img
           class="item-image"
           src="${item.img}"
           alt=""
         />
       </li>
       <li class="item-in-stock item-value">${item.inStock}</li>
     </ul>`
     ); 
    })
    
  }); 
  init();
  
  consle.log(veganOptions);o