const buses = [
  {
    id: 1,
    name: 'Royal Express',
    route: 'Delhi → Jaipur',
    time: '06:30 AM',
    duration: '5h 30m',
    seats: 12,
    price: 650,
  },
  {
    id: 2,
    name: 'City Star',
    route: 'Mumbai → Pune',
    time: '08:00 AM',
    duration: '3h 15m',
    seats: 7,
    price: 420,
  },
  {
    id: 3,
    name: 'Horizon Deluxe',
    route: 'Bengaluru → Hyderabad',
    time: '09:15 PM',
    duration: '8h 00m',
    seats: 5,
    price: 890,
  },
  {
    id: 4,
    name: 'Sharma Travels',
    route: 'Chennai → Coimbatore',
    time: '05:45 AM',
    duration: '4h 40m',
    seats: 9,
    price: 580,
  },
  {
    id: 5,
    name: 'Metro Link',
    route: 'Ahmedabad → Vadodara',
    time: '07:10 AM',
    duration: '2h 20m',
    seats: 11,
    price: 310,
  },
  {
    id: 6,
    name: 'Saffron Voyage',
    route: 'Lucknow → Kanpur',
    time: '06:00 PM',
    duration: '2h 00m',
    seats: 8,
    price: 260,
  },
  {
    id: 7,
    name: 'Vikram Tours',
    route: 'Kolkata → Durgapur',
    time: '10:20 PM',
    duration: '3h 30m',
    seats: 10,
    price: 410,
  },
  {
    id: 8,
    name: 'Golden Highway',
    route: 'Pune → Nashik',
    time: '04:30 PM',
    duration: '3h 10m',
    seats: 6,
    price: 390,
  },
  {
    id: 9,
    name: 'Prakash Travel',
    route: 'Noida → Agra',
    time: '12:15 PM',
    duration: '4h 15m',
    seats: 14,
    price: 500,
  },
  {
    id: 10,
    name: 'Sunrise Express',
    route: 'Hyderabad → Vijayawada',
    time: '11:45 PM',
    duration: '6h 00m',
    seats: 13,
    price: 760,
  },
  {
    id: 11,
    name: 'Navajeevan Bus',
    route: 'Bhopal → Indore',
    time: '03:30 PM',
    duration: '4h 10m',
    seats: 12,
    price: 480,
  },
  {
    id: 12,
    name: 'Jeevan Rath',
    route: 'Gurugram → Chandigarh',
    time: '09:00 PM',
    duration: '5h 50m',
    seats: 7,
    price: 620,
  },
  {
    id: 13,
    name: 'Madhav Express',
    route: 'Surat → Rajkot',
    time: '05:15 AM',
    duration: '4h 45m',
    seats: 10,
    price: 540,
  },
  {
    id: 14,
    name: 'Aarohi Travels',
    route: 'Nagpur → Amravati',
    time: '08:40 AM',
    duration: '3h 20m',
    seats: 9,
    price: 340,
  },
  {
    id: 15,
    name: 'Daybreak Tours',
    route: 'Jaipur → Udaipur',
    time: '07:55 AM',
    duration: '5h 25m',
    seats: 8,
    price: 610,
  },
  {
    id: 16,
    name: 'Mr Travel',
    route: 'Pune → Jaipur',
    time: '10:15 PM',
    duration: '13h 40m',
    seats: 11,
    price: 1450,
  },
  {
    id: 17,
    name: 'Mahadev Travels',
    route: 'Pune → Jaipur',
    time: '11:30 PM',
    duration: '14h 10m',
    seats: 9,
    price: 1490,
  },
  {
    id: 18,
    name: 'Murlidhar Travels',
    route: 'Pune → Bhinmal',
    time: '09:45 PM',
    duration: '16h 20m',
    seats: 8,
    price: 1580,
  },
  {
    id: 19,
    name: 'Blue Bird Transit',
    route: 'Delhi → Dehradun',
    time: '01:50 PM',
    duration: '6h 35m',
    seats: 10,
    price: 720,
  },
  {
    id: 20,
    name: 'Royal Heritage',
    route: 'Indore → Jabalpur',
    time: '06:15 PM',
    duration: '8h 10m',
    seats: 13,
    price: 850,
  },
  {
    id: 21,
    name: 'Swaran Travels',
    route: 'Kota → Udaipur',
    time: '10:00 AM',
    duration: '4h 05m',
    seats: 6,
    price: 450,
  },
  {
    id: 22,
    name: 'Rajasthan Connect',
    route: 'Jaipur → Ajmer',
    time: '07:30 PM',
    duration: '2h 45m',
    seats: 15,
    price: 280,
  },
  {
    id: 23,
    name: 'Eastern Line',
    route: 'Bhubaneswar → Cuttack',
    time: '02:20 PM',
    duration: '2h 15m',
    seats: 14,
    price: 320,
  },
  {
    id: 24,
    name: 'Vijay Durga',
    route: 'Vizag → Vijayawada',
    time: '11:10 PM',
    duration: '8h 30m',
    seats: 11,
    price: 800,
  },
  {
    id: 25,
    name: 'Go City Coach',
    route: 'Kochi → Trivandrum',
    time: '08:55 AM',
    duration: '4h 10m',
    seats: 12,
    price: 590,
  },
  {
    id: 26,
    name: 'Pune Link Daily',
    route: 'Pune → Mumbai',
    time: '05:20 AM',
    duration: '3h 45m',
    seats: 12,
    price: 430,
  },
  {
    id: 27,
    name: 'Mumbai Express',
    route: 'Pune → Mumbai',
    time: '06:30 AM',
    duration: '3h 35m',
    seats: 11,
    price: 420,
  },
  {
    id: 28,
    name: 'Pune City Saver',
    route: 'Pune → Mumbai',
    time: '08:15 AM',
    duration: '3h 45m',
    seats: 9,
    price: 410,
  },
  {
    id: 29,
    name: 'Roadway Comfort',
    route: 'Pune → Mumbai',
    time: '10:25 AM',
    duration: '4h 00m',
    seats: 10,
    price: 470,
  },
  {
    id: 30,
    name: 'Fastway Line',
    route: 'Pune → Mumbai',
    time: '12:40 PM',
    duration: '3h 50m',
    seats: 8,
    price: 460,
  },
  {
    id: 31,
    name: 'Daily Urban Coach',
    route: 'Pune → Mumbai',
    time: '02:10 PM',
    duration: '4h 10m',
    seats: 13,
    price: 500,
  },
  {
    id: 32,
    name: 'Morning Horizon',
    route: 'Pune → Mumbai',
    time: '04:00 PM',
    duration: '3h 50m',
    seats: 7,
    price: 440,
  },
  {
    id: 33,
    name: 'Bharat City Bus',
    route: 'Pune → Mumbai',
    time: '06:45 PM',
    duration: '4h 15m',
    seats: 10,
    price: 480,
  },
  {
    id: 34,
    name: 'Mumbai Shuttle',
    route: 'Pune → Mumbai',
    time: '08:50 PM',
    duration: '3h 30m',
    seats: 12,
    price: 450,
  },
  {
    id: 35,
    name: 'Indigo Premium',
    route: 'Pune → Mumbai',
    time: '10:30 PM',
    duration: '4h 05m',
    seats: 8,
    price: 520,
  },
];

