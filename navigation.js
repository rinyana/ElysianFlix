// Function to toggle the navbar menu visibility
function toggleMenu() {
    const navbar = document.querySelector('.navbar-navigation');
    navbar.classList.toggle('active');
}

/*search function*/
function myFunction() {
    const input = document.getElementById('mySearch');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('myMenu');
    const li = ul.getElementsByTagName('li');
  
    let hasMatches = false;
  
    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
            hasMatches = true;
        } else {
            li[i].style.display = 'none';
        }
    }
  
    // Show or hide the suggestion list
    if (filter && hasMatches) {
        ul.classList.add('show');
    } else {
        ul.classList.remove('show');
    }
  }
  
  // Hide suggestions when clicking outside the search box
  document.addEventListener('click', function (e) {
    const search = document.getElementById('mySearch');
    const menu = document.getElementById('myMenu');
    if (!search.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
    }
});
