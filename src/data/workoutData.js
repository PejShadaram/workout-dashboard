export const profile = {
  age: 43,
  height: "5'7\"",
  currentWeight: 200,
  targetWeight: 158,
  currentBodyFat: 27,
  targetBodyFat: 10,
  startDate: "2026-04-25",
  maxHR: 177,
}

export const calorieTargets = {
  bmr: 1760,
  tdee: 2700,
  dailyTarget: 2050,
  protein: 188,
  deficit: 650,
}

export const hrZones = [
  { name: "Warm-up",   pctMin: 50, pctMax: 60, bpmMin: 89,  bpmMax: 107, when: "First 5 min",     color: "#3b82f6" },
  { name: "Aerobic",   pctMin: 60, pctMax: 70, bpmMin: 107, bpmMax: 124, when: "Steady circuits",  color: "#22c55e" },
  { name: "Cardio",    pctMin: 70, pctMax: 85, bpmMin: 124, bpmMax: 151, when: "Push intervals",   color: "#f97316" },
  { name: "Peak",      pctMin: 85, pctMax: 95, bpmMin: 151, bpmMax: 169, when: "Row finishers",    color: "#ef4444" },
]

export const schedule = [
  { day: "Monday",    focus: "Upper Push",         muscles: "Chest / Shoulders / Triceps", active: true },
  { day: "Tuesday",   focus: "Lower Body",          muscles: "Quads / Hamstrings / Glutes", active: true },
  { day: "Wednesday", focus: "Upper Pull + Row",    muscles: "Back / Biceps / Rear Delts",  active: true },
  { day: "Thursday",  focus: "Core + Conditioning", muscles: "Core / Carries / Row HIIT",   active: true },
  { day: "Friday",    focus: "Full Body HIIT",      muscles: "Compound / Power / Finisher",  active: true },
  { day: "Saturday",  focus: "Rest / Walk",         muscles: "Low intensity only",           active: false },
  { day: "Sunday",    focus: "Rest",                muscles: "—",                            active: false },
]

