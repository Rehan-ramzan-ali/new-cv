function imge() {
    document.getElementById("imge").innerHTML= "<img src='https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg' alt='My Image' style='width:180px; height:180px; border:2px solid black; border-radius:100px;' >";
    
}



function details() {
    document.getElementById("contect").innerText="Contect"
    document.getElementById("number").innerHTML= "<i class='fa-solid fa-phone'>: </i> 03126100085";
    document.getElementById("email").innerHTML= "<i class='fa-solid fa-envelope'>: </i> rehanali@gmail.com ";
    document.getElementById("location").innerHTML= "<i class='fa-solid fa-location-dot'>: </i> Awami colony korangi,karachi";
    document.getElementById("Skills").innerText="Skills"
    document.getElementById("ti").innerHTML="<li >HTML</li> <li >CSS</li> <li >JS</li>"
    document.getElementById("languagus").innerHTML="<h1> Languagus </h1> <ul><li>urdu</li><li>english</li></ul>"

}
function Press() {
    document.getElementById("profile").innerText=" Profile"
     document.getElementById("WORK EXPERIENCE").innerText="WORK EXPERIENCE"
     document.getElementById("yourcontect").innerText=" Your Contect"
}
function yourcontect() {
    document.getElementById("mandiv").innerHTML="<div id='contect'><form>Name:<input id='name' type='text' placeholder='Name'><br><br><label >Email :</label><input id='email' type='email' placeholder='Email address'><br><br><label >Number :</label><input id='number' type='text' placeholder='0331-2610085' maxlength='11' ></form><button type='submit' onclick='getdata()' >Submit</button></div>"
}
function profile() {
    document.getElementById("para").innerText="I am a passionate Software Engineer with strong problem-solving skills and a keen interest in technology. I have experience in programming languages such as Java, Python, and JavaScript, along with knowledge of web development and databases. I enjoy designing, developing, and testing software applications while ensuring clean, efficient, and maintainable code. I am eager to learn new tools, frameworks, and emerging technologies to stay updated in the field. I work well both independently and in a collaborative team environment. My goal is to create scalable, innovative, and user-friendly software solutions that solve real-world problems, while continuously growing in my professional career."
    
}
function WORKEXPERIENC() {
    document.getElementById("Company").innerHTML="<h4>Senior Software Developer</h4> <p>Company – Country <span> Jan 2022 – Dec 2023</span></p><ul><li>Developed and maintained software using Java, Python, and C++</li> <li>Led cross-functional teams to deliver successful software projects</li><li>Write a work experience of a senior software engineer in bullet points</li><h4>Web Developer</h4><p>Company – Country   <span> Jan 2021 – Dec 202</span> </p> <li>Developed and maintained various web applications using languages such as HTML, CSS, JavaScript, and PHP</li><li>Worked with cross-functional teams to gather requirements and design user interfaces</li></ul>"
}
function getdata() {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;

    if (name="") {
        alert("wow")
    }
    else(alert(
        "jhxbugjhvgjsv"
    ))
}