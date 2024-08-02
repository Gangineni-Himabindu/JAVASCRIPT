// Define an enum-like object for days of the week
const DaysOfWeek = Object.freeze({
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6
});

// Function to get a day name based on the enum value
function getDayName(day) {
    switch (day) {
        case DaysOfWeek.SUNDAY:
            return 'Sunday';
        case DaysOfWeek.MONDAY:
            return 'Monday';
        case DaysOfWeek.TUESDAY:
            return 'Tuesday';
        case DaysOfWeek.WEDNESDAY:
            return 'Wednesday';
        case DaysOfWeek.THURSDAY:
            return 'Thursday';
        case DaysOfWeek.FRIDAY:
            return 'Friday';
        case DaysOfWeek.SATURDAY:
            return 'Saturday';
        default:
            return 'Unknown day';
    }
}

// Example usage
console.log('Day 0 is:', getDayName(DaysOfWeek.SUNDAY));    // Output: Day 0 is: Sunday
console.log('Day 3 is:', getDayName(DaysOfWeek.WEDNESDAY)); // Output: Day 3 is: Wednesday
