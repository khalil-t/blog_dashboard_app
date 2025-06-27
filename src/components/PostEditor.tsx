import { Save, Eye, EyeOff, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';






export function PostEditor() {


  
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Empty State */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No post selected</h3>
          <p className="text-gray-500 mb-6">
            Select a post from the sidebar or create a new one to get started.
          </p>
        </div>
      </div>

      {/* If a post is selected, show the form below */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Edit Post</h2>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className="bg-green-100 text-green-800">published</Badge>
                <Badge variant="outline" className="text-orange-600 border-orange-200">
                  Unsaved changes
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>Show Preview</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Save className="h-4 w-4" />
              <span>Save as Draft</span>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
              <Save className="h-4 w-4" />
              <span>Publish</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden grid grid-cols-2">
        {/* Editor */}
        <div className="h-full overflow-y-auto p-6 border-r border-gray-200">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <Input id="title" type="text" placeholder="Enter your post title..." className="text-lg font-medium" />
            </div>

            <div>
              <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle
              </label>
              <Input id="subtitle" type="text" placeholder="Enter a subtitle or description..." />
            </div>

            <div className="flex-1">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content (Markdown)
              </label>
              <Textarea
                id="content"
                placeholder={`Write your post content using Markdown...

# Main Heading
## Subheading
### Smaller Heading

**Bold text**
*Italic text*

Your regular paragraph text goes here...`}
                className="min-h-96 font-mono text-sm resize-none"
              />
            </div>
          </div>
        </div>






        {/* Preview */}
        <div className="h-full overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Untitled Post</h1>
              <p className="text-xl text-gray-600 mb-8">Subtitle goes here...</p>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-400 italic">Start writing to see preview...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
