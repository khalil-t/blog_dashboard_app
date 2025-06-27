import { useState } from 'react';
import { BlogSidebar } from '@/components/BlogSidebar';
import { PostEditor } from '@/components/PostEditor';
import { BlogPost, PostFormData } from '@/types/blog';
import Head from "next/head";

const Index = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Welcome to Your Blog Dashboard',
      subtitle: 'This is your first blog post to get you started',
      content: '# Welcome to Your Blog Dashboard\n\nThis is a **sample post** to demonstrate the markdown editor.\n\n## Features\n\n- Create new posts\n- Edit existing posts\n- Save as drafts\n- Publish posts\n- Markdown support\n\n### Markdown Examples\n\n**Bold text** and *italic text* are supported.\n\nYou can create lists, headings, and much more!',
      status: 'draft',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNewPost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: '',
      subtitle: '',
      content: '',
      status: 'draft',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setPosts(prev => [newPost, ...prev]);
    setSelectedPost(newPost);
  };

  const handleSavePost = (data: PostFormData, status: 'draft' | 'published') => {
    if (selectedPost) {
      // Update existing post
      setPosts(prev => prev.map(post => 
        post.id === selectedPost.id 
          ? { ...post, ...data, status, updatedAt: new Date() }
          : post
      ));
      setSelectedPost(prev => prev ? { ...prev, ...data, status, updatedAt: new Date() } : null);
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...data,
        status,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setPosts(prev => [newPost, ...prev]);
      setSelectedPost(newPost);
    }

 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <BlogSidebar
        posts={posts}
        selectedPost={selectedPost}
        onSelectPost={setSelectedPost}
        onNewPost={handleNewPost}
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <PostEditor
        post={selectedPost}
        onSave={handleSavePost}
      />
    </div>
  );
};

export default Index;

/*
   toast({
      title: status === 'published' ? 'Post Published!' : 'Draft Saved!',
      description: status === 'published' 
        ? 'Your post has been published successfully.' 
        : 'Your draft has been saved.',
    });
*/