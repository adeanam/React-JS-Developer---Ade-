import { useState } from 'react';
import {  ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react';

//Import Interfaces Class
import type { IUser, IItemsUser, IExpadedUser } from '../interface/i_users';
import type { IRepository } from '../interface/i_repository';

interface DetailSearchComponentProps {
    isSearchActive: boolean;
    isLoading: boolean;
    showResult: boolean;
    showCountResult: number;
    stateSearch: string;
    listUser: IUser | null;
}
export const DetailSearchComponent = ({ isLoading, isSearchActive, showResult, showCountResult, stateSearch, listUser }: DetailSearchComponentProps) => {
    const [expandedResults, setExpandedResults] = useState({} as IExpadedUser);

    const toggleResultExpansion = (resultId: number) => {
      setExpandedResults((prev: any) => ({    
        ...prev,
        [resultId]: !prev[resultId]
      }));
    };

    const isLoadingSkeleton = isLoading && isSearchActive;

  return (
    <>
        {/* Search Result  */}
        {(showResult && listUser) ? (
        <div className="mt-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="mb-4 px-2">
            <p className="text-gray-600 text-sm">
                Menampilkan {showCountResult} hasil untuk "{stateSearch}"
            </p>
            </div>
            
            <div className="space-y-4">
            {listUser.items.map((result: IItemsUser) => (
                <div
                key={result.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                        <a target="_blank" rel="noopener noreferrer" href={result.html_url}><span className="text-green-600 text-sm font-medium">{result.html_url}</span></a>
                        <span className="text-gray-400 text-xs">•</span>
                        <div className="flex items-center space-x-1">
                            <Star size={12} className="text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600">{result.score}</span>
                        </div>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-200">
                        {result.login}
                        </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <a target="_blank" rel="noopener noreferrer" href={result.html_url}><ExternalLink size={16} className="text-gray-400 hover:text-blue-500 transition-colors duration-200" /></a>
                        <button
                        onClick={() => toggleResultExpansion(result.id)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                        {expandedResults[result.id] ? 
                            <ChevronUp size={20} className="text-gray-600" /> : 
                            <ChevronDown size={20} className="text-gray-600" />
                        }
                        </button>
                    </div>
                    </div>

                    {/* Additional Info when not expanded */}
                    {!expandedResults[result.id] && (
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-3">
                        <div className="flex items-center space-x-4">
                        <span>Total Repository: </span>
                        <span>{result.list_repository?.length}</span>
                        </div>
                        <span className="text-blue-600 cursor-pointer" onClick={() => toggleResultExpansion(result.id)}>
                        Repository List →
                        </span>
                    </div>
                    )}
                </div>

                {/* Expanded Content */}
                {expandedResults[result.id] && (
                    <div className="border-t border-gray-100 bg-gray-50">
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
                        {result.list_repository?.map((repo: IRepository, index: number) => (
                            <div key={index} className=" p-3 bg-white rounded-lg">
                            <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                                <ExternalLink size={16} className="text-gray-400 hover:text-blue-500 transition-colors duration-200 float-right" />
                            </a>
                            <div className="text-sm font-medium truncate overflow-hidden whitespace-nowrap">Repository Name:</div>
                            <div className="text-sm font-light truncate overflow-hidden whitespace-nowrap mb-3">{repo.name}</div>
                            <div className="text-sm font-medium truncate overflow-hidden whitespace-nowrap">Repository Description:</div>
                            <div className="text-sm font-light truncate overflow-hidden whitespace-nowrap">{repo.description || "-"} </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
        ) : isLoadingSkeleton ?
            <div>
                <div className="animate-pulse bg-gray-300 h-40 w-full rounded-lg mt-10"></div>
                <div className="animate-pulse bg-gray-300 h-40 w-full rounded-lg mt-10"></div>
                <div className="animate-pulse bg-gray-300 h-40 w-full rounded-lg mt-10"></div>
                <div className="animate-pulse bg-gray-300 h-40 w-full rounded-lg mt-10"></div>
            </div>
          :   []
        }
    </>
  )
}

export default DetailSearchComponent
