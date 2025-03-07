document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bg-video");

    // 動画をループしながら切り替える
    const videos = [
        "assets/videos/background.mp4",
        "assets/videos/background2.mp4"
    ];

    let currentVideo = 0;

    function changeVideo() {
        currentVideo = (currentVideo + 1) % videos.length;
        video.src = videos[currentVideo];
        video.play();
    }

    // 動画の終わりごとに切り替え
    video.addEventListener("ended", changeVideo);
});
