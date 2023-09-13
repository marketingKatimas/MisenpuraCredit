document.addEventListener('DOMContentLoaded', function() {
    const elements = {
      //Navbar
      languageToggle: document.getElementById('language-toggle'),
      homeNavbar: document.getElementById('homeNavbar'),
      aboutUsNavbar: document.getElementById('aboutUsNavbar'),
      ourServicesNavbar: document.getElementById('ourServicesNavbar'),
      contactUsNavbar: document.getElementById('contactUsNavbar'),
      applyNowNavbar: document.getElementById('applyNowNavbar'),

      //Slider
      sliderWelcomeMisenpuraOne: document.getElementById('sliderWelcomeMisenpuraOne'),
      FlexiblePlan: document.getElementById('FlexiblePlan'),
      SliderContactUs: document.getElementById('SliderContactUs'),
      sliderWelcomeMisenpuraTwo: document.getElementById('sliderWelcomeMisenpuraTwo'),
      ConsolidateMultiple: document.getElementById('ConsolidateMultiple'),
      sliderApplyNow: document.getElementById('sliderApplyNow'),
      sliderWelcomeMisenpuraThree: document.getElementById('sliderWelcomeMisenpuraThree'),
      planYourFinancing: document.getElementById('planYourFinancing'),
      FreeConsultation: document.getElementById('FreeConsultation'),

      //Check Your Eligibility
      checkYourEligibility: document.getElementById('checkYourEligibility'),

      //What makes us different
      whatMakeUsDifferent: document.getElementById('whatMakeUsDifferent'),
      weTakeCareYourFinancialProblem: document.getElementById('weTakeCareYourFinancialProblem'),
      weTakeCareYourFinancialProblemP: document.getElementById('weTakeCareYourFinancialProblemP'),
      learnMore: document.getElementById('learnMore'),
      LowInterestRate: document.getElementById('LowInterestRate'),
      LowProcessingFee: document.getElementById('LowProcessingFee'),
      FastProcess: document.getElementById('FastProcess'),
      OnlineApplication: document.getElementById('OnlineApplication'),

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

        //Slider
        sliderWelcomeMisenpuraOne: { en: 'Welcome to Misenpura Credit', bm: 'Selamat Datang ke Misenpura Credit' },
        FlexiblePlan: { en: 'Flexible Plans <br>For Every Need</h2>', bm: 'Pelan Fleksibel <br>untuk Setiap <br>Keperluan</h2>' },
        SliderContactUs: { en: 'Contact Us', bm: 'Hubungi Kami' },
        sliderWelcomeMisenpuraTwo: { en: 'Welcome to Misenpura Credit', bm: 'Selamat Datang ke Misenpura Credit' },
        ConsolidateMultiple: { en: 'Consolidate multiple <br> Debts into ONE!', bm: 'Satukan hutang, <br> hati pun girang' },
        sliderApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },
        sliderWelcomeMisenpuraThree: { en: 'Welcome to Misenpura Credit', bm: 'Selamat Datang ke Misenpura Credit' },
        planYourFinancing: { en: 'Plan your financing <br> With ease of heart', bm: 'Rancang kewangan anda dengan hati yang senang.' },
        FreeConsultation: { en: 'Free consultation', bm: 'Konsultasi Percuma' },

        //Check Your Eligibility
        checkYourEligibility: { en: 'Check Your Eligibility', bm: 'Semak Kelayakan Anda' },

        //What makes us different
        whatMakeUsDifferent: { en: 'What makes us different', bm: 'Kelebihan perkhidmatan kami' },
        weTakeCareYourFinancialProblem: { en: 'We take care of your financial problem', bm: 'Kami uruskan masalah kewangan anda' },
        weTakeCareYourFinancialProblemP: { 
            en: 'Misenpura Credit helps you in your financing journey. Every piece of information will be relayed easily and accurately to promote total transparency so you know you’re in good hands.', 
            bm: 'Misenpura Credit membantu anda dalam perjalanan kewangan anda. Setiap maklumat akan disampaikan dengan tepat dan profesional, maka anda berada di tangan yang baik.' 
        },
        learnMore: { en: 'Learn More', bm: 'Ketahui Lebih Lanjut' },
        LowInterestRate: { en: 'Low interest rate', bm: 'Kadar faedah rendah' },
        LowProcessingFee: { en: 'Low processing fee', bm: 'Yuran proses rendah' },
        FastProcess: { en: 'Fast process', bm: 'Proses yang pantas' },
        OnlineApplication: { en: 'Online application', bm: 'Aplikasi atas talian' },

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
        MondayToFriday: { en: 'Monday - Friday: (8:00am - 5:00pm)', bm: 'Isnin - Jumaat: (8:00am - 5:00pm)' },
        Saturday: { en: 'Saturday: (8:00am - 1:00pm)', bm: 'Sabtu: (8:00am - 1:00pm)' },
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
  
  