export default function ArtistDashboard() {
  const stats = {
    totalBookings: 47,
    pendingBookings: 8,
    totalEarnings: 12850,
    profileViews: 1234,
  }

  const appointments = [
    { id: '1', client: 'Sarah M.', design: 'Custom sleeve', date: 'Apr 15, 2026', status: 'confirmed', deposit: 250 },
    { id: '2', client: 'James K.', design: 'Portrait', date: 'Apr 18, 2026', status: 'pending', deposit: 0 },
    { id: '3', client: 'Mike T.', design: 'Black & gray arm', date: 'Apr 20, 2026', status: 'confirmed', deposit: 400 },
    { id: '4', client: 'Emily R.', design: 'Consultation', date: 'Apr 22, 2026', status: 'pending', deposit: 0 },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button className="btn-primary">Add Portfolio Item</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Total Bookings</p>
          <p className="text-3xl font-bold">{stats.totalBookings}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Pending</p>
          <p className="text-3xl font-bold text-accent">{stats.pendingBookings}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Total Earnings</p>
          <p className="text-3xl font-bold">${stats.totalEarnings.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Profile Views</p>
          <p className="text-3xl font-bold">{stats.profileViews}</p>
        </div>
      </div>

      {/* Appointments */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Upcoming Appointments</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 text-gray-500 font-medium">Client</th>
              <th className="text-left p-4 text-gray-500 font-medium">Design</th>
              <th className="text-left p-4 text-gray-500 font-medium">Date</th>
              <th className="text-left p-4 text-gray-500 font-medium">Status</th>
              <th className="text-left p-4 text-gray-500 font-medium">Deposit</th>
              <th className="text-left p-4 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(apt => (
              <tr key={apt.id} className="border-t">
                <td className="p-4 font-medium">{apt.client}</td>
                <td className="p-4 text-gray-600">{apt.design}</td>
                <td className="p-4">{apt.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    apt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {apt.status}
                  </span>
                </td>
                <td className="p-4">${apt.deposit}</td>
                <td className="p-4">
                  <button className="text-accent hover:underline text-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
