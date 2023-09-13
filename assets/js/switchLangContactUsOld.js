document.addEventListener('DOMContentLoaded', function() {
    const elements = {
      //Navbar
      languageToggle: document.getElementById('language-toggle'),
      homeNavbar: document.getElementById('homeNavbar'),
      aboutUsNavbar: document.getElementById('aboutUsNavbar'),
      ourServicesNavbar: document.getElementById('ourServicesNavbar'),
      contactUsNavbar: document.getElementById('contactUsNavbar'),
      applyNowNavbar: document.getElementById('applyNowNavbar'),

      //Contact Us
      ContactUs: document.getElementById('ContactUs'),
      ContactWithUs: document.getElementById('ContactWithUs'),
      WriteUsAMessage: document.getElementById('WriteUsAMessage'),



      //Footer
      SummaryFooter: document.getElementById('SummaryFooter'),
      ExploreFooter: document.getElementById('ExploreFooter'),
      HomeFooter: document.getElementById('HomeFooter'),
      AboutUsFooter: document.getElementById('AboutUsFooter'),
      OurServicesFooter: document.getElementById('OurServicesFooter'),
      ContactUsFooter: document.getElementById('ContactUsFooter'),
      ApplyNowFooter: document.getElementById('ApplyNowFooter'),
      ContactFooter: document.getElementById('ContactFooter'),
      OurBusinessHourFooter: document.getElementById('OurBusinessHourFooter'),
      MondayToFriday: document.getElementById('MondayToFriday'),
      Saturday: document.getElementById('Saturday'),
      CloseSunday: document.getElementById('CloseSunday'),

    };
  
    // Check the current language preference and update the switch accordingly
    if (localStorage.getItem('language') === 'bm') {
      elements.languageToggle.checked = 'bm';
      updateContent('bm');
    } else {
      elements.languageToggle.checked = 'en';
      updateContent('en');
    }
  
    // Add event listener to the language toggle select
    elements.languageToggle.addEventListener('change', function () {
        if (this.checked) {
          updateContent('bm');
          localStorage.setItem('language', 'bm');
        } else {
          updateContent('en');
          localStorage.setItem('language', 'en');
        }
      })
  
    function updateContent(language) {
      const translations = {
        // Navbar
        homeNavbar: { en: 'Home', bm: 'Laman Utama' },
        aboutUsNavbar: { en: 'About Us', bm: 'Tentang Kami' },
        ourServicesNavbar: { en: 'Our Services', bm: 'Perkhidmatan Kami' },
        contactUsNavbar: { en: 'Contact Us', bm: 'Hubungi Kami' },
        applyNowNavbar: { en: 'Apply Now', bm: 'Mohon Sekarang' },

        //Contact Us
        ContactUs: { en: 'Contact Us', bm: 'Hubungi Kami' },
        ContactWithUs: { en: 'Contact with us', bm: 'Hubungi Kami' },
        WriteUsAMessage: { en: 'Write us a message', bm: 'Tulis mesej kepada kami' },




        //Footer
        SummaryFooter: { 
            en: 'Misenpura Credit helps you in your financing journey. Every piece of information will be relayed easily and accurately to promote total transparency so you know you’re in good hands.', 
            bm: 'Misenpura Credit membantu anda dalam perjalanan kewangan anda. Setiap maklumat akan disampaikan dengan tepat dan profesional, maka anda berada di tangan yang baik.' 
        },
        ExploreFooter: { en: 'Explore', bm: 'Terokai' },
        HomeFooter: { en: 'Home', bm: 'Laman Utama' },
        AboutUsFooter: { en: 'About Us', bm: 'Tentang Kami' },
        OurServicesFooter: { en: 'Our Services', bm: 'Perkhidmatan Kami' },
        ContactUsFooter: { en: 'Contact Us', bm: 'Hubungi Kami' },
        ApplyNowFooter: { en: 'Apply Now', bm: 'Mohon Sekarang' },

        ContactFooter: { en: 'Contact', bm: 'Hubungi' },
        OurBusinessHourFooter: { en: 'Our Business Hour', bm: 'Waktu Perniagaan Kami' },
        MondayToFriday: { en: 'Monday - Friday: (9am - 6pm)', bm: 'Isnin - Jumaat: (9 pagi - 6 petang)' },
        Saturday: { en: 'Saturday: (9am - 1pm)', bm: 'Sabtu: (9 pagi - 1 petang)' },
        CloseSunday: { en: 'Closed on Sundays & Public Holidays', bm: 'Tutup pada hari Ahad & Cuti Umum' },

      };
  
      for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
          const element = elements[key];
          const translation = translations[key];
          if (translation) {
            if (/<[a-z][\s\S]*>|<br>/i.test(translation[language])) {
              element.innerHTML = translation[language];
            } else {
              element.textContent = translation[language];
            }
          }
        }
      }
    }
  });
  
  