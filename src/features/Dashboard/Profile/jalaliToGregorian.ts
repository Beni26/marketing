export const jalaliToGregorian = (jy: number, jm: number, jd: number): Date => {
    const gy = jy + 621;
    let days = jd;
  
    if (jm < 7) {
      days += (jm - 1) * 31;
    } else {
      days += (jm - 7) * 30 + 186;
    }
  
    gy += 4 * Math.floor(days / 1461);
    days %= 1461;
  
    if (days > 365) {
      gy += Math.floor((days - 1) / 365);
      days = (days - 1) % 365;
    }
  
    const gd = days + 1;
    let gm, gdays;
    
    if (gd <= 31) {
      gm = 1;
      gdays = gd;
    } else if (gd <= 59) {
      gm = 2;
      gdays = gd - 31;
    } else if (gd <= 90) {
      gm = 3;
      gdays = gd - 59;
    } else if (gd <= 120) {
      gm = 4;
      gdays = gd - 90;
    } else if (gd <= 151) {
      gm = 5;
      gdays = gd - 120;
    } else if (gd <= 181) {
      gm = 6;
      gdays = gd - 151;
    } else if (gd <= 212) {
      gm = 7;
      gdays = gd - 181;
    } else if (gd <= 243) {
      gm = 8;
      gdays = gd - 212;
    } else if (gd <= 273) {
      gm = 9;
      gdays = gd - 243;
    } else if (gd <= 304) {
      gm = 10;
      gdays = gd - 273;
    } else if (gd <= 334) {
      gm = 11;
      gdays = gd - 304;
    } else {
      gm = 12;
      gdays = gd - 334;
    }
  
    return new Date(gy, gm - 1, gdays);
  };

//   const [date, setDate] = useState<Date | null>(new Date());
//   const [initialLoad, setInitialLoad] = useState(true);

//   useEffect(() => {
//     if (initialLoad && userData.birthDayFa) {
//       const [jy, jm, jd] = userData.birthDayFa.split('/').map(Number);
//       const gregorianDate = jalaliToGregorian(jy, jm, jd);
//       console.log(gregorianDate); // مثال خروجی: "Sat Jul 13 2024 21:07:34 GMT+0330"
//       setDate(gregorianDate);
//       setInitialLoad(false); // جلوگیری از اجرای مجدد این اثر
//     }
//   }, [initialLoad, userData]);

