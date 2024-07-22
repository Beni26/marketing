export const provinces = [
    { label: "تهران", value: "tehran" },
    { label: "اصفهان", value: "isfahan" },
    { label: "فارس", value: "fars" },
    { label: "خوزستان", value: "khuzestan" },
    { label: "گیلان", value: "gilan" },
    { label: "آذربایجان شرقی", value: "east-azerbaijan" },
    { label: "آذربایجان غربی", value: "west-azerbaijan" },
    { label: "خراسان رضوی", value: "razavi-khorasan" },
    { label: "خراسان جنوبی", value: "south-khorasan" },
    { label: "زنجان", value: "zanjan" },
    { label: "سمنان", value: "semnan" },
    { label: "کرمان", value: "kerman" },
    { label: "هرمزگان", value: "hormozgan" },
    { label: "کردستان", value: "kurdistan" },
    { label: "ایلام", value: "ilam" },
    { label: "قزوین", value: "qazvin" },
    { label: "قم", value: "qom" },
    { label: "مرکزی", value: "markazi" },
    { label: "همدان", value: "hamedan" },
    { label: "کرمانشاه", value: "kermanshah" },
    { label: "لرستان", value: "lorestan" },
    { label: "کهگیلویه و بویراحمد", value: "kohgiluyeh-and-boyer-ahmad" },
    { label: "خراسان شمالی", value: "north-khorasan" },
    { label: "چهارمحال و بختیاری", value: "chaharmahal-and-bakhtiari" },
    { label: "گلستان", value: "golestan" },
    { label: "یزد", value: "yazd" },
  ];
  
  export type cityType = {
    label: string;
    value: string;
  };
  export const cities: { [key: string]: cityType[] } = {
    tehran: [
      { label: "تهران", value: "tehran" },
      { label: "شمیرانات", value: "shemiranat" },
      { label: "ورامین", value: "varamin" },
      { label: "پاکدشت", value: "pakdasht" },
      { label: "ری", value: "ray" },
      // ... other cities in Tehran
    ],
    isfahan: [
      { label: "اصفهان", value: "isfahan" },
      { label: "کاشان", value: "kashan" },
      { label: "نجف آباد", value: "najafabad" },
      { label: "آران و بیدگل", value: "aran-o-bidgol" },
      // ... other cities in Isfahan
    ],
    fars: [
      { label: "شیراز", value: "shiraz" },
      { label: "مرودشت", value: "marvdasht" },
      { label: "فسا", value: "fasa" },
      { label: "لارستان", value: "lar" },
      // ... other cities in Fars
    ],
    khuzestan: [
      { label: "اهواز", value: "ahvaz" },
      { label: "شوشتر", value: "shushtar" },
      { label: "اهرم", value: "ahram" },
      { label: "بندر ماهشهر", value: "bandar-mahshahr" },
      // ... other cities in Khuzestan
    ],
    gilan: [
      { label: "رشت", value: "rasht" },
      { label: "انزلی", value: "anzali" },
      { label: "لنگرود", value: "langarud" },
      { label: "فومن", value: "fuman" },
      // ... other cities in Gilan
    ],
    // ... other provinces and their cities
  };
  