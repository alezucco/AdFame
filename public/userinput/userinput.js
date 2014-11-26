$(function(){
    // Sets a default data set
    var data = {
        logo: 'images/Coca-Cola.png',
        url: 'http://us.coca-cola.com/home/',
        origin: {x: .5, y: 0, z: 0},
        campaign: 'undefined',
        initialPosition: {x: 0, y: 0, z: 0},
        initialVelocity: {x: 0, y: 0, z: 0},
        initialRotation: {x: 0, y: 0, z: 0},
        opacity: 1,
        enter: {
            type: 'slideInOut',
            position: {x: 0, y: 0, z: 0},
            velocity: {x: 0, y: 0, z: 0},
            rotation: {x: 0, y: 0, z: 0},
            period: 1000,
            dampingRatio: 0,
            restitution: 0,
            opacity: 1,
            duration: 1000,
            curve: null
        },
        exit: {
            type: 'slideInOut',
            position: {x: 0, y: 0, z: 0},
            velocity: {x: 0, y: 0, z: 0},
            rotation: {x: 0, y: 0, z: 0},
            period: 1000,
            dampingRatio: 0,
            restitution: 0,
            opacity: 1,
            duration: 1000,
            curve: null
        }
    }

    // Refreshes iFrame on button click
    $('#refresh').on('click', function() {
        var ifr = $('#Iframe')[0];
        ifr.src = ifr.src;
    })

<<<<<<< HEAD
    // Hides inactive transition divs
    $('#selectTrans').on('change', function(){
        var selected = $('#selectTrans option:selected').val();
        Array.prototype.forEach.call($('#transitions').children(), function(child) {
            $(child).hide();
        });
        $('#'+selected).show();
    }).trigger('change');
=======
  $(function(){
      //Sets a default data set
  var data = {
		logo: {data: 'images/Coca-Cola.png', contentType:'image/png'},
		url: 'http://us.coca-cola.com/home/',
		origin: {x: .5, y: 0, z: 0},
		initialPosition: {x: 0, y: 0, z: 0},
		initialVelocity: {x: 0, y: 0, z: 0},
		initialRotation: {x: 0, y: 0, z: 0},
		opacity: 1,
		enter: {
	    type: 'slideInOut',
	    position: {x: 0, y: 400, z: 0},
	    velocity: {x: 0, y: 0, z: 0},
	    rotation: {x: Math.PI/2, y: 0, z: 0},
	    period: 1000,
	    dampingRatio: 0,
	    restitution: 0,
	    opacity: 1,
	    duration: 1000,
	    curve: null
		},
		exit: {
	    type: 'rotateInOut',
	    position: {x: 0, y: 0, z: 0},
	    velocity: {x: 0, y: Math.PI, z: 0},
	    rotation: {x: 0, y: 0, z: 0},
	    period: 1000,
	    dampingRatio: 0,
	    restitution: 0,
	    opacity: 1,
	    duration: 1000,
	    curve: null
		}
	}

  // creates an object with the name of the company and the data selected to store in the database
  var sentData={
    name:"Ale",
    data:data
  }
      //hide all transition sections except selected item 
    $('#selectTrans').on('click', function(){
      var selected = $('input[type="radio"]:checked').val()
      Array.prototype.forEach.call($('#transitions').children(), function(child){
        $(child).hide();
      });
      $('#'+selected).show();
    }).trigger('click');

>>>>>>> cbb67ac7d07f66f21506eef6fa010270da9352ea
     

    // Creates an object with the name of the company and the data selected to store in the database
    var sentData={
        name:'Ale',
        data:data
    }

    //NEED TO CHECK IF IT EXISTS IN DB FIRST
     
    // Posts data to database 
    var saveData =function(data){ 
<<<<<<< HEAD
        $.ajax({
            type: 'POST',
            url: '/user/data',
            data: sentData,
            dataType: 'application/json'
        }).done(function(msg) {
            console.log( 'Data Saved:', msg );
        });
=======
      $.ajax({
        type: "POST",
        url: "/user/data",
        data: sentData,
        // contentType: "multipart/form-data; charset=UTF-8",
        dataType: "application/json"
      })
      .done(function( msg ) {
        console.log( "Data Saved: " + msg );
      });
>>>>>>> cbb67ac7d07f66f21506eef6fa010270da9352ea
    }
    
    // Retrieves data from database
    var getData = function(){
        $.ajax({
            type: 'GET',
            url: 'user/data',
            data: data
        }).done(function(data) {
            console.log('Data:', data);  
        });
    }
    
    $('#export').on('click', function(){
<<<<<<< HEAD
        var selected = $('input[type='radio']:checked').val()
        var $info = $('#' + selected)
        
        //sets the data parameters to the selected in the input fields
        sentData.data.campaign = $('#campaign').val();
        sentData.data.logo = sentData.data.logo ||$('#logoUrl');
        sentData.data.url = $('#adLink').val();
        sentData.data.origin.x = $('#originX').val();
        sentData.data.origin.y = $('#originY').val();
        sentData.data.origin.z = $('#originZ').val();

        sentData.data.initialPosition.x = $('#initPosX').val();
        sentData.data.initialPosition.y = $('#initPosY').val();
        sentData.data.initialPosition.z = $('#initPosZ').val();

        sentData.data.initialVelocity.x = $('#initVelX').val();
        sentData.data.initialVelocity.y = $('#initVelY').val();
        sentData.data.initialVelocity.z = $('#initVelZ').val();

        sentData.data.initialRotation.x = $('#initRotX').val();
        sentData.data.initialRotation.y = $('#initRotY').val();
        sentData.data.initialRotation.z = $('#initRotZ').val();

        sentData.data.opacity = $('#opacity').val();

        sentData.data.enter.type = selected;

        sentData.data.enter.position.x = $('#'+selected+'PosX').val();
        sentData.data.enter.position.y = $('#'+selected+'PosY').val();
        sentData.data.enter.position.z = $('#'+selected+'PosZ').val();

        sentData.data.enter.velocity.x = $('#'+selected+'VelX').val();
        sentData.data.enter.velocity.y = $('#'+selected+'VelY').val();
        sentData.data.enter.velocity.z = $('#'+selected+'VelZ').val();

        sentData.data.enter.rotation.x = $('#'+selected+'RotX').val();
        sentData.data.enter.rotation.y = $('#'+selected+'RotY').val();
        sentData.data.enter.rotation.z = $('#'+selected+'RotZ').val();

        sentData.data.enter.period = $('#'+selected+'Period').val();

        sentData.data.enter.dampingRatio = $('#'+selected+'DampeningRatio').val();
        sentData.data.enter.restitution = $('#'+selected+'Restitution').val();
        sentData.data.enter.opacity = $('#'+selected+'Opacity').val()
        sentData.data.enter.duration = $('#'+selected+'Duration').val()
        sentData.data.enter.curve = $('#'+selected+'Curve option:selected').val()
        console.log(sentData)
        saveData(sentData)
=======
      var selected = $('input[type="radio"]:checked').val()
      var $info = $("#" + selected)
      //sets the data parameters to the selected in the input fields
      sentData.name = $('#campaign').val()|| "Ale";
      sentData.data.logo.data = window.antipattern|| sentData.data.logo.data;
      console.log(sentData.data.logo.data)
      sentData.data.url = $('#adLink').val();
      sentData.data.origin.x = $('#originX').val();
      sentData.data.origin.y = $('#originY').val();
      sentData.data.origin.z = $('#originZ').val();

      sentData.data.initialPosition.x = $('#initPosX').val();
      sentData.data.initialPosition.y = $('#initPosY').val();
      sentData.data.initialPosition.z = $('#initPosZ').val();

      sentData.data.initialVelocity.x = $("#initVelX").val();
      sentData.data.initialVelocity.y = $("#initVelY").val();
      sentData.data.initialVelocity.z = $("#initVelZ").val();

      sentData.data.initialRotation.x = $("#initRotX").val();
      sentData.data.initialRotation.y = $("#initRotY").val();
      sentData.data.initialRotation.z = $("#initRotZ").val();

      sentData.data.opacity = $('#opacity').val();

      sentData.data.enter.type = selected;
      
      sentData.data.enter.position.x = $("#"+selected+"PosX").val();
      sentData.data.enter.position.y = $("#"+selected+"PosY").val();
      sentData.data.enter.position.z = $("#"+selected+"PosZ").val();

      sentData.data.enter.velocity.x = $("#"+selected+"VelX").val();
      sentData.data.enter.velocity.y = $("#"+selected+"VelY").val();
      sentData.data.enter.velocity.z = $("#"+selected+"VelZ").val();

      sentData.data.enter.rotation.x = $("#"+selected+"RotX").val();
      sentData.data.enter.rotation.y = $("#"+selected+"RotY").val();
      sentData.data.enter.rotation.z = $("#"+selected+"RotZ").val();
      
      sentData.data.enter.period = $("#"+selected+"Period").val();

      sentData.data.enter.dampingRatio = $("#"+selected+"DampeningRatio").val();
      sentData.data.enter.restitution = $("#"+selected+"Restitution").val();
      sentData.data.enter.opacity = $("#"+selected+"Opacity").val()
      sentData.data.enter.duration = $("#"+selected+"Duration").val()
      sentData.data.enter.curve = $("#"+selected+"Curve option:selected").val()
      saveData(sentData)
>>>>>>> cbb67ac7d07f66f21506eef6fa010270da9352ea
    });

    var el, newPoint, newPlace, offset;


    $('input[type='range']').change(function() {
        el = $(this);
        width = el.width();
        newPoint = (el.val() - el.attr('min')) / (el.attr('max') - el.attr('min'));
        offset = -1.3;
     
        if (newPoint < 0) { newPlace = 0; }
        else if (newPoint > 1) { newPlace = width; }
        else { newPlace = width * newPoint + offset; offset -= newPoint; }
     
        el.next('output').text(el.val());
    }).trigger('change');


    $('ul').on('click', 'button', function(e){
   	    e.preventDefault()
        $(this).parent().children('ul').toggle()
   	    // this.children.toggle();
    })
})
