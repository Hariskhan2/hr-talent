export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            HR Talent Management System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline your hiring process and manage talent efficiently
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="/dashboard"
              className="px-8 py-3 bg-[#0F4C81] text-white rounded-lg font-semibold hover:bg-[#0d3f6b] transition-colors"
            >
              Go to Dashboard
            </a>
            <a
              href="#features"
              className="px-8 py-3 bg-white text-[#0F4C81] border-2 border-[#0F4C81] rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-[#0F4C81] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Candidate Management</h3>
              <p className="text-gray-600">Track and manage candidates throughout the hiring process</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-[#0F4C81] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Job Posting</h3>
              <p className="text-gray-600">Create and manage job vacancies with ease</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-[#0F4C81] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics & Reports</h3>
              <p className="text-gray-600">Get insights into your hiring metrics and performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