const busAmenities = ['AC', 'Wi-Fi', 'Washroom', 'Non-AC'];

const results = document.getElementById('results');
const searchForm = document.getElementById('searchForm');
const bookingsList = document.getElementById('bookingsList');
const paymentHistoryList = document.getElementById('paymentHistoryList');
const paymentPanel = document.getElementById('paymentPanel');
const ticketPanel = document.getElementById('ticketPanel');
const authLink = document.getElementById('authLink');
const storedUser = JSON.parse(localStorage.getItem('bharatBusUser') || 'null');

const isLoginPage = Boolean(document.body && document.body.classList && document.body.classList.contains('auth-page'));
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const isIndexPage = currentPath.toLowerCase() === 'index.html' || currentPath === '';

if (isIndexPage && !storedUser) {
  window.location.replace('login.html');
}

if (isLoginPage && storedUser) {
  window.location.replace('index.html');
}

function updateAuthLink() {
  if (!authLink) return;
  if (storedUser) {
    authLink.textContent = 'Logout';
    authLink.href = '#';
    authLink.addEventListener('click', (event) => {
      event.preventDefault();
      localStorage.removeItem('bharatBusUser');
      window.location.reload();
    });
  } else {
    authLink.textContent = 'Login';
    authLink.href = 'login.html';
  }
}

