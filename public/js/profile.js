/* populate prof pic and name */
var name = sessionStorage.getItem('user');
var pic = sessionStorage.getItem('profPic');

document.getElementById("ProfilePic").src = pic;
document.getElementById("name").innerHTML = name;