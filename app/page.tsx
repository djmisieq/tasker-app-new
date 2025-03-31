export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Tasker App</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Witaj w aplikacji Tasker</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            To jest nowa wersja aplikacji Tasker z poprawioną konfiguracją Next.js i Tailwind CSS.
            Możesz teraz korzystać z funkcji zarządzania zadaniami, projektami i spotkaniami.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h3 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Zadania</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Zarządzaj swoimi zadaniami za pomocą intuicyjnej tablicy Kanban.
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h3 className="font-medium text-green-600 dark:text-green-400 mb-2">Projekty</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Organizuj zadania w projekty i śledź ich postęp.
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h3 className="font-medium text-purple-600 dark:text-purple-400 mb-2">Spotkania</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Planuj i organizuj spotkania z zespołem.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="/tasks"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Przejdź do zadań
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
