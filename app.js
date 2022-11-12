document.addEventListener('mouseover' , function(e){

      if (e.target.className === "balloon"){

        e.target.style.backgroundColor = "#ededed"
        e.target.textContent = "Boom!";
        boomed++;
        removeEvent(e);
        checkAllPopped();

      }

});

function remove(e){
    e.target.removeEventListener('mouseover'
    , function(){


    })
};