function renderBookings() {
  if (!bookingsList) return;
  const bookings = JSON.parse(localStorage.getItem('bharatBusBookings') || '[]');

  if (!bookings.length) {
    bookingsList.innerHTML = '<div class="booking-item">No bookings yet. Sign in and book a seat to see your ticket history.</div>';
  } else {
    bookingsList.innerHTML = bookings
      .slice()
      .reverse()
      .map((booking) => {
        return `
          <div class="booking-item">
            <strong>${booking.busName}</strong>
            <p class="result-meta">${booking.route} • ${booking.seats.join(', ')} • ${booking.date}</p>
            <p class="result-meta">Passenger: ${booking.customerName || 'N/A'} • ${booking.customerPhone || 'N/A'}</p>
            <p class="result-meta">Pickup: ${booking.pickupLocation || 'N/A'} • Drop: ${booking.dropLocation || 'N/A'}</p>
            <p class="price">₹${booking.total}</p>
            <button class="cancel-btn" data-booking-id="${booking.id || ''}">Cancel Ticket</button>
          </div>
        `;
      })
      .join('');
  }

  if (paymentHistoryList) {
    renderPaymentHistory();
  }

  if (paymentPanel) {
    renderPaymentSummary();
  }

  if (ticketPanel) {
    renderTicketPanel();
  }
}

function renderPaymentSummary() {
  const bookings = JSON.parse(localStorage.getItem('bharatBusBookings') || '[]');
  const latestBooking = bookings.length ? bookings[bookings.length - 1] : null;

  if (!latestBooking) {
    paymentPanel.innerHTML = '<div class="ticket-empty">No payment activity available.</div>';
    return;
  }

  paymentPanel.innerHTML = `
    <article class="payment-summary-card">
      <div class="payment-summary-top">
        <span class="payment-status-badge">${latestBooking.paymentStatus || 'Completed'}</span>
        <span class="transaction-id">Transaction: ${latestBooking.transactionId || 'N/A'}</span>
      </div>
      <div class="payment-summary-grid">
        <div>
          <span class="summary-label">Route</span>
          <span class="summary-value">${latestBooking.route}</span>
        </div>
        <div>
          <span class="summary-label">Payment Method</span>
          <span class="summary-value">${latestBooking.paymentMethod || 'UPI'}</span>
        </div>
        <div>
          <span class="summary-label">Bill Rate</span>
          <span class="summary-value">₹${Number(latestBooking.pricePerSeat || latestBooking.ratePerSeat || latestBooking.total / Math.max((latestBooking.seats || []).length, 1))}</span>
        </div>
        <div>
          <span class="summary-label">Ticket Amount</span>
          <span class="summary-value">₹${latestBooking.total}</span>
        </div>
      </div>
    </article>
  `;
}

function renderTicketPanel() {
  const bookings = JSON.parse(localStorage.getItem('bharatBusBookings') || '[]');
  const latestBooking = bookings.length ? bookings[bookings.length - 1] : null;

  if (!latestBooking) {
    ticketPanel.innerHTML = '<div class="ticket-empty">No digital ticket generated yet.</div>';
    return;
  }

  ticketPanel.innerHTML = `
    <article class="ticket-card">
      <div class="ticket-top">
        <div>
          <span class="ticket-title">BharatBus Digital Ticket</span>
          <span class="ticket-id">Booking ID: ${latestBooking.id || 'N/A'}</span>
        </div>
        <span class="ticket-status">${latestBooking.paymentStatus || 'Completed'}</span>
      </div>
      <div class="ticket-details-grid">
        <div>
          <span class="summary-label">Bus</span>
          <span class="summary-value">${latestBooking.busName}</span>
        </div>
        <div>
          <span class="summary-label">Route</span>
          <span class="summary-value">${latestBooking.route}</span>
        </div>
        <div>
          <span class="summary-label">Journey Date</span>
          <span class="summary-value">${latestBooking.date}</span>
        </div>
        <div>
          <span class="summary-label">Passenger</span>
          <span class="summary-value">${latestBooking.customerName || 'N/A'}</span>
        </div>
        <div>
          <span class="summary-label">Seats</span>
          <span class="summary-value">${(latestBooking.seats || []).join(', ')}</span>
        </div>
        <div>
          <span class="summary-label">Bill Rate</span>
          <span class="summary-value">₹${Number(latestBooking.pricePerSeat || latestBooking.ratePerSeat || latestBooking.total / Math.max((latestBooking.seats || []).length, 1))}</span>
        </div>
        <div>
          <span class="summary-label">Amount</span>
          <span class="summary-value">₹${latestBooking.total}</span>
        </div>
      </div>
      <div class="ticket-footer">
        <span class="summary-label">Transaction: ${latestBooking.transactionId || 'N/A'}</span>
        <span class="summary-label">Payment: ${latestBooking.paymentMethod || 'UPI'}</span>
      </div>
    </article>
  `;
}

