//fetch workouts

//fetch workout templates

//add workout template

//edit workout template

//delete workout template

type Exercise = {
    sets: WorkoutSet
}

type WorkoutSet = {
    isWarmUp: boolean;
    isFailure: boolean;
    reps: number;
    targetReps: number;
}