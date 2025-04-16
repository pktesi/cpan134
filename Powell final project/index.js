function toggleSidebar(event) {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        sidebar.style.zIndex = '10';
    } else {
        sidebar.style.left = '-250px';
        sidebar.style.zIndex = '1';

        window.addEventListener('click', function closeMenu(e) {
            if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
                sidebar.style.left = '-250px';
                window.removeEventListener('click', closeMenu);
    }
});

}

}

function contactPeople(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        const contactData = {
            name: name,
            email: email,
            message: message,
            date: new Date().toLocaleString()
        };

        let existingMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        existingMessages.push(contactData);
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

        alert(`Powell is busy right now!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields');
    }
}