function renderPaymentHistory() {
  if (!paymentHistoryList) return;

  const bookings = JSON.parse(localStorage.getItem('bharatBusBookings') || '[]');

  if (!bookings.length) {
    paymentHistoryList.innerHTML = '<div class="payment-history-item">No online payment history available.</div>';
    return;
  }

  const paymentBookings = bookings.filter((booking) => booking.paymentMethod && booking.paymentMethod.toLowerCase() !== 'cash');

  if (!paymentBookings.length) {
    paymentHistoryList.innerHTML = '<div class="payment-history-item">No online payment history available.</div>';
    return;
  }

  paymentHistoryList.innerHTML = paymentBookings
    .slice()
    .reverse()
    .map((booking) => {
      return `
        <article class="payment-history-item">
          <div class="payment-history-top">
            <div>
              <strong>${booking.busName}</strong>
              <p class="result-meta">${booking.route} • ${booking.date}</p>
            </div>
            <span class="payment-status">${booking.paymentMethod || 'UPI'}</span>
          </div>
          <p class="result-meta">Seats: ${booking.seats.join(', ')} • Passenger: ${booking.customerName || 'N/A'}</p>
          <p class="price">₹${booking.total}</p>
        </article>
      `;
    })
    .join('');
}

function renderResults(query = '') {
  if (!results) return;

  const selectedDateValue = document.getElementById('date')?.value || '';
  const journeyDate = selectedDateValue ? selectedDateValue : 'Daily';
  const fromValue = typeof query === 'string' ? query : (query.from || '').trim();
  const toValue = typeof query === 'string' ? query : (query.to || '').trim();

  const filtered = buses.filter((bus) => {
    if (!fromValue && !toValue) return true;

    const routeText = bus.route.toLowerCase();
    const fromMatch = !fromValue || routeText.includes(fromValue.toLowerCase());
    const toMatch = !toValue || routeText.includes(toValue.toLowerCase());

    return fromMatch && toMatch;
  });

  if (!filtered.length) {
    results.innerHTML = '<p class="route-card">No buses matched your search. Try another route.</p>';
    return;
  }

  results.innerHTML = filtered
    .map((bus) => {
      return `
        <article class="result-card">
          <div class="result-top">
            <div>
              <h3>${bus.name}</h3>
              <p class="result-meta">${bus.route} • ${bus.time} • ${bus.duration}</p>
            </div>
            <div class="price">₹${bus.price}</div>
          </div>
          <p class="result-meta route-date">Travel date: ${journeyDate} • ${journeyDate === 'Daily' ? 'Daily schedule' : 'Date-wise route'}</p>
          <div class="availability-row">
            <span class="availability-label">Seat availability</span>
            <span class="availability-count">${bus.seats} seats left</span>
          </div>
          <div class="feature-row">
            ${busAmenities.map((feature) => `<span class="feature-badge">${feature}</span>`).join('')}
          </div>
          <p class="result-meta">${bus.seats} seats left • ${busAmenities.join(' • ')}</p>
          <button class="book-btn" data-bus-id="${bus.id}">Book seats</button>
          <div class="booking-panel" data-panel-id="${bus.id}" hidden></div>
        </article>
      `;
    })
    .join('');
}

