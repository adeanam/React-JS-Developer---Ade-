import { GitBranch } from 'lucide-react';

export const UsernameNotFound  = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      {/* Icon */}
      <div className="mb-6">
        <div className="relative inline-block">
          <GitBranch className="w-16 h-16 text-slate-400" />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 text-xs font-bold">!</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-slate-800 mb-2">
        Username Not Found
      </h1>

      {/* Description */}
      <p className="text-slate-600 max-w-md">
        Sorry, we couldn't find the username you're looking for.
      </p>
    </div>
  );
}

export default UsernameNotFound;