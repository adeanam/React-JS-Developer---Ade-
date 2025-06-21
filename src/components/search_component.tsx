import { useEffect, useState } from 'react';
import { GetSearchedUser } from '../services/octo_services';
import { Search, X } from 'lucide-react';
import GH_Logo from '../assets/gh_logo.webp';
import { ToastContainer, toast } from 'react-toastify';

//Import Components
import {DetailSearchComponent} from './detail_search_component';

//Import Interfaces Class
import type { IUser } from '../interface/i_users';

export const SearchComponent = () => {
    const [listUser, setListUser] = useState<IUser | null>(null);
    
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [stateSearch, setStateSearch] = useState<string>("");

    const handleSearchFocus = () => {
        setIsSearchActive(true);
    };

    const handleClose = () => {
        setIsSearchActive(false);
    };

   const fetchListUsers = async (nameRepo: string) => {
        setIsLoading(true)
        try{
            const response: IUser = await GetSearchedUser(nameRepo);
            setListUser(response)
            setIsLoading(false)
        }catch(error: unknown){
          console.log("error depan",error)
            if (typeof error === 'string') {
                toast.error(error, {
                    autoClose: false,
                });
            }
        }
    }

    useEffect(() =>{
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                fetchListUsers(stateSearch);
            }else if (event.key === 'Escape') {
              setListUser(null);
              setStateSearch("")
              setIsSearchActive(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    },[stateSearch])

    const showResult = listUser && listUser?.items.length > 0 && isSearchActive && !isLoading && isSearchActive;
    const showCountResult = listUser && listUser?.items.length ;
  return (
    <>
        <ToastContainer />
        {/* Logo Container */}
        <div 
            className={`transition-all duration-700 ease-in-out transform ${
            isSearchActive 
                ? 'opacity-0 -translate-y-12 scale-75 pointer-events-none' 
                : 'opacity-100 translate-y-0 scale-100'
            }`}
        >
            <div className="bg-white rounded-full p-8 shadow-2xl mb-12 flex items-center justify-center">
            <img src={GH_Logo} alt="Github Logo" className="w-40 h-30 object-cover" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            Search User Repo
            </h1>
            <p className="text-gray-600 text-center text-lg">
            Search other User Repository on Github
            </p>
        </div>
        <div 
            className={`w-full max-w-2xl transition-all duration-700 ease-in-out transform ${
            isSearchActive 
                ? '-translate-y-32 scale-110' 
                : 'translate-y-0 scale-100'
            }`}
        >
        {/* Search Input Container */}
        <div className="relative">
          {/* Search Input */}
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ${
              isSearchActive ? 'text-blue-500' : ''
            }`} size={20} />
            <input
              type="text"
              placeholder="Search username..."
              onFocus={handleSearchFocus}
              value={stateSearch}
                onChange={(event) => setStateSearch(event.target.value)}
              className={`w-full pl-12 pr-12 py-4 text-lg border-2 rounded-full shadow-lg text-gray-400 transition-all duration-300 focus:outline-none ${
                isSearchActive 
                  ? 'border-blue-500 shadow-2xl bg-white' 
                  : 'border-gray-200 hover:border-gray-300 bg-white/80 backdrop-blur-sm'
              }`}
            />
            {/* Close Button */}
            {isSearchActive && (
              <button
                onClick={handleClose}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Search Result  */}
          <DetailSearchComponent 
            isLoading= {isLoading ?? false}
            isSearchActive={isSearchActive ?? false}
            showResult={showResult ?? false}
            showCountResult={showCountResult ?? 0}
            stateSearch={stateSearch}
            listUser={listUser ?? null}
          />
          
        </div>
      </div>
      </>
  )
}

export default SearchComponent