function sanitizePdfText(text) {
  return String(text)
    .replace(/₹/g, 'Rs.')
    .replace(/→/g, '-')
    .replace(/[\u0080-\uFFFF]/g, ' ')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function buildTicketPdf(booking) {
  const seatCount = Array.isArray(booking.seats) ? booking.seats.length : 1;
  const unitRate = Number(booking.pricePerSeat || booking.ratePerSeat || booking.total / Math.max(seatCount, 1));
  const total = Number(booking.total || unitRate * seatCount);

  const lines = [
    'BharatBus Bill PDF',
    '====================',
    'BharatBus Ticket / Bus Logo',
    `Bus: ${booking.busName}`,
    `Route: ${booking.route}`,
    `Bill Rate: Rs.${unitRate} per seat`,
    `Seats: ${booking.seats.join(', ')}`,
    `Seat Count: ${seatCount}`,
    `Passenger: ${booking.customerName || 'N/A'}`,
    `Phone: ${booking.customerPhone || 'N/A'}`,
    `Pickup: ${booking.pickupLocation || 'N/A'}`,
    `Drop: ${booking.dropLocation || 'N/A'}`,
    `Date: ${booking.date}`,
    `Payment: ${booking.paymentMethod}`,
    `Total Bill Amount: Rs.${total}`,
    `SMS sent to: ${booking.customerPhone || 'N/A'}`,
  ];

  const pdfWallpaper = [
    'q',
    '0.98 0.99 0.96 rg 0 0 612 792 re f',
    'Q',
    'q',
    '0.24 0.55 0.36 rg 0 640 612 152 re f',
    'Q',
    'q',
    '0.16 0.41 0.60 rg 0 80 612 70 re f',
    'Q',
    'q',
    '0.93 0.95 0.96 rg 0 0 612 60 re f',
    'Q',
    'q',
    '0.90 0.62 0.16 RG 38 40 540 1 re S',
    'Q',
    'q',
    '0.88 0.89 0.90 rg 68 430 472 204 re f',
    'Q',
    'q',
    '0.11 0.45 0.76 RG 74 432 466 200 re S',
    'Q',
    'q',
    '0.20 0.60 0.50 rg 118 500 58 48 re f',
    'Q',
    'q',
    '0.20 0.60 0.50 rg 186 500 58 48 re f',
    'Q',
    'q',
    '0.20 0.60 0.50 rg 254 500 58 48 re f',
    'Q',
    'q',
    '0.20 0.60 0.50 rg 322 500 58 48 re f',
    'Q',
    'q',
    '0.20 0.60 0.50 rg 390 500 58 48 re f',
    'Q',
    'q',
    '0.25 0.40 0.55 rg 88 442 436 38 re f',
    'Q',
    'q',
    '0.96 0.96 0.90 rg 146 560 318 36 re f',
    'Q',
    'q',
    '0.12 0.12 0.12 RG 124 436 40 50 re S',
    'Q',
    'q',
    '0.12 0.12 0.12 RG 454 436 40 50 re S',
    'Q',
    'q',
    '0.10 0.10 0.10 RG 110 420 386 2 re S',
    'Q',
    'q',
    '0.84 0.84 0.82 RG 132 410 350 2 re S',
    'Q',
    'q',
    '0.20 0.28 0.34 RG 75 260 462 2 re S',
    'Q',
    'q',
    '0.76 0.78 0.22 RG 92 264 432 12 re S',
    'Q'
  ];

  const streamLines = lines.map((line, index) => {
    const y = 760 - index * 14;
    return `BT /F1 10 Tf 72 ${y} Td (${sanitizePdfText(line)}) Tj ET`;
  });

  const stream = [...pdfWallpaper, ...streamLines].join('\n');
  const streamLength = stream.length;
  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n',
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${stream}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objects.forEach((obj) => {
    offsets.push(pdf.length);
    pdf += obj;
  });

  const xrefOffset = pdf.length;
  pdf += 'xref\n0 6\n0000000000 65535 f \n';
  offsets.forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return pdf;
}

function downloadTicketPdf(booking) {
  const pdfContent = buildTicketPdf(booking);
  const blob = new Blob([pdfContent], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const phoneSuffix = (booking.customerPhone || 'customer').toString().replace(/[^a-z0-9]+/gi, '-');
  link.download = `bharatbus-ticket-${booking.busName.toLowerCase().replace(/\s+/g, '-')}-${phoneSuffix}.pdf`;
  document.body.appendChild(link);

  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch (error) {
    // ignore
  }

  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function buildUpiPaymentLink(booking) {
  const amount = Number(booking.total || 0);
  const payerName = (booking.customerName || 'BharatBus Passenger').trim();
  const transaction = (booking.transactionId || `BBTX-${Date.now()}`).trim();

  const params = new URLSearchParams({
    pa: 'bharatbus@upi',
    pn: 'BharatBus',
    am: String(amount),
    cu: 'INR',
    tn: `${transaction}-${payerName}`,
  });

  return `upi://pay?${params.toString()}`;
}

function openUpiPayment(booking) {
  if (!booking || booking.paymentMethod !== 'UPI') return;

  const upiLink = buildUpiPaymentLink(booking);

  try {
    const upiWindow = window.open(upiLink, '_self');
    if (!upiWindow) {
      window.location.href = upiLink;
    }
  } catch (error) {
    window.location.href = upiLink;
  }

  return upiLink;
}

function openBookingPanel(busId) {
  const panel = document.querySelector(`[data-panel-id="${busId}"]`);
  const bus = buses.find((item) => item.id === Number(busId));

  if (!panel || !bus) return;

  const selectedSeats = [];
  panel.hidden = false;
  panel.innerHTML = `
    <h4>Book ${bus.name}</h4>
    <p class="result-meta">${bus.route} • ${bus.time}</p>
    <div class="availability-row booking-availability">
      <span class="availability-label">Available seats</span>
      <span class="availability-count">${bus.seats} seats left</span>
    </div>
    <div class="sleeper-layout">
      <div class="sleeper-block">
        <div class="sleeper-title">Lower Sleeper</div>
        <div class="seat-grid lower-sleeper-grid">
          ${Array.from({ length: Math.min(4, Math.max(0, bus.seats)) }, (_, index) => {
            const seatNo = index + 1;
            return `<button class="seat-btn" data-seat="L${seatNo}">L${seatNo}</button>`;
          }).join('')}
        </div>
      </div>
      <div class="sleeper-block">
        <div class="sleeper-title">Upper Sleeper</div>
        <div class="seat-grid upper-sleeper-grid">
          ${Array.from({ length: Math.min(4, Math.max(0, bus.seats)) }, (_, index) => {
            const seatNo = index + 1;
            return `<button class="seat-btn" data-seat="U${seatNo}">U${seatNo}</button>`;
          }).join('')}
        </div>
      </div>
    </div>
    <p>Select up to 4 seats</p>
    <div class="traveler-form">
      <label>
        <span>Customer name</span>
        <input type="text" name="customerName" placeholder="Enter your name" required />
      </label>
      <label>
        <span>Phone number</span>
        <input type="tel" name="customerPhone" placeholder="10-digit mobile number" required />
      </label>
      <label>
        <span>Pickup location</span>
        <input type="text" name="pickupLocation" placeholder="Pickup point" required />
      </label>
      <label>
        <span>Drop location</span>
        <input type="text" name="dropLocation" placeholder="Drop point" required />
      </label>
    </div>
    <div class="payment-options">
      <label class="payment-option active"><input type="radio" name="payment" value="UPI" checked /> UPI</label>
      <label class="payment-option"><input type="radio" name="payment" value="Card" /> Debit/Credit Card</label>
      <label class="payment-option"><input type="radio" name="payment" value="Cash" /> Cash on boarding</label>
    </div>
    <button class="confirm-btn">Confirm booking</button>
    <div class="success" hidden></div>
  `;

  panel.querySelector('.seat-grid').addEventListener('click', (event) => {
    const seatButton = event.target.closest('.seat-btn');
    if (!seatButton) return;

    const seatValue = seatButton.dataset.seat;
    const seatIndex = selectedSeats.indexOf(seatValue);

    if (seatIndex >= 0) {
      selectedSeats.splice(seatIndex, 1);
      seatButton.classList.remove('active');
    } else if (selectedSeats.length < 4) {
      selectedSeats.push(seatValue);
      seatButton.classList.add('active');
    }
  });

  panel.querySelector('.payment-options').addEventListener('click', (event) => {
    const option = event.target.closest('.payment-option');
    if (!option) return;

    panel.querySelectorAll('.payment-option').forEach((item) => item.classList.remove('active'));
    option.classList.add('active');
  });

  panel.querySelector('.confirm-btn').addEventListener('click', () => {
    const successBox = panel.querySelector('.success');
    if (!selectedSeats.length) {
      successBox.hidden = false;
      successBox.textContent = 'Please select at least one seat.';
      return;
    }

    if (!storedUser) {
      successBox.hidden = false;
      successBox.textContent = 'Please login first to confirm your booking.';
      return;
    }

    const paymentMethod = panel.querySelector('input[name="payment"]:checked')?.value || 'UPI';
    const customerName = (panel.querySelector('input[name="customerName"]')?.value || '').trim();
    const customerPhone = (panel.querySelector('input[name="customerPhone"]')?.value || '').trim();
    const pickupLocation = (panel.querySelector('input[name="pickupLocation"]')?.value || '').trim();
    const dropLocation = (panel.querySelector('input[name="dropLocation"]')?.value || '').trim();

    if (!customerName || !customerPhone || !pickupLocation || !dropLocation) {
      successBox.hidden = false;
      successBox.textContent = 'Please fill in your name, phone number, pickup location, and drop location.';
      return;
    }

    const booking = {
      id: String(Date.now()),
      busName: bus.name,
      route: bus.route,
      seats: selectedSeats,
      date: document.getElementById('date').value || 'Today',
      pricePerSeat: Number(bus.price),
      total: bus.price * selectedSeats.length,
      paymentMethod,
      paymentStatus: 'Completed',
      transactionId: `BBTX-${Math.round(Date.now() / 1000)}`,
      customerName,
      customerPhone,
      pickupLocation,
      dropLocation,
    };

    const bookings = JSON.parse(localStorage.getItem('bharatBusBookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bharatBusBookings', JSON.stringify(bookings));

    const upiLink = paymentMethod === 'UPI' ? buildUpiPaymentLink(booking) : '';

    successBox.hidden = false;
    successBox.innerHTML = `
      <strong>Booking confirmed!</strong><br />
      Seats ${selectedSeats.join(', ')} booked on ${bus.name}.<br />
      Passenger: ${customerName} • ${customerPhone}<br />
      Pickup: ${pickupLocation} • Drop: ${dropLocation}<br />
      Payment via ${paymentMethod}.<br />
      ${paymentMethod === 'UPI' ? `<span class="upi-payment-row">UPI ID: bharatbus@upi • Amount: ₹${booking.total}</span><br /><a class="upi-pay-link" href="${upiLink}" target="_blank" rel="noopener noreferrer">Pay with UPI app</a><br />` : ''}
      <div class="sms-card">
        <strong>SMS Sent</strong>
        Your e-ticket details were sent to ${customerPhone}. Booking ID: ${Date.now()}
      </div>
      <p class="result-meta">Your ticket will be downloaded for ${customerPhone}.</p>
      <button class="ticket-btn" data-ticket='${JSON.stringify(booking).replace(/'/g, '&apos;')}'>Download Ticket</button>
    `;

    if (paymentMethod === 'UPI') {
      openUpiPayment(booking);
    }

    downloadTicketPdf(booking);
    renderBookings();
  });
}

if (searchForm) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();
    renderResults({ from, to });
  });
}

if (results) {
  results.addEventListener('click', (event) => {
    const button = event.target.closest('.book-btn');
    if (!button) return;
    openBookingPanel(button.dataset.busId);
  });
}

document.addEventListener('click', (event) => {
  const cancelButton = event.target.closest('.cancel-btn');
  if (cancelButton) {
    const bookingId = cancelButton.dataset.bookingId;
    if (!bookingId) return;

    const bookings = JSON.parse(localStorage.getItem('bharatBusBookings') || '[]');
    const nextBookings = bookings.filter((booking) => String(booking.id) !== String(bookingId));
    localStorage.setItem('bharatBusBookings', JSON.stringify(nextBookings));
    renderBookings();
    return;
  }

  const ticketButton = event.target.closest('.ticket-btn');
  if (!ticketButton) return;

  const booking = JSON.parse(ticketButton.dataset.ticket || '{}');
  downloadTicketPdf(booking);
});

updateAuthLink();
renderResults();
renderBookings();
