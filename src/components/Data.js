import Image1 from "../assets/kedarnath.jpeg";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const destinationsData = [
  {
    id: 1,
    imageurl: Image1,
    name: "Kedarnath",
    description: `Kedarnath is the most holy place of Load Shiva. Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites. It is located in the Himalayas, about 3,583 m (11,755 ft) above sea level near the Chorabari Glacier, which is the source of the Mandakini river.
    The town is flanked by snow-capped peaks, most prominently the Kedarnath Mountain.`,
    moreDescription: `Kedarnath nearest railway station : Haridwar/Yogi Rishikesh
    Mode of Travel: Bus/Car`,
    plan: `Plan: 
        Day 1: Reach Haridwar/Yogi Rishikesh
        Day 2: Reach Soan Prayag/Gaurikund by Car/bus
        Day 3: 22 k.m. Trek to Kedarnath and Stay at tent/hotel/GMVN Guest house
        Day 4: Back to Soan Prayag
        Day 5: Back to Haridwar`,
    contact: `Contacts:
          Car: Ajay Panwar 7817082959 / 8394043633
          GMVN at Kedarnath: https://gmvnonline.com/room-tariff.php?trhID=61
          Helicoptar: https://heliservices.uk.gov.in/`,
  },
  {
    id: 2,
    imageurl:
      "https://images.unsplash.com/photo-1622611908679-cbeda47d9404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    name: "Haridwar",
    description: `Haridwar lies along the Ganges (Ganga) River, at the boundary between the Indo-Gangetic Plain (south) and the Himalayan foothills (north).It is the site of the headworks of the Ganges Canal system. Haridwar is one of the seven sacred cities of the Hindus and is a major pilgrimage centre.`,
    moreDescription: `Haridwar's nearest railway station Haridwar or you can reach via Delhi.`,
    plan: `Plan: 
        Day 1: Reach Haridwar
        Day 2: Local sight seen Ma Mansa Temple , Ma Chandi Temple (Via Ropeway), Ganga Aarti`,
    contact: `Contacts:
          Car: Ajay Panwar 7817082959 / 8394043633`,
  },
  {
    id: 3,
    imageurl:
      "https://images.unsplash.com/photo-1582602120936-e1b0a78ea7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    name: "Puri Odisha",
    description: `One of the most sacred pilgrimage sites for Hindus, Puri also known as Jagannath Puri, is located in the state of Odisha. Famous for the Jagannath temple, Puri is believed to be the final resting place of Lord Vishnu. Unsurprisingly then, it is a very important place of worship for the Hindus.`,
    moreDescription: `Puri's nearest railway station Puri or you can reach via Bhubhaneswar.`,
    plan: `Plan: 
          Day 1: Reach Puri By Train/Car/Bus
          Day 2: Local sight seen Sea beach and Sri Jagannath Dev Temple
          Day 3: Local sight seen of Konark, Nandan kanan etc.`,
    contact: `Contacts:
            Car/Hotel: Easily Available`,
  },
  {
    id: 4,
    imageurl:
      "https://images.unsplash.com/photo-1637737118663-f1a53ee1d5a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    name: "Darjeeling",
    description: `Darjeeling is situated on a long, narrow mountain ridge of the Sikkim Himalayas that descends abruptly to the bed of the Great Rangit River. On a clear day the city affords a magnificent view of Kanchenjunga (28,169 feet [8,586 metres]), and Mount Everest can be seen from a nearby viewing point.`,
    moreDescription: `Darjeeling's nearest railway station NJP/Shiliguri.`,
    plan: `Plan: 
            Day 1: Reach NJP/Shiliguri By Train/Car/Bus/Flight(Bagdogra Airport) and reach Darjeeling from there by car/bus/share taxi
            Day 2: Local sight seen 7 points
            Day 3: Local sight seen around Darjeeling City`,
    contact: `Contacts:
              Car/Hotel: Wang : 9775977932`,
  },
  {
    id: 5,
    imageurl:
      "https://images.unsplash.com/photo-1679284409993-ab65b7ec4421?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    name: "Varanashi",
    description: `Varanasi is a city of great spiritual and cultural significance, and is a must-see destination for anyone interested in Hinduism and Indian history. With its Ghats, temples, silk shops and monuments, there is something for everyone in this vibrant and ancient city.`,
    moreDescription: `Varanashi's nearest railway station Varanashi Jn.`,
    plan: `Plan: 
            Day 1: Reach Varanashi By Train/Car/Bus/Flight(Lucknow Airport)
            Day 2: Local sight seen with Temple
            Day 3: Local sight seen Ganga Ghats`,
    contact: `Contacts:
              Car/Hotel: Easily Available`,
  },
  {
    id: 6,
    imageurl:
      "https://images.unsplash.com/photo-1641377368719-7a7abd8b54d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1383&q=80",
    name: "Sandakfu",
    description: `brief description of sandakphum Sandakphu trek package Sandakhphu. The highest point of West Bengal situated on the border of West Bengal of India and Nepal at an altitude of around 12,000 ft and in the area of Singalila National Park. The name Sandakphu which means Height of the Poison Plant derives from poisonous plants that grow near the top.`,
    moreDescription: `Sandakfu's nearest railway station NJP/Shiliguri.`,
    plan: `Plan: 
              Day 1: Reach NJP/Shiliguri By Train/Car/Bus/Flight(Bagdogra Airport) and reach Manebhanjan
              Day 2: Manebhanjan to Sandakfu by Land Rover (Book previous day) and stay at Sandakfu
              Day 3: Back to Manebhanjan/Njp/Shiliguri`,
    contact: `Contacts:
                Car/Hotel: Wang : 9775977932`,
  },
  {
    id: 7,
    imageurl:
      "https://images.unsplash.com/photo-1615459625077-42d2106b34d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2438&q=80",
    name: "Phalut",
    description: `Phalut or Falut 3,600 metres (11,800 ft) is the second highest peak of West Bengal, India. Part of the Singalila Ridge in the Himalayas, it is located at the border of the Indian states of West Bengal and Sikkim and of Nepal. It is located inside the Singalila National Park. A small bunkhouse is near the top of the peak and is administered by the Indian army. Singalila Pass is 17 km away from Phalut.`,
    moreDescription: `Phalut's nearest railway station NJP/Shiliguri.`,
    plan: `Plan: 
              Day 1: Reach NJP/Shiliguri By Train/Car/Bus/Flight(Bagdogra Airport) and reach Manebhanjan
              Day 2: Manebhanjan to Sandakfu by Land Rover (Book previous day) and stay at Sandakfu
              Day 3: Sandakfu to Phalut by Land rover/Trek (22 KM)
              Day 4: Phalut to Manebhanjan by Car/Srikhola by trek and stay
              Day 5: Back to Njp/Shiliguri`,
    contact: `Contacts:
                Car/Hotel: Wang : 9775977932`,
  },
  {
    id: 8,
    imageurl:
      "https://images.unsplash.com/photo-1569734147512-2caa1ea7d8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80",
    name: "Gangtok",
    description: `The city's name means “Top of the Hill.” Gangtok rises over slopes extensively terraced in corn (maize). It was the governmental seat of the kingdom of Sikkim until the monarchy was abolished (1975) and Sikkim was annexed by India (1976). The city's population includes Nepalese, Tibetans, Lepchas, and Indians.`,
    moreDescription: `Gangtok's nearest railway station NJP/Shiliguri.`,
    plan: `Plan: 
              Day 1: Reach NJP/Shiliguri By Train/Car/Bus/Flight(Bagdogra Airport) and reach Gangtok from there by car/bus/share taxi
              Day 2: Local sight seen 7 points`,
    contact: `Contacts:
                Car/Hotel: Wang : 9775977932`,
  },
  {
    id: 9,
    imageurl:
      "https://images.unsplash.com/photo-1541047574690-043f83676d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    name: "North Sikkim",
    description: `North Sikkim is the northern district of Sikkim. Mongan is the district headquarter of the district. At an altitude of 3950 ft, the town is located at a distance of 65 km from Gangtok, the state capital. Tourists need special permits to visit North Sikkim beyond Mangan.`,
    moreDescription: `North Sikkim's nearest railway station NJP/Shiliguri.`,
    plan: `Plan: 
              Day 1: Reach NJP/Shiliguri By Train/Car/Bus/Flight(Bagdogra Airport) and reach Gangtok from there by car/bus/share taxi
              Day 2: There are tour Packages for North Sikkim available from Gangtok`,
    contact: `Contacts:
                Car/Hotel: Hotel Silver Fir: 9434485169`,
  },
  {
    id: 10,
    imageurl:
      "https://images.unsplash.com/photo-1637840611565-d040350d3716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
    name: "Gurudongmar Lake",
    description: `Gurudongmar Lake is one of the highest lakes in the world and in India, located at an altitude of 5,425 m (17,800 ft), in Sikkim. It is considered sacred by Buddhists, Sikhs and Hindus. The lake is named after Guru Padmasambhava—also known as Guru Rinpoche—founder of Tibetan Buddhism, who visited in the 8th century.`,
    moreDescription: `Gurudongmar Lake's nearest railway station NJP/Shiliguri.`,
    plan: `Plan: 
                Day 1: Reach NJP/Shiliguri By Train/Car/Bus/Flight(Bagdogra Airport) and reach Gangtok from there by car/bus/share taxi
                Day 2: There are tour Packages for North Sikkim available from Gangtok`,
    contact: `Contacts:
                  Car/Hotel: Hotel Silver Fir: 9434485169`,
  },
];
