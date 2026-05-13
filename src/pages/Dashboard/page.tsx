const Dashboard = () => (
  <div className="flex min-h-[calc(100vh-70px)]">
    <div className="w-65 bg-gray-800 text-white shrink-0 sticky top-17.5 self-start min-h-screen">
      <div className="text-center py-7.5 px-5 border-b border-white/10">
        <div className="w-17.5 h-17.5 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">AD</div>
        <p>Admin Portal</p>
      </div>
      <nav className="flex flex-col pb-5">
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-600 hover:border-l-orange-600">📊 Overview</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-600 hover:border-l-orange-600">📦 Inventory</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-600 hover:border-l-orange-600">📈 Sales Reports</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-600 hover:border-l-orange-600">👥 Users</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-600 hover:border-l-orange-600">⚙️ Settings</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-600 hover:border-l-orange-600">📁 Export Data</a>
      </nav>
    </div>

    <div className="flex-1 p-7.5 bg-gray-50">
      <div className="flex justify-between items-center mb-7.5 flex-wrap gap-4">
        <h2 className="text-gray-800 text-2xl">Stock Management</h2>
        <div className="flex gap-5">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-30">
            <strong className="block text-3xl text-gray-800 mb-1">1,240</strong>
            <span className="text-gray-500 text-sm">Total Items</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-30">
            <strong className="block text-3xl text-gray-800 mb-1">42</strong>
            <span className="text-gray-500 text-sm">Pending Orders</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        <div className="bg-white p-6 text-center rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="text-3xl block mb-3">📋</div>
          <h4 className="text-gray-800 mb-4 text-base">View All Stock</h4>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-orange-500">View</button>
        </div>
        <div className="bg-white p-6 text-center rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="text-3xl block mb-3">🗑️</div>
          <h4 className="text-gray-800 mb-4 text-base">Delete Stock</h4>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-orange-500">Remove</button>
        </div>
        <div className="bg-white p-6 text-center rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="text-3xl block mb-3">🔄</div>
          <h4 className="text-gray-800 mb-4 text-base">Update Stock</h4>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-orange-500">Edit</button>
        </div>
        <div className="bg-white p-6 text-center rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="text-3xl block mb-3">➕</div>
          <h4 className="text-gray-800 mb-4 text-base">New Stock</h4>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-orange-500">Add</button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl mb-7.5 shadow-sm">
        <h3 className="text-gray-800 mb-5 text-xl">🆕 Unseen Orders</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Book</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">#ORD-001</td>
              <td className="p-3">john@email.com</td>
              <td className="p-3">1984</td>
              <td className="p-3">$12.99</td>
              <td className="p-3"><span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs inline-block">Pending</span></td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">#ORD-002</td>
              <td className="p-3">jane@email.com</td>
              <td className="p-3">The Alchemist</td>
              <td className="p-3">$14.99</td>
              <td className="p-3"><span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs inline-block">Pending</span></td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">#ORD-003</td>
              <td className="p-3">mike@email.com</td>
              <td className="p-3">Mockingbird</td>
              <td className="p-3">$11.99</td>
              <td className="p-3"><span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs inline-block">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-7.5">
        <h3 className="text-gray-800 mb-5 text-center">Monthly Inventory Growth - 2026</h3>
        <div className="flex items-end justify-center gap-10 p-5 flex-wrap">
          <div className="flex flex-col items-center text-center">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-15"></div>
            <div className="font-bold text-gray-800">30</div>
            <div className="text-xs text-gray-500">Jan</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-27.5"></div>
            <div className="font-bold text-gray-800">55</div>
            <div className="text-xs text-gray-500">Feb</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-22.5"></div>
            <div className="font-bold text-gray-800">45</div>
            <div className="text-xs text-gray-500">Mar</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-42.5"></div>
            <div className="font-bold text-gray-800">85</div>
            <div className="text-xs text-gray-500">Apr</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-35"></div>
            <div className="font-bold text-gray-800">70</div>
            <div className="text-xs text-gray-500">May</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;