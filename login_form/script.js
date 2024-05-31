document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');

    video.addEventListener('canplaythrough', function() {
        // Manually set the playback rate just before playing
        video.playbackRate = 1;

        // Manually start the video
        video.play();
    });

    // Additional check for browsers that don't support the 'canplaythrough' event
    video.addEventListener('loadedmetadata', function() {
        if (!video.autoplay) {
            // Manually set the playback rate just before playing
            video.playbackRate = 1;

            // Manually start the video
            video.play();
        }
    });
});