const exerciseDetails = {
  "Dumbbell Bench Press": {
    muscles: ["Chest", "Front Deltoid", "Triceps"],
    description: "Lie flat on a bench with a dumbbell in each hand at chest height, palms forward. Press straight up until arms are fully extended, then lower with control until elbows reach 90°.",
    cues: ["Pinch shoulder blades together before pressing", "Keep feet flat on the floor", "Don't let elbows flare past 90° on the way down", "Lower slowly — 2 sec down, press up"],
  },
  "Dumbbell Shoulder Press": {
    muscles: ["Shoulders", "Triceps", "Upper Chest"],
    description: "Sit or stand with dumbbells at shoulder height, palms facing forward. Press overhead until arms lock out, then lower back to shoulder level.",
    cues: ["Brace core — don't arch lower back", "Full lockout at top", "Lower to ear level, not chest", "Breathe out on the press"],
  },
  "Dumbbell Lateral Raise": {
    muscles: ["Side Deltoids", "Traps"],
    description: "Stand holding dumbbells at your sides. Raise both arms out to shoulder height with a slight bend in the elbow, then lower slowly.",
    cues: ["Lead with elbows, not hands", "Stop at shoulder height — no higher", "Lower in 3 seconds", "Use lighter weight than you think"],
  },
  "Tricep Dips (bench)": {
    muscles: ["Triceps", "Chest", "Front Deltoid"],
    description: "Place hands on bench edge behind you, feet on the floor. Lower your body by bending elbows to 90°, then press back up to straight arms.",
    cues: ["Keep hips close to the bench", "Elbows point straight back, not out", "Don't dip below 90° at the elbow", "Stay upright — don't lean forward"],
  },
  "Push-ups": {
    muscles: ["Chest", "Shoulders", "Triceps", "Core"],
    description: "Start in a high plank with hands just outside shoulder width. Lower chest to the floor keeping your body in a rigid straight line, then press back up.",
    cues: ["Straight line from head to heels — no sagging hips", "Elbows at 45° to the body", "Chest touches floor on every rep", "Squeeze glutes throughout"],
  },
  "Barbell Back Squat": {
    muscles: ["Quads", "Glutes", "Hamstrings", "Lower Back"],
    description: "Bar rests on upper traps. Feet shoulder-width, toes slightly out. Squat until thighs are at least parallel to the floor, then drive through heels to stand.",
    cues: ["Chest up, eyes forward", "Knees track in line with toes", "Brace your core before descending", "Drive hips up first out of the hole"],
  },
  "Romanian Deadlift": {
    muscles: ["Hamstrings", "Glutes", "Lower Back"],
    description: "Hold a barbell at hip height with a shoulder-width grip. Hinge at the hips, pushing them back while lowering the bar along your legs until you feel a deep hamstring stretch, then drive hips forward to stand.",
    cues: ["Keep back flat — no rounding", "Soft bend in the knees throughout", "Bar stays in contact with legs", "Feel the stretch before reversing"],
  },
  "DB Walking Lunges": {
    muscles: ["Quads", "Glutes", "Hamstrings", "Balance"],
    description: "Hold dumbbells at your sides. Step forward into a lunge, lowering the back knee toward the floor, then step the back foot forward to meet the front and repeat on the other side.",
    cues: ["Front knee stays directly over ankle", "Don't let the back knee crash into the floor", "Stay upright — resist leaning forward", "Control each step"],
  },
  "Goblet Squat": {
    muscles: ["Quads", "Glutes", "Core"],
    description: "Hold one dumbbell vertically at chest height with both hands cupped around the top. Squat deep, keeping elbows inside your knees at the bottom.",
    cues: ["Keep the weight close to your chest", "Elbows push knees out at the bottom", "Heels stay flat on the floor", "Sit into the squat — don't rush"],
  },
  "Box Step-ups": {
    muscles: ["Quads", "Glutes", "Balance"],
    description: "Place one full foot on the box. Drive through that heel to stand on top, then step down slowly. Complete all reps on one leg before switching.",
    cues: ["Full foot on the box — not just the ball", "Don't push off the back foot", "Pause standing on top before stepping down", "Keep hips level"],
  },
  "Barbell Bent-over Row": {
    muscles: ["Lats", "Rhomboids", "Biceps", "Rear Delts"],
    description: "Hinge forward at about 45° with a flat back, holding the bar with an overhand grip. Pull the bar to your lower chest, squeezing shoulder blades together at the top, then lower with control.",
    cues: ["Keep back flat throughout — no rounding", "Pull elbows back, not up", "3 second lower", "Don't let hips rise on the pull"],
  },
  "Single-arm DB Row": {
    muscles: ["Lats", "Rhomboids", "Biceps"],
    description: "Place one hand and knee on a bench for support. Hold a dumbbell in the other hand, arm hanging straight down. Pull the dumbbell to your hip, driving your elbow back and up.",
    cues: ["Keep hips square — don't rotate", "Full stretch at the bottom", "Elbow stays close to body", "Drive elbow to the ceiling, not the dumbbell"],
  },
  "Pull-ups / Chin-ups": {
    muscles: ["Lats", "Biceps", "Rhomboids"],
    description: "Dead hang from the bar with arms fully extended. Pull yourself up by driving elbows down and back until your chin clears the bar, then lower with control to a full dead hang.",
    cues: ["Start from a full dead hang every rep", "Don't kip or swing", "Chest toward the bar, not just your chin", "Lower slowly — 3 seconds down"],
  },
  "Dumbbell Bicep Curl": {
    muscles: ["Biceps", "Forearms"],
    description: "Stand holding dumbbells at your sides, palms forward. Curl both up by contracting the biceps, keeping elbows pinned at your sides, then lower slowly.",
    cues: ["Elbows don't move — only the forearm rotates", "Don't swing at the top", "Full extension at the bottom", "Squeeze hard at the top for a count"],
  },
  "DB Rear Delt Fly": {
    muscles: ["Rear Deltoids", "Rhomboids", "Traps"],
    description: "Hinge forward at 45°, dumbbells hanging. Raise both arms out to the sides, squeezing your rear delts at the top, then lower with control.",
    cues: ["Slight bend in the elbows", "Lead with elbows, not hands", "Squeeze at the top before lowering", "Light weight — form breaks fast here"],
  },
  "Dumbbell Swing": {
    muscles: ["Glutes", "Hamstrings", "Core", "Shoulders"],
    description: "Stand with feet hip-width, dumbbell between legs. Hinge back, then drive hips forward explosively to swing the dumbbell to shoulder height. Let it fall back through your legs and repeat.",
    cues: ["Power comes from the hip drive — not the arms", "Keep back flat on the hinge", "Squeeze glutes hard at the top", "Let the bell hike back between your legs"],
  },
  "Plank Hold": {
    muscles: ["Core", "Shoulders", "Glutes"],
    description: "Forearms on the floor, elbows under shoulders. Body forms a straight line from head to heels. Hold the position without moving.",
    cues: ["Don't let hips sag or pike up", "Squeeze glutes throughout", "Breathe normally — don't hold your breath", "Eyes on the floor, neutral neck"],
  },
  "Russian Twist (DB)": {
    muscles: ["Obliques", "Core"],
    description: "Sit with knees bent, lean back to 45°. Hold a dumbbell at chest height with both hands. Rotate your torso to tap the dumbbell to the floor on each side.",
    cues: ["Keep spine long — don't collapse", "Move from the torso, not just the arms", "Lift feet off the floor to increase difficulty", "Control the rotation — no flinging"],
  },
  "Dead Bug": {
    muscles: ["Deep Core", "Hip Flexors"],
    description: "Lie on your back, arms straight up over chest, knees bent at 90°. Slowly lower your opposite arm and leg toward the floor while pressing your lower back into the ground, then return and alternate.",
    cues: ["Lower back MUST stay pressed to the floor", "Breathe out as you extend", "Move slow — 3 seconds each way", "Stop before your back lifts off the floor"],
  },
  "Farmer's Carry": {
    muscles: ["Forearms", "Traps", "Core", "Legs"],
    description: "Pick up heavy dumbbells and walk a set distance with controlled steps, keeping shoulders pulled back and core braced.",
    cues: ["Stand tall — don't lean to either side", "Shoulder blades back and down", "Small controlled steps", "Grip as hard as you can"],
  },
  "Dumbbell Thruster": {
    muscles: ["Quads", "Glutes", "Shoulders", "Triceps"],
    description: "Hold dumbbells at shoulder height. Squat to parallel, then explosively stand and use that momentum to press the dumbbells overhead in one fluid movement.",
    cues: ["Drive through heels as you stand", "Press starts as hips extend", "Full lockout overhead at the top", "Bring weights back to shoulders before squatting again"],
  },
  "Barbell Deadlift": {
    muscles: ["Hamstrings", "Glutes", "Lower Back", "Traps"],
    description: "Bar over mid-foot, hip-width stance. Hinge, grip the bar outside your legs. Drive feet through the floor while lifting your chest. Lock out standing tall with hips fully extended.",
    cues: ["Bar stays close to your legs the whole way up", "Chest up before you pull", "Breathe in and brace before the pull", "Push the floor away — don't pull the bar"],
  },
  "Renegade Row": {
    muscles: ["Back", "Biceps", "Core", "Shoulders"],
    description: "High plank position with hands on dumbbells. Row one dumbbell to your hip while stabilizing with the other arm. Lower and repeat on the other side.",
    cues: ["Hips stay square — no rotation", "Core braced the entire time", "Feet wider = more stable", "Row to hip, not to armpit"],
  },
  "Burpee": {
    muscles: ["Full Body", "Cardio"],
    description: "From standing, place hands on the floor and jump feet back to a plank. Do a push-up, jump feet to hands, then explode up into a jump with arms overhead.",
    cues: ["Keep the plank position clean on the way down", "Push-up is optional when fatigued — just maintain form", "Land softly on the jump", "Move at your pace — don't sacrifice form for speed"],
  },
}

