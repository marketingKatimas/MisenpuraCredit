// Navbar
const languageToggle = document.getElementById('language-toggle');
const homeNavbar = document.getElementById('homeNavbar');
const aboutUsNavbar = document.getElementById('aboutUsNavbar');
const ourServicesNavbar = document.getElementById('ourServicesNavbar');
const contactUsNavbar = document.getElementById('contactUsNavbar');
const applyNowNavbar = document.getElementById('applyNowNavbar');

//Header
const OnlineApplicationForm = document.getElementById('OnlineApplicationForm');
const LetsGetStarted = document.getElementById('LetsGetStarted');

//Apply Form
const ApplyNow = document.getElementById('ApplyNow');
const LoanAmount = document.getElementById('LoanAmount');
const LoanAge = document.getElementById('LoanAge');
const NameAs = document.getElementById('NameAs');
const Email = document.getElementById('Email');
const Mobile = document.getElementById('Mobile');
const EmploymentSector = document.getElementById('EmploymentSector');
const PleaseSelect = document.getElementById('PleaseSelect');
const Government = document.getElementById('Government');
const GovernmentLink = document.getElementById('GovernmentLink');
const Private = document.getElementById('Private');
const MonthlyGrossSalary = document.getElementById('MonthlyGrossSalary');
const MonthlyNettSalary = document.getElementById('MonthlyNettSalary');
const Submit = document.getElementById('Submit');

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
    updateHeader('bm');
    updateApplyNow('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateHeader('en');
    updateApplyNow('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateHeader('bm');
        updateApplyNow('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateHeader('en');
        updateApplyNow('en');
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

function updateHeader(language) {
    if (language === 'bm') {
        OnlineApplicationForm.textContent = 'Borang Permohonan Atas Talian';
        LetsGetStarted.textContent = 'MARI KITA MULAKAN';
    } else {
        OnlineApplicationForm.textContent = 'Online Application Form';
        LetsGetStarted.textContent = 'LETS GET STARTED';
    }
}

function updateApplyNow(language) {
    if (language === 'bm') {
        ApplyNow.textContent = 'Mohon Segera';
        LoanAmount.textContent = 'Jumlah pinjaman (RM):';
        LoanAge.textContent = 'Umur:';
        NameAs.textContent = 'Nama seperti dalam MyKad:';
        Email.textContent = 'Emel:';
        Mobile.textContent = 'Nombor telefon:';
        EmploymentSector.textContent = 'Sektor pekerjaan:';
        PleaseSelect.textContent = 'Sila Pilih';
        Government.textContent = 'Kerajaan';
        GovernmentLink.textContent = 'Syarikat Berkaitan Kerajaan';
        Private.textContent = 'Swasta';
        MonthlyGrossSalary.textContent = 'Gaji Kasar Bulanan (RM):';
        MonthlyNettSalary.textContent = 'Gaji Bersih Bulanan (RM):';
        Submit.textContent = 'Hantar';

    } else {
        ApplyNow.textContent = 'Apply Now';
        LoanAmount.textContent = 'Loan Amount (RM):';
        LoanAge.textContent = 'Age:';
        NameAs.textContent = 'Name as In NRIC:';
        Email.textContent = 'Email:';
        Mobile.textContent = 'Mobile Contact No.:';
        EmploymentSector.textContent = 'Employment Sector:';
        PleaseSelect.textContent = 'Please Select';
        Government.textContent = 'Government';
        GovernmentLink.textContent = 'Government Link';
        Private.textContent = 'Private';
        MonthlyGrossSalary.textContent = 'Monthly Gross Salary (RM):';
        MonthlyNettSalary.textContent = ' Monthly Nett Salary (RM):';
        Submit.textContent = 'Submit';
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