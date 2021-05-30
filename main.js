canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    images_arrey=["mars 1.jpg","mars 2.jpg","mars 3.jpg","mars 4.jpg"];
    random_number = Math.floor(Math.random() * 4);
     console.log(random_number);


    rover_width = 100;
    rover_height = 90;

    background_image = images_arrey[random_number];
    rover_image = "rover.png";

    rover_X = 10;
    rover_Y =  10;

    function add() 
    {
        background_imgtag= new Image();
        background_imgtag.onload = uploadBackground;
        background_imgtag.src= background_image;

        rover_imgtag= new Image();
        rover_imgtag.onload = uploadrover;
        rover_imgtag.src= rover_image;
    }

    function uploadBackground(e)
    {
        ctx.drawImage(background_imgtag, 0,0, canvas.width,canvas.height );
    }

    function uploadrover(e)
    {
        ctx.drawImage(rover_imgtag,rover_X,rover_Y,rover_width,rover_height);
    }

    window.addEventListener("keydown", my_keydown);

    
    function my_keydown(e)
    {
        key_pressdown = e.keyCode;
        console.log(key_pressdown);

        if(key_pressdown== "38"){

        up();
        console.log("up")
        }

        if(key_pressdown== "40"){

            down();
            console.log("down");

        }

         if(key_pressdown== "37"){

            left();
            console.log("left");

        }
        
        if(key_pressdown== "39"){

            right();
            console.log("right");

        }

        

    }

    function up() 
    {
        if(rover_Y >=0)
        {
            rover_Y= rover_Y-10;

            console.log("when up arrow is pressed" + rover_X + "-" + rover_Y);
                uploadBackground();
                uploadrover();

        }
    } 

    function down() 
    {
        if(rover_Y <=500)
        {
            rover_Y= rover_Y+10;

            console.log("when down arrow is pressed" + rover_X + "-" + rover_Y);
                uploadBackground();
                uploadrover();
                
        }
    } 

    function left() 
    {
        if(rover_X >=0)
        {
            rover_X= rover_X-10;

            console.log("when left arrow is pressed" + rover_X + "-" + rover_Y);
                uploadBackground();
                uploadrover();
                
        }
    } 

    function right() 
    {
        if(rover_X <=700)
        {
            rover_X= rover_X+10;

            console.log("when right arrow is pressed" + rover_X + "-" + rover_Y);
                uploadBackground();
                uploadrover();
                
        }
    } 