function getscore() {
    score=localStorage.getItem("scoreKey");
    document.getElementById("display_score").innerHTML="Score:"+ score
}
function back() {
    window.location="activity_1.html"
}