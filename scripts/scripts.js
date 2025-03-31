



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


mainEl.style.backgroundColor = `var(--main-bg)`;
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add(`flex-ctr`);


let topMenuEl = document.getElementById(`top-menu`);
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

menuLinks.forEach((link) => {       //when using link, refers to a single object in array
    //Create an <a> element.
    let newAnchor = document.createElement(`a`);

    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    newAnchor.setAttribute(`href`, link.href)

    // Set the new element's content to the value of the text property of the "link" object.
    // Append the new element to the topMenuEl element.

    newAnchor.textContent = link.text;

    newAnchor.link = link; //3/29 cachig link?

    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newAnchor);

});



let subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add(`flex-around`);
subMenuEl.style.position = `absolute`;
subMenuEl.style.top = `0`; 

let topMenuLinks = topMenuEl.querySelectorAll(`a`);         //is it topMenuEl. instead of document.?
console.log(topMenuLinks);

function buildSubmenu(subLinks){
  subMenuEl.innerHTML = ` `;
  subLinks.forEach((link) => {
  let newSubAnchor = document.createElement('a');
  newSubAnchor.setAttribute(`href`, link.href);
  newSubAnchor.textContent = link.text;
  subMenuEl.appendChild(newSubAnchor);
})   
}


subMenuEl.addEventListener(`click`, handleAClick);

function handleAClick(e){
  e.preventDefault();
  if (e.target.localName !== `a`){
    return;
  } else {
    subMenuEl.style.top = `0`;
    topMenuLinks.forEach((link) => {
    link.classList.remove("active")
    });
    const clickedLinkText = e.target.textContent;
    const h1 = document.createElement(`h1`);
    h1.textContent = clickedLinkText;  
    mainEl.innerHTML = " ";
    mainEl.appendChild(h1);

  }
}


// Next, the event listener should set the CSS top property of subMenuEl to 0.
// Remove the active class from each <a> element in topMenuLinks.
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.


topMenuEl.addEventListener(`click`, handleClick);


function handleClick(e) {
    e.preventDefault();
    const link = e.target.link;
    console.log(link);
    if(e.target.localName !== `a`){           
                //console.log(`not an anchor tag`)
    return;
    } else {
      if (e.target.classList.contains("active")){
        e.target.classList.remove("active");
      } else {
        document.querySelector(".active")?.classList.remove("active");
        e.target.classList.add("active");    
        // }  const subLinks = Array.isArray(link.sublinks) ? link.subLinks : [];
        //   if (link.subLinks.length > 0) {
        //    subMenuEl.style.top = "100%";
        //    buildSubmenu(subLinks);
        // }  else {
        //   subMenuEl.style.top = "0%";
         }
 }  
 
}





// Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.

// Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.




// Next, the event listener should set the CSS top property of subMenuEl to 0.
// Remove the active class from each <a> element in topMenuLinks.
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.