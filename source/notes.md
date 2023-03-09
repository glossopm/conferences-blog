Effective communication for engineers - Naz Delam

- Think Feel Do model
  - What do I want Tatiane to think?
  - What do I want her to feel?
  - What do I want her to do?
- Example, rephrase "Hey you edit the odd chapters you edit even and finish by end of week?"
  - "To get the ball rolling, I suggest yuo edit the odd champter I'll do the even, but if you have something else in mind please let me know right away"
- Understand other person
- Message building block
  - What gets transmitted between sender and receive hopefully with intent is the message
- Async vs sync media ![](RackMultipart20230309-1-7s0tbd_html_eb8497eab5713d4c.png)
- Create the communication channel diagram for team
- Reason -\> example -\> point summarise
  - g. technical migratation. We want to migrate this library because it will cause additional tech debt, for example, so it would save time to do thus
- What -\> So What -\> Now what
  - g. We need to migration so we don't break something and we can write a ticket for next sprint to complete this

The game theory of software decisions - Ziv Levy

- Only in retrospect can you know if the decision you made was the best
- Learn how to let go of the stupid things
  - Decide if the decision is important or not
  - Try to leave your ego aside
  - g. silicon valley tabs vs spaces argumentent
- ![](RackMultipart20230309-1-7s0tbd_html_bd3d551eeb6a92c0.png)
- How to reduce developer drama?
  - Decide whether this is reversible?
    - Yes -\> Problem solved
    - No -\> Seriously?
  - Define fail fast point
    - What's the KPI
    - Get yourself a back out strategy
      - If we considered 2 or more approaches and pick one, and we might want to switch to another, have a strategy so transition will be as seamless as possible for users in production
  - Is this position critical? Try and bound within a certain timeframe, decide a Jury (someone you all agree on) and
    - Being a senior does not mean you decide
      - It means that you are the team advisor, and can provide insights based on your real experience. And if you have no experience in this topic and so you have no more input versus a junior in that area.
    - Set up a regular meeting to discuss these non-critical points, and if no one proposes any topics it's cancelled. Casual meeting (usually over drinks)
- Finalise game rules
  - ![](RackMultipart20230309-1-7s0tbd_html_e7d575f0e36eade5.png)
  - Be Fast
    - Adopt faster and process and follow your intuaution
  - No zero-sum game
    - Everybody wins
  - No Ego
    - Players with egos never wins
  - Stay Rational
  - Call a Jury
  - Remain a professional
    - Don't get personal

A framework for managing technical debt - Alex Moldovan

- I want to talk about refactoring '_ **culture'** _
  - When was working on refactoring some of the backend, legacy provider and then a new provider. At first felt like we should support both, but realised as long as have a clear understanding across whole team that this is how we are managing the process. We have a problem and a plan on how to migigate this problem.
- Stop fighting, start managing.
- Talking about a framework for mananging technical debt. The three pillars of refactoring
  - Practices (Aim)
    1. Patterns
    2. Architecture
    3. Structure
    4. Guidelines (general coding guidelines)
  - Inventory (the one most teams are missing, what is the gap to practices that we have in mind, What is our technical debt?)
    1. Backlog
      - Start documenting. Swap out old way of doing things etc summarised and documented in backlog
    2. Documents
      - Figure out key aspects of codebase that have technical debt, and then start documenting. Then no longer just living in somebodies head
    3. Priorities
      - Then you can start building priorities and address backlog in priority order
    4. Plans
      - Not only have we discovered, documented and prioritise tech debt, we can create a plan for the steps we need to take to get from a to b.
  - Processes
    1. Execution
    2. Ownership
    3. Time
    4. Progress
