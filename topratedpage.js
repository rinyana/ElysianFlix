/*navigation bar opening and closing actions*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
  
  /*dropdown in side navigation*/
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
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