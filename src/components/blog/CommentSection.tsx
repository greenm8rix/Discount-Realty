import React, { useState } from 'react';
import { User, MessageSquare } from 'lucide-react';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Robert Johnson',
      date: 'July 15, 2025',
      content: 'This article on discount real estate opportunities was extremely helpful. I used the foreclosure search techniques mentioned and found a property at 28% below market value last month.',
      replies: [
        {
          id: 101,
          name: 'Michael Chen',
          date: 'July 16, 2025',
          content: 'That\'s great to hear! What area did you find your discount property in?'
        }
      ]
    },
    {
      id: 2,
      name: 'Sarah Williams',
      date: 'July 10, 2025',
      content: 'I appreciate the detailed breakdown of how to evaluate potential discount real estate deals. The due diligence checklist saved me from making a costly mistake on what seemed like a bargain property.',
      replies: []
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && name.trim() && email.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          name,
          date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          content: comment,
          replies: []
        }
      ]);
      setComment('');
      setName('');
      setEmail('');
    }
  };

  return (
    <section id="comments" className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <MessageSquare className="w-6 h-6 mr-2 text-rose-600" />
        Comments ({comments.length})
      </h2>
      
      <div className="space-y-8 mb-12">
        {comments.map(comment => (
          <div key={comment.id} className="border-b border-gray-200 pb-8 last:border-0">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-gray-500" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{comment.content}</p>
                <button className="text-sm text-rose-600 font-medium hover:text-rose-800 transition-colors">
                  Reply
                </button>
                
                {comment.replies.length > 0 && (
                  <div className="mt-6 space-y-6 pl-4 border-l-2 border-gray-100">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-gray-500" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{reply.name}</h4>
                            <span className="text-xs text-gray-500">{reply.date}</span>
                          </div>
                          <p className="text-gray-700">{reply.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Your Comment*
            </label>
            <textarea
              id="comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Share your thoughts on discount real estate..."
              required
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email* (will not be published)
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <input 
              type="checkbox" 
              id="save-info" 
              className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
            />
            <label htmlFor="save-info" className="ml-2 text-sm text-gray-700">
              Save my name and email for the next time I comment
            </label>
          </div>
          
          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Post Comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CommentSection;