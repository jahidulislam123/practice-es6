document.getElementById('add-border').addEventListener('click', function () {
    const friendcontainer = document.getElementById('friend-container');
    friendcontainer.style.border = '3px solid yellow';
})



function addbackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'blue';
    }

}



// document.getElementById('add-friend').addEventListener('click', function () {
//     const container = document.getElementById('friend-container');
//     const friendDiv = document.createElement('div');
//     friendDiv.classList.add('friend');
//     friendDiv.innerHTML = '<h3 class="friend-name">friend-4</h3>
//     <p>Laudantium vero natus at reiciendis?</p>'
    
//     container.appendChild(friendDiv);
    

// })