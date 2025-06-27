import { FileText, PlusCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function BlogSidebar() {
  return (
    <div className="bg-white border-r border-gray-200 transition-all duration-300 ease-in-out w-80 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">Blog Dashboard</h1>
        </div>
        <Button variant="ghost" size="sm" className="hover:bg-gray-100">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* New Post Button */}
      <div className="p-4 border-b border-gray-200">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4">
          <PlusCircle className="h-4 w-4" />
          <span className="ml-2">New Post</span>
        </Button>
      </div>

      {/* Draft Posts */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Drafts</h3>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            0
          </Badge>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-400 italic">No drafts yet</p>
        </div>
      </div>

      {/* Published Posts */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Published</h3>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            0
          </Badge>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-400 italic">No published posts yet</p>
        </div>
      </div>
    </div>
  );
}
