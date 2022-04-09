let centimeter = document.querySelector(".centimeter"),
    inches = document.querySelector(".inches"),
    feet = document.querySelector(".feet"),
    meters = document.querySelector(".meters"),
    kilometer = document.querySelector(".kilometer"),
    miles = document.querySelector(".miles"),
    yards = document.querySelector(".yards"),
    form = document.querySelector("form");

form.addEventListener("input", lengthConverter);

function lengthConverter(e) {
    // Convert from centimeter to different Unit
    if (e.target.classList.contains("centimeter")) {
        // console.log("Yes it is centimeter")
        let x = e.target.value;
        inches.value = (x*0.39370).toFixed(2);
        feet.value = (x*0.032808).toFixed(2);
        meters.value = (x/100).toFixed(2);
        kilometer.value = (x/100000).toFixed(2);
        miles.value = (x*0.0000062137).toFixed(2);
        yards.value = (x*0.010936).toFixed(2);       
    }

    // Convert from inches to different Unit
    if (e.target.classList.contains("inches")) {
        let x = e.target.value;
        centimeter.value = (x/0.39370).toFixed(2);
        feet.value = (x*0.083333).toFixed(2);
        meters.value = (x/39.370).toFixed(2);
        kilometer.value = (x/39370).toFixed(2);
        miles.value = (x*0.000015783).toFixed(2);
        yards.value = (x*0.027778).toFixed(2); 
    }

    // Convert from feet to different Unit
    if (e.target.classList.contains("feet")) {
        let x = e.target.value;
        centimeter.value = (x/0.032808).toFixed(2);
        inches.value = (x*12).toFixed(2);
        meters.value = (x/3.2808).toFixed(2);
        kilometer.value = (x/3280.8).toFixed(2);
        miles.value = (x*0.000015783).toFixed(2);
        yards.value = (x*0.33333).toFixed(2); 
    }

    // Convert from meters to different Unit
    if (e.target.classList.contains("meters")) {
        let x = e.target.value;
        centimeter.value = (x/0.01).toFixed(2);
        inches.value = (x*39.370).toFixed(2);
        feet.value = (x/3.2808).toFixed(2);
        kilometer.value = (x/1000).toFixed(2);
        miles.value = (x*0.00062137).toFixed(2);
        yards.value = (x*1.0936).toFixed(2); 
    }

    // Convert from kilometer to different Unit
    if (e.target.classList.contains("kilometer")) {
        let x = e.target.value;
        centimeter.value = (x*100000).toFixed(2);
        inches.value = (x*39370).toFixed(2);
        feet.value = (x*3.2808).toFixed(2);
        meters.value = (x*1000).toFixed(2);
        miles.value = (x*0.62137).toFixed(2);
        yards.value = (x*1093.6).toFixed(2); 
    }

    // Convert from miles to different Unit
    if (e.target.classList.contains("miles")) {
        let x = e.target.value;
        centimeter.value = (x/0.0000062137).toFixed(2);
        inches.value = (x*63360).toFixed(2);
        feet.value = (x*5280).toFixed(2);
        meters.value = (x*0.00062137).toFixed(2);
        kilometer.value = (x/0.62137).toFixed(2);
        yards.value = (x*1760).toFixed(2); 
    }

    // Convert from yards to different Unit
    if (e.target.classList.contains("yards")) {
        let x = e.target.value;
        centimeter.value = (x/0.010936).toFixed(2);
        inches.value = (x*36).toFixed(2);
        feet.value = (x*3).toFixed(2);
        meters.value = (x*1.010936).toFixed(2);
        kilometer.value = (x/1093.6).toFixed(2);
        miles.value = (x*0.00056818).toFixed(2); 
    }
        
}
