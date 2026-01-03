//Set light/dark preset
var currentTheme = "dark";

//Download pdf of page when clicked
function toPDF() {
    const resume = document.getElementById('resume');
    const options = {
        margin: 1,
        filename: 'Resume_James_McGoldrick.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(resume).save();
    return;
}

function templateEmail(){
    const email = "jmcgoldrick2@gmail.com"
    const subject = "Resume Inquiry"; //document.getElementById('subject').value;
    const body = "I would like to learn more about you"; //document.getElementById('body').value;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}