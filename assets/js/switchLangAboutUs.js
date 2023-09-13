document.addEventListener('DOMContentLoaded', function() {
    const elements = {
      //Navbar
      languageToggle: document.getElementById('language-toggle'),
      homeNavbar: document.getElementById('homeNavbar'),
      aboutUsNavbar: document.getElementById('aboutUsNavbar'),
      ourServicesNavbar: document.getElementById('ourServicesNavbar'),
      contactUsNavbar: document.getElementById('contactUsNavbar'),
      applyNowNavbar: document.getElementById('applyNowNavbar'),

      //About Us
      AboutUs: document.getElementById('AboutUs'),
      OurValues: document.getElementById('OurValues'),
      TotalTransparency: document.getElementById('TotalTransparency'),
      TotalTransparencyExplaination: document.getElementById('TotalTransparencyExplaination'),
      DataPrivacy: document.getElementById('DataPrivacy'),
      DataPrivacyExplanation: document.getElementById('DataPrivacyExplanation'),
      ExcellentClientServicing: document.getElementById('ExcellentClientServicing'),
      ExcellentClientServicingExplanation: document.getElementById('ExcellentClientServicingExplanation'),
      FreeConsultation: document.getElementById('FreeConsultation'),

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

        //About Us
        AboutUs: { en: 'About us', bm: 'Tentang Kami' },
        OurValues: { en: 'Our Values', bm: 'Pegangan Kami' },
        TotalTransparency: { en: 'Total Transparency', bm: 'Ketelusan' },
        TotalTransparencyExplaination: { 
            en: 'Serving our clients and providing solutions to their financial problems is our main role. We give you full transparency on the whole process so you can make good decisions in your finance.', 
            bm: 'Membantu pelanggan dan memberi jalan penyelesaian kepada masalah kewangan merupakan benda yang lumrah. Maka kami memastikan anda tahu semua yang berlaku agar anda boleh membuat keputusan yang baik.' 
        },
        DataPrivacy: { 
            en: 'Data Privacy & Confidentiality', 
            bm: 'Perlindungan Data Peribadi' 
        },
        DataPrivacyExplanation: { 
            en: 'We value your data privacy and all your details are kept strictly confidential. You will also be protected under Personal Data Protection Act 2010.', 
            bm: 'Kami menghargai privasi data peribadi anda, maka segala maklumat yang telah kami terima akan disimpan ketat. Anda juga akan dilindungi di bawah Akta Perlindungan Data Peribadi 2010.' 
        },
        ExcellentClientServicing: { 
            en: 'Excellent Client Servicin', 
            bm: 'Khidmat Langgan Unggul' 
        },
        ExcellentClientServicingExplanation: { 
            en: 'We are client-centric & we love providing solutions to you. With our trained team of professionals and experts, we make sure our customer service is the best.', 
            bm: 'Pelanggan penting untuk kami & kami berdedikasi untuk memberi jalan penyelesaian kepada anda. Dengan pasukan pakar dan profesional kami, kami pastikan perkhidmatan langgan yang terbaik untuk anda.' 
        },
        FreeConsultation: { en: 'Free consultation', bm: 'Konsultasi percuma' },


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
  
  