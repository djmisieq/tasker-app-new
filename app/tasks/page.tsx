export default function TasksPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Zadania</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          Nowe zadanie
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kolumna: Do zrobienia */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Do zrobienia</h2>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">1</span>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-sm">Przygotować prezentację projektu</h3>
                <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 text-xs font-medium px-2.5 py-0.5 rounded">Wysoki</span>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                    JK
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Jan Kowalski</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kolumna: W trakcie */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">W trakcie</h2>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">1</span>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-sm">Redesign strony</h3>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">Średni</span>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                    JK
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Jan Kowalski</span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  19 mar
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kolumna: Zrobione */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Zrobione</h2>
            <span className="bg-gray-200 dark:bg-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">1</span>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-sm">Zaktualizować zależności</h3>
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded">Niski</span>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                    JK
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Jan Kowalski</span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  15 mar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}