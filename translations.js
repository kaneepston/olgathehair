// Translation object for English and Polish
const translations = {
    en: {
        // Navigation
        navPortfolio: "Portfolio",
        navServices: "Services",
        navWeddings: "Weddings",
        navTraining: "Training",
        navContact: "Contact",
        navBookAppointment: "Book Appointment",
        
        // Header
        headerLocation: "",
        headerTitle: "Weddings & Events",
        headerSubtitle: "Hairstyles",
        headerDescription: "Want a perfect, long-lasting hairstyle tailored to your needs? You're in the right place. I provide professional hair styling in my studio or on location at any place you choose. Your beauty is my passion! I'll create the hairstyle you dream of, so you feel special and comfortable on any occasion.",
        headerBookButton: "Book Appointment",
        headerViewPortfolio: "View Portfolio",
        headerBridesStyled: "Brides",
        headerStudioLocationTitle: "In-studio",
        headerStudioLocation: "professional studio",
        headerOnLocationTitle: "On location",
        headerOnLocation: "travel to your chosen address",
        
        // Portfolio
        portfolioTitle: "My Portfolio.",
        portfolioSubtitle: "Selected styles",
        portfolioViewAll: "View full portfolio",
        portfolioLabelBohemian: "Bohemian",
        portfolioLabelChic: "Chic",
        portfolioLabelBridal: "Bridal",
        portfolioLabelGlam: "Glam",
        portfolioHover1: "Classic Hollywood Waves",
        portfolioHover2: "Modern Blowout",
        portfolioHover3: "Romantic Low Updo",
        portfolioHover4: "Red Carpet Curls",
        
        // Services
        servicesTitle: "Services & Pricing",
        servicesDescription: "Experience the luxury of personalized styling in my studio in Krakow.",
        servicesBookLink: "Book Appointment",
        servicesStudioHeading: "Studio Styling",
        servicesStudioNote: "Evening Hairstyle · Voluminous Curls · Hollywood Waves",
        servicesBridalHeading: "Bridal Styling",
        servicesAddonsHeading: "Add-ons",
        servicesStudioShort: "Short hair",
        servicesStudioShortDuration: "30–50 min",
        servicesStudioShortPrice: "220",
        servicesStudioMedium: "Medium-length",
        servicesStudioMediumDuration: "30–75 min",
        servicesStudioMediumPrice: "320",
        servicesStudioLong: "Long hair",
        servicesStudioLongDuration: "75–120 min",
        servicesStudioLongPrice: "420",
        servicesBridalShort: "Short hair",
        servicesBridalShortDuration: "75 min",
        servicesBridalShortPrice: "270",
        servicesBridalMedium: "Medium-length",
        servicesBridalMediumDuration: "120 min",
        servicesBridalMediumPrice: "370",
        servicesBridalLong: "Long hair",
        servicesBridalLongDuration: "120–150 min",
        servicesBridalLongPrice: "470",
        servicesTrial: "Trial Session",
        servicesTrialDesc: "2 options",
        servicesTrialPrice: "620",
        servicesEarlyHours: "Early hours",
        servicesEarlyHoursDesc: "5:00–7:00 AM",
        servicesEarlyHoursPrice: "+50",
        servicesTravelKrakow: "Travel in Kraków",
        servicesTravelKrakowDesc: "from 3 people",
        servicesTravelKrakowPrice: "+150",
        servicesPolandInternational: "Travel outside of Kraków",
        servicesPolandInternationalDesc: "Europe and international",
        servicesOnDemand: "ON DEMAND",
        
        // Wedding Packages
        packagesLabel: "On-Location",
        packagesTitle: "Wedding Packages",
        packagesDescription: "Each package includes travel within Kraków, unlimited email consultations, an additional hour of availability on the wedding day, and the option of a wedding contract.*",
        packagesDisclaimer: "* Travel outside Krakow is priced individually. Trial hairstyles are not included in the price. If the package is used by fewer people than specified, the package price remains unchanged. A deposit is required to secure the booking.",
        packagesCaptureTitle: "Capture perfection",
        packagesCaptureDesc: "Hairstyles designed to look flawless from every angle.",
        package1Badge: "STANDARD",
        package1Title: "On-Location Package 1",
        package1Subtitle: "1 Bride + 1 Guest",
        package1Price: "1700",
        package1Bullet1: "2 hairstyles of choice",
        package1Bullet2: "Exclusive availability during preparation time",
        package1Bullet3: "Travel within Kraków included",
        package1Bullet4: "Unlimited planning by email",
        package1BestFor: "Best for: Bride + one important person",
        package1Button: "Select Package",
        package1HelperLink: "See what's included",
        package2Badge: "MOST POPULAR",
        package2Title: "On-Location Package 2",
        package2Subtitle: "1 Bride + 2 Guests",
        package2Price: "2000",
        package2Bullet1: "3 hairstyles of choice",
        package2Bullet2: "Exclusive availability during preparation time",
        package2Bullet3: "Travel within Kraków included",
        package2Bullet4: "Unlimited planning by email",
        package2BestFor: "Best for: Bride + 2-person bridal party",
        package2Button: "Select Package",
        package2HelperLink: "See what's included",
        package3Badge: "SMALL PARTY",
        package3Title: "On-Location Package 3",
        package3Subtitle: "1 Bride + 3 Guests",
        package3Price: "2300",
        package3Bullet1: "4 hairstyles of choice",
        package3Bullet2: "Exclusive availability during preparation time",
        package3Bullet3: "Travel within Kraków included",
        package3Bullet4: "Unlimited planning by email",
        package3BestFor: "Best for: Bride + small group",
        package3Button: "Select package",
        package3HelperLink: "See what's included",
        package4Badge: "FULL PARTY",
        package4Title: "On-Location Package 4",
        package4Subtitle: "1 Bride + 4 Guests",
        package4Price: "2500",
        package4Bullet1: "5 hairstyles of choice",
        package4Bullet2: "Exclusive availability during preparation time",
        package4Bullet3: "Travel within Kraków included",
        package4Bullet4: "Unlimited planning by email",
        package4BestFor: "Best for: Bride + full bridal party",
        package4Button: "Select Package",
        package4HelperLink: "See what's included",
        packagesIncludedTitle: "Included in every package",
        packagesIncludedGroup1Title: "Logistics",
        packagesIncludedGroup1Item1: "Travel within Kraków included",
        packagesIncludedGroup1Item2: "Outside Kraków: priced individually",
        packagesIncludedGroup2Title: "Planning & communication",
        packagesIncludedGroup2Item1: "Unlimited email consultations",
        packagesIncludedGroup2Item2: "Schedule planning for your prep time",
        packagesIncludedGroup3Title: "Booking & assurance",
        packagesIncludedGroup3Item1: "Deposit required to secure the booking",
        packagesIncludedGroup3Item2: "Wedding contract available on request",
        packagesIncludedGroup4Title: "Flexibility",
        packagesIncludedGroup4Item1: "Extra 1 hour of availability on the day",
        packagesIncludedGroup4Item2: "Price stays the same if fewer people attend",
        packagesIncludedGroup5Title: "Not included",
        packagesIncludedGroup5Item1: "Trial hairstyle is not included",
        
        // Reviews
        reviewsTitle: "Kind Words",
        reviewsGoogleTitle: "Google Reviews",
        review1Text: "I recommend Olga — she's kind and very professional. She pays attention to every detail. Great atmosphere and a lovely experience.",
        review1Author: "Angelika P.",
        review2Text: "Total professionalism. Olga is wonderful and friendly—very creative, listens, understands, and advises. The hairstyle exceeded my expectations and lasted all night without any touch-ups. I wholeheartedly recommend her.",
        review2Author: "Irina G.",
        review3Text: "Highly recommended! Professional service and a very pleasant atmosphere. Thank you for a beautiful hairstyle.",
        review3Author: "Gabriela I.",
        review4Text: "The final result exceeded my expectations. The atmosphere was pleasant and professional. I definitely recommend.",
        review4Author: "Marta W.",
        review5Text: "A great hairstylist and—most importantly—very kind and pleasant. Lovely time, and the hair was styled beautifully and lasted all night. Wholeheartedly recommended.",
        review5Author: "Maria M.",
        review6Text: "Olga styled my hair for a business photoshoot and other events. She has extensive experience and hair knowledge. The result was perfect—professional and hair-conscious.",
        review6Author: "Agini M.",
        review7Text: "Olga is easy to communicate with—she can bring your vision to life. The hairstyle holds beautifully and the atmosphere is lovely. She cares about every small detail.",
        review7Author: "Liudmyla K.",
        review8Text: "I'd give 6 stars if I could. After several attempts with other stylists, I finally found Olga: she works gently with hair, has a modern aesthetic, and adapts styles to suit the face. Very fair pricing. I'll be recommending her.",
        review8Author: "N V.",
        review9Text: "Olga created my wedding hairstyle and I wholeheartedly recommend her. She's incredibly kind. She styles hair with true passion and imagination. My braid looked beautiful all day and night.",
        review9Author: "Olga's client",
        review10Text: "The best hairstylist in Kraków and the area. Kind, smiling, and focused on quality and longevity. She perfectly adapted the hairstyle to my face. I had an event far from Kraków and the hairstyle still lasted until the next day. It looked natural—not stiff—and every hair was in place. I'll be back and will recommend.",
        review10Author: "Olga's client",
        review11Text: "From the first moment, you can feel Olga loves her work. She advises and listens closely. The hairstyle suited me perfectly and stayed in excellent condition all night. I wholeheartedly recommend her and will definitely return.",
        review11Author: "Olga's client",
        review12Text: "Olga creates beautiful hairstyles even when the client isn't sure what she wants. Wedding and photoshoot hair lasted for many hours—even during travel and an all-night party. The flowers stayed in place, and removal needed only a few pins. True class and professionalism.",
        review12Author: "Olga's client",
        reviewsLeaveButton: "Leave a Review",
        
        // About
        aboutTitle: "About Me",
        aboutText1: "My name is Olga and I am a professional hairstylist. I specialize in creating elegant, long-lasting styles for every occasion. I always work with an individual approach, taking each person's needs into account. I believe every woman is unique, which is why a hairstyle should highlight her personality, beauty, and the character of the occasion. For me, styling is not only the right technique, but also a thoughtful process that combines precision and aesthetics, as well as your personal comfort.",
        
        // Brands
        brandsTitle: "In my work I use these products",
        
        // Training
        trainingLabel: "",
        trainingTitle: "Training",
        trainingDescription: "I run professional training for hairstylists and salon teams, delivered as practical in-person sessions. The training focuses on strong technical foundations, work aesthetics, trend awareness, and a professional approach to the craft. The program is tailored to the participants' level and covers updo techniques, client work, and building a consistent, professional offer.",
        trainingCaption: "",
        trainingButton: "Request Training",
        
        // Contact
        contactTitle: "Get in Touch",
        contactStudioAddress: "Studio Address",
        contactAddress1: "Ulica Długa 7/12",
        contactAddress2: "31-147 Kraków, Poland",
        contactEmail: "olga.thehair@gmail.com",
        contactDescription: "Please fill out the form to inquire about availability.",
        contactName: "Name",
        contactNamePlaceholder: "Jane Doe",
        contactEmailField: "Email",
        contactEmailPlaceholder: "jane@example.com",
        contactDate: "Event Date",
        contactService: "Service Type",
        contactServiceOption1: "Bridal Package",
        contactServiceOption2: "Studio Styling",
        contactServiceOption3: "Photoshoot",
        contactServiceOption4: "Training Inquiry",
        contactServiceOption5: "Other",
        contactMessage: "Message",
        contactMessagePlaceholder: "Tell me about your hair length, inspiration, or location...",
        contactSubmit: "Send Inquiry",
        
        // Footer
        footerDescription: "Elevating bridal and editorial hair styling to an art form. Based in the heart of Kraków.",
        footerGetInTouch: "Get In Touch",
        footerCopyright: "© 2026 Olga.TheHAIR",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        
        // Gallery
        galleryTitle: "Portfolio Gallery"
    },
    pl: {
        // Navigation
        navPortfolio: "Portfolio",
        navServices: "Usługi",
        navWeddings: "Śluby",
        navTraining: "Szkolenia",
        navContact: "Kontakt",
        navBookAppointment: "Umów wizytę",
        
        // Header
        headerLocation: "",
        headerTitle: "Fryzury ślubne i",
        headerSubtitle: "okolicznościowe",
        headerDescription: "Chcesz mieć idealną, trwałą i dostosowaną do swoich potrzeb fryzurę? Trafiłaś w dobre miejsce. Wykonuję profesjonalną stylizację włosów stacjonarnie w moim Studio lub z dojazdem w dowolne, wskazane przez Ciebie miejsce. Twoje piękno to moja pasja! Stworzę dla Ciebie fryzurę o jakiej marzysz, abyś w każdych okolicznościach czuła się wyjątkowo i komfortowo.",
        headerBookButton: "Umów wizytę",
        headerViewPortfolio: "Zobacz Portfolio",
        headerBridesStyled: "Panny Młode",
        headerStudioLocationTitle: "Stacjonarnie",
        headerStudioLocation: "profesjonalne studio",
        headerOnLocationTitle: "Mobilnie",
        headerOnLocation: "z dojazdem do wskazanej lokalizacji",
        
        // Portfolio
        portfolioTitle: "Moje Portfolio",
        portfolioSubtitle: "Wybrane stylizacje",
        portfolioViewAll: "Zobacz całe portfolio",
        portfolioLabelBohemian: "Bohemian",
        portfolioLabelChic: "Chic",
        portfolioLabelBridal: "Ślubna",
        portfolioLabelGlam: "Glam",
        portfolioHover1: "Klasyczne fale hollywoodzkie",
        portfolioHover2: "Nowoczesna stylizacja",
        portfolioHover3: "Romantyczne niskie upięcie",
        portfolioHover4: "Loki w stylu red carpet",
        
        // Services
        servicesTitle: "Usługi i Cennik",
        servicesDescription: "Doświadcz luksusu spersonalizowanej stylizacji w moim studio w Krakowie.",
        servicesBookLink: "Umów wizytę",
        servicesStudioHeading: "Stylizacja w studio",
        servicesStudioNote: "Fryzura wieczorowa · Loki objętościowe · Fale Hollywood",
        servicesBridalHeading: "Fryzura ślubna",
        servicesAddonsHeading: "Dodatki",
        servicesStudioShort: "Włosy krótkie",
        servicesStudioShortDuration: "30–50 min",
        servicesStudioShortPrice: "220",
        servicesStudioMedium: "Włosy średnie",
        servicesStudioMediumDuration: "30–75 min",
        servicesStudioMediumPrice: "320",
        servicesStudioLong: "Włosy długie",
        servicesStudioLongDuration: "75–120 min",
        servicesStudioLongPrice: "420",
        servicesBridalShort: "Włosy krótkie",
        servicesBridalShortDuration: "75 min",
        servicesBridalShortPrice: "270",
        servicesBridalMedium: "Włosy średnie",
        servicesBridalMediumDuration: "120 min",
        servicesBridalMediumPrice: "370",
        servicesBridalLong: "Włosy długie",
        servicesBridalLongDuration: "120–150 min",
        servicesBridalLongPrice: "470",
        servicesTrial: "Fryzura próbna",
        servicesTrialDesc: "2 warianty",
        servicesTrialPrice: "620",
        servicesEarlyHours: "Wczesne godziny",
        servicesEarlyHoursDesc: "5:00–7:00",
        servicesEarlyHoursPrice: "+50",
        servicesTravelKrakow: "Dojazd na terenie Krakowa",
        servicesTravelKrakowDesc: "od 3 osób",
        servicesTravelKrakowPrice: "+150",
        servicesPolandInternational: "Dojazd poza Kraków",
        servicesPolandInternationalDesc: "Europa i międzynarodowe",
        servicesOnDemand: "NA ZAPYTANIE",
        
        // Wedding Packages
        packagesLabel: "Dojazd",
        packagesTitle: "Pakiety Ślubne",
        packagesDescription: "Każdy pakiet zawiera dojazd na terenie Krakowa, nielimitowane konsultacje mailowe, dodatkową godzinę dostępności w dniu ślubu oraz opcję umowy ślubnej.*",
        packagesDisclaimer: "* Dojazd poza Kraków wyceniany indywidualnie - fryzury próbne nie są wliczone w cenę. W przypadku korzystania z pakietu przez mniejszą ilości osób niż wskazanych w danym pakiecie - cena pakietu pozostaje niezmieniona. Wymagany jest zadatek, aby zabezpieczyć rezerwację.",
        packagesCaptureTitle: "Uchwyć perfekcję",
        packagesCaptureDesc: "Fryzury zaprojektowane, aby wyglądać nieskazitelnie z każdego kąta.",
        package1Badge: "STANDARD",
        package1Title: "Pakiet dojazdowy 1",
        package1Subtitle: "1 Pani Młoda + 1 osoba",
        package1Price: "1700",
        package1Bullet1: "2 dowolne fryzury",
        package1Bullet2: "Wyłączność na czas przygotowań",
        package1Bullet3: "Dojazd w Krakowie w cenie",
        package1Bullet4: "Nielimitowane konsultacje mailowe",
        package1BestFor: "Najlepsze dla: Panna Młoda + 1 ważna osoba",
        package1Button: "Wybierz pakiet",
        package1HelperLink: "Zobacz co wliczone",
        package2Badge: "NAJPOPULARNIEJSZY",
        package2Title: "Pakiet dojazdowy 2",
        package2Subtitle: "1 Pani Młoda + 2 osoby",
        package2Price: "2000",
        package2Bullet1: "3 dowolne fryzury",
        package2Bullet2: "Wyłączność na czas przygotowań",
        package2Bullet3: "Dojazd w Krakowie w cenie",
        package2Bullet4: "Nielimitowane konsultacje mailowe",
        package2BestFor: "Najlepsze dla: Panna Młoda + 2 osoby",
        package2Button: "Wybierz pakiet",
        package2HelperLink: "Zobacz co wliczone",
        package3Badge: "MAŁA EKIPA",
        package3Title: "Pakiet dojazdowy 3",
        package3Subtitle: "1 Pani Młoda + 3 osoby",
        package3Price: "2300",
        package3Bullet1: "4 dowolne fryzury",
        package3Bullet2: "Wyłączność na czas przygotowań",
        package3Bullet3: "Dojazd w Krakowie w cenie",
        package3Bullet4: "Nielimitowane konsultacje mailowe",
        package3BestFor: "Najlepsze dla: Panna Młoda + mała grupa",
        package3Button: "Wybierz pakiet",
        package3HelperLink: "Zobacz co wliczone",
        package4Badge: "PEŁNA EKIPA",
        package4Title: "Pakiet dojazdowy 4",
        package4Subtitle: "1 Pani Młoda + 4 osoby",
        package4Price: "2500",
        package4Bullet1: "5 dowolnych fryzur",
        package4Bullet2: "Wyłączność na czas przygotowań",
        package4Bullet3: "Dojazd w Krakowie w cenie",
        package4Bullet4: "Nielimitowane konsultacje mailowe",
        package4BestFor: "Najlepsze dla: Panna Młoda + pełna ekipa",
        package4Button: "Wybierz pakiet",
        package4HelperLink: "Zobacz co wliczone",
        packagesIncludedTitle: "W cenie każdego pakietu",
        packagesIncludedGroup1Title: "Logistyka",
        packagesIncludedGroup1Item1: "Dojazd na terenie Krakowa w cenie",
        packagesIncludedGroup1Item2: "Poza Krakowem: wycena indywidualna",
        packagesIncludedGroup2Title: "Planowanie",
        packagesIncludedGroup2Item1: "Nielimitowane konsultacje mailowe",
        packagesIncludedGroup2Item2: "Ustalenie harmonogramu przygotowań",
        packagesIncludedGroup3Title: "Rezerwacja i bezpieczeństwo",
        packagesIncludedGroup3Item1: "Zadatek wymagany do rezerwacji terminu",
        packagesIncludedGroup3Item2: "Umowa dostępna na życzenie",
        packagesIncludedGroup4Title: "Elastyczność",
        packagesIncludedGroup4Item1: "Dodatkowa 1 godzina dostępności w dniu ślubu",
        packagesIncludedGroup4Item2: "Przy mniejszej liczbie osób cena bez zmian",
        packagesIncludedGroup5Title: "Poza pakietem",
        packagesIncludedGroup5Item1: "Fryzura próbna nie jest wliczona w cenę",
        
        // Reviews
        reviewsTitle: "Opinie",
        reviewsGoogleTitle: "Opinie Google",
        review1Text: "Polecam Olgę — jest miła i bardzo profesjonalna. Dba o każdy detal na głowie. Świetna atmosfera i miło spędzony czas.",
        review1Author: "Angelika P.",
        review2Text: "Pełny profesjonalizm. Olga to cudowna, sympatyczna osoba — bardzo kreatywna, słucha potrzeb klienta i je rozumie, podpowie i doradzi. Miałam przyjemność współpracować z Olgą — fryzura przeszła moje najśmielsze oczekiwania i przetrwała całą noc bez poprawek. Polecam z całego serca.",
        review2Author: "Irina G.",
        review3Text: "Polecam z całego serca! Pełen profesjonalizm i bardzo przyjemna atmosfera. Dziękuję za piękną fryzurę.",
        review3Author: "Gabriela I.",
        review4Text: "Efekt końcowy przekroczył moje oczekiwania! Dodatkowo atmosfera bardzo przyjemna i profesjonalna. Zdecydowanie polecam.",
        review4Author: "Marta W.",
        review5Text: "Świetna stylistka fryzur i — co najważniejsze — bardzo sympatyczna i przyjemna. Z przyjemnością spędzony czas, a włosy świetnie ułożone i trzymały się całą noc. Polecam z całego serca.",
        review5Author: "Maria M.",
        review6Text: "Olga czesała mnie na sesję biznesową oraz inne wydarzenia. To stylistka fryzur z ogromnym doświadczeniem i wiedzą o włosach. Efekt był perfekcyjny — profesjonalizm i dbałość o włosy.",
        review6Author: "Agini M.",
        review7Text: "Z Olgą można się dogadać — co tylko sobie wymarzysz, to zrealizuje. Fryzura utrzymuje się świetnie i powstaje w miłej atmosferze. Olga dba o każdy drobny szczegół, żeby klientka czuła się jak najlepiej.",
        review7Author: "Liudmyla K.",
        review8Text: "Dałabym 6 gwiazdek, gdyby się dało. Po kilku próbach u innych stylistów w końcu znalazłam Panią Olgę: pracuje delikatnie z włosami, ma nowoczesne i estetyczne podejście do fryzur oraz świetnie dopasowuje styl do twarzy. Cena bardzo adekwatna. Będę polecać.",
        review8Author: "N V.",
        review9Text: "Pani Olga tworzyła moją fryzurę ślubną i z całego serca ją polecam. Jest przesympatyczną osobą. Fryzury tworzy z prawdziwą pasją i wyobraźnią. Mój warkocz wyglądał cudownie przez cały dzień i noc.",
        review9Author: "Klientka Olgi",
        review10Text: "Najlepsza stylistka w Krakowie i okolicach. Bardzo miła, uśmiechnięta, skupiona na jakości i trwałości fryzury. Idealnie dopasowała fryzurę do mojej twarzy. Miałam uroczystość daleko od Krakowa, a fryzura i tak trzymała się do następnego dnia. Włosy były ułożone naturalnie — nie sklejone — a każdy włos był na swoim miejscu. Wrócę i będę polecać.",
        review10Author: "Klientka Olgi",
        review11Text: "Od pierwszej chwili czuć, że Olga kocha swoją pracę. Doradza i uważnie słucha oczekiwań. Fryzura idealnie mi pasowała i przetrwała w doskonałym stanie przez całą noc. Z całego serca polecam i na pewno wrócę.",
        review11Author: "Klientka Olgi",
        review12Text: "Olga wymyśla piękne fryzury nawet wtedy, gdy klientka nie wie dokładnie czego chce. Włosy ślubne i z sesji utrzymały się długie godziny — nawet w podróży i przez całonocną imprezę. Kwiaty trzymały się na miejscu, a przy zdejmowaniu okazało się, że wystarczyło tylko kilka spinek. Klasa i profesjonalizm.",
        review12Author: "Klientka Olgi",
        reviewsLeaveButton: "Zostaw opinię",
        
        // About
        aboutTitle: "O Mnie",
        aboutText1: "Mam na imię Olga i jestem profesjonalną stylistką fryzur. Specjalizuję się w tworzeniu eleganckich i trwałych stylizacji na każdą okazję. Swoją pracę wykonuję zawsze z indywidualnym podejściem do każdej osoby i z uwzględnieniem jej potrzeb. Wierzę, że każda kobieta jest wyjątkowa, dlatego fryzura powinna podkreślać jej osobowość, urodę i charakter okazji. Stylizacja to dla mnie nie tylko właściwa technika, ale także przemyślany proces łączący precyzję i estetykę, ale także Twój osobisty komfort.",
        
        // Brands
        brandsTitle: "W swojej pracy używam produktów",
        
        // Training
        trainingLabel: "",
        trainingTitle: "Szkolenia",
        trainingDescription: "Prowadzę profesjonalne szkolenia dla stylistów fryzur oraz zespołów salonowych, realizowane w formie praktycznych zajęć stacjonarnych. Szkolenia koncentrują się na solidnych podstawach technicznych, estetyce pracy, świadomości trendów oraz profesjonalnym podejściu do zawodu. Program jest dopasowany do poziomu kursantów i obejmuje techniki upięć, pracę z klientką oraz budowanie spójnej i profesjonalnej oferty.",
        trainingCaption: "",
        trainingButton: "Zapytaj o szkolenie",
        
        // Contact
        contactTitle: "Skontaktuj się",
        contactStudioAddress: "Adres Studio",
        contactAddress1: "Ulica Długa 7/12",
        contactAddress2: "31-147 Kraków, Polska",
        contactEmail: "olga.thehair@gmail.com",
        contactDescription: "Proszę wypełnić formularz, aby zapytać o dostępność.",
        contactName: "Imię",
        contactNamePlaceholder: "Jan Kowalski",
        contactEmailField: "Email",
        contactEmailPlaceholder: "jan@example.com",
        contactDate: "Data Wydarzenia",
        contactService: "Typ Usługi",
        contactServiceOption1: "Pakiet Ślubny",
        contactServiceOption2: "Stylizacja w Studio",
        contactServiceOption3: "Sesja Zdjęciowa",
        contactServiceOption4: "Zapytanie o Szkolenie",
        contactServiceOption5: "Inne",
        contactMessage: "Wiadomość",
        contactMessagePlaceholder: "Opowiedz mi o długości włosów, inspiracjach lub lokalizacji...",
        contactSubmit: "Wyślij Zapytanie",
        
        // Footer
        footerDescription: "Podnoszenie stylizacji włosów ślubnych i edytorialnych do rangi sztuki. Z siedzibą w sercu Krakowa.",
        footerGetInTouch: "Skontaktuj się",
        footerCopyright: "© 2026 Olga.TheHAIR",
        footerPrivacy: "Polityka Prywatności",
        footerTerms: "Regulamin",
        
        // Gallery
        galleryTitle: "Galeria Portfolio"
    }
};

