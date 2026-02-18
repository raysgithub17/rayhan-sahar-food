import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Duas() {
  const duasData = [
    {
      title: "Dua for Beginning of Fast (Sehri/Suhoor)",
      arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
      transliteration: "Wa bisawmi ghadinn nawaiytu min shahri ramadan",
      tamilTransliteration: "வ பிஸவ்மி கதின் நவைத்து மின் ஷஹ்ரி ரமளான்",
      english: "I intend to keep the fast for tomorrow in the month of Ramadan",
      tamil: "நான் ரமலான் மாதத்தில் நாளைய நோன்பை நோற்க எண்ணுகிறேன்"
    },
    {
      title: "Dua for Breaking Fast (Iftar)",
      arabic: "اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
      transliteration: "Allahumma inni laka sumtu wa bika aamantu wa alayka tawakkaltu wa ala rizq-ika-aftartu",
      tamilTransliteration: "அல்லாஹும்ம இன்னி லக ஸும்து வ பிக ஆமன்து வ அலைக தவக்கல்து வ அலா ரிஸ்கிக அஃப்தர்து",
      english: "O Allah! I fasted for You and I believe in You and I put my trust in You and I break my fast with Your sustenance",
      tamil: "அல்லாஹ்! உனக்காக நான் நோன்பு நோற்றேன், உன்னை நம்பினேன், உன்னையே நம்பியிருக்கிறேன், உன் உணவால் நோன்பு திறக்கிறேன்"
    },
    {
      title: "Short Dua at Iftar",
      arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ",
      transliteration: "Dhahaba al-zama' wa abtalat al-'urooq wa thabata al-ajr in sha Allah",
      tamilTransliteration: "தஹப அழ்ழமா வ அப்தலத் அல்உரூக் வ தபத அல்அஜ்ர் இன் ஷா அல்லாஹ்",
      english: "The thirst is gone, the veins are moistened and the reward is confirmed, if Allah wills",
      tamil: "தாகம் போனது, நரம்புகள் ஈரமாகின, வெகுமதி உறுதியானது, அல்லாஹ் நாடினால்"
    },
    {
      title: "Dua for Laylatul Qadr",
      arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
      transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
      tamilTransliteration: "அல்லாஹும்ம இன்னக அஃபுவ்வுன் துஹிப்புல் அஃப்வ ஃபஃபு அன்னி",
      english: "O Allah, You are Most Forgiving, and You love forgiveness; so forgive me",
      tamil: "அல்லாஹ்! நீ மன்னிப்பவன், மன்னிப்பை விரும்புபவன்; எனவே என்னை மன்னித்துவிடு"
    },
    {
      title: "Dua Before Eating",
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillah",
      tamilTransliteration: "பிஸ்மில்லாஹ்",
      english: "In the name of Allah",
      tamil: "அல்லாஹ்வின் பெயரால்"
    },
    {
      title: "Dua After Eating",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
      transliteration: "Alhamdulillahil-ladhi at'amana wa saqana wa ja'alana Muslimeen",
      tamilTransliteration: "அல்ஹம்துலில்லாஹில் லதி அத்அமன வ ஸகான வ ஜஃஅலன முஸ்லிமீன்",
      english: "All praise is due to Allah who gave us food and drink and made us Muslims",
      tamil: "எல்லாப் புகழும் அல்லாஹ்வுக்கே, அவன் எங்களுக்கு உணவும் பானமும் அளித்து, எங்களை முஸ்லிம்களாக்கினான்"
    },
    {
      title: "Dua for Forgiveness",
      arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
      transliteration: "Rabbana zalamna anfusana wa il-lam taghfir lana wa tarhamna la-nakunanna min al-khasireen",
      tamilTransliteration: "ரப்பன ழலம்ன அன்ஃபுஸன வ இல்லம் தஃக்ஃபிர் லன வ தர்ஹம்ன லனகூனன்ன மின் அல்காஸிரீன்",
      english: "Our Lord! We have wronged ourselves. If You forgive us not, and bestow not upon us Your Mercy, we shall certainly be of the losers",
      tamil: "எங்கள் இறைவா! நாங்கள் எங்களுக்கே அநீதி இழைத்தோம். நீ எங்களை மன்னித்து, எங்கள் மீது கருணை காட்டாவிட்டால், நிச்சயமாக நாங்கள் நஷ்டமடைந்தவர்களில் இருப்போம்"
    },
    {
      title: "Dua for Guidance",
      arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ",
      transliteration: "Allahumma-hdini fiman hadayt",
      tamilTransliteration: "அல்லாஹும்ம ஹ்தினி ஃபிமன் ஹதைத்",
      english: "O Allah, guide me among those You have guided",
      tamil: "அல்லாஹ்! நீ நேர்வழி காட்டியவர்களில் எனக்கும் நேர்வழி காட்டு"
    },
    {
      title: "Dua for Patience",
      arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
      transliteration: "Rabbana afrigh 'alayna sabran wa tawaffana Muslimeen",
      tamilTransliteration: "ரப்பன அஃப்ரிஃக் அலைன ஸப்ரன் வ தவஃப்பன முஸ்லிமீன்",
      english: "Our Lord! Pour upon us patience and cause us to die as Muslims",
      tamil: "எங்கள் இறைவா! எங்கள் மீது பொறுமையை பொழிந்து, எங்களை முஸ்லிம்களாக மரணிக்கச் செய்"
    },
    {
      title: "Dua for Acceptance of Good Deeds",
      arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
      transliteration: "Rabbana taqabbal minna innaka anta al-Samee'u al-'Aleem",
      tamilTransliteration: "ரப்பன தகப்பல் மின்ன இன்னக அன்த அஸ்ஸமீஉ அல்அலீம்",
      english: "Our Lord! Accept this from us. Verily, You are the All-Hearer, the All-Knower",
      tamil: "எங்கள் இறைவா! இதை எங்களிடமிருந்து ஏற்றுக்கொள். நிச்சயமாக நீ எல்லாம் கேட்பவன், எல்லாம் அறிந்தவன்"
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <main className="duas-page">
        <div className="content-wrapper">
          <h1>Ramadan Duas</h1>
          <p className="subtitle">Essential supplications for the blessed month of Ramadan</p>
          
          <div className="duas-container">
            {duasData.map((dua, index) => (
              <div key={index} className="dua-card">
                <h2 className="dua-title">{dua.title}</h2>
                
                <div className="dua-content">
                  <div className="dua-section arabic-section">
                    <h3>Arabic</h3>
                    <p className="arabic-text" dir="rtl">{dua.arabic}</p>
                  </div>
                  
                  <div className="dua-section">
                    <h3>Transliteration (English)</h3>
                    <p className="transliteration-text">{dua.transliteration}</p>
                  </div>
                  
                  <div className="dua-section">
                    <h3>Transliteration (Tamil)</h3>
                    <p className="tamil-transliteration-text">{dua.tamilTransliteration}</p>
                  </div>
                  
                  <div className="dua-section">
                    <h3>English Meaning</h3>
                    <p className="meaning-text">{dua.english}</p>
                  </div>
                  
                  <div className="dua-section">
                    <h3>Tamil Meaning (தமிழ் பொருள்)</h3>
                    <p className="tamil-text">{dua.tamil}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="duas-note">
            <p><strong>Note:</strong> It is recommended to learn and recite these duas with proper pronunciation. May Allah accept our prayers and fasting during this blessed month.</p>
            <p className="arabic-text">آمين</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Duas;
