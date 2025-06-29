import { Save, Eye, EyeOff, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { BlogPost, PostFormData } from '@/types/blog';
import ReactMarkdown from 'react-markdown';
import renderMarkdownPreview from "../components/ui/renderMarkdownPreview"



//saveAsDraft SubmitBlog


interface PostEditorProps {
    publishedPosts: BlogPost[] | null;
onSave:(data: PostFormData, status: 'draft' | 'published')=>void
  selectedPost: BlogPost | null;

}

export default function PostEditor({ publishedPosts, onSave ,selectedPost }: PostEditorProps) {



  const [formData, setFormData] = useState<BlogPost>({
    id: "",                 
  title: "",
  subtitle: "",         
  content: "",
  status: "draft",
  createdAt: new Date(),          
  });

const [show, setShow]=useState<boolean>(false)

const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);










  const handleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
const {name , value}=e.target;

setFormData(prev=>({
...prev,
[name]:value
}))
setHasUnsavedChanges(true);
  }

const showPreview =()=>{
console.log("here")
setShow(prev=>
  !prev
)
}



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

{selectedPost ? (
  selectedPost.status === "draft" ? (
    <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
  ) : (
    <Badge className="bg-green-100 text-green-800">Published</Badge>
  )
) : (
  <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
)}

        



              

{hasUnsavedChanges&&(
  <Badge variant="outline" className="text-orange-600 border-orange-200">
                  Unsaved changes
                </Badge>
)

}

              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="flex items-center space-x-2" onClick={showPreview }>
              <Eye className="h-4 w-4" />
 <span>{show ? 'Hide Preview' : 'Show Preview'}</span>            </Button>
            <Button variant="outline" className="flex items-center space-x-2" onClick={(e) => {
                  e.preventDefault(); 
setHasUnsavedChanges(false);
              onSave(formData, "draft")}}>
              <Save className="h-4 w-4" />
              <span>Save as Draft</span>
            </Button>
            <Button form="blog-form" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2" type="submit" >
              <Save className="h-4 w-4" />
              <span>Publish</span>
            </Button>
          </div>
        </div>
      </div>


<form  onSubmit={(e) => {
    e.preventDefault(); 
    onSave(formData, "published"); 
    setHasUnsavedChanges(false);

   
  }} id="blog-form" className="flex transition-all duration-500 ease-in-out">
      <div className={`flex-1 overflow-hidden grid ${show ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {/* Editor */}
        <div className="w-full h-full overflow-y-auto p-6 border-r border-gray-200" >
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <Input id="title" type="text" placeholder="Enter your post title..."   name="title"  className="text-lg font-medium"  value={formData.title}   onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle
              </label>
              <Input id="subtitle" type="text" name="subtitle"  placeholder="Enter a subtitle or description..." value={formData.subtitle}         onChange={handleChange}/>
            </div>

            <div className="flex-1">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content (Markdown)
              </label>
              <Textarea
                id="content"
                value={formData.content}
                        onChange={handleChange}
name="content" 
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
<div className={`h-full overflow-y-auto p-6 bg-gray-50 ${show ? "flex" : "hidden"}`} id='Post'>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{formData.title? formData.title:"Untitled Post"}</h1>
              <p className="text-xl text-gray-600 mb-8">{formData.subtitle? formData.subtitle:"Subtitle goes here..."}</p>
             <div className="prose prose-lg max-w-none">
{renderMarkdownPreview(formData.content)}</div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
