
//Import Components
import { FooterComponent } from '../components/footer_component';
import { SearchComponent } from '../components/search_component';

export const home_page = () => {


  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      
      <SearchComponent />
      <FooterComponent />

      {/* Skeleton */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="fixed -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="fixed -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
    </div>
  )
}

export default home_page
