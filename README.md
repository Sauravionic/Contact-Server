<h1><a href="https://contact-ei3rjg16f-sauravionic.vercel.app/" target="_blank">Contacts-Web-App</a></h1>
<h2><a href="https://contact-ei3rjg16f-sauravionic.vercel.app/" target="_blank">Link</a></h2>
<hr><p>A React web app that can send an OTP ( via SMS ) to a list of Contacts, one at a time</p><h2>General Information</h2>
<hr>
<ul>
<li>A contact web app which serves the purpose of otp sending to one user at a time asynchronously.</li>
</ul><ul>
<li>It solves the issue of sending otp to users along with some extra message and can be used by any user to serve their purpose without extra credits or coding.</li>
</ul><ul>
<li>Serves the user with a fluent web application made with React as its frontend and nodeJS as its backend.
Application is fully responsive for small sized screens, mid sized screens and desktops.</li>
</ul><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React</li>
</ul><ul>
<li>NodeJS</li>
</ul><ul>
<li>Twilio</li>
</ul><ul>
<li>Npm</li>
</ul><h2>Features</h2>
<hr><ul>
<li>OTP SENDING</li>
</ul><ul>
<li>RESPONSIVE</li>
</ul><ul>
<li>INTERACTIVE</li>
</ul><ul>
<li>FLUENT &amp; MINIMALIST</li>
</ul><ul>
<li>EASY TO USE</li>
</ul><h2>Setup</h2>
<hr><p>Requirement:- Internet<br>
Dependency Used:- 1:- Server:- • Nodemon
• Cors
• Twilio<br>
Dependency Used:- 2:- Client:- • react-router-dom
• axios<br>
• react-icons</p><h2>Usage</h2>
<hr><p>On Home Page there are various contacts listed (dummy data). Clicking on the contact will redirect to another page where users can compose a message and send. An Otp will be sent to contact's phone number along with the extra message - example - ( Hi! Your Otp is 123456. Extra Message :- Hello There ). After this users will be redirected to the home page where they can see the sent messages sorted in descending order based on timestamp of the message.</p><h5>Code Examples</h5><ul>
<li>API Calls to Twilio</li>
</ul><p><code>router.post("/", async (req, res, next) =&gt; {     const newInfo = new Info(req.body);      const query = { $text: { $search: req.body.phoneNo } };     try {         const savedInfo = await newInfo.save();         res.status(200).json(savedInfo);     } catch (err) {         console.log(err);         res.status(404).json();     } })  //Get Info router.get("/", async (req, res, next) =&gt; {     try {         const info = await Info.find().sort('-createdAt');         res.status(200).json(info);     } catch (err) {         res.status(404).json();     } })</code></p><h2>Project Status</h2>
<hr><p>Completed</p><h2>Improvements</h2>
<hr><ul>
<li>Dummy Data will be changed to data which can be input by users i.e. User made Contact in the next update.</li>
</ul><ul>
<li>Existing designs will also be changed in further updates</li>
</ul><h2>Features that can be added</h2>
<hr><ul>
<li>Further Design will be added in the next update</li>
</ul><ul>
<li>More Screens will be added for the ease of user interaction.</li>
</ul><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/saurav-srivastava-4b71b5188/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a><span style="margin-right: 30px;"></span><a href="https://github.com/Sauravionic"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 10%;"></a></p>