// Language management
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateTranslations();
    updateLanguageButtons();
}

function updateLanguageButtons() {
    const enBtn = document.querySelector('.lang-btn-en');
    const plBtn = document.querySelector('.lang-btn-pl');
    
    if (enBtn && plBtn) {
        if (currentLanguage === 'en') {
            enBtn.classList.add('bg-white', 'dark:bg-surface-dark', 'text-primary', 'dark:text-white', 'shadow-sm');
            enBtn.classList.remove('text-gray-500', 'dark:text-gray-400');
            plBtn.classList.remove('bg-white', 'dark:bg-surface-dark', 'text-primary', 'dark:text-white', 'shadow-sm');
            plBtn.classList.add('text-gray-500', 'dark:text-gray-400');
        } else {
            plBtn.classList.add('bg-white', 'dark:bg-surface-dark', 'text-primary', 'dark:text-white', 'shadow-sm');
            plBtn.classList.remove('text-gray-500', 'dark:text-gray-400');
            enBtn.classList.remove('bg-white', 'dark:bg-surface-dark', 'text-primary', 'dark:text-white', 'shadow-sm');
            enBtn.classList.add('text-gray-500', 'dark:text-gray-400');
        }
    }
}

function updateTranslations() {
    const t = translations[currentLanguage];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' && element.type === 'text' || element.tagName === 'INPUT' && element.type === 'email') {
                element.placeholder = t[key];
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = t[key];
            } else {
                element.textContent = t[key];
            }
        } else {
            // Clear content if translation doesn't exist
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = '';
            } else if (element.tagName !== 'OPTION') {
                element.textContent = '';
            }
        }
        
        // Handle visibility for caption (show only if has content)
        if (key === 'trainingCaption') {
            if (t[key] && t[key].trim()) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        }
    });
    
    // Update elements with data-i18n-html for HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (t[key]) {
            element.innerHTML = t[key];
        }
    });
    
    // Re-render packages and services pricing if functions exist
    if (typeof renderPackages === 'function') {
        renderPackages();
    }
    if (typeof renderServicesPricing === 'function') {
        renderServicesPricing();
    }
    if (typeof renderReviews === 'function') {
        renderReviews();
    }
}
