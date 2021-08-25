setInterval(() => {
    d = new Date();
    hourtime = d.getHours();
    minutetime = d.getMinutes();
    secondtime = d.getSeconds();
hour_hand_rotation = 30*hourtime + minutetime/2;
minute_hand_rotation = 6*minutetime;
second_hand_rotation = 6*secondtime;

hour.style.transform = `rotate(${hour_hand_rotation}deg)`;
minute.style.transform = `rotate(${minute_hand_rotation}deg)`;
second.style.transform = `rotate(${second_hand_rotation }deg)`;

},1000);
