const movieList = [
    "Harry Potter and the Philosopher's Stone (2001)",
    'Harry Potter and the Chamber of Secrets (2002)',
    'Harry Potter and the Prisoner of Azkaban (2004)',
    'Harry Potter and the Goblet of Fire (2005)',
    'Harry Potter and the Order of the Phoenix (2007)',
    'Harry Potter and the Half-Blood Prince (2009)',
    'Harry Potter and the Deathly Hallows – Part 1 (2010)',
    'Harry Potter and the Deathly Hallows – Part 2 (2011)',
    'Harry Potter and the Cursed Child (book)',
];


var container = document.getElementById('imageContainer');
var movieTitle = document.getElementById('movieTitle');

container.addEventListener('mouseover' , function (event){
    if (event.target.tagName === 'IMG'){
        var iValue = window.getComputedStyle(event.target.parentNode).getPropertyValue('--i');
        
        movieTitle.innerText =movieList[iValue - 1];
    }
});

container.addEventListener('mouseout', function(){
    movieTitle.innerText = 'Harry Potter';
});