- Practices are the aim, the inventory is the reality of where we are, and then the process is kind of the step of taking everything from Inventory to Practices ![](RackMultipart20230309-1-7s0tbd_html_61eb15f35c604949.png)
- If we don't follow the above (Practices, Invetory, and processthen it's really difficult to do a big refactor without affecting product delivery.
- The rules to make it work
  - Rule 1: Make it visible
    1. People think to refactor without people knowing /(i.e. Product owner) is the way to make changes. We should make sure we seperate refactor PRs into their own PRs and follow-up PR. This changes the focus on the PR.
  - Rule 2: Make it rewarding
    1. When you ship something we get a buzz and celebrate it. When we do a refactor or tackle technical debt we should also celebrate together.
    2. One every month our team "removes code that doesn't spark joy", whatever we feel that really needs to go away. Do a cleanup and get rid of legacy code to keep the codebase healthy
  - Rule 3: Make it resilient
    1. When things get really intense and you won't have time to do tech debt but keep resilient and make sure you leave time in future for the technical debt to be addressed. Need buy-in from the whole team, keep it in check, continue the meetings and huddles to decide what issues we have and dicuss the plan and document to make sure that the team knows the process is still there even if there's no time at the moment to action anything
- "Every team has a person that drives the refactoring culture. If you dont know who that is, it is probably you" Alex Moldovan

Imposter Sydrome-driven development - Daniel Afonso

- (imposter syndrome survey here)
- He did his first ever talk and he thought it when terribly, then he got lots of messages saying how amazing it was and some saying that they wished they knew enough to do a talk like that and most the time they feel like a fraud who will soon be found out. That's when the speak realised this person suffered just like they did from imposter syndrome
- He asked himself "Where did it come from?"
- How my imposter syndrome has grown my career
  - Started as junior engineer in full stack
  - Moved job to frontend focused which paved way for growing into DevRel and becoming a developer advocate
  - Then moved into a senior role remote
  - Finally now a role in DevRel and a full time developer advocate
- ![](RackMultipart20230309-1-7s0tbd_html_2bee8ccbc0689581.png)
- "Just go out there and have fun. People are there to learn something. If for some reason they don't at least you had fun and did something you enjoyed doing.

How to get a mentor without telling them (or secretly get a mentee) - Erin Fox

- Goals
  - How to be a good mentor/mentee
  - Redefining a "good" engineering career
  - Get a mentor or mentee without asking them
- What's coming up
  - Mentorship
  - Good mentor, bad mentor, good mentee
  - 3 stories on how to get mentors/mentees without asking them
- Engineering mentorships
  - Rather than asking straight up, ask small topics instead
  - Her mentorship definition: Teach people what you know and how to teach themselves
- It should be a two-way process. There will be times when you'll be a mentor and a mentee.
- A good mentor
  - Share knowledge and help others
  - Listen and explain hard concepts
  - Guide don't take over
- A bad mentor
  - The seagull effect, when someone flies in, shits all over your code (and makes a bunch of changes, and then leaves you in a worse situation than when you started) and flies away ![](RackMultipart20230309-1-7s0tbd_html_12de57a32483db66.png)
- A good mentee
  - Open and willing to learn
  - Show up prepared
  - Show up with questions
  - Listen & value a mentor's time
- Stories of mentorship
  - I've always found people of strength to help me on whichever team I join. I want to be a smart well-rounded person so I look at what are my weakness and find someone whos an expert to mentor me
- How did I find them?
  - Mentorship programs
    - One company had a mentorship program. Pair up with a teammate once a week for an hour. Initially was quarterly and you could switch mentors, but can continue. Have a shared goal, able to work on side-projects for the company.
    - You could set up a mentorship program where you pair up druing L\*D time
  - Pair programming
    - Participating and encouraging pair programming can be a good way of getting and giving mirco mentorship opportuntities
  - Levelling up
    - A teammate and I meeting once a week, learnt their passions and life from someone on completely different team. They were also levelling up, getting better at mentorship and managing people. Mentorship can open up to different career opportunities.
- Q&A
  - Where do you find mentorship opportunities? Going to meetups, conferences, ask people in your network, old colleagues
  - How do deal with mentees who aren't putting in any work and are just showing up? Set expectations, once a month do a pause check, see if there's something particular they want to work on or if they need to take a break
  - How to transition from non-organic to a more official mentorship arrangement? It doesn't necessaryily have to be something you need to label as this can put more pressure on the relationship. But if you have something specific you'd like them to mentor you on, you can always try and bring it up more organically
  - When do you know when it's time to end a mentorship relationship? If you have achieve your goals or your goals have changed then you can evaluate if this is still worthwhile for each other's time

