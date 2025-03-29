// Select and cache the <main> element in a variable named mainEl.
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.

//Variables to simulate Dynamic Data
// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];




// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code of the function should immediately return if the element clicked was not an <a> element.
// Log the content of the <a> to verify the handler is working.

  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];







let mainEl = document.querySelector(`main`);
//console.log(mainEl)



//OR
//let mainEl = document.querySelectorAll(`main`);
//console.log(mainEl[]) would need index to use query Selector all or any other plural selector


mainEl.style.backgroundColor = `var(--main-bg)`;
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add(`flex-ctr`);


// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Set the height of the topMenuEl element to be 100%.
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// Add a class of flex-around to topMenuEl.

let topMenuEl = document.getElementById(`top-menu`);
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

// Iterate over the entire menuLinks array and for each "link" object:


menuLinks.forEach((link) => {       //when using link, refers to a single object in array
    //Create an <a> element.
    let newAnchor = document.createElement(`a`);

    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    newAnchor.setAttribute(`href`, link.href)

    // Set the new element's content to the value of the text property of the "link" object.
    // Append the new element to the topMenuEl element.

    newAnchor.textContent = link.text;

    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newAnchor);


});





//isNAN() - useful function. look at the docs!

// for (let i = 0; i < menuLinks.length; i++){
//     let newAnchor = document.createElement(`a`);
//     newAnchor.setAttribute(`href`, menuLinks[i].href)
//     newAnchor.textContent = menuLinks[i].text;
//     topMenuEl.appendChild(newAnchor);
// }

//part 2
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
// Set the height subMenuEl element to be "100%".
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
// Add the class of flex-around to the subMenuEl element.

let subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add(`flex-around`);
subMenuEl.style.position = `absolute`;
subMenuEl.style.top = 0; 



// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.


let topMenuLinks = document.querySelectorAll(`a`);         //is it topMenuEl. instead of document.?
console.log(topMenuLinks);

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener(`click`, handleClick);

// //grab the a tags from top menu links (store in an array?) and THEN attach the event listner//

// // The first line of code of the event listener function should call the event object's preventDefault() method.
// // The second line of code of the function should immediately return if the element clicked was not an <a> element.
function handleClick(e){
    e.preventDefault();
    if(e.target.localName !== `a`){           
        //console.log(`not an anchor tag`)
        return;
     } else {
     } for (let i = 0; i < topMenuLinks.length; i++) {
        //console.log(`click`)
        topMenuLinks[i].classList.remove("active");
//         // if (e.target.classList.contains("active")){
//         //     e.target.classList.remove("active");
//         // }   else {
//         //     e.target.classList.toggle("active");

}      
      e.target.classList.add("active");
// // //console.log(topMenuLin)
     
}
// function handleClick(e) {
//     e.preventDefault(e);
//     if(e.target.localName !== `a`){           
//                 //console.log(`not an anchor tag`)
//     return;
//     } else {
//     topMenuLinks.forEach(topMenuLinks => {
//     topMenuLinks.addEventListener("click", () => {
//     document.querySelector(".active")?.classList.remove("active");
//     e.target.classList.add("active");    
//     })
//  })

//document.querySelector(".active")?.classList.remove("active");
 
//     }
//     }

// // Log the content of the <a> to verify the handler is working.




// //Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
// // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// // Hint: Removing a non-existent class from an element does not cause an error!

// // hmm... should this be active class can only be less than or equal to one?

// // if topMenuLinks[i] !== e.target remove active???

// // Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:


// // 1.) Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// // 2.) If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// // Otherwise, set the CSS top property of subMenuEl to 0.
// // Hint: Caching the "link" object will come in handy for passing its subLinks array later.

//if (e.target === menuLinks[i].subLinks


// //there is a "link" object within menuLinks? 

// // if (menuLinks[i].subLinks 




// // if (e.target.classList.contains("active") = false){
// //     if (e.target )
// // }




// // The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
// // Clear the current contents of subMenuEl.
// // Iterate over the subLinks array, passed as an argument, and for each "link" object:
// // Create an <a> element.
// // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
// // Set the element's content to the value of the text property of the "link" object.
// // Append the new element to the subMenuEl.
// // Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.


//     function buildSubmenu(){
//     let subMenuEl = ` `;
//     subMenuEl.forEach((link) => {
//     let newAnchor = document.createElement('a');
//     newAnchor.setAttribute(`href`, link.href);
//     newAnchor.textContent = link.text;
//     subMenuEl.appendChild(newAnchor);
// })   

// }



// menuLinks.forEach((link) => {       //when using link, refers to a single object in array
//     //Create an <a> element.
//     let newAnchor = document.createElement(`a`);

//     // On the new element, add an href attribute with its value set to the href property of the "link" object.
//     newAnchor.setAttribute(`href`, link.href);

//     // Set the new element's content to the value of the text property of the "link" object.
//     // Append the new element to the topMenuEl element.

//     newAnchor.textContent = link.text;

//     // Append the new element to the topMenuEl element.
//     topMenuEl.appendChild(newAnchor);


// });


//finding the path to the target .HTML
//[2].parentNode.nextElementSibling