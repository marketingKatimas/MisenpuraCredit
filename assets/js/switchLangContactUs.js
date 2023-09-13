// Navbar
const languageToggle = document.getElementById('language-toggle');
const homeNavbar = document.getElementById('homeNavbar');
const aboutUsNavbar = document.getElementById('aboutUsNavbar');
const ourServicesNavbar = document.getElementById('ourServicesNavbar');
const contactUsNavbar = document.getElementById('contactUsNavbar');
const applyNowNavbar = document.getElementById('applyNowNavbar');

//Contact Us
const ContactUs = document.getElementById('ContactUs');
const ContactWithUs = document.getElementById('ContactWithUs');
const WriteUsAMessage = document.getElementById('WriteUsAMessage');
const fname = document.getElementById('name');
const femail = document.getElementById('email');
const fphone = document.getElementById('phone');
const fmessage = document.getElementById('message');
const fSendAMessage = document.getElementById('SendAMessage');
const FindUsHere = document.getElementById('FindUsHere');

//Footer
const SummaryFooter = document.getElementById('SummaryFooter');
const ExploreFooter = document.getElementById('ExploreFooter');
const HomeFooter = document.getElementById('HomeFooter');
const AboutUsFooter = document.getElementById('AboutUsFooter');
const OurServicesFooter = document.getElementById('OurServicesFooter');
const ContactUsFooter = document.getElementById('ContactUsFooter');
const ApplyNowFooter = document.getElementById('ApplyNowFooter');
const ContactFooter = document.getElementById('ContactFooter');
const OurBusinessHourFooter = document.getElementById('OurBusinessHourFooter');
const MondayToFriday = document.getElementById('MondayToFriday');
const Saturday = document.getElementById('Saturday');
const CloseSunday = document.getElementById('CloseSunday');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateNavbar('bm');
  updateContactUs('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateContactUs('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
  if (this.checked) {
    updateNavbar('bm');
    updateContactUs('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateContactUs('en');
    updateFooter('en');
    localStorage.setItem('language', 'en');
  }
});

function updateNavbar(language) {
  if (language === 'bm') {
    homeNavbar.textContent = 'Laman Utama';
    aboutUsNavbar.textContent = 'Tentang Kami';
    ourServicesNavbar.textContent = 'Perkhidmatan Kami';
    contactUsNavbar.textContent = 'Hubungi Kami';
    applyNowNavbar.textContent = 'Mohon segera';
  } else {
    homeNavbar.textContent = 'Home';
    aboutUsNavbar.textContent = 'About Us';
    ourServicesNavbar.textContent = 'Our Services';
    contactUsNavbar.textContent = 'Contact Us';
    applyNowNavbar.textContent = 'Apply Now';
  }
}

function updateContactUs(language) {
  if (language === 'bm') {
    ContactUs.textContent = 'Hubungi kami';
    ContactWithUs.textContent = 'Hubungi kami';
    WriteUsAMessage.textContent = 'Tulis mesej kepada kami';

    fname.placeholder = 'Nama Anda';
    femail.placeholder = 'Alamat emel';
    fphone.placeholder = 'Nombor telefon';
    fmessage.placeholder = 'Tulis Mesej';
    fSendAMessage.textContent = 'Hantar Mesej';
    FindUsHere.textContent = 'Cari Kami Di Sini';

  } else {
    ContactUs.textContent = 'Contact Us';
    ContactWithUs.textContent = 'Contact with us';
    WriteUsAMessage.textContent = 'Write us a message';

    fname.placeholder = 'Your Name';
    femail.placeholder = 'Email Address';
    fphone.placeholder = 'Phone number';
    fmessage.placeholder = 'Write Message';
    fSendAMessage.textContent = 'Send a Message';
    FindUsHere.textContent = 'Find Us Here';

  }
}

function updateFooter(language) {
  if (language === 'bm') {
    SummaryFooter.textContent = 'Misenpura Credit membantu anda dalam perjalanan kewangan anda. Setiap maklumat akan disampaikan dengan tepat dan profesional, maka anda berada di tangan yang baik.';
    ExploreFooter.textContent = 'Terokai';
    HomeFooter.textContent = 'Laman Utama';
    AboutUsFooter.textContent = 'Tentang Kami';
    OurServicesFooter.textContent = 'Perkhidmatan Kami';
    ContactUsFooter.textContent = 'Hubungi Kami'
    ApplyNowFooter.textContent = 'Mohon Sekarang'
    ContactFooter.textContent = 'Hubungi'
    OurBusinessHourFooter.textContent = 'Waktu Perniagaan Kami'
    MondayToFriday.textContent = 'Isnin - Jumaat: (9 pagi - 6 petang)'
    Saturday.textContent = 'Sabtu: (9 pagi - 1 petang)'
    CloseSunday.textContent = 'Tutup pada hari Ahad & Cuti Umum'
  } else {
    SummaryFooter.textContent = 'Misenpura Credit helps you in your financing journey. Every piece of information will be relayed easily and accurately to promote total transparency so you know you’re in good hands.';
    ExploreFooter.textContent = 'Explore';
    HomeFooter.textContent = 'Home';
    AboutUsFooter.textContent = 'About Us';
    OurServicesFooter.textContent = 'Our Services';
    ContactUsFooter.textContent = 'Contact Us'
    ApplyNowFooter.textContent = 'Apply Now'
    ContactFooter.textContent = 'Contact'
    OurBusinessHourFooter.textContent = 'Our Business Hour'
    MondayToFriday.textContent = 'Monday - Friday: (9am - 6pm)'
    Saturday.textContent = 'Saturday: (9am - 1pm)'
    CloseSunday.textContent = 'Closed on Sundays & Public Holidays'
  }
}