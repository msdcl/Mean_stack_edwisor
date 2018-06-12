var YouTube = /** @class */ (function () {
    //constructor that is used to initialize properties
    function YouTube(title, views, name, countSubscriber, description, likes, dislikes, comments, recommendations) {
        var _this = this;
        //  method which are accessible to outside world or getter and setter
        this.getVideoTitle = function () {
            return _this.videoTitile;
        };
        this.setVideoTitle = function (title) {
            _this.videoTitile = title;
        };
        this.getNumberOfViews = function () {
            return _this.views;
        };
        this.setNumberOfViews = function (num) {
            _this.views = num;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.setChannelName = function (name) {
            _this.channelName = name;
        };
        this.getNumberOfSubscribers = function () {
            return _this.countSubsribers;
        };
        this.setNumberOfSubscribers = function (num) {
            _this.countSubsribers = num;
        };
        this.getVideoDescription = function () {
            return _this.videoDescription;
        };
        this.setVideoDescription = function (description) {
            _this.videoDescription = description;
        };
        this.getNumberOfLikes = function () {
            return _this.likes;
        };
        this.setNumberOfLikes = function (num) {
            _this.likes = num;
        };
        this.getNumberOfDislikes = function () {
            return _this.dislikes;
        };
        this.setNumberOfDislikes = function (num) {
            _this.dislikes = num;
        };
        this.getNumberOfComments = function () {
            return _this.countComments;
        };
        this.setNumberOfComments = function (num) {
            _this.countComments = num;
        };
        this.getRelatedVideos = function () {
            return _this.recommendedVideos;
        };
        this.setRelatedVideos = function () {
            var videos = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                videos[_i] = arguments[_i];
            }
            console.log("Enter this list of related videos to string array of recommended videos.");
        };
        this.videoTitile = title;
        this.views = views;
        this.channelName = name;
        this.countSubsribers = countSubscriber;
        this.videoDescription = description;
        this.likes = likes;
        this.dislikes = dislikes;
        this.countComments = comments;
        this.recommendedVideos = recommendations;
    } //end constructor
    return YouTube;
}()); //end class
// object of the class
var video1 = new YouTube("kumar Sanu hit song", 15000, "90's hit songs", 13000, "publish on 25th june 2012", 5000, 300, 500);
var noOfViews = video1.getNumberOfViews();
console.log("Number of view to this video are " + noOfViews);
var videoTitle = video1.getVideoTitle();
console.log("Video title :  " + videoTitle);
console.log("Now we will change the video title");
video1.setVideoTitle("Kumar sanu best song");
var newVideoTitle = video1.getVideoTitle();
console.log("Updated video title : " + newVideoTitle);
