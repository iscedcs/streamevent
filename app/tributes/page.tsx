"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// This would typically come from a database
const initialTributes = [
  {
    id: 1,
    author: "Mrs. Christiana Efe Ovienria",
    relation: "Wife",
    topic: "A TRIBUTE TO MY CARING AND LOVING HUSBAND",
    content: `
        My wonderful husband when I simply say I miss you, I really miss your smile. I miss your voice. I miss your laugh. I miss you next to me. I miss your jokes. I miss you holding my hands. I miss you teasing me. I miss you so much.
        You were worth every single moment in my life. My Angel, of all the special gift in life, however great or small, to have you as a husband was the greatest gift of all.
        When God came and took your hand, my whole world fell apart. No one knows the heartache I tried so hard to hide. Only God knows how many times I have broken down and cried.
        When I look back upon our lives, one of the things that makes me glad is that you chose me to share with you the previous years we had together.
        You are always in my heart and I will miss you as long as I live my husband, father and friend.`,
  },
  {
    id: 2,
    author: "Mrs. Angela Isimeme Aluko",
    relation: "Daughter",
    topic: "I MISS YOU ALWAYS DAD",
    content: `
        On Friday 5th of July 2024 that you departed has led my heart broken. The memory I treasured daily, and the tears that still flow brings you to my
        heart every day and that is how it will always be. My lovely father was an advocate of peace. My Hero you lived an exemplary life and showed fatherly
        love to everyone who came in contact with you. There was no difference between your children and those that lived with us. Every one under your roof were
        treated equally even your in-laws. You were never quiet about family issues. You will always speak your mind and make peace with those concerned. I wish
        I could have the chance to see your face once more or hear your voice one final time just like it was before. Daddy you were a great father, a mentor,
        peace maker and a friend to all. You taught us to be bold so we could confront any situation we find ourselves and never give up. My father was such a
        cheerful person, you can hardly see my father frowning. I will never forget your jokes my hero. I will forever be grateful for having you as my father.
        I miss you so much dad, you will forever remain in my heart. The fact that you are no longer there will always cause me pain. Goodnight and rest on my daddy
        till we meet again.`,
  },
  {
    id: 16,
    author: "Mrs. Ebehireme Magdaline Odabi.",
    relation: "Daughter",
    topic: "A TRIBUTE TO A DAD WITH A GOLDEN HEART",
    content: `
        I lost a dad with a golden heart and how much we miss
        you can never be told. You raised us with love and this
        has carried us all along in life. We will follow your
        footsteps and will never go wrong.
        Love you forever dad.`,
  },
  {
    id: 3,
    author: "Dr. Wilson Abhuluime Ovienria",
    relation: "Son",
    topic: " A TRBUTE TO THE HERO I ALSO CALL DADDY.",
    content: `A TRBUTE TO THE HERO I ALSO CALL DADDY.
I always knew that a day like this would come. Leveraging on the experience life forced on me and the benefit of my profession, knowing that it is inevitable that this day will come, I did all I believed was humanly possible to prepare for the day. Alas when the day finally came, I still wasn't prepared for it.
Dad, you were my first teacher. You taught me how to appreciate unit figures and held my hands when I first traced single letters. You exposed me to the importance of education and schooled me in the line of respect. You imbibed in me hard work, tolerance, honesty, dignity and contentment. You brought into my awareness that nothing was impossible and that the only things out of my reach are the things I don't need. You taught me cleanliness and the fear of God. You taught me a lot more, but you never taught me what life would be without you.
Your transition bequeathed me with an enormous responsibility. However, I am consoled that in death you are still teaching me because there can be no better lecture notes than your legacies, your life and times. You are indeed the hero I called daddy and my dream of an ideal daddy come true.
Thank you so much for being a father, a friend, a teacher and a hero.
Continue to rest in the bosom of the almighty until the resurrection morning.`,
  },
  {
    id: 4,
    author: "Mrs. Afekelu Anthonia Nobaje",
    relation: "Daughter",
    topic: "TRIBUTE TO A SPECIAL DAD",
    content: `
I carry in my mind and heart precious memories of a special dad. Dad was one of the most gentle, thoughtful and charitable man who ever lived. His loving kindness and warmth attracted many people to him, forming good relationships and friendships that he has sustained and protected over the past 84 years of his life. Daddy became my friend, rather than my father.
Hmmm, can't find the right words now but every day I steal look at his contact display page on my phone screen and just have that feeling that he is still here and just a phone call away.
I miss seeing his missed calls at night which I usually return in the morning by simply saying; "Dad are you okay?" He always would say; "Now that I am retired, my work is to pray for all of you".
God bless you dad, rest on0`,
  },
  {
    id: 5,
    author: "Mrs Ibhade Mabel Echenim",
    relation: "Daughter",
    topic: "TRIBUTE TO A LOVING FATHER",
    content: `
Death leaves a heartache nothing can heal. Our hearts still ache in sadness. Irrespective of the age you never really get over the loss of a parent, you learn to live with the loss because they are never far from your thoughts
Our father was a man like no other. If love, humility and compassion had a human form, then that was my dad. He was an icon worthy of emulation; he created a true definition of what a family should be like. He was a hero, a strong support system, a hardworking and strong man who is always there for his family. Family meant so much to him. He was highly principled and stood firm for what he believed was in the general interest to everyone. He was a team player, peacemaker and an upholder of family ties and friendship.
Our father was loved so dearly and brought so much happiness to the many hearts he touched. He was always kind, careering and understanding towards people. He was a blessing and God's gift to everyone he came across and brought so much joy to us.
Nevertheless, as painful as it gets, we are incredibly grateful to have spent our last moments with him. He was a fighter. He fought his battle so well until he could fight no more because it was time. He died fulfilled knowing he had the greatest support of his family who meant so much to him. Am pleased knowing heaven has gained an angel by the grace of Almighty God because his mercy and signs were present during his last moments. Dad, I believe that you are in the lord's bosom and only ask that you watch over our family.
Rest in peace Daddy till we meet to part no more.`,
  },
  {
    id: 6,
    author: "Mrs. Rita Efeise Akhigbe",
    relation: "Daughter",
    topic: "TRIBUTE TO MY EVER-LOVING FATHER",
    content: `
This is one of the most difficult things I have ever done in my entire life. Writing this eulogy for such an amazing father and grandfather.
Attempting to explain just how much my father meant to me is an impossible task. Without him I would not be the person I am, and I would not have the life I have today. There is no way I could ever quantify the importance he's been in my life. My father was the best father a person could ask for or desire.
Traveling down memory lane, I remember how we hardly see our mom because of the nature of her business, but our dad was always there to play the roles of both parents. I remember how he took us on trips to Ogba Zoo, Leventis, N.I.F.O.R, etc. How he would buy apples and sliced them, giving a piece to each of us. How he would ensure that we ate and did all our homework. He was just a "2 in 1" parent!
My dad was a giver, he was always very welcoming and willing to assist the less privileged. His arms were always open wide to all and sundry, not just family. He fed and catered for strangers, especially during our university days. My father could not stand seeing people suffer. The fruits we are harvesting in our lives today in various parts of the world are as a result of the seeds you sowed in the past.
Thank you, daddy. I am immensely grateful to God to have had you as my first mentor and teacher. Thank you for living a life worthy of emulation. I am so proud to call you my dad.`,
  },
  {
    id: 7,
    author: "Mayowa Aluko",
    relation: "Son-in-law",
    topic: "A TRIBUTE TO MY OTHER FATHER",
    content: `
Daddy, you have been such an inspiration to me. You left this world peacefully without a good bye. You were a father in-law with a difference. From the day I married your daughter you took me as you own son. You were there for every one of us. You are one father that was always satisfied, grateful and appreciative. Daddy you were always full of life, a fun lover, and always active. You were always busy fixing one thing or the other in the house. I thank God for the active life you lived. I am forever grateful for having you as my father and you will be greatly missed by us.
May your gentle soul find rest in the blossom of the Almighty.
Sleep on dad till we meet on the resurrection morning.`,
  },
  {
    id: 8,
    author: "Gabriel Eku Odabi",
    relation: "Son-in-law",
    topic: "TRIBUTE TO LATE ELDER DAVID OKOOBO OVIENRIA, JP",
    content: `
This is in memory and celebration of an extraordinary life, as we honor an exemplary life and memory of late ELDER DAVID OKOOBO OVIENRIA, JP. Your passing to the great beyond left a great and unfillable void in our lives. However, your legacy will continue to sustain and inspire us.
A Purposeful Life
With a heart full of love and a spirit that touched countless lives, ELDER DAVID OKOOBO OVIERIA, JP, lived a life of purpose. Your unbridled kindness, generosity, and compassion to those who had contact with you, knew no bounds, and your presence made the world a brighter place for all and sundry. This assertion is irrespective of familyhood, tribal inclinations nor national affinity.
Indelible and Unforgettable Memories
We cherish the memories of ELDER DAVID OKOOBO OVIENRIA, JP's infectious laughter, warm smiles and unwavering optimism. Your love, guidance and support helped to shape many into the people they are today and I inclusive.
Where do I start from? You called me "son" and not an in-law from the moment I stepped into your home till the day you took your last breath. How amazing this helped me in integrating into your family cannot be quantified.
In your visits to the United States of America, you did not leave any stone unturned in proving or showing your love to my family. This was so much so that you were almost routinely involved in the household chores of my family even against our protests. You are such a loving father and I am only happy that in your last days on earth, we had as close and intimacy relationship with you. You battled with death, showing courage and optimism at every point of it.
We will miss you for so many reasons. As a husband, I recall with smiles, how you would always take up your chair, locate it very close to your wife in the USA, sitting closely knitted together. This routine became so amazing in the sense that I watched keenly to understand that even as you sit close to her in love, it was so carefully done that your body must be touching or rubbing off on each other. These are rare occurrences in today marriages, particularly at the age you both were and as Africans. I miss your fun Papa.
Lasting Legacy
Though ELDER OKOOBO OVIENRIA JP may be gone, his legacy lives on through his children and I should add also, his in-laws and indeed everyone who found the opportunity to be close to him. We will continue to celebrate him, cherish his life and memory, and strive to make him proud
Adieu as you Find Your Path to Paradise.
Dear ELDER OKOOBO OVIERIA JP. You will definitely be deeply missed by many, but your memory will never be forgotten. May your spirit continue to find favour and mercy in the sight of the Lord as you journey to paradise.
We love you greatly and miss you.`,
  },
  {
    id: 9,
    author: "Mrs. Omoye Hilda Ovienria",
    relation: "Daughter-in-law",
    topic: "TRIBUTE TO MY FATHER INLAW",
    content: `
My father-in-law was a compassionate and loving father who touched the lives of everyone around him. His passing leaves a void that words cannot adequately express, but we find solace in the beautiful memories he created and the legacy of love he left behind.
My father-in-law was an extraordinary man who treated me like his own daughter from the very day I met him. He was a man of integrity, kindness, and love, and I will forever cherish the memories we created together.
When I lost my father in 2008, my father-inlaw held me tightly and consoled me. He ensured I never felt the absence of my father. He was one of my greatest cheerleaders. I could never be wrong in his eyes. If I greeted him, he praised me. If I served him food, he praised me. Even if I simply smiled at him, he would praise me and say, "Obhiaha me nonmose" - a term of endearment that always warmed my heart.
My father-in-law was not just a loving father, he was a devoted husband. He loved my mother-in-law with all his heart, and they shared an incredible bond. No matter the situation, they supported each other unconditionally. In all the years I've been a part of this family, I never saw them eat from separate plates. They always walked hand in hand, showing us the true meaning of love and partnership. He taught my husband how to love.
Daddy was a giver in every sense of the word. He supported my business and his generosity always left me in awe.
As I reflect on his life, I feel blessed to have known him, to have been loved by him, and to have learned so much from him. He was a man who embodied love, kindness, and selflessness.
Daddy, you were more than a father-in-law to me; you were indeed a father, a mentor, and my very own cheerleader. Thank you for the love, wisdom, and support you gave so freely. You will forever be in our hearts, and your legacy will live on in all of us.
Rest in peace, Daddy. We love you, and we will miss you always.`,
  },
  {
    id: 10,
    author: "Gabriel Nobaje",
    relation: "Son-in-law",
    topic: "AN ICON IS GONE!",
    content: `
Many people mistake happiness for Joy including me in my adult age.
But when I met daddy, I realized that happiness is based on happenings while Joy is not dependent on any happening at all. The only way to access real Joy is through God Almighty.
I make bold to say that daddy was specially created by God with a divine kind of Joy.
Daddy is gone today but we owe him a task to make him happily fulfilled in heaven by keeping his legacy of Joy.
This task, we should all honour.`,
  },
  {
    id: 11,
    author: "Jeffrey Echenim",
    relation: "Son-in-law",
    topic: "A TRIBUTE TO A DISTINGUISHED FATHER IN-LAW.",
    content: `
The vacuum created by your exit can never be filled. Nevertheless, I console myself with the fulfilled life you lived, as I cannot question God.
You were a father and a friend who has impacted positively in my life, and the lives of so many others. I will surely miss you daddy.
May your gentle soul rest in peace.`,
  },
  {
    id: 12,
    author: "Kingsley Akhigbe",
    relation: "Son-in-law",
    topic: "TRIBUTE TO MY FATHER-IN-LAW",
    content: `Daddy was the father I never had. For all of you who do not know, I lost my dad when I was 9 years old. Although I grew up in my maternal grandfather's house,
    I never really had that fatherly interaction about life in general with anyone. He was the only grandfather my three children knew, too. At first, our relationship was very
    frosty, for whatever reason. However, after his second visit to my family in Toronto, he called me from Nigeria and said, "I observed how you and my daughter are working
    together and am verry happy about it." Then he started praying for my family, making pronouncements or prophesying. In particular, he said "from this day, I change your name
    to WINNER, for you will always be a winner throughout the days of your life." That was the name he called me until he passed on.
    I am a better husband and father to my wife and children respectively because of the lessons I learnt from him. Over the 15 years I have known him,
    I saw how caring and loving he was to mummy. I saw how he was with his children, loving each one equally without favoritism.
    Daddy had a profound sense of humor. He never failed to make us laugh with words or actions and he did the same with his grandchildren. One memory stands out when my wife
    and I had our first child Obehi. I called daddy and proudly told him how my daughter looks exactly like me, but to my amazement, daddy said "it is ok for her to take all
    your attributes, but your height."
    He spoke with everyone about everything, young, old and could always find a topic that was of interest to you. I loved talking with him because we had a common interest
    in international politics and current affairs. He was a CNN fan and was well versed in world affairs, whether it is USA electoral system, or global conflicts. I remember
    when he visited us, I think during the first or second electoral victory of Obama, we almost slept in the living room together monitoring the election results.
    Kindness and generosity are scarce commodities in this generation, but dad had them in abundance, and they flow out from him effortlessly! Thank God I see that
    trait also in my wife and his grandson, Ehimeme.
    I could go on and on, but mere words will not be enough to eulogize you daddy.
    Thank you for living a life worthy of emulation. I am so proud to call you daddy`,
  },
  {
    id: 13,
    author: "Osahon Darius Odabi",
    relation: "Grandson",
    topic: "A TRIBUTE TO MY GRANDFATHER",
    content: `My grandfather was an extraordinary man who touched the lives of everyone he met. He was a beacon of wisdom, kindness, and love, and his presence in our lives was a true blessing.
        From my earliest memories, Grandpa was always there with a warm smile and open arms. He had a way of making everyone feel special and loved. His stories of his youth and the lessons he learned throughout his life were not just entertaining but also filled with valuable wisdom that I will carry with me forever.
        Grandpa's love for education was infectious. He always encouraged us to learn, to ask questions, and to never stop growing. He would say, "Education is the key that opens many doors." His own life was a testament to this belief, and he inspired all of us to pursue knowledge relentlessly.
        One of the things I admired most about my grandfather was his integrity. He lived by a strong moral code and always did what he believed was right, even when it wasn't easy. He taught us the importance of honesty, hard work, and treating others with respect. These values have shaped who I am today, and I will always be grateful for his guidance.
        Grandpa's generosity knew no bounds. He was always ready to help others, whether it was a family member in need or a stranger on the street. His kindness extended to everyone, regardless of their background or circumstances. He taught us that true wealth lies not in material possessions, but in the lives we touch and the love we share.
        I will miss our long conversations, his hearty laugh, and the way his eyes would light up when he talked about our family. I will miss his wise counsel and the comfort of his presence. But I know that the lessons he taught me and the love he shared will stay with me always.
        Grandpa, you may no longer be with us physically, but your spirit lives on in all of us who were fortunate enough to know and love you. Your legacy of love, kindness, and integrity will continue to guide us. Thank you for being the best grandfather anyone could ask for. You will be forever missed and always remembered.
        Rest in peace, Grandpa. Until we meet again.`,
  },
  {
    id: 14,
    author: "Eseosa Ovienria",
    relation: "Granddaughter",
    topic: `A TRIBUTE TO MY BELOVED GRANDFATHER`,
    content: `How do I begin to put into words the impact you've had on my life, Grandpa? You were not just my grandfather; you were my hero, my confidant, and my greatest cheerleader.

From the moment I was born, you showered me with unconditional love and support. You were there for every milestone, big or small, always ready with words of encouragement and pride. Your belief in me gave me the confidence to pursue my dreams, knowing that no matter what, I had you in my corner.

I remember the summers spent at your house, filled with laughter, stories, and your famous homemade ice cream. You had a way of making even the simplest moments feel magical. Your garden was your pride and joy, and you taught me the value of nurturing things and watching them grow. Those lessons extended far beyond the plants; they were life lessons I carry with me every day.

Your wisdom was boundless, Grandpa. You had a story for every situation, a piece of advice for every problem. But more than your words, it was your actions that taught me the most. You showed me what it means to be kind, to be generous, to be strong in the face of adversity. You demonstrated the importance of family, of keeping promises, and of always doing the right thing, even when it's difficult.

I'll never forget how your face would light up when you talked about Grandma, your love story spanning decades. You showed me what true partnership and devotion look like. The way you cared for her, especially in her later years, was a testament to your unwavering love and commitment.

Grandpa, you were the pillar of our family, the one we all turned to in times of joy and in times of sorrow. Your home was always open, your heart even more so. You had a way of making everyone feel special, of finding the good in every person and every situation.

As I grew older, our relationship evolved, but your love remained constant. You became not just my grandfather, but my friend. Our conversations deepened, and I treasured every moment we shared, every bit of wisdom you imparted.

Now that you're gone, there's an emptiness that can never be filled. But I find comfort in knowing that a part of you lives on in me and in all those whose lives you touched. Your legacy of love, kindness, and integrity will continue through generations.

Thank you, Grandpa, for the countless memories, the invaluable lessons, and the unconditional love. Thank you for showing me what it means to live a life of purpose and compassion. I promise to honor your memory by living the values you instilled in me.

Rest in peace, my beloved Grandpa. Your love will forever be my guiding light.`,
  },
  {
    id: 15,
    author: "Osaze Ovienria",
    relation: "Grandson",
    topic: `REMEMBERING MY GRANDFATHER: A TRIBUTE`,
    content: `To my dear Grandfather, Elder David Okoobo Ovienria,

As I sit down to write this tribute, I'm overwhelmed by the flood of memories and emotions that come rushing in. How does one encapsulate a lifetime of love, wisdom, and guidance in just a few paragraphs? It seems an impossible task, but I'll do my best to honor the incredible man you were.

Grandpa, you were more than just a grandfather to me. You were a mentor, a friend, and a constant source of inspiration. From my earliest memories, you were there, your presence a comforting constant in my life. Your smile could light up a room, and your laughter was contagious. You had a way of making everyone around you feel special and valued.

I remember the countless hours we spent together in your study. You would patiently help me with my homework, explaining complex concepts in ways that I could understand. But more than academic knowledge, you imparted life lessons that have shaped who I am today. You taught me the value of hard work, the importance of integrity, and the power of kindness.

Your stories were legendary, Grandpa. Tales of your youth, your struggles, and your triumphs captivated us all. Through these stories, you didn't just entertain us; you taught us about resilience, perseverance, and the importance of staying true to oneself. Your life was a testament to these values, and I strive every day to live up to the example you set.

I admired your unwavering faith, Grandpa. Your devotion to God and your commitment to serving others were inspiring. You showed us that true strength comes from humility and that the greatest joy comes from helping others. The way you lived your life was a sermon more powerful than any words could ever be.

Your love for Grandma was beautiful to witness. The way you looked at her, even after decades of marriage, was full of adoration and respect. You showed us what true partnership looks like, and the importance of nurturing relationships with love, patience, and understanding.

Grandpa, you were the cornerstone of our family. In times of celebration, your joy was infectious. In times of sorrow, your strength held us together. You had a gift for bringing people together, for fostering understanding, and for always seeing the best in others.

As I grew older, our relationship deepened. Our conversations evolved from simple childhood chats to discussions about life, philosophy, and the world. Your wisdom and perspective were invaluable, and I cherished every moment we shared.

Now that you're gone, there's a void in our lives that can never be filled. But I find solace in knowing that your legacy lives on in all of us who were fortunate enough to know and love you. The values you instilled, the love you shared, and the memories we created will forever be a part of who we are.

Thank you, Grandpa, for your unconditional love, for your guidance, and for the countless sacrifices you made for our family. Thank you for showing us what it means to live a life of purpose, integrity, and compassion.

As we say goodbye, my heart is heavy, but it's also full of gratitude for the time we had together. I promise to honor your memory by living the values you taught me, by cherishing family as you did, and by striving to make a positive difference in the world, just as you did.

Rest in peace, dear Grandpa. Your love will continue to guide us, and your memory will forever be a blessing in our lives.

Until we meet again, thank you for everything.`,
  },
];

export default function TributesPage() {
  return (
    <Card className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden mb-8">
      <CardHeader className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-6">
        <CardTitle className="text-4xl font-bold">Tributes</CardTitle>
        <p className="text-xl mt-2">In Memory of Elder David Okoobo Ovienria</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {initialTributes.map((tribute) => (
            <Card key={tribute.id} className="bg-green-50">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-green-800">
                  {tribute.author}
                  {tribute.relation && `  - ${tribute.relation}`}
                </h3>
                <p className="mb-2 uppercase font-semibold text-blue-700">
                  {tribute.topic}
                </p>
                <p className={`text-gray-700 `}>{tribute.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
