// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getAPI",(pathParam)=>{
   cy.request({
    method:"GET",
    url:"/"+pathParam,
    headers:{
        Authorization:"Bearer 20505fdc5647e207a629ab4b93062f2f1499369f40088a472ced9139d097cce6"
   }})
    
})

Cypress.Commands.add('postAPI', (payload)=> {

    cy.request({ 
        method:"POST",
        url:'/',
        headers:{
          Authorization:"Bearer 20505fdc5647e207a629ab4b93062f2f1499369f40088a472ced9139d097cce6"
        },
        body:payload
    })
        
 })

 Cypress.Commands.add("putAPI",(pathParam, payload)=> {
    cy.request({ 
        method:"PUT",
        url:"/"+pathParam,
        headers:{
         Authorization:"Bearer 20505fdc5647e207a629ab4b93062f2f1499369f40088a472ced9139d097cce6"
        },
        body:payload
    })
   
 })

 Cypress.Commands.add("deleteAPI",(pathParam)=> {
    cy.request({ 
        method:"DELETE",
        url:"/"+pathParam,
        headers:{
            Authorization:"Bearer 20505fdc5647e207a629ab4b93062f2f1499369f40088a472ced9139d097cce6"
        }})
 })