Process for the process-averse - Tara Z. Manicsic

- Introduction, overview what steps we need to take for developing processes
  - First: Foundation
  - Then: Formation
  - Finally: Iteration
- First: Foundation
  - Why are we doing this? Give reasons why these processes will benefit the team
    - Save time - Roadmap | Timeline | Task List
      - Knowing what to work on next
      - Keep people out of your DMs
      - Remove blocks ASAP
    - Save time - Project Template | Lifecycles
      - Predicable timelines
      - Create a cadence
      - Ease up external pressure
    - Save time - Mettings
      - Avoid double work
      - Less communication
      - Lower repeating mistakes
    - Exposure - Internal demos
      - Know your contribution
      - Know YOU (promotion fodder, nudge nudge)
      - Foster cross-team collabs
    - Exposure - Documentation
      - Show your work (&reasoning)
      - Community opportunity
      - Team work
    - Communication
      - Be concise and topical
      - Know your audience
      - Ask what question they have
      - Document (but don't over-document)
    - Boos (bad reasons for creating process)
      - Keeping tabs/guilt trips
      - Comparing workloads
      - Process for process-sake
  - Then: Formation (show how it works)
    - How are we doing this? Highlight whats important and whats otional
    - Dos
      - Invidualising
      - Finding/removing roadblocks
      - Automation
      - Repetition & (non-strict) schedules
      - Template
      - Weekly all-team check-ins
        - Small, focused meetings when needed
      - GET FEEDBACK!
    - Don't's
      - Messing with their flow
      - Getting the team stuck
      - Not communicating delays
      - Blaming
  - Finally: Iteration
    - Revisit - Documenation
      - What parts where needed
      - What took up time
    - Revisit - Comms
      - Document \> meeting\>
      - What was lost in Slack
      - Who didn't need to know?
    - Reiterate
      - Avoid sweeping changes
      - No perfect time to interate
      - Communicate… and commuicate again

What I learned from steopping down as team lead twice - Alex Ptakhin

- About me
  - Half of the experience engineer
  - Half of experience as team leader
- Less fun = less learning, less fun = less happiness
- Does my work make me fun? What can lead me to do thing without fun?
  - g. my goal was CTO in 5 years. No idea if i will be happier.
  - Think direction, not long term goals
- How do people get what is your direction now?
  - Want to test more architecture and designing things?
    - Say about it
- What is the purpose?
  - "Meaning that is important and valuable to you"
- Experience? I see mistakes
- Advice for younger me.
  - I write things and how things are going with wins and mistakes
  - No pressure, no blame
- Book suggestion: "Drive: The surprising truth about what motivates us" by Daniel H Pink
- 3 things to summarize
  - Use fun filter
    - As more as you can
  - Think direction and experiments, not long-term goals
  - Mistakes are part of the learning, can be good to log everything
- The purpose is the own way of fun and experiments

The rewrite trap - fight the urge to start from scratch 0 Phillip Giese

- Why rewrite?
  - Not talking about when you know the project in and out and have made a long-term decision over time that a rewrite is correct. More talking about when there's a new CTO, a new team lead, andyou kind of have feeling after a few days that its better off starting from scratch
- Where does the urge come from?
  - You dont need to learn new concepts
  - Follow _ **'your** _' mental model
    - Wait 50 days before making a decision on anything big, give time to work out if it's necessary
  - You can work the way _ **'you'** _ want
- What is the trap?
  - ![](RackMultipart20230309-1-7s0tbd_html_8eb6c2d6b052cbb3.png)
  - If you start a rewrite, at first everything improves and develops really fast, feel super productive, and eventually, you get to point when you
    - Stage 1, super productive, lots to present, make progress fast in the rewrite compared to improving what's there
    - Stage 2, your rewrite starts to uncover some of the bigger obsticles and hurdles the orgiinal codebase has had to solve. Originally the original codebase was probably very simple and a good way of doing things, and over time to overcome these obsticles it became more and more complex for a good reason. The edge cases and quirks start to come in to the rewrite, and a lot of the assumptions you made may turn out to be incorrect, and you will have to start adding new things and slowing things down, and you will start to add tech debt again. Whereas those who decided to gradulaly refactor the original system will have the knowledge and ability to add and change the things
    - Stage 3, the big rewrite ends up being riddles with tech debt and issues just like the origina codebase was at the start, work slows down considerably as you have to address bugs and technical debt. The people who stuck with what was there and gradually improved it may have been able to create an architecture that works much better. So the rewrite eventually ends back up at stage 1.
- What should we do instead?
  - Defer judgement, assume best intentions and learn
  - Formalise what you don't understand and have open discussions. Be clear about what you don't understand be find out why it wasn't done another way
  - Get to know the system that led to the current way of working before you attempt to change it. Get to know the needs of people so you can cater to what their needs are.
- Conclusion
  - Move out of your comfort zone
  - Acknowledge that you don't have all the answers
  - Rebuild the parts that really matter

Job-hopping pros/cons discussion - Stefania Ioana Chiorean, Daniel Afonso, Swizec Teller, Tara Z Manicsic

- Disccsuion themes

Negotiate like your life depends on it - Shivangi Das

- Agenda
  - Why negotiate
  - Find your why, aligned with your values.
  - How to begin?
  - What else is up for discission?
- Why negotiate
  - Unlearn that money corrupts
  - Gender Pay gap still exists and gender parity is not recovering
  - Racial pay gap - the racial pay gap has actually gotten worse between 1979 and 2019
  - Taboo on talking about salaries
    - Being transparent about pay gaps
- Find your why and aligns with your values
  - Task: Take paper and pen and write 10 things that are important to you
    - Examples: work-life balance,Travel - cultures, food, people, and having time to travel, seeing the world, giving back something valuable to the world, health, relationships - friend and family, education - hobbies, developing oneself, minimising unnecessary stress, retirement - FIRE movement, Security e.g. buying a house
    - None are evil and selfish, but most require money and time. You need to make sure you can fulfil your priorities
  - In conclusion, money provides a means to do good for yourself and everyone around you.
- How to begin?
  - First thing first, research the market rate for your responsibilities
    - E,g, Levels.fyi
    - Glassdoor
    - Payscale
    - LadiesGetPaid
  - Talk about salaries and perks
    - Partner
    - Colleagues and friends
    - LinkedIn connections
  - Keep a list of your accomplishments and brag about them
  - Numbers game, come up with 3 numbers, exclusively for yo, dont tell anyone else e.g. recruiters, managers etc these number
    - Walk-away offer - too low for you to consider
    - Happy offer - the offer you actually want, what your research thinks you should be earning and would be happy with
    - Hell yes, offer - insanely high offer, you may be surprised how much you're actually worth
  - Be kind, optimistic and honest
  - What to say when
    - In between Hell yes and happy offer = "I appreciate the offer and look forward to discussing the benefits" (pick 1 or 2 from the list in the next section)
    - Close to Happy number - "We're in the same ballpark. For an average candidate that salary would be a great place to start, however, I fully intend to make an above-average contribution and have a demonstrated track record for doing do. Can we discuss getting a little closer to \<your happy number\>
    - Close to Walk-away offer - "I am thrilled to be considered, but we are very far apart on salary. Could we discuss getting closer to x to \<your happy number\> range"
- What else is up for discussion? There's more on the table
  - Perks other than pay that are up for negotiation
    - Better job title
    - Flexi time
    - Remote work
    - 4 day work week
    - Holidays
    - Paternity and maternity leaves
    - Upskilling and training budget - conferences, workshops, certificates
    - Leadership training, coaching
    - Volunteering days
  - These come directly from what you value most
- Reading recommendations
  - Never split the difference by Chris Voss
  - My ten rules for negotiating a job offer - Habseeb Quereshi
  - Grils that invest - Simran and Sonya (book and podcast)
  