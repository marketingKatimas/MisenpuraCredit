document.addEventListener('DOMContentLoaded', function () {
    const elements = {
        //Navbar
        languageToggle: document.getElementById('language-toggle'),
        homeNavbar: document.getElementById('homeNavbar'),
        aboutUsNavbar: document.getElementById('aboutUsNavbar'),
        ourServicesNavbar: document.getElementById('ourServicesNavbar'),
        contactUsNavbar: document.getElementById('contactUsNavbar'),
        applyNowNavbar: document.getElementById('applyNowNavbar'),

        //Our Services
        OurServices: document.getElementById('OurServices'),
        PersonalLoanNav: document.getElementById('PersonalLoanNav'),
        PaydayLoanNav: document.getElementById('PaydayLoanNav'),
        DebtConsolidationNav: document.getElementById('DebtConsolidationNav'),
        IslamicLoanNav: document.getElementById('IslamicLoanNav'),
        WeddingLoanNav: document.getElementById('WeddingLoanNav'),
        RenovationLoanNav: document.getElementById('RenovationLoanNav'),
        MedicalLoanNav: document.getElementById('MedicalLoanNav'),
        EducationLoanNav: document.getElementById('EducationLoanNav'),

        PersonalLoan: document.getElementById('PersonalLoan'),
        PersonalLoanExplanation: document.getElementById('PersonalLoanExplanation'),
        PersonalLoanApplyNow: document.getElementById('PersonalLoanApplyNow'),
        PaydayLoan: document.getElementById('PaydayLoan'),
        PaydayLoanExplanation: document.getElementById('PaydayLoanExplanation'),
        PaydayLoanApplyNow: document.getElementById('PaydayLoanApplyNow'),
        DebtConsolidation: document.getElementById('DebtConsolidation'),
        DebtConsolidationExplanation: document.getElementById('DebtConsolidationExplanation'),
        DebtConsolidationApplyNow: document.getElementById('DebtConsolidationApplyNow'),
        IslamicLoan: document.getElementById('IslamicLoan'),
        IslamicLoanExplanation: document.getElementById('IslamicLoanExplanation'),
        IslamicLoanApplyNow: document.getElementById('IslamicLoanApplyNow'),
        WeddingLoan: document.getElementById('WeddingLoan'),
        WeddingLoanExplanation: document.getElementById('WeddingLoanExplanation'),
        WeddingLoanApplyNow: document.getElementById('WeddingLoanApplyNow'),
        RenovationLoan: document.getElementById('RenovationLoan'),
        RenovationLoanExplanation: document.getElementById('RenovationLoanExplanation'),
        RenovationLoanApplyNow: document.getElementById('RenovationLoanApplyNow'),
        MedicalLoan: document.getElementById('MedicalLoan'),
        MedicalLoanExplanation: document.getElementById('MedicalLoanExplanation'),
        MedicalLoanApplyNow: document.getElementById('MedicalLoanApplyNow'),
        EducationLoan: document.getElementById('EducationLoan'),
        EducationLoanExplanation: document.getElementById('EducationLoanExplanation'),
        EducationLoanApplyNow: document.getElementById('EducationLoanApplyNow'),

        //Banner
        CheckYourEligibility: document.getElementById('CheckYourEligibility'),
        CheckNow: document.getElementById('CheckNow'),


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

            //Our Services
            OurServices: { en: 'Our Services', bm: 'Perkhidmatan Kami' },
            PersonalLoanNav: { en: 'Personal Loan', bm: 'Pembiayaan Peribadi' },
            PaydayLoanNav: { en: 'Payday Loan', bm: 'Pembiayaan Hari Gaji' },
            DebtConsolidationNav: { en: 'Debt Consolidation', bm: 'Penyatuan Hutang' },
            IslamicLoanNav: { en: 'Islamic Loan', bm: 'Pembiayaan Islamik' },
            WeddingLoanNav: { en: 'Wedding Loan', bm: 'Pembiayaan Kahwin' },
            RenovationLoanNav: { en: 'Renovation Loan', bm: 'Pembiayaan Renovasi' },
            MedicalLoanNav: { en: 'Medical Loan', bm: 'Pembiayaan Perubatan' },
            EducationLoanNav: { en: 'Education Loan', bm: 'Pembiayaan Pendidikan' },

            //Our Services Content
            PersonalLoan: { en: 'Personal Loan', bm: 'Pembiayaan Peribadi' },
            PersonalLoanExplanation: {
                en: 'With our personal loan, you will receive a personalised plan based on your creditworthiness and income, so your monthly repayments are well within budget, without overburdening your finance.',
                bm: ' Dengan pembiayaan peribadi kami, anda akan menerima pelan direka khas berdasarkan kelayakan kredit dan pendapatan anda, agar bayaran balik anda mengikut bajet tanpa membebankan kewangan anda. '
            },
            PersonalLoanApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },
            PaydayLoan: { en: 'Payday Loan', bm: 'Pembiayaan Hari Gaji' },
            PaydayLoanExplanation: {
                en: 'For unexpected situations, our payday loans exist to provide instant financial relief that you need. Navigate through challenging situations with fast and accessible loans until your next paycheck.',
                bm: 'Bagi situasi tidak diduga, pembiayaan hari gaji diwujudkan untuk memberi anda bantuan kewangan segera. Tangani situasi mencabar dengan pembiayaan pantas dan selamat sehingga hari gaji seterusnya.'
            },
            PaydayLoanApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },

            DebtConsolidation: { en: 'Debt Consolidation', bm: 'Penyatuan Hutang' },
            DebtConsolidationExplanation: {
                en: 'Don’t let multiple debts weigh you down! Manage and reduce your interest burden and take control of your finances with our low interest rate solution.',
                bm: 'Jangan biarkan hutang berlambak membebankan anda! Urus dan kurangkan beban faedah dan kawal kewangan anda dengan khidmat penyatuan hutang kami yang berfaedah rendah.'
            },
            DebtConsolidationApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },
            IslamicLoan: { en: 'Islamic Loan', bm: 'Pembiayaan Islamik' },
            IslamicLoanExplanation: {
                en: 'Our Islamic loans are shariah-compliant with complete adherence to the tawarruq system, ensuring transparency and fairness. Pursue your financial goals with us with confidence and trust!',
                bm: 'Pembiayaan Islamik kami patuh pada syariah dan mengikuti sistem tawarruq, memastikan pembiayaan kami telus dan adil. Kecapi matlamat kewangan anda dengan yakin dan amanah'
            },
            IslamicLoanApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },
            WeddingLoan: { en: 'Wedding Loan', bm: 'Pembiayaan Kahwin' },
            WeddingLoanExplanation: {
                en: 'Getting married? Fund your dream wedding with us! Our wedding loan is designed to cover all your wedding expenses so you can enjoy the day you’ll remember forever.',
                bm: 'Untuk yang ingin berkahwin, biayai majlis kahwin idaman anda dengan pembiayaan perkahwinan kami! Pembiayaan ini merangkumi segala keperluan kahwin anda supaya anda dapat nikmati hari bahagia tanpa gelisah.'
            },
            WeddingLoanApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },
            RenovationLoan: { en: 'Renovation Loan', bm: 'Pembiayaan Renovasi' },
            RenovationLoanExplanation: {
                en: 'Get the necessary funds to renovate your current home into your ideal home! Give your interior a fresh new look with our flexible terms with a low interest rate and make your home project a reality!',
                bm: 'Dapatkan modal untuk ubahsuai rumah anda yang sekarang kepada rumah impian! Berikan interior rupa yang baharu dengan pembiayaan fleksibel kami, pada kadar faedah yang rendah. Jadikan projek ubahsuai rumah anda suatu kenyataan!'
            },
            RenovationLoanApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },
            MedicalLoan: { en: 'Medical Loan', bm: 'Pembiayaan Perubatan' },
            MedicalLoanExplanation: {
                en: 'Your health is our priority, and with our medical loan, you can receive the support you need. Focus on your well-being with our flexible repayment options and quick approval process.',
                bm: 'Kesihatan anda keutamaan kami. Dengan pembiayaan perubatan kami, dapatkan sokongan yang anda perlukan. Tumpukan kebajikan diri anda dengan pilihan bayaran balik kami yang fleksibel dan proses kelulusan yang pantas.'
            },
            MedicalLoanApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },
            EducationLoan: { en: 'Education Loan', bm: 'Pembiayaan Pendidikan' },
            EducationLoanExplanation: {
                en: 'Concentrate on your education without the financial burden. Our education loans cover your tuition fees, textbooks & living expenses, letting you focus on your studies. With favorable repayment terms, furthering your studies are now made easy! ',
                bm: 'Tumpukan pada pendidikan anda tanpa beban kewangan! Pembiayaan Pendidikan kami merangkumi yuran tuisyen, buku teks & keperluan harian agar anda dapat fokus pada pembelajaran anda. Dengan pelan bayaran balik yang mesra pelajar, melanjutkan pelajaran menjadi lebih mudah.'
            },
            EducationLoanApplyNow: { en: 'Apply Now', bm: 'Mohon Sekarang' },

            //Banner
            CheckYourEligibility: {
                en: 'Check Your Eligibility with our calculator',
                bm: 'Semak Kelayakan Anda dengan kalkulator kami'
            },
            CheckNow: { en: 'Check Now', bm: 'Semak Sekarang' },

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

