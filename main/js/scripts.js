//Set light/dark preset
var currentTheme = "dark";

//Download pdf of page when clicked
function savePDF() {
    const filename = 'Resume_James_McGoldrick';
    const filepath = 'Resume_James_McGoldrick.pdf';
    const link = document.createElement('a');

    link.href = filepath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return;
}

function printPDF(){
    const iframe = document.createElement('iframe');
    iframe.style.visibility = 'hidden';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.src = 'Resume_James_McGoldrick.pdf';
    iframe.onload = function () {
        this.contentWindow.focus();
        this.contentWindow.print();
    };
    document.body.appendChild(iframe);
    return;
}

function templateEmail(){
    const email = "jmcgoldrick2@gmail.com";
    const subject = "Resume Inquiry"; //document.getElementById('subject').value;
    const body = "I would like to learn more about you"; //document.getElementById('body').value;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}