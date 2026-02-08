//Set light/dark preset
var currentThemeDark = true;
var showingFooter = false;

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

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

function printPDF() {
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

function toggleFooter() {
    const footer = document.getElementById('footer-text');
    const selector = document.getElementById('contactInfoSelector')

    if (showingFooter) {
        showingFooter = false;
        footer.style.display = 'none';
        selector.style.color = 'var(--light-color)';
        
    } else {
        showingFooter = true;
        footer.style.display = 'flex';
        selector.style.color = 'var(--accent-color)';
    }
}

function toggleDarkMode() {
    const root = document.documentElement;
    const selector = document.getElementById("darkModeSelector");

    if (!currentThemeDark) {
        currentThemeDark = true;

        root.style.setProperty('--dark-color', '#212121');
        root.style.setProperty('--medium-color', '#363636');
        root.style.setProperty('--light-color', '#c4c4c4');
        root.style.setProperty('--accent-color', '#7f9a77');

        selector.style.color = 'var(--accent-color)';

    } else {
        currentThemeDark = false;

        root.style.setProperty('--dark-color', '#f2f2f2');
        root.style.setProperty('--medium-color', '#747474');
        root.style.setProperty('--light-color', '#1c1c1c');
        root.style.setProperty('--accent-color', '#5a6548');

        selector.style.color = 'var(--light-color)';
    }
}

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};
