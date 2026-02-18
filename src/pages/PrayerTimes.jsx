import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PrayerTimes() {
  const prayerTimesData = [
    { date: "19, Thu", sehri: "05:19 AM", zuhar: "12:23 PM", asar: "03:44 PM", iftar: "06:16 PM", isha: "07:28 PM" },
    { date: "20, Fri", sehri: "05:18 AM", zuhar: "12:23 PM", asar: "03:44 PM", iftar: "06:16 PM", isha: "07:28 PM" },
    { date: "21, Sat", sehri: "05:18 AM", zuhar: "12:23 PM", asar: "03:44 PM", iftar: "06:17 PM", isha: "07:28 PM" },
    { date: "22, Sun", sehri: "05:18 AM", zuhar: "12:23 PM", asar: "03:44 PM", iftar: "06:17 PM", isha: "07:28 PM" },
    { date: "23, Mon", sehri: "05:17 AM", zuhar: "12:23 PM", asar: "03:44 PM", iftar: "06:17 PM", isha: "07:28 PM" },
    { date: "24, Tue", sehri: "05:17 AM", zuhar: "12:23 PM", asar: "03:44 PM", iftar: "06:17 PM", isha: "07:28 PM" },
    { date: "25, Wed", sehri: "05:16 AM", zuhar: "12:22 PM", asar: "03:43 PM", iftar: "06:17 PM", isha: "07:29 PM" },
    { date: "26, Thu", sehri: "05:16 AM", zuhar: "12:22 PM", asar: "03:43 PM", iftar: "06:18 PM", isha: "07:29 PM" },
    { date: "27, Fri", sehri: "05:15 AM", zuhar: "12:22 PM", asar: "03:43 PM", iftar: "06:18 PM", isha: "07:29 PM" },
    { date: "28, Sat", sehri: "05:15 AM", zuhar: "12:22 PM", asar: "03:43 PM", iftar: "06:18 PM", isha: "07:29 PM" },
    { date: "01, Sun", sehri: "05:14 AM", zuhar: "12:22 PM", asar: "03:43 PM", iftar: "06:18 PM", isha: "07:29 PM" },
    { date: "02, Mon", sehri: "05:14 AM", zuhar: "12:22 PM", asar: "03:42 PM", iftar: "06:18 PM", isha: "07:29 PM" },
    { date: "03, Tue", sehri: "05:13 AM", zuhar: "12:21 PM", asar: "03:42 PM", iftar: "06:18 PM", isha: "07:29 PM" },
    { date: "04, Wed", sehri: "05:13 AM", zuhar: "12:21 PM", asar: "03:42 PM", iftar: "06:19 PM", isha: "07:29 PM" },
    { date: "05, Thu", sehri: "05:12 AM", zuhar: "12:21 PM", asar: "03:42 PM", iftar: "06:19 PM", isha: "07:30 PM" },
    { date: "06, Fri", sehri: "05:12 AM", zuhar: "12:21 PM", asar: "03:41 PM", iftar: "06:19 PM", isha: "07:30 PM" },
    { date: "07, Sat", sehri: "05:11 AM", zuhar: "12:20 PM", asar: "03:41 PM", iftar: "06:19 PM", isha: "07:30 PM" },
    { date: "08, Sun", sehri: "05:10 AM", zuhar: "12:20 PM", asar: "03:41 PM", iftar: "06:19 PM", isha: "07:30 PM" },
    { date: "09, Mon", sehri: "05:10 AM", zuhar: "12:20 PM", asar: "03:40 PM", iftar: "06:19 PM", isha: "07:30 PM" },
    { date: "10, Tue", sehri: "05:09 AM", zuhar: "12:20 PM", asar: "03:40 PM", iftar: "06:19 PM", isha: "07:30 PM" },
    { date: "11, Wed", sehri: "05:09 AM", zuhar: "12:19 PM", asar: "03:40 PM", iftar: "06:19 PM", isha: "07:30 PM" },
    { date: "12, Thu", sehri: "05:08 AM", zuhar: "12:19 PM", asar: "03:39 PM", iftar: "06:20 PM", isha: "07:30 PM" },
    { date: "13, Fri", sehri: "05:07 AM", zuhar: "12:19 PM", asar: "03:39 PM", iftar: "06:20 PM", isha: "07:30 PM" },
    { date: "14, Sat", sehri: "05:07 AM", zuhar: "12:19 PM", asar: "03:38 PM", iftar: "06:20 PM", isha: "07:30 PM" },
    { date: "15, Sun", sehri: "05:06 AM", zuhar: "12:18 PM", asar: "03:38 PM", iftar: "06:20 PM", isha: "07:30 PM" },
    { date: "16, Mon", sehri: "05:06 AM", zuhar: "12:18 PM", asar: "03:38 PM", iftar: "06:20 PM", isha: "07:31 PM" },
    { date: "17, Tue", sehri: "05:05 AM", zuhar: "12:18 PM", asar: "03:37 PM", iftar: "06:20 PM", isha: "07:31 PM" },
    { date: "18, Wed", sehri: "05:04 AM", zuhar: "12:17 PM", asar: "03:37 PM", iftar: "06:20 PM", isha: "07:31 PM" },
    { date: "19, Thu", sehri: "05:04 AM", zuhar: "12:17 PM", asar: "03:36 PM", iftar: "06:20 PM", isha: "07:31 PM" },
    { date: "20, Fri", sehri: "05:03 AM", zuhar: "12:17 PM", asar: "03:36 PM", iftar: "06:20 PM", isha: "07:31 PM" },
  ];

  return (
    <div className="page-container">
      <Navbar />
      <main className="prayer-times-page">
        <div className="content-wrapper">
          <h1>Prayer Times - Chennai</h1>
          <p className="subtitle">Ramadan 2026 Prayer Schedule</p>
          
          <div className="prayer-times-table-container">
            <table className="prayer-times-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Sehri</th>
                  <th>Zuhar</th>
                  <th>Asar</th>
                  <th>Iftar</th>
                  <th>Isha</th>
                </tr>
              </thead>
              <tbody>
                {prayerTimesData.map((day, index) => (
                  <tr key={index}>
                    <td>{day.date}</td>
                    <td>{day.sehri}</td>
                    <td>{day.zuhar}</td>
                    <td>{day.asar}</td>
                    <td className="highlight">{day.iftar}</td>
                    <td>{day.isha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prayer-times-note">
            <p><strong>Note:</strong> Prayer times are approximate and may vary by a few minutes. Please confirm with your local Masjid for exact timings.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrayerTimes;
