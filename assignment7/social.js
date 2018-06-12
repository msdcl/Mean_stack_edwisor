var SocialProfile = /** @class */ (function () {
    //constructor
    function SocialProfile(name, gender, dob, bithYear, email, interestedIn, aboutYou, currentCity, homeTown, contactNumber, relationshipStatus, education, workPlace, skills, lifeEvents) {
        var _this = this;
        //methods
        this.getName = function () {
            return _this.name;
        };
        this.setName = function (name) {
            _this.name = name;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.setGender = function (gender) {
            _this.gender = gender;
        };
        this.getDOB = function () {
            return _this.dob;
        };
        this.setDOB = function (dob) {
            _this.dob = dob;
        };
        this.getBirthYear = function () {
            return _this.birthYear;
        };
        this.setBirthYear = function (year) {
            _this.birthYear = year;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        this.getAboutYou = function () {
            return _this.aboutYou;
        };
        this.setAboutYou = function (about) {
            _this.aboutYou = about;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.setCurrentCity = function (city) {
            _this.currentCity = city;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.setHomeTown = function (town) {
            _this.homeTown = town;
        };
        this.getContactNumber = function () {
            return _this.contactNumber;
        };
        this.setContactNumber = function (num) {
            _this.contactNumber = num;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.setrelationshipStatus = function (status) {
            _this.relationshipStatus = status;
        };
        this.getEducationDetails = function () {
            return _this.education;
        };
        this.setEducationDetails = function (education) {
            console.log("Set education details according to college, school");
        };
        this.getWorkPlaces = function () {
            return _this.workPlace;
        };
        this.setWorkPlace = function (workPlace) {
            console.log("add this to already existing workplace list");
        };
        this.getSkills = function () {
            return _this.skills;
        };
        this.setSkills = function (skills) {
            console.log("Add this skill to already existing skill set");
        };
        this.getLifeEvents = function () {
            return _this.lifeEvents;
        };
        this.setLifeEvents = function (event) {
            console.log("Add this event to person's life event list");
        };
        this.getAgeOfPerson = function () {
            var current = new Date();
            var currYear = current.getFullYear();
            var birthYear = _this.birthYear;
            return currYear - birthYear;
        };
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.birthYear = bithYear;
        this.email = email;
        this.interestedIn = interestedIn;
        this.aboutYou = aboutYou;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.contactNumber = contactNumber;
        this.relationshipStatus = relationshipStatus;
        this.education = education;
        this.workPlace = workPlace;
        this.skills = skills;
        this.lifeEvents = lifeEvents;
    } //end constructor
    return SocialProfile;
}()); //end class
// class object
var myProfile = new SocialProfile("Mahendra Singh", "Male", "11-08-1994", 1994, "abc@gmail.com", "women", "I am the best", "Beawar, Rajasthan", "Pali, Rajasthan", 1234567890, "single", ["kota", "IIT Guwahati"], ["Quietgrowth", "Fretron LLP"], ["C++", "Java", "javascript", "html", "css", "php"], ["entry 2012", "graduated 2016"]);
var pName = myProfile.getName();
console.log(pName);
var bdayYear = myProfile.getBirthYear();
console.log(bdayYear);
var age = myProfile.getAgeOfPerson();
console.log("Age of person " + age);
var skillsSet = myProfile.getSkills();
console.log("Person's skills : ");
var i;
for (i in skillsSet) {
    console.log(skillsSet[i]);
}
myProfile.setName("Chauhan Mahendra Singh");
var newName = myProfile.getName();
console.log("Updated name : " + newName);
