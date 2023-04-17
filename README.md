<div class="markdown prose w-full break-words dark:prose-invert dark"><p>README.md for Video Club app</p><h1>Video Club</h1><p>Video Club is a web application that allows users to search for movies using keywords and save them to their account. The application uses the IMDB API to fetch movies and stores them in a database under the user's account.</p><h2>Features</h2><ul><li>User authentication: Users have to register and login to use the application.</li><li>Movie search: Users can search for movies using keywords for the title.</li><li>Random movie quote: The application displays a random quote from a movie on the first page.</li><li>Movie display: After a user searches for a movie, the application displays 25 movies relevant to the user's input. Each movie is displayed with an image, title, small description, and a save button.</li><li>Movie save: The save button saves the selected movie to the user's account in the database.</li><li>Saved movies: The application has a link that navigates users to their saved movies page, where they can view the movies they have saved. Each saved movie is displayed with an image, title, and a delete button.</li><li>Movie delete: The delete button removes the selected movie from the user's account in the database.</li></ul><h2>Technologies used</h2><ul><li>ReactJS: Frontend framework</li><li>NodeJS and ExpressJS: Backend framework</li><li>MongoDB: Database for storing user data and saved movies</li><li>IMDB API: Used to fetch movie data</li><li>JWT: Tokenization of user login</li></ul><h2>Installation</h2><ol><li>Clone the repository using the command below:</li></ol><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/&lt;username&gt;/video-club.git
</code></div></div></pre><ol start="2"><li>Install dependencies for the frontend and backend using the following command in both the client and server directories:</li></ol><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">npm install
</code></div></div></pre><ol start="3"><li>Create a <code>.env</code> file in the server directory and add the following variables:</li></ol><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>makefile</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-makefile">NODE_ENV=development
PORT=&lt;port-number&gt;
MONGODB_URI=&lt;mongodb-uri&gt;
JWT_SECRET=&lt;jwt-secret&gt;
</code></div></div></pre><ol start="4"><li>Start the application using the following command in the server directory:</li></ol><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>arduino</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-arduino">npm run dev
</code></div></div></pre><ol start="5"><li>Open your browser and navigate to <code>http://localhost:&lt;port-number&gt;</code> to use the application.</li></ol><h2>Contributors</h2><ul><li>John Doe (@johndoe)</li><li>Jane Doe (@janedoe)</li></ul><h2>License</h2><p>This project is licensed under the MIT License - see the <a href="LICENSE" target="_new">LICENSE</a> file for details.</p></div>
