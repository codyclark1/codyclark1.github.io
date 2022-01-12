alert("It's winter, and you and a friend have set out to conquer The Matterhorn, a steep mountain towering over the alps. You'd both been preparing for years, and the time had finally come. But, you've arrived late, and dusk rapidly approaches.")

let night_or_day = prompt("Should you 1, embark at night, or 2, set up camp and go tomorrow?")

if(night_or_day == 1) {


    let short_or_long_night = prompt("The wind roars as you push into the night. At a crossroads, through the snow you see a 1, short and 2, long path. Which do you choose?")
    if(short_or_long_night ==1){
        
    let crevasse_or_snow = prompt("On the short path, you see two options. 1, a ladder walk over a deep crevasse, or 2, an unmarked field of deep snow. What will you do?")

    if(crevasse_or_snow == 1){
     let help_or_leave = prompt("Crossing the crevasse, your friend slips into the icy chasm. He's still alive! You could 1, risk your own life to try and save him, or 2, head back to the crossroads and go the snowy route.")
    if (help_or_leave == 1){
        alert("You try to save your friend to no avail. You fall in with him, with no escape. RIP!")
    } else {
        let sleep_or_walk = prompt("You march into the desolate snow. And march, and march. You could really use some sleep (1). Or should you carry on (2)?")
    if(sleep_or_walk == 1){
        alert("Embracing the cold, you lie down to rest. Your breath slows as you fade into the elements of the mountain. RIP!")
    } else {
        let back_or_forward = prompt("Carrying on, you begin to lose direction. The wind is howling. Do you 1, retrace your footsteps, or 2, carry on upward.")
}    if(back_or_forward ==1){
        alert("Trying to backtrack, your footsteps had faded in the falling snow. Completely lost, your body gives out in the cold, dark night. RIP!")
    } else {
        alert("You push upward, until you realise you are going downhill. You backtrack uphill, to ultimately fall into the crevasse. RIP!")
    }
    }

}   if (crevasse_or_snow == 2) {
        let sleep_or_walk = prompt("You march into the desolate snow. And march, and march. You could really use some sleep (1). Or should you carry on (2)?")
}    if(sleep_or_walk == 1){
        alert("Embracing the cold, you lie down to rest. Your breath slows as you fade into the elements of the mountain. RIP!")
    } else {
        let back_or_forward = prompt("Carrying on, you begin to lose direction. The wind is howling. Do you 1, retrace your footsteps, or 2, carry on upward.")
    if(back_or_forward ==1){
        alert("Trying to backtrack, your footsteps had faded in the falling snow. Completely lost, your body gives out in the cold, dark night. RIP!")
    } else {
        alert("You push upward, until you realise you are going downhill. You backtrack uphill, to ultimately fall into the crevasse. RIP!")
    }
    }
    }
    if (short_or_long_night ==2){
        let cave_or_river = prompt("As you head down the long path, you encounter an icy river, and a dark cave. With your flashlight running low, do you 1, brave the river and risk the cold, or 2, venture the cave and hope your flashlight keeps?")
        if (cave_or_river ==1){
            alert("Trudging through the river, you begin to grow tired, being swept away in wind and water. RIP!")
        } else {
            alert("In the cave, you're flashlight flickers out. You see a wolf's talons moving towards you in the dark. RIP!")
        }
    }
}
else {let short_or_long_day = prompt("The day breaks, and you and your friend set out up the mountain. At a crossroads, through the snow you see a 1, short and 2, long path. Which do you choose?")
if(short_or_long_day ==1){let crevasse_or_snow_day = prompt("On the short path, you see two options. 1, a ladder walk over a deep crevasse, or 2, an unmarked field of deep snow. What will you do?")
if(crevasse_or_snow_day == 1){
  let help_or_leave_day = prompt("Crossing the crevasse, your friend slips into the icy chasm. He's still alive! You could 1, risk your own life to try and save him, or 2, head back to the crossroads and go the snowy route.")
 if (help_or_leave_day == 1){
     alert("You try to save your friend to no avail. You fall in with him, with no escape. RIP!")
 } else {
     let sleep_or_walk_day = prompt("You march into the desolate snow. And march, and march. You could really use some sleep (1). Or should you carry on (2)?")
 if(sleep_or_walk_day == 1){
     alert("Embracing the cold, you lie down to rest. Your breath slows as you fade into the elements of the mountain. RIP!")
 } else {
     let back_or_forward_day = prompt("Carrying on, you begin to lose direction. The wind is howling. Do you 1, retrace your footsteps, or 2, carry on upward.")
 if(back_or_forward_day ==1){
     alert("Trying to backtrack, your footsteps had faded in the falling snow. Completely lost, your body gives out in the cold, dark night. RIP!")
 } else {
     alert("You push upward, until you realise you are going downhill. You backtrack uphill, to ultimately fall into the crevasse. RIP!")
 }
 }
}
}
}

if(short_or_long_day ==2){
        let sleep_or_walk_day = prompt("You march into the desolate snow. And march, and march. You could really use some sleep (1). Or should you carry on (2)?")
    if(sleep_or_walk_day == 1){
        alert("Embracing the cold, you lie down to rest. Your breath slows as you fade into the elements of the mountain. RIP!")
    } else {
        let back_or_forward = prompt("Carrying on, you begin to lose direction. The wind is howling. Do you 1, retrace your footsteps, or 2, carry on upward.")
    if(back_or_forward ==1){
        alert("Trying to backtrack, your footsteps had faded in the falling snow. Completely lost, your body gives out in the cold, dark night. RIP!")
    } else {
        let avalanch_go_or_wait = prompt("Going upward, you find your way to an exposed cliffside. In horrible timing, the guide on your walkie talkie warns of an imminent avalanch! Should you 2, wait it out behind the cliff, or 1, go all in?")
    if (avalanch_go_or_wait == 1) {
        alert("Foolishly, you walk the cliffside during the avalanche, but before you can cross, the wave of snow barrels down the mountain, taking you with it. Shoulda listened, RIP!")
    } if (avalanch_go_or_wait ==2) {
        let bear_options = prompt ("After the storm, you safely cross the cliff. But today you just can't catch a break. A giant grizzly bear stands in your path! Do you 1, run for it, 2, BATTLE IT, or 3, lay down and play dead.")
      if (bear_options ==1){
          alert("You try to run from the bear, and fall down the cliffside. As you fall, you see the bear sitting. He wasn't even chasing you! RIP!")
      } else if (bear_options ==2){
          alert("In a REALLY bad call, you make the decision to pick a fight with the grizzly bear. You get a few haymakers on him until he swats you. RIP!")
      }else {
          alert("You lay down and play dead, the bear sniffs you a little and then rolls down the mountain. You get up, and make your way all the way to the summit! CONGRATS! :D")
      }
    }
    }
    }
    }
    if(short_or_long_day ==2){
        let avalanch_go_or_wait = prompt("Going upward, you find your way to an exposed cliffside. In horrible timing, the guide on your walkie talkie warns of an imminent avalanch! Should you 2, wait it out behind the cliff, or 1, go all in?")
    if (avalanch_go_or_wait == 1) {
        alert("Foolishly, you walk the cliffside during the avalanche, but before you can cross, the wave of snow barrels down the mountain, taking you with it. Shoulda listened, RIP!")
    } if (avalanch_go_or_wait ==2) {
        let bear_options = prompt ("After the storm, you safely cross the cliff. But today you just can't catch a break. A giant grizzly bear stands in your path! Do you 1, run for it, 2, BATTLE IT, or 3, lay down and play dead.")
      if (bear_options ==1){
          alert("You try to run from the bear, and fall down the cliffside. As you fall, you see the bear sitting. He wasn't even chasing you! RIP!")
      } else if (bear_options ==2){
          alert("In a REALLY bad call, you make the decision to pick a fight with the grizzly bear. You get a few haymakers on him until he swats you. RIP!")
      }else {
          alert("You lay down and play dead, the bear sniffs you a little and then rolls down the mountain. You get up, and make your way all the way to the summit! CONGRATS! :D")}
      }
    }
}
