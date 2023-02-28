import React, { useState } from 'react'
import LeftSide from './childComponents/LeftSide'
import RightSide from './childComponents/RightSide'
const Body = () => {
  const [index,setIndex]=useState(0)
  const paragraphs= [
  {
    label: <>Congratulations!</>,
    description: `You are reading this means you are officially accepted as Temaribet Tutor. 
    We are glad you joined us. Now you are part of our family. Below is an elaboration of the fundamental things you should know about Temaribet.
     Take to heart everything written below. When you encounter a confusing statement or
      anything that needs further explanation take note of it and you will forward it to us and get the explanation you need.`,
  },
  {
    label: <>Part One<br/><br/> On benefits</>,
    description:
      `Among the benefits you get is that you can get as many tutoring jobs as you can. In addition,
       if your current employment is terminated, for invalid reasons from the parent side,
        we will get you another job. Additionally, once you send us the approved timesheet, 
        we will pay you on time whether the parents pay us on time or not. (More on payment in Part 7) \n You will also be given many short online tutoring training on a recurring basis to make you even more effective and efficient by equipping you with
       all the necessary skills that a professional tutor needs to have.`,
  },
  {
    label: <>Part Two
    <br/><br/>On Temaribet
    </>
    ,
    description: <>
    <b>On our purpose</b>
    <br/> The aim of Temaribet is more than helping tutees with their homework, assignments, or exam preparation. Although that is an indispensable task of a tutor. We want to increase the interest of our tutees for learning, studying, and ultimately questioning. We want to spark and nurture their curiosity. 
    
    <br/>
    <br/>
    As the name tutor inherently implies, a tutor is someone who makes his tutee confident in something independent of himself. That for us is, our dear tutor, making the tutee independent of us and confident in studying. That takes months and sometimes a few years. But no matter how long it may take, you must show progress every time. 
    
    <br/><br/>
     <b>On our values</b>
    <br/>At Temaribet, we believe that this whole universe is created by one perfect personal being, God. We believe God is the fountain and sustainer of life and light. We believe in a moral standard that is rooted in ‘the fear of God’. The pursuit of truth and morality has no use in any other explanation. Why would you strive to do and be good if there is no morally just Being who is more powerful than you? For that, our dear tutor, we believe in the pursuit of truth and endeavor with holy curiosity for the glory of God and for the peace, prosperity, and beauty of humanity.
    
    <br/><br/>At Temaribet, we believe that humans are created in the likeness of God. For that reason, our dear tutor, we respect every human being no matter what. We cherish them all with the dignity they were endowed by their creator. We respect the tutee, we respect the parent, we respect other tutors and we respect everyone who comes in contact with us.
    
    <br/><br/>Now, at this point, you might feel like we are shoveling religion down your throat. But by no means we would dare to do that and we don’t want to. We are not trying to make you a Christian, a Muslim, or whichever religion you might think of. We are just making a simple, necessary, and true statement that this world is not created by spontaneous generation. We, at Temaribet, believe that there is a self-existent Being who created and sustains the universe. That is necessary to answer the reason we study and the reason we act in a specific manner. 
    
    
    <br/><br/>Out of the fear of God we give the fairest value to the parent and the tutee, which fairness is determined by Temaribet. We don’t just value truth and respect people. Since we are being paid, we provide them with the finest tutoring service possible in the country out of fear of God and for the freedom of our conscience. We employ the best practices in tutoring and innovate different means to help our tutees in their academic struggles. We endeavor in a way that maximizes the productivity of the tutee. That, our dear tutor, we mainly achieve by sparking their holy curiosity. It is the main sustainer of the service we provide, we should not let it be our sole purpose. We earn the payment. “There is no free lunch,” as the saying goes, “someone has to pay”.   We earn the payment by working wholeheartedly to show continuous improvement in the academic journey of the tutee. Except the love of our tutees and their parents, and the snack some of us get, we should not have any debt. We have to return with our wholehearted service for every penny the parent pays. The payment must be your hard-earned money, not an easy one.
    
    
    <br/><br/>You might be wondering about how continuous progress can be guaranteed. At Temaribet, we believe humans are curious beings., We all have the urge to know when something new is laid before us in a curiosity-sparking and relevant way. For that purpose, our dear tutor, you should be a scientist-artist. By scientist, we mean you should know the content you tutor back and front. You should be familiar with every iota of your content. Once you are stuffed with your content, the artistry begins. If you just gush out everything you know on your tutee, you overwhelm them. You make yourself look omniscient on the subject and earn their respect but you will be considered a nerd who doesn’t understand them. For that, our dear tutor, you should ‘act’. You should make sense to them. You have to show them that what you are talking about is not some complex useless fancy illusion created by misopedists. You should show them that what you are talking about is really real and relevant. You should leave your nerdy seat and make them work with you as an artist. 
    
    <br/><br/>Now, don’t get us wrong. We are not telling you to go to the tutee, open the book and be a joker out of the blue. No, no, no. That also doesn’t work. There is work you have to do before that. You have to build a bridge. You have to get to know them and they have to get to know you. You have to build rapport. You have to build your expertise-power so that they don’t doubt your expertise. You have to be dependable and make them dependent on you. You do that by preparing very well. By preparing, we mean knowing the content plus having it structured in your mind. The content must come out of your mouth as though spontaneously.
    
    <br/><br/>Now, we have come to the climax of the tutoring session. How do you know if your tutee is attentive? How do you know if they are engaged with you to understand the concept?  How do you know you are making progress? How do you know their interest for learning is growing?  This is the litmus paper. The answer is simple. Did they ask you? Yea, did they ask you? Not just the fact but did they question the concept you explained? This all boils down to one thing. Did you incite the right question? Are they asking you as if something dawned on them?  That is the main reason you are being paid. To incite the right question. If you are able to do this, it means you have the blood of Temaribet flowing through your vein, so to speak. It means you have really become one of us. It means you are always one of us. And we don’t let one of ours be disappointed but rewarded.
    
    <br/><br/>Once you incite the right question in the mind of your tutee, it is time to sear it in their minds with an answer. You provide the simplest, clearest, and precisest answer. You can do that in two ways. Either you can guide them through to the right answer by asking them back a question that makes them one step closer to the answer or you can give them the direct answer in a simple, clear, and precise manner. Although the latter is easy, we want the former to be our banner by which we are known. But you have to first assess your tutee if they are capable of handling the former. Though it is our goal to get the tutee to the former state, known as Socratic questioning, we should not haste to use it early and confuse the tutee even more. 
    
    
    <br/><br/>It is always our first order of business to attract and retain honest and vibrant talent. Therefore, you are always free to recommend tutors from your circle who could execute the above principles in the best possible manner. 
    
    <br/><br/>We believe diligence is the only way to satisfying productivity. As we mentioned at the outset, tutoring must be hard-earned money. That is where you can be free of guilt-conscience concerning your task. You have to be diligent. By that we mean, 
    
    <br/><br/>At last, it should not be left unknown among us that we cherish and reward excellent performance and that we detest and punish average performance. Underperformance should not be even named among us. We believe you are already persuaded that we want Temaribet to be home to excellent tutors. 
    
    <br/><br/>Now, our dear tutor, you should put to your heart that you are given an opportunity to make straight, the life of a youngster and make a long-lasting friendship. You are given an opportunity to extend your family. It is a true saying that was said by Winston Churchill. “With opportunity comes responsibility.” But we are always beside you for every kind of support. When things become confusing and you get overwhelmed, you can reach out to us. 
    
    </>
  },
  {
    label:<>
    Part Three
    <br/><br/>On the Tutee
    </>,
    description:
    <>
    
    The first and most important thing you have to keep in mind is this. We are different. We are different in the way we learn. We are different in the way we remember. We are also different in the way we interact with others. But for the sake of simplicity, we only talk about two of our differences: the way we behave and the way we learn.
    
    <br/><br/>Scientists say, equivocally, there are four learning types. The four core learning styles are visual, auditory, reading and writing, and kinesthetic. Here’s an overview of all four learning style types.

    <br/><br/> &nbsp;<b>1.Visual</b> - Visual learners are better able to retain information when it’s presented to them in a graphic depiction, such as arrows, charts, diagrams, symbols, and more. Similar to how designers use visual hierarchy to emphasize specific design elements, visual learners thrive with clear pictures of information hierarchy.


    <br/><br/> &nbsp;<b>2.Auditory</b> - Sometimes referred to as “aural” learners, auditory learners prefer listening to information that is presented to them vocally. These learners work well in group settings where vocal collaboration is present and may enjoy reading aloud to themselves, too.


    <br/><br/> &nbsp;<b>3.Reading & Writing</b> - Focusing on the written word, reading and writing learners succeed with written information on worksheets, presentations, and other text-heavy resources. These learners are note-takers and perform strongly when they can reference written text.


    <br/><br/> &nbsp;<b>4.Kinesthetic</b> - Taking a physically active role, kinesthetic learners are hands-on and thrive when engaging all of their senses during course work. These learners tend to work well in scientific studies due to the hands-on lab component of the course. 


    <br/><br/>What is Temperament/personality?
    <br/><br/>A person's temperament is how they behave and represent themselves based on personality traits and impactful experiences. Temperament remains constant and serves as a means to help you determine how you will react to situations. It's a way to recognize consistent personality traits. When it comes to determining temperament, psychologists recognize four primary temperament types.

    <br/><br/><b>Sanguine</b>
    <br/><br/>People with sanguine temperaments are people-oriented, exhibiting traits such as outgoing and extroverted. Moreover, they emphasize people are working together and trying to do good for one another,  generally being helpful overall. It is the most common type of temperament and is typically either a primary type or secondary type.
    <br/><br/>This temperament type is just as likely to be found in men as it is in women. Some people are considered "super sanguine" because they are so overly talkative and active that it can be overwhelming to be around them.
    <br/><br/><i>Sanguine Characteristics</i>
    <br/><br/>People with the sanguine temperament type have a wide range of emotions and a wide range of behavior. They are the most versatile of all the temperaments. Depending on their secondary temperament, they might be involved in nearly any human activity. However, they enjoy occasions when they can interact with or change their environment.
    <br/><br/><i>Sanguine Traits</i>
    <br/><br/>When you first meet someone with a sanguine temperament, you're likely to feel you've known them for a long time. They are comfortable to talk to and get to know. They are extremely friendly, talkative, and social and their disposition leads to them being sociable. They will frequently get caught up in conversations and lose track of time. However, if they get bored, they can lose attention quickly. Their attention span is directly related to how much they enjoy the conversation or what they are doing.
    <br/><br/>Sanguine temperaments are also highly dynamic. If they think about it or feel it, they will say it. They have no filter. Their hyperactivity often leads to forgetfulness and being disorganized. This temperament type is extremely competitive. They dominate sports, politics, and the business world. They also fear making a bad impression and rejection. They want most to be accepted but also to be the best they can be.
    <br/><br/><b>Phlegmatic</b>
    <br/><br/>Phlegmatic temperaments are also common, but they can be seen as almost the opposite disposition of sanguine temperaments. People with this temperament type are service-oriented, exhibiting introverted personality traits, but will work with others to achieve a common goal. These people may seem passive and lack general ambition or specifically to accomplish a goal or milestone. However, it is also possible to have a sanguine type primarily and a secondary type of phlegmatic, or the other way around.
    <br/><br/><i>Phlegmatic Characteristics</i>
    <br/><br/>The passiveness of the phlegmatic temperament type leads to a distinct set of characteristics. They are easy-going, calm, and unemotional. They can be indecisive and agreeable and are usually happy to allow others to make decisions for them.
    <br/><br/>Phlegmatic temperament people are slow to warm up to others but will make friends fairly easily. They are one of the easiest temperament types to get along with because they are so agreeable and patient. However, they stick closely to their routines and resist change.
    <br/><br/><i>Phlegmatic Traits</i>
    <br/><br/>People with a phlegmatic temperament tend to live quiet lives centered around home and family. They don't get involved in the world around them or with other people. However, they also have a disposition that can be described as being fiercely loyal to their friends and will stick with a relationship regardless of what the other person does or says. However, once a relationship does break, they are not likely to return to it.
    <br/><br/>This temperament type is content to let things happen. They are not quick to make decisions, and they are not ambitious. However, they resist change and may avoid novel situations. They may need quite a bit of time and patience to adapt to change, especially sudden.
    <br/><br/><b>Melancholy</b>
    <br/><br/>When most people hear the word melancholy, they think of depression. However, the melancholy temperament type or disposition is not necessarily depressed so much as they are cautious. Those with melancholy temperaments are detail and quality-oriented, obsessing with understanding what is right.  Also, they might be seen as paying strict attention to detail, which could make them out as perfectionists. This is another common temperament type.
    <br/><br/><i>Melancholy Characteristics</i>
    <br/><br/>The melancholy temperament is a rule follower. They can be cautious and tentative in unfamiliar environments, and show signs of behavioral inhibition, but they can also become aggressive when faced with an unfavorable situation. They are private and introverted. This temperament is factual, logical, and analytical. To function without anxiety, these people need to have a solid action plan and follow it to the letter.
    <br/><br/><i>Melancholy Traits</i>
    <br/><br/>The melancholy temperament may show symptoms of being anxious and people with this temperament might show signs of this dating back from their early years. They might worry about the future and what others think. They may also worry about how things might have been done differently in the past. As such, they may seem like they resist living in the present.
    <br/><br/>This temperament is generally well organized, even if they become cluttered. People with this disposition are usually on time for appointments and expect others to be as well. Before making decisions, they will gather as much information as possible and ask specific questions to make sure they are making the right decision.
    <br/><br/>People of the melancholy temperament are also suspicious and conscientious. They are slow to trust others until they are sure of their intentions. It is difficult for them to form relationships, and they have high standards for their relationships.
    <br/><br/><i>Choleric</i>
    <br/><br/>The choleric temperament is the rarest of the four primary types. Those with a choleric temperament are results-driven by making goals and sticking with them until they are completed. Thus, they exhibit a positive demeanor or disposition and are constantly moving forward. Despite any opposition, they face everything with the mindset of getting results and achieving their desires. It is more common for choleric to be a secondary temperament, although this is not as common as other combinations.
    <br/><br/><i>Choleric Characteristics</i>
    <br/><br/>People with a choleric temperament are extroverted and exude self-confidence. They are independent and strong-willed and do not show signs of having a low energy level. They have quick minds and are generally active and practical in their activities, but can also be sensation seeking at times.. Their communication style is assertive and direct, often brief, almost to the point of rudeness.
    <br/><br/>This temperament type enjoys taking risks and gets bored easily. They can be domineering and opinionated. They find it easy to make decisions, not only for themselves but for others as well. They can be somewhat controlling in relationships. Choleric types also tend to require less sleep than other temperament types.
    <br/><br/><i>Choleric Traits</i>
    <br/><br/>People with the choleric temperament are creative and have an outgoing disposition. They never seem to run out of ideas or plans, all of which tend to be practical. They are steadfast in their ideas, however, and will not give in to peer pressure.
    <br/><br/>While they can be compassionate and rally for social causes, they are slow to build relationships in their personal life. They likely only have a few close friends, even though they are not afraid to meet and talk to new people. They don't tend to empathize with others. However, they are also very slow to anger, though their domineering personality and direct manner of speaking can put them at higher risk of being misconstrued as anger.
    <br/><br/>Now it is not a useless thing that we outlined above. If it is applied properly, it inhances the tutorial delivery and makes your relation with the tutee and the parent flow smothly.

    </>
  },
  {
label:<>Part Four
<br/><br/>On Tutoring
</>

,
description:

<>
<br/><br/>For the very reason we laid out so far, we want you to do and be the following things.

<br/><br/><b>On focus</b>
<br/><br/>Focus. The name everyone shouts but only few understand. Focus. The mother of excellence, and the brother of duty. Enough with the artistry but what is focus? 

<br/><br/>We can say it is the channeling of one's attention, resources, and energy on one or two things among the many. You might have heard the story of the focused sunlight. Sunlight will never burn paper normally but if you focus it using a lens it burns paper. With the same token, we can say that if you disperse your three or six hours a week tutoring session on nine or ten subjects it may take years to see the progress, which the parents are eager to see too early. So, our dear tutor, you should select two subjects as a focus area and give it half the time of the tutoring. You might ask which two subjects? The subjects you select must create a ripple effect and impact the academic life of the tutee drastically. You have to assess first, to know the subject that is key in the academic life of the tutee, to understand the whole thing. That way, you show progress, boost the confidence of the tutee, and win the trust of the parent.


<br/><br/><b>On preparation</b>
<br/><br/>Once you narrow your focus, it is time to prepare. You have to be prepared before you get to your tutoring place. By preparing we mean that you have to have knowledge of the topic you are going to tutor and you have to have it structured and organized in your mind. You may be tutoring a third grader and the content may not be difficult at all. You know way more than that. So, you may say ‘I don’t need to prepare. Yea, you don’t need to know what you already know. But make no mistake. Preparation, here, is not only about knowing. It is also about making it easier for the tutee by pouring the content in an organized way. The knowledge must also be structured. By that we mean, the content must be delivered in an organized, ordered, and a ‘cup of cake’ way, so to speak. For that, our dear tutor, you must prepare. You must be prepared before you get to your tutee no matter what.

<br/><br/><b>On Pomodoro</b>
<br/><br/>There is a technique called Pomodoro. In this technique, you pick a task, set a 25-minute timer, work on your task until the time is up, and take a 5-minute break. You repeat this process four times and take a long break of 15-30 minutes. Rather than trying to accomplish many things in a longer time, you should divide your tasks and do them one at a time in a fixed, mostly 25 minutes interval. Let's say you are tutoring for two hours. Rather than tutoring until you reach your two-hour mark, you select a subject, a topic from it thereby. Then, tutor for 25 minutes on a given topic. After that you take a 5 minutes distraction break, to be distracted from the study. In the next round, you tutor on another topic for 25 minutes and then take a 5-minute break again. Since we don’t have the luxury of tutoring a student for more than four Pomodoro mostly or chunks, we don’t need the 15-30 minutes long break. You can change the length of the Pomodoro based on the attention span of your tutee. May be 20 mins or 30 mins, whichever makes you productive. For the first break, the tutee should not leave his seat. You can just bring in a school talk or something like that but for the second Pomodoro, the tutee should leave his seat for a 5-minute break. For the third Pomodoro, the tutee stays, for the fourth leaves, and so on. The sole purpose of this technique is to make you focused and thereby productive.

<br/><br/><b>On Lean Thinking</b>

<br/><br/>Lean is a method that was used and is still being used in the Japanese company, Toyota. Toyota cars, as we all know, are cheap and durable and are manufactured using this method.

<br/><br/>It has two pillar principles. Continuous improvement and shared leadership. Continuous development refers to incremental improvement in a process on a continuous basis. In our case, there must be an incremental improvement in every session. That includes your preparation process, explaining capacity, observing your tutee, knowing when to get on the taxi line, and other things. In everything you do, there must be progress however albeit. But we should not delude ourselves into thinking that we are making progress when all responses are against it. Improvement is not perseverance. 

<br/><br/>The second is shared leadership. This principle is based on the truth that the end-line worker is more informed about the problems and opportunities in the work environment than his manager in the office. For that, they should assume some level of leadership role. The reports that you write to us and our meeting with the parents give us information but that is nothing compared to what you observe on your tutee in the real session. You spend hours and hours of time with your tutee. Our dear tutor, you should make something out of it. You have to make some decisions independently.

<br/><br/>In the Toyota car manufacturing plant, a single frontline non-managerial worker can stop the whole assembly. In our case, you might end your tutoring session early if you observe that your tutee is not more attentive or sleepy than usual. 

<br/><br/>But you should keep the decisions you make checked. You should not trust all your impulses and you should not use this power without a true cause.
</>
  },
  {
    label:<>Part Five
    <br/><br/>On Procedures
    </>,
    description:
    <>
    <br/><br/><b>On the Timesheet</b>
    <br/><br/>This is a one-pager attendance form with which the tutor, you, records the time you tutored for every session. The tutor color prints and places it at the home of the parent where they can see and it can easily be seen for the tutoring session. At the end of the month, just after being signed by the parent, as a confirmation of the parent that the total time is correct, you send us the photo of the timesheet. 

    <br/><br/>The purpose of the timesheet is twofold. First, it will be used as a final say if any dispute arises about the tutored hour. For that, our dear tutor, you have to be mindful of every minute you record on the timesheet. You have to also keep in mind that you have to tutor up to the time agreed upon in the beginning unless the parent gives you a green light in times of necessity such as exam preparation. You have to also keep in mind to tutor no less than the agreed time. It is strictly forbidden to tutor more or less that the agreed time. Second, we can only pay you after we get the approved timesheet for that month.

    <br/><br/><b>On the Original Report</b>
    <br/><br/>The purpose of this document is to give us all a snapshot of the status of the tutee just before starting the tuition. It is used as a benchmark to measure how much progress has been made after the tuition. 

    <br/><br/><b>On the Weekly Report</b>
    <br/><br/>You submit this report at the end of every week. Once a week. It covers the tutoring sessions that were held that specific week. The purpose of this report is threefold. First, it makes you mindful of your endeavor as reports should do. It helps you to be aware of everything that is happening in the academic life of the tutee. Be mindful of your tutee’s quiz, assignment, project, test, exam, and behavioral issues. Second, it lets us, Temaribet, know what is going on on the ground. We should know when to encourage, help, reward, or interfere. We don’t want things to accumulate over time. We care about you, the tutee, the parent, and our name. Third, the report recorded on the weekly basis helps us to see the progress of the student at a minute level. Also if need be, helps us to go back and check at a specific date. For this reason, late submission makes the whole purpose zero. For that, our dear tutor, you should be punctual in submitting your weekly report as you should be for your tutoring sessions.




    <br/><br/><b>On the Monthly Standup</b>
    <br/><br/>This is a 20-minute meeting that will be held between you and one of our coordinators at the end of every month. It must be held in the first week of every month. It will be held online, preferably on Google Meet. The purpose of this standup meeting is to review the weekly reports together. To discuss if things are going smoothly if any interference is needed and to come to an agreement on the next step that needs to be taken toward progress. 

    <br/><br/><b>On the Progress Checkup</b> 
    <br/><br/>This meeting will be held at the end of every semester after the arrival of the exam results. This tells us both if our endeavor is coming to fruition. This is the litmus paper. It is an indispensable part of Temaribet. We review the whole semester together. We will do a SWOT analysis of the semester together. We will formulate a simple and workable strategy for the next semester and other things.

    <br/><br/>Don’t get us wrong here. We are not trying to bureaucratize things here. We don’t want empty but organized, structured, and eloquent reports and speeches. Yes, we love those things except the empty part. But our whole heart, mind, and strength should be spent on real, tangible, and communicable progress in the academic life of the tutee.  We are installing all these things to help us be more productive, not for any to slip through its loopholes without hard work and commitment. 

    </>
  },
  {
    label:
    <>
    Part Six
    <br/><br/>On Resourcefulness
    </>
    ,
    description:
    <>
    It is wise to store and use resources. It is not wise to reinvent the wheel many times. For that, our dear tutor, we want to store the worksheet you prepare for your tutee and make it available to others. That way everyone will have a one stop store of worksheets. For this reason, every tutor has the responsibility of preparing a 15-questions worksheet per chapter. The worksheet must be submitted at the end of every week. The tutor can select a subject and chapter of their interest but at times of neccessity some chapters might be dictated by Temaribet. The tutor wll be able to access the store at any time and can use it in thier preparation and can also give it as an assignment to their tutee. The question will have a tag: simple, average and hard. Three, nine and three questions each, respectively.
    </>
  },{
    label:
    <>
   Part Seven
   <br/><br/>On Payment and Reward
    </>
    
    ,
    description:
    <>
    <br/><br/><b>On the Membership Fee</b>
    <br/><br/>All new tutors who join Temaribet for the first time and all senior tutors at the beginning of a new academic year will pay a membership fee equivalent to 2 hours of the tutoring price at the time. The membership fee will be deducted from the first month's payment to the tutor.  



    <br/><br/><b>On the Monthly Payment</b>
    <br/><br/>Payment will be made to all active tutors within seven days after the timesheet is submitted to Temaribet. The tutor can ask as a favor for the payment to be made immediately after submitting the timesheet. Temaribet will kindly consider the request of the tutor and will try to make its best effort to pay the tutor before the due time. Temaribet will not be obliged to respond to the request.

    <br/><br/><b>On the FullHour Fee</b>
    <br/><br/>All active tutors will pay Temaribet a fee equivalent to 2:30 hours on every 40 hours tutored, hence the full-hour fee. The full-hour fee will be deducted at the month the total hour hits 40 hours.



    <br/><br/><b>On Tutor of the Quarter</b>
    <br/><br/>Based on the progress, the tutor has made in the academic life of the tutee during a quarter, 
1-3% of the tutors will be awarded full hours each. 

<br/><br/><b>On Tutor of the Year</b>
<br/><br/>Temaribet using its own screening process will select 1 to 3% tutors out of the whole tutors and will award them a fully covered two-day trip to a selected resort.

    </>
  }
]

  return (
    <div className='flex flex-col md:flex-row justify-between font-minionPro'>


<div className='md:w-1/3'>
        <p className="w-5/6 px-3  md:px-12 py-3 2xl:px-20 text-lg md:text-2xl font-bold text-center bg-white text-[#1a3765] shadow-lg" >List of Training</p>
        <div className='my-10 text-left'>
        <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
            onClick={()=>setIndex(0)}
            >Congratulations</button>
            <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
              onClick={()=>setIndex(1)}
            >1. Part One : On benefits</button>
           <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(2)}
            >2. Part Two : On Temaribet</button>
           <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(3)}
            >3. Part Three : On the Tutee</button>
           <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(4)}
            >4. Part Four : On Tutoring</button>
             <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(5)}
            >5. Part Five : On Procedures</button>
             <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(6)}
            >6. Part Six : On Resourcefulness</button>
             <button className='font-bold hover:bg-white text-[#1a3765] p-3  focus:bg-white text-xl mt-5 block '
               onClick={()=>setIndex(7)}
            >7. Part Seven : On Payment and Reward</button>
        </div>
    </div>
        <RightSide 
            text = {paragraphs[index].label}
            subtext = {paragraphs[index].description}

        />
        
      </div>
  )
}

export default Body