export const workouts = [
  {
    day: "Monday",
    focus: "Upper Push",
    rounds: 3,
    exercises: [
      { name: "Dumbbell Bench Press",    reps: "12" },
      { name: "Dumbbell Shoulder Press", reps: "12" },
      { name: "Dumbbell Lateral Raise",  reps: "15" },
      { name: "Tricep Dips (bench)",     reps: "15" },
      { name: "Push-ups",                reps: "Max" },
    ],
    finisher: "3 × 200m row @ max effort | 90 sec rest",
  },
  {
    day: "Tuesday",
    focus: "Lower Body",
    rounds: 3,
    exercises: [
      { name: "Barbell Back Squat",  reps: "12" },
      { name: "Romanian Deadlift",   reps: "12" },
      { name: "DB Walking Lunges",   reps: "20 steps" },
      { name: "Goblet Squat",        reps: "15" },
      { name: "Box Step-ups",        reps: "12 each" },
    ],
    finisher: "4 × 250m row @ 85% effort | 60 sec rest",
  },
  {
    day: "Wednesday",
    focus: "Upper Pull + Row",
    rounds: 3,
    exercises: [
      { name: "Barbell Bent-over Row", reps: "12" },
      { name: "Single-arm DB Row",     reps: "12 each" },
      { name: "Pull-ups / Chin-ups",   reps: "Max" },
      { name: "Dumbbell Bicep Curl",   reps: "15" },
      { name: "DB Rear Delt Fly",      reps: "15" },
    ],
    finisher: "5 × 500m row | 2 min rest",
  },
  {
    day: "Thursday",
    focus: "Core + Conditioning",
    rounds: 4,
    exercises: [
      { name: "Dumbbell Swing",      reps: "20" },
      { name: "Plank Hold",          reps: "45 sec" },
      { name: "Russian Twist (DB)",  reps: "20" },
      { name: "Dead Bug",            reps: "10 each" },
      { name: "Farmer's Carry",      reps: "40m" },
    ],
    finisher: "Tabata row — 20 sec on / 10 sec off × 8",
  },
  {
    day: "Friday",
    focus: "Full Body HIIT",
    rounds: 4,
    exercises: [
      { name: "Dumbbell Thruster", reps: "12" },
      { name: "Barbell Deadlift",  reps: "10" },
      { name: "Push-ups",          reps: "15" },
      { name: "Renegade Row",      reps: "8 each" },
      { name: "Burpee",            reps: "10" },
    ],
    finisher: "1 × 1000m row @ max effort",
  },
]

export { exerciseDetails }

export const strengthLog = [
  { week: "Apr 28", squat: null, deadlift: null, dbPress: null, pullups: null, row500: null },
  { week: "May 4",  squat: null, deadlift: null, dbPress: null, pullups: null, row500: null },
  { week: "May 11", squat: null, deadlift: null, dbPress: null, pullups: null, row500: null },
  { week: "May 18", squat: null, deadlift: null, dbPress: null, pullups: null, row500: null },
]
