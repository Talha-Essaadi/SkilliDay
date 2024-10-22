const toggleButtton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar () {
    sidebar.classList.toggle('close')
    toggleButtton.classList.toggle('rotate')

    
    closeAllSubMenus () 

    

 
}


function toggleSubmMnu (button) {

    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus ()
    }

    


    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButtton.classList.toggle('rotate')
    }
}


function closeAllSubMenus () {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}