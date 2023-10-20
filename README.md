For my IoT project I was given an obstacle avoidance sensor.

At first I got my sensor working and giving me a response through arduino without much trouble but towards the end of the project my sensor started always sensing an object in its infrared field and I couldn't find out how to fix it. 

When I read the marking guidlines I saw that it wanted us to use ejs to style our frontend however I was delayed because I didn't have WiFi over the holidays so I started too late and wasn't able to finish it in time. My VScode couldn't find my index.ejs file in the directory even when it said it was looking in the right place and so I took it out in the final version.
<img width="690" alt="Screenshot 2023-10-19 125511" src="https://github.com/ArranS24/IoT-thing/assets/141980919/a202f5c8-48d4-4fc9-9be4-3437ed2ff535">

I managed to create a full stack node.js application by making a REST API with node and express however it does not display the output from the sensor. I had multiple errors with different tutorials that I couldn't find an answer for and so I switched a few times and eventually found an easy one.

To output my result from the ESP32 to my API I tried to find a way to get a variable from arduino into VScode but I couldn't find a way. I installed the arduino extension for VScode and also tried to use a .ino file but neither worked. When I refrenced the .ino file in my app.js it gave me an error saying "cannot get /" and I tried looking it up but the answers online didn't help. I also asked Fionn for help in class but he also didn't know. 
<img width="328" alt="Screenshot 2023-10-19 125445" src="https://github.com/ArranS24/IoT-thing/assets/141980919/29765cde-2f55-45f5-910b-9a7e029c8e94">

When the sensor gets power a green light comes on and when it gives an output another green light comes on. I started by wireing it where the three pins on the sensor were all in the one row however I was tought that didn't work as every row is a single wire making them all on the same one. I then turned it around so that all pins were on different wires and able to do different things to each other.
![download](https://github.com/ArranS24/IoT-thing/assets/141980919/1fbb2ee8-110b-41bd-88a5-0729ddd1fadf)

My code uses the app.get path to connect with the app and then res.send to give an output to the API and show up when you type "localhost:5000" into the search bar. The code also listens for activity on the local port 5000 so that it knows who to send the output to when they put the local host port in.
