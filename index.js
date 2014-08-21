
//Countries & Distance Away From Seattle
$(function() {

  var citynumber = (miles);
  var city1 = (6);
  var city2 = (7);
  var city3 = (4);
  var city4 = (5);


  var $arrayNumber = [6,7,4,5]

  $('.table').html('');
  $('.table').append(4);
  $('.table').append(5);
  $('.table').append(6);
  $('.table').append(7);



  function bubbleSort(arrayNumber) {
    var swapped;
    do {
      swapped = false;
      for (var i=0; i < arrayNumber.length-1; i++) {
        var current = parseInt($(arrayNumber[i]).city("number"), 10);
        var next = parseInt($(arrayNumber[i+1]).city("number"), 10);
        if (current > next) {
          var bucket = arrayNumber[i];
          arrayNumber[i] = arrayNumber[i+1];
          arrayNumber[i+1] = bucket;
          swapped = true;
            $("body").html(arrayNumber);
        }
      }
    } while (swapped);
  };

  $( "#click" ).on('click', function(){
    bubbleSort($arrayNumber);
  });
});




